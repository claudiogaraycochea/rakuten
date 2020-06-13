// webpack.config.js
module.exports = {
  bail: 1,
  verbose: true,
  module: {
    loaders: [
      {exclude: ['node_modules'], loader: 'babel', test: /\.jsx?$/},
      {loader: 'style-loader!css-loader', test: /\.css$/},
      {loader: 'url-loader', test: /\.gif$/},
      {loader: 'file-loader', test: /\.(ttf|eot|svg)$/},
    ],
  },
  resolve: {
    alias: {
      config$: './configs/app-config.js',
      react: './vendor/react-master',
    },
    extensions: ['', 'js', 'jsx'],
    modules: [
      'node_modules',
      'bower_components',
      'shared',
      '/shared/vendor/modules',
    ],
  },
  testEnvironment: "jsdom",
  testURL: "http://localhost",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.(css|less)$": "<rootDir>/src/test/__mocks__/styleMock.js",
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "<rootDir>/src/test/__mocks__/fileTransformer.js"
  },
  transformIgnorePatterns: [
    "^.+\\.module\\.(css|sass|scss)$",
    "node_modules/(?!(reactjs-click-outside|@babel/runtime)/)", // The modules that need to be transpiled. You might not need this.
    // "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$", // This line is no longer needed.
  ],
  "moduleNameMapper": {
    // "^react-native$": "react-native-web", // This was generated while "ejecting", not necessary.
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "\\.(css|less)$": "identity-obj-proxy", // If you are importing css/less in JS files
  }
};
