'use strict';

const mongoose = require('mongoose');

// 用户对象
let UserSchema = new mongoose.Schema({
  username : String,
  nickname : {type: String, default: '莫晨'},
  email : {type: String, default: ''},
  tel : {type: String, default: ''},
  password : String,
  age : {type: String, default: '22'},
  userimg : {type: String, default: 'images/userdef.jpg'},
  sex : {type: String, default: 'nv'}
});

UserSchema.statics = {
  fetch: function(start , pagesize , cb){
    return this
           .find()
           .limit(pagesize)
           .skip(start)
           .exec(cb);
  },
  fetchAll: function(cb){
    return this
           .find()
           .exec(cb);
  },
  findByUserName: function(username , cb){
    return this
          .findOne({username: username})
          .exec(cb);
  },
  findById: function(id , cb){
    return this
          .findOne({_id: id})
          .exec(cb);
  }
};

module.exports = UserSchema;