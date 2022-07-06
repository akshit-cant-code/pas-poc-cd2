const path = require('path');
const webpackConfig = require('./webpack/config');

module.exports = (env) => {
  const options = {
    root: path.resolve(__dirname)
  };

  const enviroment = env.APP_ENV || 'development';

  console.log('-------------------------------');
  console.log(`| This is a ${enviroment} build |`);
  console.log('-------------------------------');

  return webpackConfig(env, options);
};
