# Agent Guidelines for dasheck0-presentations

> **Purpose**: This document provides coding agents with essential information for working in this TypeScript-based presentation system powered by reveal.js and Vite.

## Project Overview

**Tech Stack**: TypeScript, Node.js (ESM), Vite, reveal.js, SCSS  
**Package Manager**: npm  
**Architecture**: Modular, functional programming patterns with explicit dependencies

## Build & Development Commands

### Core Commands
```bash
# Development server (interactive or direct)
npm run serve                              # Interactive: Choose presentation from list
npm run serve -- 2026-01-10-my-talk       # Direct: Serve specific presentation
npm run serve -- <name> --port 3000       # With custom port

# Build
npm run build -- 2026-01-10-my-talk       # Build single presentation
npm run build:all                          # Build all presentations

# Create new presentation
npm run create                             # Interactive mode with prompts
npm run cli -- create --name "Title" --theme nanoverse --author "Name"

# List presentations
npm run list                               # Shows all with metadata

# Type checking
npx tsc --noEmit                          # Type check without compilation
npx tsc --noEmit --watch                  # Watch mode
```

### Testing
```bash
# Currently no test framework configured
npm test                                   # Placeholder (exits with error)

# Manual testing via browser
npm run serve -- <presentation-name>      # Test in browser at localhost:3000
```

### Git Hooks
```bash
# Commit message validation (via lefthook)
# Runs automatically on commit-msg hook
npx commitlint --edit <file>

# Conventional commits format required:
# feat: add new feature
# fix: bug fix
# docs: documentation
# style: formatting
# refactor: code refactoring
# chore: maintenance
```

## Code Style Guidelines

### Core Philosophy
**Modular, Functional, Maintainable** - If you can't easily test it, refactor it.

### Critical Patterns ✅
- **Pure functions**: Same input = same output, no side effects
- **Immutability**: Create new data, don't modify existing
- **Composition**: Build complex from simple functions
- **Small functions**: < 50 lines (ideally), < 100 lines max
- **Explicit dependencies**: Use dependency injection, avoid globals

### Anti-Patterns ❌
- Mutation and side effects
- Deep nesting (use early returns)
- God modules (split into focused modules)
- Global state
- Large functions (> 100 lines)

### TypeScript Configuration
```typescript
// Use path aliases from tsconfig.json
import { ThemeConfig } from '@shared/types';
import { getAllPresentations } from '@shared/utils';
import { nanoverseTheme } from '@themes/nanoverse/config';
import { createCommand } from '@cli/commands/create';

// Available path aliases:
// @/*          -> ./src/*
// @shared/*    -> ./src/shared/*
// @themes/*    -> ./src/themes/*
// @cli/*       -> ./src/cli/*
```

### Imports & Organization
```typescript
// Order: Node built-ins → External → Internal (path aliases)
import { readFileSync, writeFileSync } from 'fs';
import { resolve, join } from 'path';
import chalk from 'chalk';
import inquirer from 'inquirer';
import type { Presentation, ThemeConfig } from '@shared/types';
import { getAllPresentations, themeExists } from '@shared/utils';
```

### Naming Conventions
```typescript
// Files: lowercase-with-dashes.ts
// theme-loader.ts, presentations.ts, config-merger.ts

// Functions: verbPhrases (camelCase)
const formatPresentationName = (name: string): string => { ... };
const getPresentationInfo = (name: string, path: string): Presentation | null => { ... };

// Predicates: is/has prefix
const themeExists = (theme: string): boolean => { ... };
const hasPresentations = (): boolean => { ... };

// Variables: descriptive, const by default
const presentationDir = join(presentationsDir, presentationName);
const availableThemes = getAvailableThemes();

// Constants: UPPER_SNAKE_CASE
const DEFAULT_PORT = 3000;

// Types/Interfaces: PascalCase
interface CreateOptions { name?: string; theme?: string; }
type ThemeConfig = { ... };
```

