// webpack.config.js
module.exports = {
  experiments: {
	  topLevelAwait: true
  },
  mode: "production",
  entry: [
	"./node_modules/regenerator-runtime/runtime.js",
	'./index/index.js',
  ],
  output: {
	path: "C:/Users/ahgin/Desktop/projects/universe/front/index",
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
  },
  devServer: {
	static: {
		directory : __dirname + '/index',
	},
	client: {
		overlay: false,	// Отключение полноэкранного наложения ошибок или предупреждений
	},
	port: 8081
  },
};