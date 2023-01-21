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
            use: "css-loader",
         },
         {
            test: /\.ttf$/i,
            type: "asset/resource",
         },
         {
            test: /\.jpg$/i,
            type: "asset/resource",
         },
      ],
   },
   devtool: "inline-source-map",
   mode: "development",
};
