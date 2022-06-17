import type { Config } from '@jest/types';

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  coverageThreshold: {
    global: {
      branches: 1,
      functions: 1,
      lines: 1,
      statements: 1,
    },
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./setupTests.ts'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
};

module.exports = config;
