module.exports = {
  moduleNameMapper: {
    '@core/(.*)': '<rootDir>/src/app/core/$1',
  },
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  collectCoverage: true,// Nos crea la carpeta Coverage cada vez que se ejecutan las pruebas
  coverageDirectory: '<rootDir>/src/tests/coverage' // Donde lo vas  a dejar
};
