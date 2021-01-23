export default {
  clearMocks: true,
  coverageProvider: "v8",
  moduleFileExtensions: ["js", "mjs"],
  roots: ["<rootDir>/exercises"],
  setupFilesAfterEnv: ["./jest.setup.mjs"],
  testEnvironment: "jest-environment-node",
  testRegex: "test\\.mjs$",
  transform: {},
};
