# Dasheck0 Presentations

> A modern presentation hub powered by [reveal.js](https://revealjs.com) and TypeScript

## Features

- ✨ **TypeScript-First** - Full type safety with reveal.js
- 🎨 **Theme System** - Pre-built themes (nanogiants, nanoverse) with easy customization
- 📝 **Markdown Slides** - Write presentations in Markdown with frontmatter
- ⚡ **Vite-Powered** - Fast dev server with Hot Module Replacement
- 🛠️ **CLI Tools** - Interactive prompts for creating and serving presentations
- 🎯 **Modular** - Each presentation is self-contained with shared themes
- 🎪 **Interactive** - Guided setup with theme selection and presentation picker

## Quick Start

### Create a New Presentation

**Interactive mode** (guided prompts):
```bash
npm run create
```

You'll be prompted for:
- Presentation title
- Theme selection (from available themes)
- Author name (optional)

**Direct mode** (all options provided):
```bash
npm run cli -- create --name "My Talk" --theme nanogiants --author "Your Name"
```

### Start Development Server

**Interactive mode** (choose from list):
```bash
npm run dev
# or
npm run serve
```

**Direct mode** (specify presentation):
```bash
npm run dev -- 2026-01-10-my-talk
# or
npm run serve -- 2026-01-10-my-talk
```

The dev server will open automatically at http://localhost:3000

### List All Presentations

```bash
npm run list
```

### Build for Production

```bash
# Build single presentation
npm run build -- 2026-01-10-my-talk

# Build all presentations
npm run build:all
```

## Project Structure

```
dasheck0-presentations/
├── src/
│   ├── presentations/           # All your presentations
│   │   └── 2026-01-10-my-talk/
│   │       ├── slides.md        # Markdown slides
│   │       ├── main.ts          # Entry point
│   │       ├── index.html       # HTML wrapper
│   │       └── assets/          # Images, videos, etc.
│   ├── themes/                  # Shared themes
│   │   ├── default/
│   │   ├── nanogiants/
│   │   └── nanoverse/
│   ├── shared/                  # Shared utilities
│   │   ├── types/               # TypeScript types
│   │   ├── utils/               # Helper functions
│   │   └── templates/           # Presentation templates
│   └── cli/                     # CLI tools
├── dist/                        # Built presentations
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Available Themes

### default
Basic black theme with standard reveal.js styling

### nanogiants
Brand colors and styling for nanogiants presentations
- Primary: `#00d4ff` (cyan)
- Accent: `#ff006e` (pink)
- Dark: `#0a0e27`

### nanoverse
Purple gradient theme for nanoverse presentations
- Primary: `#7c3aed` (purple)
- Accent: `#ec4899` (pink)
- Gradient background

## Writing Slides

Presentations use Markdown with frontmatter:

```markdown
---
title: My Amazing Talk
theme: nanogiants
date: 2026-01-10
author: Stefan Neidig
---

# Welcome

This is my first slide

---

## Second Slide

- Point 1
- Point 2
- Point 3

--

## Vertical Slide

Use `--` for vertical slides

---

<!-- .slide: data-background="#ff0000" -->
## Custom Slide Attributes

This slide has a red background

---

## Code Example

\`\`\`typescript
const greet = (name: string): string => {
  return \`Hello, \${name}!\`;
};
\`\`\`
```

## Reveal.js Features

All standard reveal.js features are supported:

- **Navigation**: Arrow keys, space, or swipe on touch devices
- **Overview**: Press `Esc` or `O`
- **Speaker Notes**: Press `S` to open speaker view
- **Fullscreen**: Press `F`
- **Pause**: Press `B` or `.` to pause/blackout
- **Code Highlighting**: Automatic syntax highlighting for code blocks
- **Fragments**: Step-by-step reveals
- **Auto-Animate**: Smooth transitions between slides
- **PDF Export**: Export to PDF for sharing

## CLI Commands

### Create Presentation

**Interactive mode:**
```bash
npm run create
```

Prompts for title, theme selection, and author.

**Direct mode:**
```bash
npm run cli -- create --name "Presentation Title" --theme <theme> --author "Author Name"
```

Options:
- `--name <name>` - Presentation title
- `--theme <theme>` - Theme to use: default, nanogiants, nanoverse
- `--author <author>` - Author name (optional)

### Serve Presentation

**Interactive mode:**
```bash
npm run dev
```

Shows a list of all presentations to choose from.

**Direct mode:**
```bash
npm run dev -- <presentation-name>
```

Options:
- `--port <port>` - Port to use (default: 3000)

### Build Presentation

```bash
npm run build -- <presentation-name>
# or
npm run build:all
```

Options:
- `--all` - Build all presentations

### List Presentations

```bash
npm run list
```

Shows all presentations with metadata.

## Creating Custom Themes

1. Create a new theme directory:

```bash
mkdir -p src/themes/my-theme
```

2. Create `config.ts`:

```typescript
import type { ThemeConfig } from '@shared/types';

export const myTheme: ThemeConfig = {
  name: 'my-theme',
  reveal: {
    controls: true,
    progress: true,
    center: true,
    hash: true,
    transition: 'slide',
  },
};
```

3. Create `theme.scss`:

```scss
$primary: #your-color;

@import 'reveal.js/dist/theme/black.css';

.reveal {
  background: $primary;
  // Your custom styles
}
```

4. Register in `src/shared/utils/theme-loader.ts`

## Development

### TypeScript Compilation

```bash
npx tsc --noEmit
```

### Project follows code standards

- ✅ Modular architecture
- ✅ Functional programming patterns
- ✅ Type-safe with TypeScript
- ✅ Immutable data structures
- ✅ Pure functions
- ✅ Dependency injection

## License

MIT

## Author

Stefan Neidig <s.neidig@nanogiants.de>
