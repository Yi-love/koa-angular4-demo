'use strict';
const router = require('koa-router')();
const user = require('./user');

router.prefix('/api');

router.get('/getAllUser',user.getAllUser);
router.get('/getUserById',user.getUserById);
router.post('/addUser',user.addUser);
router.post('/saveUser',user.saveUser);
module.exports = router;