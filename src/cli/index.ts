#!/usr/bin/env node
import { Command } from 'commander';
import { createPresentation } from './commands/create';
import { servePresentation } from './commands/serve';
import { buildPresentation } from './commands/build';
import { listPresentations } from './commands/list';

const program = new Command();

program
  .name('presentations')
  .description('CLI tool for managing reveal.js presentations')
  .version('1.0.0');

program
  .command('create')
  .description('Create a new presentation')
  .option('-n, --name <name>', 'Presentation name')
  .option('-t, --theme <theme>', 'Theme to use (default, nanogiants, nanoverse)', 'default')
  .option('-a, --author <author>', 'Author name')
  .action(createPresentation);

program
  .command('serve [presentation]')
  .description('Serve a presentation in development mode')
  .option('-p, --port <port>', 'Port to use', '3000')
  .action(servePresentation);

program
  .command('build [presentation]')
  .description('Build a presentation for production')
  .option('-a, --all', 'Build all presentations')
  .action(buildPresentation);

program
  .command('list')
  .description('List all presentations')
  .action(listPresentations);

program.parse();
