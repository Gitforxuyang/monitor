var http = require("http");
const client = require('prom-client');
const counter = new client.Counter({
    name: 'count',
    help: 'help'
});
http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    counter.inc();
    console.log(new Date())
    response.end(client.register.metrics());
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');