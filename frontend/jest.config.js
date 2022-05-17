module.exports = {
  testPathIgnorePatterns: ['lib/', 'node_modules/'],
  moduleFileExtensions: ['js'],
  testEnvironment: 'node',
  rootDir: 'src',
  reporters: ['default', 'jest-junit'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
