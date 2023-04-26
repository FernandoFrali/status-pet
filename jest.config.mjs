import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts(x)',
    '!<rootDir>/src/pages/*.ts(x)',
    '!**/node_modules/**',
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
};

export default createJestConfig(config);
