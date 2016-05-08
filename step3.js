var request = require("request");
var cheerio = require("cheerio");


request('http://www.nankai.edu.cn/', function(err, result) {
  if(err) {
    console.log(err);
  } else {
    var $ = cheerio.load(result.body);
    $('li.news-item a').each(function(index, element) {
      console.log($(element).text());
    })
  }
})

