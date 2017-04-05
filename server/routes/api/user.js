'use strict';
const User = require('./../../models/user');
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
  ctx.body = {code:0 , userList:userList};
};
