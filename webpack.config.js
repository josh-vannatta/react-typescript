const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
      index: [
        path.resolve(__dirname, "src", "index.tsx"),
        path.resolve(__dirname, "src", "sass", "index.scss"),
      ],
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist/assets/bin")
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
      rules: [{
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }, {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { url: false, sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      }]
    },
    plugins: [
       new MiniCssExtractPlugin({
        filename: "styles.[name].css",
        chunkFilename: "[name].css"
      })
    ],
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
};
