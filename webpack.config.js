const path = require("path");

module.exports = {
   entry: "./src/index.js",
   output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
   },
   module: {
      rules: [
         {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
         },
         {
            test: /\.js$/i,
            use: ["source-map-loader"],
            enforce: "pre",
         },
         {
            test: /\.ttf$/i,
            type: "asset/resource",
         },
         {
            test: /\.(jpg|png)$/i,
            type: "asset/resource",
         },
      ],
   },
   devtool: "source-map",
   mode: "development",
};
