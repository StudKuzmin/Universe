// webpack.config.js
module.exports = {
  experiments: {
	  topLevelAwait: true
  },
  mode: "production",
  entry: [
	"./node_modules/regenerator-runtime/runtime.js",
	'./index.js',
  ],
  output: {
	path: "C:/Users/ahgin/Desktop/projects/universe/back/src/main/webapp/dest",
    filename: 'pack.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
			plugins: ['@babel/plugin-syntax-top-level-await']
          }
        }
      }
    ]
  }
};