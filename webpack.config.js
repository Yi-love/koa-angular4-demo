'use strict';

let path = require('path');

module.exports = {
  entry:{
    'component-demo': './app/component-demo/main.ts',
    'directive-demo': './app/directive-demo/main.ts',
    'hero-demo': './app/hero-demo/main.ts',
    'hero-routing-demo': './app/hero-routing-demo/main.ts'
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