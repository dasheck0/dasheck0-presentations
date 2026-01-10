import type { ThemeConfig } from '@shared/types';

export const defaultTheme: ThemeConfig = {
  name: 'default',
  reveal: {
    controls: true,
    progress: true,
    center: true,
    hash: true,
    transition: 'slide',
    slideNumber: true,
    showSlideNumber: 'all',
  },
};
