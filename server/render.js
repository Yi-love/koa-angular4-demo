'use strict';

const path = require('path');
const render = require('koa-ejs');

module.exports = function(app) {
  render(app, {
    root: path.join(__dirname, '../views'),
    layout:false,
    viewExt: 'html',
    cache: false,
    debug: true
  });
};