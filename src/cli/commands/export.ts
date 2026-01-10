import { spawn } from 'child_process';
import { resolve, join } from 'path';
import { existsSync, mkdirSync } from 'fs';
import chalk from 'chalk';
import inquirer from 'inquirer';
import { getAllPresentations } from '@shared/utils';

interface ExportOptions {
  output?: string;
  format?: 'pdf' | 'png';
  size?: string;
}

const DEFAULT_SIZE = '1920x1080';
const EXPORTS_DIR = 'exports';

/**
 * Ensures the exports directory exists
 */
const ensureExportsDir = (): string => {
  const exportsPath = resolve(process.cwd(), EXPORTS_DIR);
  
  if (!existsSync(exportsPath)) {
    mkdirSync(exportsPath, { recursive: true });
  }
  
  return exportsPath;
};

/**
 * Generates output filename for the export
 */
const generateOutputPath = (presentationName: string, format: string, customOutput?: string): string => {
  if (customOutput) {
    return resolve(process.cwd(), customOutput);
  }
  
  const exportsDir = ensureExportsDir();
  const timestamp = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  const filename = `${presentationName}-${timestamp}.${format}`;
  
  return join(exportsDir, filename);
};

/**
 * Starts a temporary dev server for export
 */
const startTempServer = (presentationDir: string, port: number): Promise<{ close: () => void }> => {
  return new Promise((resolveServer, rejectServer) => {
    const configPath = resolve(process.cwd(), 'vite.config.ts');
    const vite = spawn(
      'npx',
      [
        'vite',
        presentationDir,
        '--port',
        String(port),
        '--config',
        configPath,
        '--no-open', // Don't open browser
      ],
      {
        stdio: 'pipe',
        shell: true,
      }
    );

    let serverReady = false;

    vite.stdout?.on('data', (data: Buffer) => {
      const output = data.toString();
      if (output.includes('Local:') || output.includes('ready in')) {
        serverReady = true;
        resolveServer({
          close: () => {
            // Kill the entire process tree
            vite.kill('SIGTERM');
            // Force kill after 1 second if still running
            setTimeout(() => {
              try {
                vite.kill('SIGKILL');
              } catch (e) {
                // Process already dead
              }
            }, 1000);
          },
        });
      }
    });

    vite.stderr?.on('data', (data: Buffer) => {
      const output = data.toString();
      // Ignore non-critical warnings
      if (!output.includes('deprecated')) {
        process.stderr.write(data);
      }
    });

    vite.on('close', (code) => {
      if (!serverReady && code !== 0) {
        rejectServer(new Error(`Dev server failed to start with code ${code}`));
      }
    });

    vite.on('error', (error) => {
      rejectServer(error);
    });

    // Timeout after 30 seconds
    setTimeout(() => {
      if (!serverReady) {
        vite.kill('SIGKILL');
        rejectServer(new Error('Dev server timeout'));
      }
    }, 30000);
  });
};

/**
 * Exports a presentation using decktape
 */
const exportWithDecktape = (
  url: string,
  outputPath: string,
  size: string
): Promise<void> => {
  return new Promise((resolve, reject) => {
    console.log(chalk.gray(`Exporting from: ${url}`));
    console.log(chalk.gray(`Size: ${size}\n`));

    const args = [
      '--yes', // Auto-install if needed
      'decktape',
      '--chrome-arg=--allow-file-access-from-files',
      '--chrome-arg=--disable-web-security',
      'reveal',
      url,
      outputPath,
      '--size',
      size,
      '--load-pause',
      '3000', // Wait 3 seconds for page to load
    ];

    const decktape = spawn('npx', args, {
      stdio: 'inherit',
      shell: true,
    });

    decktape.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Export failed with code ${code}`));
      }
    });

    decktape.on('error', (error) => {
      reject(error);
    });
  });
};

/**
 * Main export command handler
 */
export const exportPresentation = async (
  presentation: string | undefined,
  options: ExportOptions
): Promise<void> => {
  const { output, format = 'pdf', size = DEFAULT_SIZE } = options;

  let selectedPresentation: string;

  // If no presentation provided, show interactive selection
  if (!presentation) {
    const presentations = getAllPresentations();

    if (presentations.length === 0) {
      console.error(chalk.red('No presentations found'));
      console.log(chalk.yellow('Create one with: npm run create'));
      process.exit(1);
    }

    console.log(chalk.bold.cyan('\nSelect a presentation to export:\n'));

    const choices = presentations.map((pres) => pres.name);

    const answer = await inquirer.prompt([
      {
        type: 'list',
        name: 'presentation',
        message: 'Which presentation would you like to export?',
        choices,
      },
    ]);

    selectedPresentation = answer.presentation;
  } else {
    selectedPresentation = presentation;
  }

  // Validate presentation exists
  const presentationDir = resolve(process.cwd(), 'src', 'presentations', selectedPresentation);

  if (!existsSync(presentationDir)) {
    console.error(chalk.red(`Error: Presentation "${selectedPresentation}" not found`));
    process.exit(1);
  }

  // Check if presentation has index.html
  const indexPath = join(presentationDir, 'index.html');
  
  if (!existsSync(indexPath)) {
    console.error(chalk.red(`Error: Presentation has no index.html file`));
    console.log(chalk.yellow(`Make sure the presentation "${selectedPresentation}" exists`));
    process.exit(1);
  }

  // Generate output path
  const outputPath = generateOutputPath(selectedPresentation, format, output);

  console.log(chalk.cyan(`\nExporting: ${selectedPresentation}`));
  console.log(chalk.gray(`Output: ${outputPath}`));

  // Start temporary dev server
  console.log(chalk.cyan('\nStarting temporary server...'));
  const port = 3333; // Use different port to avoid conflicts
  let server: { close: () => void } | null = null;

  try {
    server = await startTempServer(presentationDir, port);
    console.log(chalk.green('✓ Server ready\n'));

    // Wait for server to be fully ready
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Export the presentation
    const url = `http://localhost:${port}`;
    await exportWithDecktape(url, outputPath, size);

    console.log(chalk.green(`\n✓ Successfully exported to: ${outputPath}`));
  } catch (error) {
    console.error(chalk.red(`\nExport failed: ${error instanceof Error ? error.message : 'Unknown error'}`));
    process.exit(1);
  } finally {
    // Clean up: close server
    if (server) {
      console.log(chalk.gray('\nCleaning up...'));
      server.close();
      
      // Wait for port to be freed
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  }
};
