// //configuration awal
// const path = require('path');
// const htmlWebpackPlugin = require('html-webpack-plugin');
// // const {plugins} = require("@babel/preset-env/lib/plugins-compat-data");
//
// module.exports = {
//     entry: './src/index.js',
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'bundle.js'
//     },
//     mode: "production",
//     devServer: {
//         //menambahkan devserver supaya mengoverlay ketika da error dan warning
//         client:{
//             overlay:{
//                 errors:true,
//                 warnings:false,
//             },
//         },
//     },
//     module: {
//         rules: [
//             {
//                 //css loader
//                 test: /\.css$/,
//                 use: [
//                     {
//                         loader: "style-loader"
//                     },
//                     {
//                         loader: "css-loader"
//                     }
//                 ]
//             },
//             {
//                 //babel
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 use: [
//                     {
//                         loader: "babel-loader",
//                         options: {
//                             presets: ['@babel/preset-env']
//                         },
//                     },
//                 ],
//             },
//         ],
//     },
//     //plugins
//     plugins: [
//         //html webpackplugin
//         new htmlWebpackPlugin({
//             template: "./src/template.html",
//             filename: "index.html"
//         }),
//     ],
// };
