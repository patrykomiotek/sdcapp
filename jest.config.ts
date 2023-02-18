import type { Config } from 'jest';
import { pathsToModuleNameMapper } from 'ts-jest';

import tsConfig from './tsconfig.json';

const config: Config = {
  verbose: true,
  globals: {
    NODE_ENV: 'test'
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(tsConfig.compilerOptions.paths, { prefix: '<rootDir>/'}),
    '\\.(css|scss)$': '<rootDir>/src/mocks/styleMock.js',
    '\\.(jpg|jpeg|png)$': '<rootDir>/src/mocks/imgMock.js',
  }
};

export default config;
