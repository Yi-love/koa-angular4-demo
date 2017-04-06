'use strict';
const crypto = require('crypto');
const User = require('./models/user');
const mongoose = require('mongoose');
// 连接数据库
mongoose.connect('mongodb://localhost/koa-angular4-demo');
// 添加用户
function addUser(usernum){
  console.log('add user now...');
  for (var i = usernum ; i >= 0; i--) {
    var user = new User({
      username : 'user'+i,
      password : crypto.createHash('sha256').update('123456').digest('hex'),//密码加密,
      isfirst : 1
    });
    user.save();
  }
  console.log('add user end...');
}

addUser(20);

