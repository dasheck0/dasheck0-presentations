import chalk from 'chalk';
import { getAllPresentations } from '@shared/utils';

export const listPresentations = (): void => {
  const presentations = getAllPresentations();

  if (presentations.length === 0) {
    console.log(chalk.yellow('No presentations found'));
    return;
  }

  console.log(chalk.bold.cyan(`\nFound ${presentations.length} presentation(s):\n`));

  presentations.forEach((pres) => {
    console.log(chalk.bold(pres.title));
    console.log(chalk.gray(`  Name: ${pres.name}`));
    console.log(chalk.gray(`  Theme: ${pres.theme}`));
    if (pres.date) console.log(chalk.gray(`  Date: ${pres.date}`));
    if (pres.author) console.log(chalk.gray(`  Author: ${pres.author}`));
    console.log('');
  });
};
