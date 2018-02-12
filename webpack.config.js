const path = require('path');

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
        loaders: [
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
                test: /.svg$/,
                loader: 'url-loader'
            },
            {
                test: /\.(svg|eot|ttf|woff|woff2)$/,
                loader: 'file-loader'
            }]
    },
    devtool: 'inline-source-map'
};