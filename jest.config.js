module.exports = {
  collectCoverage: true,
  setupFiles: ['<rootDir>/src/tests/setupTests.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/tests/fileMock.js',
    '\\.(css|less)$': '<rootDir>/src/tests/styleMock.js'
  },
  testEnvironment: 'jsdom',
  coverageThreshold: {
    global: {
      branches: 57,
      functions: 77,
      lines: 76
    }
  }
};
