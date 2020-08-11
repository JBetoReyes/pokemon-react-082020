module.exports = {
  roots: ['..', '<rootDir>'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  // Setup Enzyme
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/setupEnzyme.ts'],

  // Alias
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/../src/app/components/$1',
    '\\.(s?css)$': '<rootDir>/__mocks__/styleMock.js',
  },
};
