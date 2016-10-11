var fs = require("fs")
var path = require("path")
var util = require("util");
const fsPath = path.join(__dirname, "cs572.txt");

//read a chunk
var readStream = fs.createReadStream(fsPath, {
    encoding: 'utf8',
    highWaterMark: 1024
});
readStream.on("data", function (chunk) {
    console.log("read from chunk")
    for (var i = 10; i <= 14; ++i) {
        console.log(chunk[i])
    }

});

//Override
var overwriteContext = "ABCDEFGHIJKLMKOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz";
fs.writeFile(fsPath, overwriteContext, function (err) {
    //   console.log(err)
    console.log("finish writing file")
})

//append
fs.appendFile(fsPath, "abc");

//change index 10
var data = fs.readFileSync(fsPath, 'utf8')
var buffer = new Buffer(data, "utf8");

buffer[10] = "7";
fs.writeFile(fsPath, buffer);