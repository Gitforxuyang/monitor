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
const histogram = new client.Histogram({
    name: 'gistogram',
    help: 'help',
    labelNames: ['code', 'message'],
});
const summary = new client.Summary({
    name: 'Summary',
    help: 'help',
    labelNames: ['code', 'message'],
});
// counter.inc({ code: 200, message: 'ok' }, 1); // Inc with 1
// counter.inc(10); // Inc with 10
// gauge.set(256)
histogram.observe({ code: Math.random() }, 0.3)
histogram.observe({ code: Math.random() }, 0.3)
// summary.observe({ code: 211 }, 1)
// summary.observe({ code: 211 }, 2)
// summary.observe({ code: 211 }, 3)
// summary.observe({ code: 211 }, 4)
// summary.observe({ code: 211 }, 5)
console.log(client.register.metrics())