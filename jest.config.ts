module.exports = {
    collectCoverageFrom: [
        '<rootDir>/src/**/*.ts',
    ],
    coverageDirectory: 'coverage',
    coverageProvider: 'babel',
    testMatch: ['**/*.spec.ts'],
    roots: [
        '<rootDir>/src',
        '<rootDir>/tests'
    ],
    transform: {
        '\\.ts$': 'ts-jest'
    },
    clearMocks: true,
    testTimeout: 3600000
}
