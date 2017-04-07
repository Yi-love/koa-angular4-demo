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
    }).catch(err=>err);;
  }
  let userList = await fetchAll();
  if ( Array.isArray(userList) ) {
    ctx.body = {code:0 , userList: userList,msg:'success'};
  }else{
    ctx.body = {code:1 , userList: [],msg:'get all user error'};
  }
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
    }).catch(err=>err);;;
  }
  let user = await add();
  if ( user instanceof User ) {
    ctx.body = {code:0 , user: user,msg:'save user success'};
  }else{
    ctx.body = {code:1 , user: null,msg:'save user error'};
  }
};

exports.getUserById = async (ctx)=>{
  function findById(id){
    return new Promise((resolve ,reject)=>{
      User.findById(id , (err,results)=>{
        if (err) {
          return reject(err);
        }
        return resolve(results);
      });
    }).catch(err=>err);
  }
  if ( !ctx.query.id ) {
    ctx.body = {code:1 , user: null , msg:'user not exits'};
  }
  let user = await findById(ctx.query.id);
  if ( user instanceof User ) {
    ctx.body = {code:0 , user: user,msg:'success'};
  }else{
    ctx.body = {code:1 , user: null,msg:'error'};
  }
};
