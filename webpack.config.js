const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            '@sillytavern': path.resolve(__dirname, '../../..'),
        },
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    // {
                    //     loader: 'babel-loader',
                    //     options: {
                    //         // cacheDirectory: true,
                    //         presets: [
                    //             '@babel/preset-env',
                    //             // ['@babel/preset-react', { runtime: 'automatic' }],
                    //         ],
                    //         sourceType: 'module',
                    //     },
                    // },
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        sourceType: 'unambiguous',
                    },
                },
            },
        ],
    },
    // optimization: {
    //     minimizer: [
    //         new TerserPlugin({
    //             extractComments: false,
    //             terserOptions: {
    //                 format: {
    //                     comments: false,
    //                 },
    //             },
    //         }),
    //     ],
    // },

    experiments: {
        outputModule: true,
    },
    externalsType: 'module',
    externals: {
        '../../../../extensions': 'getContext',
    },
    plugins: [],
};
