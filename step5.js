var request = require("request");
var cheerio = require("cheerio");
var async = require("async");


urls = [
  'http://wxy.nankai.edu.cn/',
  'http://history.nankai.edu.cn/index.action',
  'http://phil.nankai.edu.cn/',
  'http://www.riyan.nankai.edu.cn/mainAction.do',
  'http://iap.nankai.edu.cn/',
  'http://mse.nankai.edu.cn/'
];
var options = {
  method: 'GET',
  charset: 'utf-8',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36',
    'cookie': {}
  }
};

async.mapLimit(urls, 5, function(url, callback) {
  options.url = url;
  request(options, callback);
}, function(err, result) {
  if (err) {
    console.log(err);
  } else {
    result.forEach(function(res) {
      var $ = cheerio.load(res.body);
      console.log('==============================' + res.request.uri.href + '==============================');
      $('li a').each(function(index, element) {
        console.log($(element).text());
      });
    });
  }
})

