const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 8081;

http.createServer(function(req, res) {
    const fpath = path.join(__dirname, `index.html`);
    fs.readFile(fpath, 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(404, {'content-type': 'text/plain'});
            res.end('404 Not Found');
            return;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    })
}).listen(port, function() {
    console.log(`Node server is running on port ${port}...`);
});