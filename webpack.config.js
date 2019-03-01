const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            /* inline if smaller than 10 KB, otherwise load as a file */
            loader: "url-loader",
            options: {
              limit: 10000
            }
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff2?|otf)$/,
        use: "file-loader"
      }
    ]
  },
  plugins: [htmlWebpackPlugin],
  devtool: "cheap-module-eval-source-map", // this helps to browser to point to the exact file in the console, helps in debug
  devServer: {
    // contentBase: path.join(__dirname, "src"),
    contentBase: "/src",
    historyApiFallback: true // this prevents the default browser full page refresh on form submission and link change
  }
};
