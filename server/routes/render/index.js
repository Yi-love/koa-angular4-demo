'use strict';
const router = require('koa-router')();
const user = require('./user');

router.get('/',user.index);
module.exports = router;