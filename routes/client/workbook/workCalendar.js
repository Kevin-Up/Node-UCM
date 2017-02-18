var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  var data = {
    key: 'workbook/workCalendar',
    title: 'Work Calendar',
    language: 'en',
    lang: require('./lang/en/workCalendar'),
    nav: require('../public/lang/en/navbar')
  };

  if (req.lang && req.lang == 'zh-cn') {
    data.language = 'zh-cn';
    data.lang = require('./lang/zh-cn/workCalendar')
  }

  res.render('client/workbook/workCalendar', data);

});

router.post('/', function (req, res, next) {
  //表单处理逻辑
});

module.exports = router;
