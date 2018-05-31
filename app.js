var express = require('express');
var utility = require('utility'); 
var cheerio = require('cheerio');
var superagent = require('superagent'); 
var async = require('async'); 
var url = require('url');
var fs = require('fs');

var test1 = require('./test');

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

// var cnodeURL = "https://cnodejs.org/";
// superagent.get(cnodeURL)
// .end((err,res)=>{
//     if(err) {
//         return console.log(err);
//     }

//     var topicURL = [];
//     var $ = cheerio.load(res.text);
//     $('#topic_list .topic_title').each(function (idx, element) {
//         var $element = $(element);
//         var href = url.resolve(cnodeUrl, $element.attr('href'));//反推完整url
//         topicUrls.push(href);
//       });

// })

// async.mapLimit(urls,5,()=>{   async库的mapLimit限制并发抓取的数量

    //logic
// })

//添加的新用户数据
var user = {
    "user4" : {
       "name" : "mohit",
       "password" : "password4",
       "profession" : "teacher",
       "id": 4
    }
 }
 
 app.get('/addUser', function (req, res) {
    // 读取已存在的数据
    fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        data["user4"] = user["user4"];
        console.log( data );
        res.end( JSON.stringify(data));
    });
 })
// let router = new Router();

app.listen(3000,() => {
    console.log('app is listening at port 3000');
})