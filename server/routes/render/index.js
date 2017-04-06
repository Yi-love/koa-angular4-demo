'use strict';
const router = require('koa-router')();
const user = require('./user');
const common = require('./common');

router.get('/component',user.component);
router.get('/directive',user.directive);
router.get('/',common.index);
module.exports = router;