'use strict';
const router = require('koa-router')();
const user = require('./user');
const common = require('./common');

router.get('/component',user.component);
router.get('/directive',user.directive);
router.get('/hero',common.hero);
router.get('/heroRouting',common.heroRouting);
router.get('/',common.index);
module.exports = router;