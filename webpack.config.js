const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: [
        "webpack-dev-server/client?http://localhost/",
        "./src/app.tsx"
    ],

    output: {
        filename: "app.js",
        path: path.resolve(__dirname, './build')
    },

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },

    module: {
        loaders:
            [
                {
                    test: /\.tsx$/,
                    loader: 'ts-loader',
                    options: {
                        configFile: 'tsconfig.json'
                    }
                },
                {
                    test: /\.s?css$/,
                    exclude: /node_modules/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.(png|jpg|gif|ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'assets/[name].[ext]'
                            }
                        }
                    ]
                },
                {
                    test: /\.svg$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'assets/[name].[ext]'
                            }
                        },
                        {
                            loader: 'svgo-loader',
                            options: {
                                plugins: [
                                    { removeTitle: true },
                                    { convertColors: { shorthex: false } },
                                    { convertPathData: false }
                                ]
                            }
                        }
                    ]
                }
            ]
    },

    // plugins: [
    //     new UglifyJsPlugin()
    // ],

    devtool: 'inline-source-map'
};