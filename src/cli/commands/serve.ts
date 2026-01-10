import { spawn } from 'child_process';
import { resolve } from 'path';
import { existsSync } from 'fs';
import chalk from 'chalk';
import inquirer from 'inquirer';
import { getAllPresentations } from '@shared/utils';

interface ServeOptions {
  port?: string;
}

const startServer = (presentation: string, port: string): void => {
  const presentationDir = resolve(process.cwd(), 'src', 'presentations', presentation);

  console.log(chalk.cyan(`\nStarting dev server for: ${presentation}`));
  console.log(chalk.cyan(`Port: ${port}`));
  console.log(chalk.gray(`URL: http://localhost:${port}\n`));

  const configPath = resolve(process.cwd(), 'vite.config.ts');
  const vite = spawn('npx', ['vite', presentationDir, '--port', port, '--config', configPath], {
    stdio: 'inherit',
    shell: true,
  });

  vite.on('close', (code) => {
    if (code !== 0) {
      console.error(chalk.red(`Dev server exited with code ${code}`));
      process.exit(code || 1);
    }
  });
};

export const servePresentation = async (
  presentation: string | undefined,
  options: ServeOptions
): Promise<void> => {
  const { port = '3000' } = options;
  let selectedPresentation: string;

  // If no presentation provided, show interactive selection
  if (!presentation) {
    const presentations = getAllPresentations();

    if (presentations.length === 0) {
      console.error(chalk.red('No presentations found'));
      console.log(chalk.yellow('Create one with: npm run cli -- create --name "My Talk"'));
      process.exit(1);
    }

    console.log(chalk.bold.cyan('\nSelect a presentation to serve:\n'));

    const choices = presentations.map((pres) => pres.name);

    const answer = await inquirer.prompt([
      {
        type: 'list',
        name: 'presentation',
        message: 'Which presentation would you like to serve?',
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

  startServer(selectedPresentation, port);
};
