var Mcp3008 = require('mcp3008.js'),
    adc = new Mcp3008(),
    channel = 0;

setInterval(async () => {
  adc.read(channel, function (value) {
    const obj = {pressure: value};
    const method = "POST";
    const body = JSON.stringify(obj);
    const headers = {
      'Content-Type': 'application/json'
    };
    const res = await fetch("http://harvest.soracom.io", 
      {method, headers, body}
    );
    const json = await res.json();
    console.log(json);
  });
}, 2000);
