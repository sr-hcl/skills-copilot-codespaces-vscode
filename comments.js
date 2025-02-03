// Create web server
// Create a web server that listens on port 3000 and serves the comments.json file. 
// Use the fs module to read the comments.json file and respond with the contents of that file. 
// If the comments.json file does not exist, respond with a 404 status code.

const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    fs.readFile(path.join(__dirname, 'comments.json'), 'utf8', (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('File not found');
        } else {
            res.end(data);
        }
    });
}).listen(3000, () => console.log('Server is listening on port 3000'));

// To test this server, run the following command in the terminal:
// curl http://localhost:3000
// You should see the contents of the comments.json file displayed in the terminal. 
// If the comments.json file does not exist, you should see a 404 status code.