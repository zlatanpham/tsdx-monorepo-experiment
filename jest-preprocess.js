const babelOptions = {
  plugins: ['babel-plugin-macros'],
};

module.exports = require('babel-jest').createTransformer(babelOptions);
