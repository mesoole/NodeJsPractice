const http = require("http"); 
const fs = require("fs"); 
const querystring = require("querystring");

function onRequest(request, response) { 
    
    if (request.url === '/index.html') { 
        response.writeHead(200, {'Content-Type': 'text/html'}); 
		fs.createReadStream(__dirname + '/index.html').pipe(response); 
	} else if (request.url === '/upload') { 

        var postData = ""; 
        request.setEncoding("utf8"); 
        request.addListener("data", function(postDataChunk) { 
            console.log(`ChunckSize: ${postDataChunk.length}`)
            postData += postDataChunk; 
        }); 
        
        request.addListener("end", function() { 
            response.end(querystring.parse(postData).text); 
            // console.log(`postData: ${postData}`)
            //console.log(`text value is: ${querystring.parse(postData).text}`)
        }); 
        
    }
} 

http.createServer(onRequest).listen(7777); 
console.log("Server has started on port 8888.");
