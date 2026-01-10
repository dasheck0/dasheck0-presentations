import { resolve } from 'path';
import { readdirSync, existsSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import type { Presentation } from '@shared/types';

/**
 * Gets presentation info from a directory
 */
const getPresentationInfo = (name: string, path: string): Presentation | null => {
  const slidesPath = resolve(path, 'slides.md');

  if (!existsSync(slidesPath)) {
    return null;
  }

  const content = readFileSync(slidesPath, 'utf-8');
  const { data } = matter(content);

  return {
    name,
    path,
    theme: data.theme || 'default',
    title: data.title || name,
    date: data.date,
    author: data.author,
  };
};

/**
 * Gets all presentations from the presentations directory
 */
export const getAllPresentations = (): Presentation[] => {
  const presentationsDir = resolve(process.cwd(), 'src', 'presentations');

  if (!existsSync(presentationsDir)) {
    return [];
  }

  const dirs = readdirSync(presentationsDir);
  return dirs
    .map((dir) => getPresentationInfo(dir, resolve(presentationsDir, dir)))
    .filter((p): p is Presentation => p !== null);
};

/**
 * Checks if any presentations exist
 */
export const hasPresentations = (): boolean => {
  return getAllPresentations().length > 0;
};
