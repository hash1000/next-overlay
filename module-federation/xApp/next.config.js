const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'xApp',
          filename: 'static/chunks/remoteEntry.js',
          remotes: {
            yApp: 'yApp@http://localhost:3001/_next/static/chunks/remoteEntry.js',
          },
          exposes: {
            './xApp': './pages/index.js',
            './pages-map': './pages-map.js',
          },
          shared: {}
        }),
      );
    }

    return config;
  },
};
