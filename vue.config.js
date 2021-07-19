const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const minify = require('html-minifier').minify;
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const cesiumSource = 'node_modules/cesium/Build/Cesium';

function resolve(dir) {
    return path.join(__dirname, dir);
}
const theme = 'default'

module.exports = {
    publicPath: './',
    assetsDir: './static',
    //去除生产环境的productionSourceMap
    productionSourceMap: false,
    lintOnSave: true,
    // 是否开启eslint
    devServer: {
        open: true
    },
    configureWebpack: (config) => {
        let plugins = []
        if (process.env.NODE_ENV === 'production') {
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
            plugins = [
                new webpack.DefinePlugin({
                    CESIUM_BASE_URL: JSON.stringify('static')
                }),
                new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'Workers'), to: 'static/Workers' }]),
                new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'Assets'), to: 'static/Assets' }]),
                new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'ThirdParty'), to: 'static/ThirdParty' }]),
                new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'Widgets'), to: 'static/Widgets' }]),
                new OptimizeCssAssetsPlugin({
                    assetNameRegExp: /\.css$/g,
                    cssProcessor: require('cssnano'),
                    cssProcessorPluginOptions: {
                        preset: ['default', { discardComments: { removeAll: true } }],
                    },
                    canPrint: true,
                }),
            ]
        } else {
            plugins = [
                new webpack.DefinePlugin({
                    CESIUM_BASE_URL: JSON.stringify('/')
                }),
                new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'Workers'), to: 'Workers' }]),
                new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'Assets'), to: 'Assets' }]),
                new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'ThirdParty'), to: 'ThirdParty' }]),
                new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'Widgets'), to: 'Widgets' }]),
                new OptimizeCssAssetsPlugin({
                    assetNameRegExp: /\.css$/g,
                    cssProcessor: require('cssnano'),
                    cssProcessorPluginOptions: {
                        preset: ['default', { discardComments: { removeAll: true } }],
                    },
                    canPrint: true,
                }),
            ]
        }
        return {
            module: {
                unknownContextCritical: false,
                rules: [
                    {
                        test: /\.js$/,
                        enforce: 'pre',
                        include: path.resolve(__dirname, 'node_modules/cesium/Source'),
                        sideEffects: false,
                        use: [
                            {
                                loader: 'strip-pragma-loader',
                                options: {
                                    pragmas: {
                                        debug: false
                                    }
                                }
                            }
                        ]
                    }
                ]
            },
            optimization: {
                usedExports: true,
                splitChunks: {
                    maxInitialRequests: Infinity,
                    minSize: 0,
                    maxSize: 250000,
                    cacheGroups: {
                        vendor: {
                            test: /[\\/]node_modules[\\/]/,
                            priority: -10,
                            chunks: 'all',
                            name(module) {
                                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                                return `npm.${packageName.replace('@', '')}`
                            }
                        },
                        commons: {
                            name: 'Cesium',
                            test: /[\\/]node_modules[\\/]cesium/,
                            priority: 10,
                            chunks: 'all'
                        }
                    }
                },
                minimize: true,
                minimizer: [
                    new TerserPlugin({
                        cache: true, // 是否缓存
                        parallel: true, // 是否并行打包
                        sourceMap: false,
                    }),
                ],

            },
            output: {
                sourcePrefix: ' ',
                /* filename: '[name].[chunkhash].js',
                path: path.resolve(__dirname, 'dist') */
            },
            amd: {
                toUrlUndefined: true
            },
            resolve: {
                alias: {
                    vue$: 'vue/dist/vue.esm.js',
                    '@': path.resolve('src')
                }
            },
            node: {
                fs: 'empty',
                Buffer: false,
                http: 'empty',
                https: 'empty',
                zlib: 'empty'
            },
            plugins: plugins
        }
    }
}
