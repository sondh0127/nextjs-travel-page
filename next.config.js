const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['use-in-view'])

module.exports = withPlugins([withTM], {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
        },
        {
          loader: 'url-loader',
        },
      ],
    })

    return config
  },
})
