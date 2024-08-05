const net = require('net');
const script = 'loadstring(game:HttpGet("https://raw.githubusercontent.com/EdgeIY/infiniteyield/master/source"))()';
const header = Buffer.alloc(16, 0); header.writeUInt32LE(Buffer.byteLength(script) + 1, 8);
net.createConnection(5553, '127.0.0.1')
  .on('connect', function() {
    this.write(Buffer.concat([header, Buffer.from(script), Buffer.from([0])])); this.end();
    console.log('F12 in Roblox to see script activity.');
  })
  .setTimeout(3000);
