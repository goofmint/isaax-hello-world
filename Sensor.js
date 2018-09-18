class Sensor {
  constructor(name) {
    this.name = name;
  }
  
  getName() {
    return `Hello, I'm ${this.name}`;
  }
}

module.exports = Sensor;