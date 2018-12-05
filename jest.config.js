module.exports = {
  collectCoverage           : true,
  collectCoverageFrom       : [
    'src/**/*.{ts,js}',
    '!**/*.d.ts',
  ],
  coveragePathIgnorePatterns: [
    '/~.*',
  ],
  coverageDirectory         : 'test_results',
  coverageReporters         : [
    'clover',
    'lcov',
    'text-summary',
  ],
  globals                   : {
    'ts-jest': {
      babalConfig: false,
    },
  },
  moduleFileExtensions      : [
    'ts',
    'js',
    'json',
  ],
  moduleNameMapper          : {},
  setupFiles                : [],
  testRegex                 : '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  transform                 : {
    '^.+\\.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns   : [
    '<rootDir>/node_modules/(?!vue)',
  ],
}
