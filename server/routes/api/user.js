'use strict';
const User = require('./../../models/user');
const crypto = require('crypto');

exports.getAllUser = async (ctx)=>{
  function fetchAll(){
    return new Promise((resolve ,reject)=>{
      User.fetchAll((err,results)=>{
        if (err) {
          return reject(err);
        }
        return resolve(results);
      });
    });
  }
  let userList = await fetchAll();
  ctx.body = {code:0 , userList:userList , msg:''};
};
exports.addUser = async (ctx)=>{
  function add(){
    return new Promise((resolve ,reject)=>{
       var user = new User({
            username : 'user_demo'+ctx.request.body.nickname,
            nickname:ctx.request.body.nickname,
            password : crypto.createHash('sha256').update('123456').digest('hex'),//密码加密,
            isfirst : 1
        });
        user.save((err,user)=>{
            if (err) {
              return reject(err);
            }
            return resolve(user);
        });
    });
  }
  let user = await add();
  ctx.body = {code:0 , user:user,msg:''};
};
