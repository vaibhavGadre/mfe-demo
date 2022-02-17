const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    publicPath: 'http://localhost:4202/',
    uniqueName: 'infraMfe'
  },
  optimization: {
    // fix a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'infra',
      library: { type: 'var', name: 'infra' },
      filename: 'remoteEntry.js',
      exposes: {
        InfraModule: './projects/infra/src/app/infra/infra.module.ts'
      },
      shared: {
        '@angular/core': {
          singleton: true
        },
        '@angular/common': {
          singleton: true
        },
        '@angular/forms': {
          singleton: true
        },
        '@angular/router': {
          singleton: true
        },
        rxjs: {},
        shared: {
          singleton: true,
          requiredVersion: '0.0.1',
          import: 'dist/shared'
        }
      }
    })
  ]
};
