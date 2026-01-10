import type { RevealConfig, ThemeConfig } from '@shared/types';

/**
 * Deeply merges reveal.js configurations
 * Later configs override earlier ones
 */
export const mergeConfigs = (...configs: Partial<RevealConfig>[]): RevealConfig => {
  return configs.reduce((merged, config) => ({
    ...merged,
    ...config,
  }), {} as RevealConfig);
};

/**
 * Creates a final reveal config from base, theme, and presentation configs
 */
export const createRevealConfig = (
  baseConfig: Partial<RevealConfig>,
  themeConfig: ThemeConfig,
  presentationConfig?: Partial<RevealConfig>
): RevealConfig => {
  return mergeConfigs(
    baseConfig,
    themeConfig.reveal,
    presentationConfig || {}
  );
};
