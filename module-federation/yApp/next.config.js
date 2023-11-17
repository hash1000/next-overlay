const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    const { webpack } = options;
    if (!options.isServer) {
      //config.cache=false
      config.plugins.push(
        new NextFederationPlugin({
          name: 'yApp',
          remotes: {
            xApp: `xApp@http://localhost:3000/_next/static/chunks/remoteEntry.js`,
          },
          filename: 'static/chunks/remoteEntry.js',
          exposes: {
            './about': './pages/about',
            './':'./pages/index',
            './pages-map': './pages-map.js',
          },
          shared: {},
          extraOptions: {
          }
        }),
      );
    }

    return config;
  },
};
