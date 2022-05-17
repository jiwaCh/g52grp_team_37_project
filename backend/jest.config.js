module.exports = {
    testPathIgnorePatterns: ['lib/', 'node_modules/'],
    moduleFileExtensions: ['js', 'json'],
    testEnvironment: 'node',
    rootDir: 'src',
    reporters: ['default', 'jest-junit'],
    coverageDirectory: '../coverage',
  };