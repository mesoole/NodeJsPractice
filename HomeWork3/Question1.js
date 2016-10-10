var http = require("http"),
    fs = require("fs");
http.createServer(function (req, res) {
    //use pipe
    var rs = fs.createReadStream("HomeWork3/file.jpg").pipe(res);
}).listen(3333);
console.log('Server is running at http://localhost:3333/');