const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    publicPath: 'http://localhost:4201/',
    uniqueName: 'complianceMfe'
  },
  optimization: {
    // fix a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'compliance',
      library: { type: 'var', name: 'compliance' },
      filename: 'remoteEntry.js',
      exposes: {
        ComplianceModule:
          './projects/compliance/src/app/compliance/compliance.module.ts'
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
