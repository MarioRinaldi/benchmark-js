const Benchmark = require('benchmark');
const option1 = require('./option1.js');
const option2 = require('./option2.js');
const suite = new Benchmark.Suite();

const values = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];

suite
    .add('option1', () => {
        const processed = values.forEach(value => option1(value));
      })
      .add('option2', () => {
      const processed = values.forEach(value => option2(value));
    })
    .on('cycle', event => {
        const benchmark = event.target;

        console.log(benchmark.toString());
    })
    .on('complete', event => {
        const suite = event.currentTarget;
        const fastestOption = suite.filter('fastest').map('name');

        console.log(`The fastest option is ${fastestOption}`);
    })
    .run();