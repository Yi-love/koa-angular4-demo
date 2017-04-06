'use strict';
exports.component = async (ctx)=>{
  await ctx.render('component',{title:'component'});
}
exports.directive = async (ctx)=>{
  await ctx.render('directive',{title:'directive'});
}