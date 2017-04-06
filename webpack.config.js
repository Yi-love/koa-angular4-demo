'use strict';

let path = require('path');

module.exports = {
  entry:{
    index: './app/main.ts'
  },
  watch:true,
  module:{
    rules:[{
      test:/\.tsx?$/,
      loader:'ts-loader',
      exclude:'/node_module/'
    }]
  },
  output:{
    filename:'[name].js',
    path: path.join(__dirname , 'static/scripts-build')
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
};