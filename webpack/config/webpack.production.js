const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env) => {
  return {
    mode: 'production',
    output: {
      filename: '[name].[fullhash].js'
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanAfterEveryBuildPatterns: ['dist']
      })
    ]
  };
};
