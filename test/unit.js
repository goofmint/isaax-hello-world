const Sensor = require('../Sensor');
const assert = require("assert")

describe('Sensor Test', () => {
  it('Get name', () => {
    const name = 'Moisture sensor';
    const sensor = new Sensor(name);
    assert.equal(`Hello, ${name}`, sensor.getName());
  })
})