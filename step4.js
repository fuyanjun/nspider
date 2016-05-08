var request = require("request");
var cheerio = require("cheerio");


var options = {
  url: 'http://www.nankai.edu.cn/',
  method: 'GET',
  charset: 'utf-8',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36',
    'cookie': {}
  }
};

request(options, function(err, result) {
  if(err) {
    console.log(err);
  } else {
    var $ = cheerio.load(result.body);
    $('li.news-item a').each(function(index, element) {
      console.log($(element).text());
    })
  }
})

