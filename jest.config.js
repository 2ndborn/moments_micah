module.exports = {
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest", // Ensure Babel transforms all JS files
  },
  transformIgnorePatterns: [
    "/node_modules/(?!axios)", // Prevent Jest from ignoring Axios
  ],
};