### Type Safety
```typescript
// ✅ Explicit return types for public functions
export const getAllPresentations = (): Presentation[] => { ... };

// ✅ Type guards for filtering
.filter((p): p is Presentation => p !== null);

// ✅ Strict null checks
if (!existsSync(path)) return null;

// ✅ Use 'type' for unions, 'interface' for objects
type Theme = 'default' | 'nanogiants' | 'nanoverse';
interface ThemeConfig { name: string; reveal: RevealOptions; }
```

### Functional Patterns
```typescript
// ✅ Immutable operations
const slug = name
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '');

// ✅ Pure data transformations
const replacePlaceholders = (content: string, values: Record<string, string>): string => {
  return Object.entries(values).reduce(
    (result, [key, value]) => result.replace(new RegExp(`{{${key}}}`, 'g'), value),
    content
  );
};

// ✅ Composition
const presentations = dirs
  .map(dir => getPresentationInfo(dir, resolve(dir)))
  .filter((p): p is Presentation => p !== null);
```

### Error Handling
```typescript
// ✅ Validate at boundaries
if (!themeExists(theme)) {
  console.error(chalk.red(`Error: Theme "${theme}" not found`));
  process.exit(1);
}

// ✅ Early returns
if (!existsSync(slidesPath)) {
  return null;
}

// ✅ Graceful fallbacks
const theme = data.theme || 'default';
const title = data.title || name;
```

## Project Structure
```
src/
├── presentations/           # Individual presentations
│   └── YYYY-MM-DD-name/    # Auto-generated naming convention
│       ├── slides.md       # Markdown content with frontmatter
│       ├── main.ts         # Entry point (imports theme)
│       ├── index.html      # HTML wrapper
│       └── assets/         # Presentation-specific assets
├── themes/                 # Shared themes
│   ├── default/
│   ├── nanogiants/
│   └── nanoverse/
│       ├── config.ts       # Theme config (TypeScript)
│       ├── theme.scss      # Theme styles (SCSS)
│       └── assets/         # Theme assets (fonts, images)
├── shared/
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Helper functions (pure)
│   └── templates/          # Presentation templates
└── cli/                    # CLI commands (create, serve, build, list)
```

## Theme Development
```scss
// Theme structure (SCSS)
// 1. Variables
$nanoverse-purple: #8b7ad6;

// 2. Font faces
@font-face {
  font-family: 'Sharp Grotesk Book';
  src: url('./assets/fonts/SharpGroteskBook19.woff2') format('woff2');
  font-display: swap;
}

// 3. Base import
@import 'reveal.js/dist/theme/black.css';

// 4. Customizations
.reveal {
  font-family: 'Sharp Grotesk Book', sans-serif;
  background-image: url('./assets/background.png');
}
```

## Best Practices

### DO ✅
- Keep functions small (< 50 lines)
- Use pure functions for data transformations
- Prefer immutability (spread operators, map/filter/reduce)
- Add explicit type annotations for public APIs
- Use path aliases (@shared, @themes, @cli)
- Validate inputs at module boundaries
- Use descriptive variable names
- Write self-documenting code
- Follow conventional commit format

### DON'T ❌
- Mutate function parameters or external state
- Use `any` type (prefer `unknown` if needed)
- Create god functions or modules
- Use deep nesting (> 3 levels)
- Add global variables or shared mutable state
- Skip type annotations on public functions
- Use `require()` (this is an ESM project)

## Common Tasks

### Adding a New Theme
1. Create `src/themes/my-theme/`
2. Add `config.ts` with `ThemeConfig`
3. Add `theme.scss` with styles
4. Register in `src/shared/utils/theme-loader.ts`

### Creating Presentation Assets
```bash
# Fonts go in theme assets
src/themes/<theme>/assets/fonts/

# Presentation-specific images
src/presentations/<name>/assets/
```

---

**Last Updated**: 2026-01-10  
**Maintained by**: Stefan Neidig <s.neidig@nanogiants.de>
