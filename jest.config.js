module.exports = {
    moduleFileExtensions: ['js', 'ts'],
    testEnvironment: 'node',
    testEnvironmentOptions: {
    // Add any custom options you want to pass to the test environment
    customExportConditions: ['node', 'node-addons'],
    // Add other test environment options here if needed
  },
    testMatch: ['**/*.test.ts', '**/*.test.js'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    transformIgnorePatterns: ['^.+\\.js$'],
    verbose: true,
    roots: ["<rootDir>/src/", "<rootDir>/records/", "<rootDir>/scripts/"]
}
