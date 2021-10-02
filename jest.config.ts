import { pathsToModuleNameMapper } from 'ts-jest/utils';
import  { compilerOptions } from './tsconfig.json' ;
const moduleNameMapper = pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' });
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  "moduleNameMapper": {
    "/^(.*)$/": "<rootDir>/stc"
  },
  modulePaths: ['<rootDir>/src'],
  testTimeout:1000000000
};

