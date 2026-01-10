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

# Export to PDF
npm run export                             # Interactive: Choose presentation from list
npm run export -- 2026-01-10-my-talk      # Export specific presentation
npm run export -- <name> --output custom.pdf  # Custom output path
npm run export -- <name> --size 1280x720  # Custom slide size

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

# AI Presentation Guidelines & Best Practices

## Purpose of This Document

These guidelines define **how an AI should design, structure, and pace a high-quality presentation**.  
The goal is not to dump information, but to **teach, persuade, or guide an audience through a narrative** using slides as visual support.

Slides are **not documentation**.  
Slides are **stage props for thinking**.

---

## Core Principles (Non-Negotiable)

### 1. Slides Support the Speaker — They Are Not the Speaker
- Slides must **never contain full paragraphs**
- If a slide can be understood fully without explanation, it is probably too verbose
- Assume the presenter explains the context verbally

**Rule of thumb:**  
> If it looks like a blog post, it’s wrong.

---

### 2. One Idea Per Slide
Each slide must communicate exactly **one core idea**:
- What is this?
- Why does it matter?
- How does it work?
- What comes next?

If you feel the urge to say “also” → create a new slide.

---

### 3. Cognitive Load Is the Enemy
Humans:
- Read slower than they listen
- Forget quickly
- Hate walls of text

Guidelines:
- Prefer **short phrases** over sentences
- Use **3–5 bullets max**
- Rely on **visual hierarchy**, not density

---

## Presentation Structure (Didactic Flow)

### 1. Opening: Set the Mental Frame (10–15%)
Goal: Align the audience.

Include:
- Context (why are we here?)
- Problem or opportunity
- Value for the audience

Typical flow:
1. Title slide (specific topic)
2. Agenda / journey (3–5 steps)
3. Problem or motivation

---

### 2. Core Content: Build Understanding (70–80%)
Goal: Transfer insight, not raw facts.

Preferred patterns:
- Concept → Explanation → Example
- Problem → Approach → Outcome

Rules:
- Introduce concepts incrementally
- Use recap slides after major sections
- Avoid jumping abstraction levels

---

### 3. Closing: Lock It In (10–15%)
Goal: Make it stick.

Include:
- 3–5 key takeaways
- Clear conclusion or decision
- Optional next steps or call to action

The final slide should answer:
> What should the audience remember tomorrow?

---

## Slide Anatomy

### Title
- Mandatory on almost every slide
- Must state the **message**, not the topic

Bad:
> Architecture

Good:
> A layered architecture isolates change

---

### Content
Use one dominant content type per slide:
- Bullet list
- Diagram / image
- Code snippet
- Quote
- Small comparison table

Rules:
- Max **30–40 words** per slide
- Bullets are phrases, not sentences
- Code highlights ideas, not full implementations

---

### Visuals
- Visuals must **explain**, not decorate
- Every image must have a purpose
- Images may require explanation, but must clarify something real

Avoid:
- Meaningless stock photos
- Decorative icons without informational value

---

## Length & Pacing

### Slide Count
Approximate pacing:
- **1 slide ≈ 1–2 minutes**

Typical decks:
- 10–15 slides → short talk
- 20–30 slides → conference talk
- 30–40 slides → deep dive (already risky)

If an AI produces 60 slides: it failed.

---

### Information Density Curve
- Start light and conceptual
- Peak in the middle
- End simplified and distilled

A good deck feels like:
> ramp up → peak → calm landing

---

## Language & Tone

- Prefer clarity over cleverness
- Use concrete language
- Avoid unnecessary jargon
- Keep bullet structure parallel

Bad:
- Fast
- Scales well
- Has good maintainability

Good:
- Fast execution
- Horizontal scalability
- Clear ownership boundaries

---

## What the AI Must Avoid

Hard no:
- Paragraphs
- Multiple topics per slide
- Repeated slide titles
- Overlong agenda slides
- Explaining everything upfront

Soft no:
- Using animations to mask weak structure
- Cosmetic slide variation without meaning
- Ending without a conclusion

---

## Quality Checklist

Before finalizing:
- Every slide has a clear purpose
- Content limits respected
- Logical narrative flow
- Strong opening and closing
- Slide count matches duration
- Slides require a speaker to be complete

---

## Final Rule

> Slides are a **thinking tool**, not a storage format.

Optimize for **clarity, flow, and teaching** — not completeness.

Most decks fail this.  
Don’t be most decks.

---

## Failure Handling & Next Steps Logging (Mandatory)

### Purpose
The AI must **never silently fail** or gloss over missing work.
If the AI is unable to complete a task during presentation creation, it must **explicitly log the failure** so it can be resolved later.

Failures are acceptable.
Unreported failures are not.

---

### What Counts as a Failure
The AI must treat the following situations as failures (non-exhaustive):

- Unable to find, generate, or select a suitable asset (image, diagram, video)
- Unable to create a slide that meets the structure or quality guidelines
- Missing, ambiguous, or contradictory input required to proceed
- Uncertainty that would materially affect correctness or clarity
- Any situation where the AI would otherwise guess or improvise

When in doubt: **log it**.

---

### Failure Response Rules

When a failure occurs, the AI must:

1. **Continue the presentation generation** where possible  
   - Do not abort the entire process unless explicitly instructed
2. **Insert a clearly marked placeholder** in the presentation  
   - Examples: `TODO`, `MISSING ASSET`, `NEEDS REVIEW`
3. **Append a failure entry to `nextsteps.md`**

Silent degradation is strictly forbidden.

---

### `nextsteps.md` File Rules

- The file name must be exactly: `nextsteps.md`
- The file must be **upserted only**
- Never recreate, overwrite, or delete existing content
- New entries must always be appended at the end

---

### Required Entry Format

Each failure entry must follow this structure exactly:

```md
### [Failure Type] – <Short Title>

**Location:**
- Slide number or slide title
- Section (if applicable)

**Issue:**
Clear description of what could not be completed.

**Why It Failed:**
Brief explanation (missing data, ambiguity, unavailable asset, etc.).

**Suggested Next Step:**
Concrete action a human or follow-up AI run should take.

---
```

---

### Examples

#### Missing Asset
```md
### Missing Asset – Diagram for Event Flow

**Location:**
- Slide 7: "System Event Flow"

**Issue:**
No suitable diagram could be generated to explain the event flow.

**Why It Failed:**
Required system details were not provided.

**Suggested Next Step:**
Provide a high-level event sequence or approve a conceptual diagram.
```

#### Incomplete Slide
```md
### Incomplete Slide – Metrics Comparison

**Location:**
- Slide 12: "Performance Comparison"

**Issue:**
Unable to create a meaningful comparison slide.

**Why It Failed:**
No concrete metrics or baseline values were available.

**Suggested Next Step:**
Provide real metrics or confirm that illustrative values are acceptable.
```

---

### Absolute Rules

- Never hide uncertainty
- Never invent content to fill gaps
- Never silently lower quality
- Never overwrite `nextsteps.md`

If something cannot be done correctly, **make it visible and actionable**.

---

**Last Updated**: 2026-01-10  
**Maintained by**: Stefan Neidig <s.neidig@nanogiants.de>