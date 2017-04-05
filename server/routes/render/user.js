'use strict';
exports.index = async (ctx)=>{
  await ctx.render('index',{title:'koa-angular4-demo'});
}