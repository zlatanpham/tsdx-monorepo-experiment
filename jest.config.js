module.exports = {
  transform: {
    '^.+\\.[jt]sx?$': '<rootDir>/jest-preprocess.js',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
  roots: ['packages/'],
};
