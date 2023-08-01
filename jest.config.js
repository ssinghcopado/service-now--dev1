module.exports = {
    moduleFileExtensions: ['js', 'ts'],
    testEnvironment: 'jsdom',
    testEnvironmentOptions: {
    // Add any necessary options for jsdom here
    // Example options:
    resources: "usable", // Enable loading external resources (e.g., images) in jsdom
    runScripts: "dangerously", // Allow scripts to run in jsdom
    pretendToBeVisual: true, // Pretend to be a visual browser, enables CSS layout
    virtualConsole: true, // Enable virtual console (console.log, console.error) in jsdom
    userAgent: "Custom User-Agent String", // Set a custom User-Agent string for jsdom
    // ... any other jsdom options you may need
  },
    testMatch: ['**/*.test.ts', '**/*.test.js'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    transformIgnorePatterns: ['^.+\\.js$'],
    verbose: true,
    roots: ["<rootDir>/src/", "<rootDir>/records/", "<rootDir>/scripts/"]
}
