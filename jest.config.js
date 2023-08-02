module.exports = {
    moduleFileExtensions: ['js', 'ts'],
    testEnvironment: 'node',
    testEnvironmentOptions: {
    // Add any custom options you want to pass to the test environment
    projectConfig: {
      testEnvironmentOptions: {
        // Add your custom options here
        customOption: true,
        someOtherOption: 'hello',
      },
    },
  },
    testMatch: ['**/*.test.ts', '**/*.test.js'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    transformIgnorePatterns: ['^.+\\.js$'],
    verbose: true,
    roots: ["<rootDir>/src/", "<rootDir>/records/", "<rootDir>/scripts/"]
}
