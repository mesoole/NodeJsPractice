
var consolidate = require('consolidate');
var express = require('express');
var path = require('path');
var app = express();
var port = 8989;

//configuration
app.set('env','developement');
console.log(app.get('env'));

app.listen(port,function(){
    console.log("hello world to the %s",port);
});

//view engine configuration

app.set('view engine','ejs');
// app.engine('html',consolidate.jade);
app.set('views',path.join(__dirname,'views'));

app.get('/',function(req,res){
    res.render('inventors.ejs',{title : 'Hello'});
})
//testing
// app.get('*',function(req,res){
//     res.end('Hello Maysam');
// })
// 
// app.set('view engine','html')
