'use strict';

const session = require('koa-session');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const render = require('./render');
const router = require('./routes/index');
const serve = require('koa-static');
const path =require('path');
const mongoose = require('mongoose');

const app = new Koa();
// 连接数据库
mongoose.connect('mongodb://localhost/koa-angular4-demo');

app.keys = ['some secret hurr'];

const CONFIG = {
  key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
  maxAge: 86400000, /** (number) maxAge in ms (default is 1 days) */
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
};
app.use(session(CONFIG, app));
app.use(bodyParser());
app.use(serve(path.join(__dirname , '../static')));
render(app);
router(app);


app.listen(3000 ,'127.0.0.1', ()=>{
  console.log(`server start listening...`);
});
