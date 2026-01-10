/**
 * Reveal.js configuration types
 * Based on reveal.js official API
 */
export interface RevealConfig {
  // Display and Layout
  width?: number;
  height?: number;
  margin?: number;
  minScale?: number;
  maxScale?: number;
  center?: boolean;
  embedded?: boolean;

  // Navigation and Controls
  controls?: boolean;
  controlsLayout?: 'bottom-right' | 'edges';
  controlsBackArrows?: 'faded' | 'hidden' | 'visible';
  progress?: boolean;
  slideNumber?: boolean | string;
  showSlideNumber?: 'all' | 'print' | 'speaker';
  hash?: boolean;
  respondToHashChanges?: boolean;
  keyboard?: boolean;
  touch?: boolean;
  loop?: boolean;
  rtl?: boolean;
  navigationMode?: 'default' | 'linear' | 'grid';

  // Transitions and Animation
  transition?: 'none' | 'fade' | 'slide' | 'convex' | 'concave' | 'zoom';
  transitionSpeed?: 'default' | 'fast' | 'slow';
  backgroundTransition?: 'none' | 'fade' | 'slide' | 'convex' | 'concave' | 'zoom';
  autoAnimate?: boolean;
  autoAnimateDuration?: number;
  autoAnimateEasing?: string;

  // Fragments
  fragments?: boolean;
  fragmentInURL?: boolean;

  // Auto-Slide
  autoSlide?: number;
  autoSlideStoppable?: boolean;

  // Features
  overview?: boolean;
  help?: boolean;
  pause?: boolean;
  jumpToSlide?: boolean;
  showNotes?: boolean;

  // Performance
  viewDistance?: number;
  mobileViewDistance?: number;

  // Plugins
  plugins?: any[];

  // Markdown
  markdown?: {
    smartypants?: boolean;
  };
}

export interface PresentationMetadata {
  title: string;
  theme: string;
  date?: string;
  author?: string;
  description?: string;
  tags?: string[];
}

export interface PresentationConfig {
  metadata: PresentationMetadata;
  reveal: RevealConfig;
}

export interface ThemeConfig {
  name: string;
  reveal: RevealConfig;
}
