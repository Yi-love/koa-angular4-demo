'use strict';
const router = require('koa-router')();
const user = require('./user');

router.prefix('/api');

router.get('/getAllUser',user.getAllUser);
module.exports = router;