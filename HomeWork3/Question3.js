var http = require('http');
var fs = require('fs');

fs.readFile('./NodeJsPractice/HomeWork3/file.jpg', function (err, data) {
    if (err) throw err; // Fail if the file can't be read.
    http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        res.end(data); // Send the file data to the browser.
    }).listen(3333);
    console.log('Server is running at http://localhost:3333/');
});
