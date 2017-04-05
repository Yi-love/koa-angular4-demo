'use strict';

let path = require('path');

module.exports = {
  entry:{
    index: './.build/main.js'
  },
  watch:true,
  module:{
    rules:[{
      test:/\.js/,
      exclude:'/node_module/'
    }]
  },
  output:{
    filename:'[name].js',
    path: path.join(__dirname , 'static/scripts-build')
  }
};