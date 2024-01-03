/** @type {import('next').NextConfig} */
const withPlugins = require('next-with-plugins')
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  plugins: ['next-stylus'],

  // Converte classes em camelCase
  webpack: (config) => {
    const rules = config.module.rules
      .find((rule) => typeof rule.oneOf === 'object')
      .oneOf.filter((rule) => Array.isArray(rule.use))
    rules.forEach((rule) => {
      rule.use.forEach((moduleLoader) => {
        if (
          moduleLoader.loader !== undefined &&
          moduleLoader.loader.includes('css-loader') &&
          typeof moduleLoader.options.modules === 'object'
        ) {
          moduleLoader.options = {
            ...moduleLoader.options,
            modules: {
              ...moduleLoader.options.modules,
              exportLocalsConvention: 'camelCase',
            },
          }
        }
      })
    })
    return config
  },
}

module.exports = withPlugins(nextConfig)
