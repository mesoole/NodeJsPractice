var express = require('express');
var app = express();
var port = 9876;

app.get('*',function(request,response){
    response.end('Hello World');
});

app.listen(port, function(){
    console.log('server is running on port %s',port);
});