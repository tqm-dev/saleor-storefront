const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HotModulePlugin = require("webpack").HotModuleReplacementPlugin;

module.exports = ({ sourceDir, distDir }) => ({
  devServer: {
    index: 'storefront.html',
  },
  output: {
    filename: "js/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { sourceMap: true }
          },
          { loader: "sass-loader" }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new HotModulePlugin()
  ]
});
