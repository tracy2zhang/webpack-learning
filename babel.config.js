module.exports = {
  presets: [
    [
      '@babel/preset-env', {
        modules: false,
        useBuiltIns: 'usage'
      }
    ]
  ],
  plugins: [
    'lodash',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-object-rest-spread',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties'
  ]
}
