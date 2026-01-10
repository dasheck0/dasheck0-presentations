import { readdirSync, existsSync, statSync } from 'fs';
import { resolve } from 'path';
import type { ThemeConfig } from '@shared/types';
import { defaultTheme } from '@themes/default/config';
import { nanogiantsTheme } from '@themes/nanogiants/config';
import { nanoverseTheme } from '@themes/nanoverse/config';

const themes: Record<string, ThemeConfig> = {
  default: defaultTheme,
  nanogiants: nanogiantsTheme,
  nanoverse: nanoverseTheme,
};

/**
 * Loads a theme configuration by name
 */
export const loadTheme = (themeName: string): ThemeConfig => {
  const theme = themes[themeName];
  
  if (!theme) {
    console.warn(`Theme "${themeName}" not found, falling back to default`);
    return defaultTheme;
  }
  
  return theme;
};

/**
 * Gets all available theme names by reading the themes directory
 */
export const getAvailableThemes = (): string[] => {
  const themesDir = resolve(process.cwd(), 'src', 'themes');
  
  if (!existsSync(themesDir)) {
    return ['default'];
  }

  try {
    const dirs = readdirSync(themesDir);
    return dirs.filter((dir) => {
      const dirPath = resolve(themesDir, dir);
      const stat = statSync(dirPath);
      return stat.isDirectory() && !dir.startsWith('.');
    });
  } catch (error) {
    console.error('Error reading themes directory:', error);
    return ['default'];
  }
};

/**
 * Checks if a theme exists
 */
export const themeExists = (themeName: string): boolean => {
  return getAvailableThemes().includes(themeName);
};
