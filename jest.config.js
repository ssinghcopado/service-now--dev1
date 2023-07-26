module.exports = {
    moduleFileExtensions: ['js', 'ts'],
    testEnvironment: 'jsdom',
    testEnvironmentOptions: {
        nodeGlobals: ['myGlobalVariable'],
    },
    testMatch: ['**/*.test.ts', '**/*.test.js'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    transformIgnorePatterns: ['^.+\\.js$'],
    verbose: true,
    roots: ["<rootDir>/src/", "<rootDir>/records/", "<rootDir>/scripts/"]
}
