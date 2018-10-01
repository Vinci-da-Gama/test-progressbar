import nPath                   from 'path';
import wpk                     from 'webpack';
import WriteFilePlugin         from 'write-file-webpack-plugin';
import UglifyJsPlugin          from 'uglifyjs-webpack-plugin';
import ExtractTextPlugin       from 'extract-text-webpack-plugin';
import CleanWebpackPlugin      from 'clean-webpack-plugin';
import HtmlWebpackPlugin       from 'html-webpack-plugin';
import CopyWebpackPlugin       from 'copy-webpack-plugin';
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";

const ast = './_asserts', distDir = './dist',
    idxSrc = `${ast}/src/`, imgSrc = `${ast}/img`;
const entryIdx = `${idxSrc}index.js`;

const pathsToClean = [
    `${distDir}/js/`,
    `${distDir}/*.json`,
    `${distDir}/*.js`
];

const cleanOptions = {
    watch: true
};

const commonConfig = {
    // for development.
    devtool: 'cheap-eval-source-map',
    entry: {
        testApp: [
            'babel-polyfill',
            'webpack/hot/only-dev-server',
            entryIdx
        ]
    },
    output: {
        path: nPath.resolve(__dirname, `${distDir}`),
        filename: 'js/[name]_bundle.js',
        pathinfo: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: { presets: ['env', 'react', 'stage-3'] }
            },
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { minimize: true } },
                        'sass-loader'
                    ]
                })
            },
            {
                test: /\.(ttf|otf|eot|svg|woff|jpe?g$|gif|png|ico|xml|json)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            fallback: 'file-loader',
                            name: '[name].[ext]',
                            outputPath: '/img'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss', 'less']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Progressbars',
            template: nPath.resolve(__dirname, `${ast}/index.html`),
            filename: '../dist/index.html',
            favicon: nPath.resolve(__dirname, `${ast}/img/bmp-favicon.ico`),
            inject: false
        }),
        new CopyWebpackPlugin([
            {
                from: `${imgSrc}/`,
                to: './img'
            }
        ]),
        new CleanWebpackPlugin(pathsToClean, cleanOptions),
        new wpk.HotModuleReplacementPlugin(),
        new wpk.optimize.OccurrenceOrderPlugin(),
        new wpk.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new WriteFilePlugin(),
        new ExtractTextPlugin('css/[name].css', {
            allChunks: true
        })
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: __dirname,
        stats: {
            colors: true,
            timings: true
        },
        quiet: false,
        noInfo: false
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                test: /\.js($|\?)/i,
                parallel: true,
                sourceMap: false
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    }
};

/* const processHostAndPort = {
    host: process.env.HOST,
    port: process.env.PORT
}; */

module.exports = commonConfig;