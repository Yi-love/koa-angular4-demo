'use strict';

exports.index = async(ctx)=>{
  await ctx.render('index',{title:'koa-angular4-demo'});
};

exports.hero = async(ctx)=>{
  await ctx.render('hero',{title:'koa-angular4-demo'});
};