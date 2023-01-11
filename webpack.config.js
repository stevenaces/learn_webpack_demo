const path = require("path"); // node 自带 path 模块，无需下载，这个包是为了方便拼接路径

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

// 配置打包vue文件的插件
const { VueLoaderPlugin } = require("vue-loader");

// module.exports = {
// 	target: "web",
// 	// 设置模式
// 	// development 开发阶段, 会设置development
// 	// production 准备打包上线的时候, 设置production
// 	mode: "development",
// 	entry: "./src/index.js", // 指定打包入口
// 	output: {
// 		path: path.resolve(__dirname, "./dist"), // 指定打包文件夹
// 		filename: "bundle.js", //指定打包文件名
// 		// 使用 asset module type 为打包文件配置输出路径 【方法一】
// 		// assetModuleFilename: "img/[name].[hash:6][ext]",
// 	},
// 	devServer: {
// 		// contentBase: "./dist",
// 		static: path.resolve(__dirname, "./public"), // contentBase 这个属性不在使用了
// 		// compress: true, // 是否开启 gzip 压缩!!! 打包上线时很有用，能将资源打包为gzip压缩包
// 		open: true,
// 		port: 8000,
// 	},
// 	resolve: {
// 		extensions: [".js", ".json", ".mjs", ".vue", ".ts", ".jsx", ".tsx"],
// 		alias: {
// 			"@": path.resolve(__dirname, "src"),
// 		},
// 	},
// 	module: {
// 		rules: [
// 			{
// 				test: /\.m?js$/,
// 				loader: "babel-loader",
// 				// use: [
// 				// 	{
// 				// 		loader: "babel-loader",
// 				// 		options: {
// 				// 			// plugins: [
// 				// 			// 	"@babel/plugin-transform-arrow-functions",
// 				// 			// 	"@babel/plugin-transform-block-scoping",
// 				// 			// ],
// 				// 			presets: ["@babel/preset-env"],
// 				// 		},
// 				// 	},
// 				// ],
// 			},
// 			{
// 				test: /\.css$/,
// 				// loader: "css-loader",
// 				use: ["style-loader", "css-loader", "postcss-loader"],
// 			},
// 			{
// 				test: /\.less/,
// 				use: ["style-loader", "css-loader", "less-loader"],
// 			},
// 			// {
// 			// 	test: /\.(jpeg|jpg|png|gif|svg)$/,
// 			// 	use: [
// 			// 		{
// 			// 			loader: "file-loader",
// 			// 			options: {
// 			// 				name: "img/[name]_[hash:8].[ext]",
// 			// 				// outputPath: "img", // 当然，我们可以单独设置这个图像文件目录，那上面这行的name属性中"img/"就不需要写了
// 			// 			},
// 			// 		},
// 			// 	],
// 			// },
// 			// {
// 			// 	test: /\.(jpeg|jpg|png|gif|svg)$/,
// 			// 	use: [
// 			// 		{
// 			// 			loader: "url-loader",
// 			// 			options: {
// 			// 				limit: 100 * 1024,
// 			// 				name: "img/[name]_[hash:8].[ext]",
// 			// 				// outputPath: "img", // 当然，我们可以单独设置这个图像文件目录，那上面这行的name属性中"img/"就不需要写了
// 			// 			},
// 			// 		},
// 			// 	],
// 			// },
// 			// {
// 			// 	test: /\.(jpe?g|png|gif|svg)$/,
// 			// 	type: "asset/resource",
// 			// 	// 使用 asset module type 为打包文件配置输出路径 【方法二】
// 			// 	generator: {
// 			// 		filename: "img/[name].[hash:6][ext]", // 注意，这里[ext]已经包括了 . 了，所以不用像之前 url-loader一样 .[ext]
// 			// 	},
// 			// },
// 			{
// 				test: /\.(jpe?g|png|gif|svg)$/,
// 				type: "asset",
// 				// 使用 asset module type 为打包文件配置输出路径 【方法二】
// 				generator: {
// 					filename: "img/[name]_[hash:6][ext]", // 注意，这里[ext]已经包括了 . 了，所以不用像之前 url-loader一样 .[ext]
// 				},
// 				parser: {
// 					dataUrlCondition: {
// 						maxSize: 10 * 1024,
// 					},
// 				},
// 			},
// 			{
// 				test: /\.(woff2?|eot|ttf)/,
// 				type: "asset/resource",
// 				generator: {
// 					filename: "font/[name]_[hash:6][ext]",
// 				},
// 			},
// 			{
// 				test: /\.vue$/,
// 				loader: "vue-loader",
// 			},
// 		],
// 	},
// 	plugins: [
// 		new CleanWebpackPlugin(),
// 		new HtmlWebpackPlugin({
// 			template: "./public/index.html", // 指定模板文件
// 			title: "哈哈哈哈",
// 		}),
// 		new DefinePlugin({
// 			BASE_URL: '"./"', // 注意这里的写法，他会原封不动的把内容赋到要用的地方，因此这里是'"./"'
// 			__VUE_OPTIONS_API__: true,
// 			__VUE_PROD_DEVTOOLS__: false,
// 		}),
// 		new CopyWebpackPlugin({
// 			patterns: [
// 				{
// 					from: "public", // 设置从哪个源（目录）下开始复制
// 					// to: "./", // 复制到哪个目录下，注意这里是相对于打包后 dist下的路径，其实这里可以不配置
// 					globOptions: {
// 						// 一些额外的选项，其中可以编写需要忽略的文件，因为我们借助HtmlWebpackPlugin生成了 dist/index.html文件，所以 public/index.html这个文件不需要复制
// 						ignore: ["**/.DS_Store", "**/index.html"],
// 					},
// 				},
// 			],
// 		}),
// 		new VueLoaderPlugin(),
// 	],
// };
