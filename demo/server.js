var http = require("http");
const client = require('prom-client');

const counter = new client.Counter({
    name: 'count',
    help: 'help',
    labelNames: ['code', 'message'],
});
const gauge = new client.Gauge({
    name: 'Gauge',
    help: 'help',
    labelNames: ['code', 'message'],
});
const gistogram = new client.Histogram({
    name: 'gistogram',
    help: 'help',
    labelNames: ['code', 'message'],
});
const summary = new client.Summary({
    name: 'Summary',
    help: 'help',
    labelNames: ['code', 'message'],
});
http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    counter.inc({ code: 200, message: '' });
    gauge.set(1)
    gistogram.observe(Math.random() * 10)
    summary.observe(Math.random())
    console.log(new Date())
    response.end(client.register.metrics());
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');