var request = require("request");
var cheerio = require("cheerio");


request('http://www.nankai.edu.cn/', function(err, result) {
  if(err) {
    console.log(err);
  } else {
    console.log(result.body);
  }
})

