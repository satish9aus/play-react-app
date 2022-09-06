module.exports = {
  verbose: true,
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer",
    "^.+\\.css$": "jest-transform-css",
  },
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
};
