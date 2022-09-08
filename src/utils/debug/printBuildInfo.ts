import { env } from '@showdex/utils/core';

export const printBuildInfo = (): string => (
  env('package-name') +
  `-v${env('package-version')}` +
  `-b${env('package-build-date')}` +
  `-${env('build-target', 'chrome')}` +
  `${__DEV__ ? '-dev' : ''}`
);
