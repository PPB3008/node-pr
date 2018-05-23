var express = require('express');
var utility = require('utility');
var cheerio = require('cheerio');
var superagent = require('superagent');
var url = require('url');

var app = express();

// app.get('/',(req,res,next) => {
//     var q = req.query.q;
//     var md5Value = utility.md5(q);
//     res.send(md5Value);
// })
//取query中的q

// app.get('/',(req,res,next)=> {
//     superagent.get('https://cnodejs.org/')
//         .end((err,sres)=>{
//             if(err) {
//                 return next(err);
//             }
//             var items = [];
//             var $ = cheerio.load(sres.text);
//             $('#topic_list .topic_title').each(function (idx, element) {
//                 var $element = $(element);
//                 items.push({
//                   title: $element.attr('title'),
//                   href: $element.attr('href')
//                 });
//               });
//               res.send(items);
//         })
// }) 
//superagent和cheerio爬虫

var cnodeURL = "https://cnodejs.org/";
superagent.get(cnodeURL)
.end((err,res)=>{
    if(err) {
        return console.log(err);
    }

    var topicURL = [];
    var $ = cheerio.load(res.text);
    $('#topic_list .topic_title').each(function (idx, element) {
        var $element = $(element);
        var href = url.resolve(cnodeUrl, $element.attr('href'));//反推完整url
        topicUrls.push(href);
      });

})


app.listen(3000,() => {
    console.log('app is listening at port 3000');
})