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

  // Setup env variables
  // Setup mock fetch
  setupFiles: ['<rootDir>/setEnvVars.ts', '<rootDir>/setMockFetch.ts'],

  // Alias
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/../src/app/components/$1',
    '^@app/(.*)$': '<rootDir>/../src/app/$1',
    '^@services/(.*)$': '<rootDir>/../src/app/services/$1',
    '^@typings/(.*)$': '<rootDir>/../src/typings/$1',
    '\\.(s?css)$': '<rootDir>/__mocks__/styleMock.js',
  },
};
