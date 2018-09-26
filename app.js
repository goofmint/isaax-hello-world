var Mcp3008 = require('mcp3008.js'),
    adc = new Mcp3008(),
    channel = 0;

setInterval(async () => {
  adc.read(channel, function (value) {
    const obj = {pressure: value};
    console.log(obj);
  });
}, 2000);
