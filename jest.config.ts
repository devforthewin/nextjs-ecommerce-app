import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],

  testEnvironment: 'jest-environment-jsdom',

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  moduleNameMapper: {
    '^.+\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    // alias  important for @/lib/prisma
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },

  transformIgnorePatterns: ['/node_modules/'],
}

export default createJestConfig(config)
