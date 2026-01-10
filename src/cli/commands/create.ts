import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, resolve } from 'path';
import chalk from 'chalk';
import inquirer from 'inquirer';
import { themeExists, getAvailableThemes } from '@shared/utils';

interface CreateOptions {
  name?: string;
  theme?: string;
  author?: string;
}

const formatPresentationName = (name: string): string => {
  const date = new Date().toISOString().split('T')[0];
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  return `${date}-${slug}`;
};

const replacePlaceholders = (content: string, values: Record<string, string>): string => {
  return Object.entries(values).reduce(
    (result, [key, value]) => result.replace(new RegExp(`{{${key}}}`, 'g'), value),
    content
  );
};

const createPresentationFiles = (
  name: string,
  theme: string,
  author: string
): string => {
  const presentationName = formatPresentationName(name);
  const presentationsDir = resolve(process.cwd(), 'src', 'presentations');
  const presentationDir = join(presentationsDir, presentationName);

  if (existsSync(presentationDir)) {
    console.error(chalk.red(`Error: Presentation "${presentationName}" already exists`));
    process.exit(1);
  }

  mkdirSync(presentationDir, { recursive: true });
  mkdirSync(join(presentationDir, 'assets'), { recursive: true });

  const templatesDir = resolve(process.cwd(), 'src', 'shared', 'templates');
  const date = new Date().toISOString().split('T')[0];

  const placeholders = { title: name, theme, date, author };

  const slidesTemplate = readFileSync(join(templatesDir, 'slides.md'), 'utf-8');
  const slides = replacePlaceholders(slidesTemplate, placeholders);
  writeFileSync(join(presentationDir, 'slides.md'), slides);

  const htmlTemplate = readFileSync(join(templatesDir, 'presentation.html'), 'utf-8');
  const html = replacePlaceholders(htmlTemplate, placeholders);
  writeFileSync(join(presentationDir, 'index.html'), html);

  const mainTemplate = readFileSync(join(templatesDir, 'main.ts.template'), 'utf-8');
  const configJson = JSON.stringify({ hash: true, center: true, transition: 'slide' }, null, 2);
  const main = mainTemplate.replace('{{config}}', configJson);
  writeFileSync(join(presentationDir, 'main.ts'), main);

  return presentationName;
};

export const createPresentation = async (options: CreateOptions): Promise<void> => {
  const availableThemes = getAvailableThemes();
  let name: string;
  let theme: string;
  let author: string;

  // Interactive mode if no name provided
  if (!options.name) {
    console.log(chalk.bold.cyan('\nCreate a new presentation\n'));

    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Presentation title:',
        validate: (input: string) => {
          if (!input || input.trim().length === 0) {
            return 'Presentation title is required';
          }
          return true;
        },
      },
      {
        type: 'list',
        name: 'theme',
        message: 'Select a theme:',
        choices: availableThemes,
        default: 'default',
      },
      {
        type: 'input',
        name: 'author',
        message: 'Author name (optional):',
        default: '',
      },
    ]);

    name = answers.name;
    theme = answers.theme;
    author = answers.author || '';
  } else {
    name = options.name;
    theme = options.theme || 'default';
    author = options.author || '';
  }

  // Validate theme
  if (!themeExists(theme)) {
    console.error(chalk.red(`Error: Theme "${theme}" does not exist`));
    console.log(chalk.yellow(`Available themes: ${availableThemes.join(', ')}`));
    process.exit(1);
  }

  const presentationName = createPresentationFiles(name, theme, author);

  console.log('');
  console.log(chalk.green(`✓ Created presentation: ${presentationName}`));
  console.log(chalk.cyan(`  Title: ${name}`));
  console.log(chalk.cyan(`  Theme: ${theme}`));
  if (author) console.log(chalk.cyan(`  Author: ${author}`));
  console.log('');
  console.log(chalk.yellow('Next steps:'));
  console.log(chalk.bold(`  npm run dev -- ${presentationName}`));
};
