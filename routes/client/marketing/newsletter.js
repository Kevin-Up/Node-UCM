var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  var data = {
    key: 'marketing/newsletter',
    title: 'Marketing Newsletter/Group Notification',
    lang: require('./lang/en/newsletter'),
    language: 'en',
    nav: require('../public/lang/en/navbar')
  };

  if (req.lang && req.lang == 'zh-cn') {
    data.lang = require('./lang/zh-cn/newsletter');
    data.language = 'zh-cn';
  }

  res.render('client/marketing/newsletter', data);
});

router.post('/', function (req, res, next) {
  //表单处理请求
});

module.exports = router;
