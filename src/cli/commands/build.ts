import { spawn } from 'child_process';
import { resolve } from 'path';
import { existsSync, readdirSync } from 'fs';
import chalk from 'chalk';

interface BuildOptions {
  all?: boolean;
}

const buildSinglePresentation = (presentation: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    console.log(chalk.cyan(`Building: ${presentation}`));

    const vite = spawn('npx', ['vite', 'build', `src/presentations/${presentation}`], {
      stdio: 'inherit',
      shell: true,
    });

    vite.on('close', (code) => {
      if (code === 0) {
        console.log(chalk.green(`✓ Built: ${presentation}`));
        resolve();
      } else {
        reject(new Error(`Build failed for ${presentation}`));
      }
    });
  });
};

export const buildPresentation = async (presentation: string, options: BuildOptions): Promise<void> => {
  const { all = false } = options;

  if (all) {
    const presentationsDir = resolve(process.cwd(), 'src', 'presentations');
    const presentations = readdirSync(presentationsDir);

    console.log(chalk.cyan(`Building ${presentations.length} presentations...`));

    for (const pres of presentations) {
      await buildSinglePresentation(pres);
    }

    console.log(chalk.green('✓ All presentations built successfully'));
    return;
  }

  if (!presentation) {
    console.error(chalk.red('Error: Presentation name is required'));
    console.log(chalk.yellow('Usage: npm run build -- <presentation-name>'));
    console.log(chalk.yellow('Or: npm run build -- --all'));
    process.exit(1);
  }

  const presentationDir = resolve(process.cwd(), 'src', 'presentations', presentation);

  if (!existsSync(presentationDir)) {
    console.error(chalk.red(`Error: Presentation "${presentation}" not found`));
    process.exit(1);
  }

  await buildSinglePresentation(presentation);
};
