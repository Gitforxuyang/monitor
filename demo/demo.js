const client = require('prom-client');
const counter = new client.Counter({
    name: 'count',
    help: 'help'
});
counter.inc(); // Inc with 1
counter.inc(10); // Inc with 10
console.log(client.register.metrics())