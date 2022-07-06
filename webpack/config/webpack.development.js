const path = require('path');

module.exports = (env) => {
  const host = env.host || '0.0.0.0';
  const port = env.port || 4200;

  return {
    mode: 'development',
    stats: 'errors-warnings',
    devtool: 'source-map',
    devServer: {
      hot: true,
      host,
      port,
      headers: { 'Access-Control-Allow-Origin': '*' }
    }
  };
};
