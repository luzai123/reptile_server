var express = require('express');
var router = express.Router();
var reptile = require("../controller/reptile");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: '爬虫控制台', rows: [] });
});


router.get('/getData', async function (req, res, next) {
  const result = await reptile.getData(req.query.url, req.query.rule);
  // console.log(result);
  res.send(result);
  // res.render('index', { title: '爬虫控制台', rows: result });
});

module.exports = router;
