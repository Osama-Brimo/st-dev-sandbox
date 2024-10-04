const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

// The game is loaded as an extension due to the need to access UI state and context (and ease of installation for end user).
// However, since we use TypeScript/modules, it needs to be written as a module but bundled for the browser.

// Sillytavern dependencies need to be defined as externals so we get the correct relative path for the final bundle
// (i.e: `import X from '../../../extensions.js' rather than trying to actually resolve the dependencies inside `extensions.js`)
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
            // TODO: add more aliases and paths to config later
            '@sillytavern': path.resolve(__dirname, '../../..'),
        },
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
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
    optimization: {
        minimizer: [
            new TerserPlugin({
                extractComments: false,
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
            }),
        ],
    },
    experiments: {
        outputModule: true,
    },
    externalsType: 'module',
    // externals: {
    //     '@sillytavern/extensions': '../../../../extensions.js',
    // },
    externals: [
        function ({ context, request }, callback) {
            const regex = /^@sillytavern\/(.+)$/;
            const match = request.match(regex);
            if (match) {
                // TODO: This only matches .js files right now, and not indices.
                return callback(null, `../../../../${match[1]}.js`);
            }
            return callback();
        },
    ],
    plugins: [],
};
