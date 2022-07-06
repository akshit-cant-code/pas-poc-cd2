module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        debug: false,
        modules: 'auto',
        corejs: '3.0.0',
        targets: {
          browsers: ['> 1%']
        },
        useBuiltIns: 'entry'
      }
    ],
    '@babel/react'
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-runtime'
  ]
};
