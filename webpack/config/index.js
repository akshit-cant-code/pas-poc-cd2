const { merge } = require('webpack-merge');
const development = require('./webpack.development');
const production = require('./webpack.production');
const common = require('./webpack.common');

module.exports = (env, options) => {
  const configMapper = {
    production: production(env),
    development: development(env),
    common: common(env, options)
  };

  return merge(configMapper.common, configMapper[env.mode]);
};
