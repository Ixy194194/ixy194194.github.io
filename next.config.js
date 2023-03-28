/** @type {import('next').NextConfig} */
const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : ''
const webpack = require('webpack');

const nextConfig = {
    reactStrictMode: true,
    assetPrefix: urlPrefix,
    basePath: urlPrefix,
    trailingSlash: true,
    publicRuntimeConfig: {
        urlPrefix
    },
    images: {
        unoptimized: true,
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
    ],
}

module.exports = nextConfig
