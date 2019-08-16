//entry == our main file
//module para a cada arquivo que for criado novo. Ele pega esse arquivo
//e o mando ele usar o babel loader para compliar.
//depois la no package.json eu mudo o comando (nos scripts)

module.exports = {
  entry: "./src/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: __dirname + "/public"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
