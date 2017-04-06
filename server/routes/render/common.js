'use strict';

exports.index = async(ctx)=>{
  await ctx.render('index',{title:'koa-angular4-demo'});
};

exports.hero = async(ctx)=>{
  await ctx.render('hero',{title:'hero-demo'});
};
exports.heroRouting = async(ctx)=>{
  await ctx.render('heroRouting',{title:'hero-routing-demo'});
};