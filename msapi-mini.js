const net = require('net');
const script = `print("hello world")`; // Put your script here.
function executeScript(script, port) {
    const client = new net.Socket();
    client.connect(port, '127.0.0.1', () => {
        const header = Buffer.alloc(16);
        header.writeUInt8(0, 0);
        header.writeUInt32LE(Buffer.byteLength(script) + 1, 8);
        client.write(Buffer.concat([header, Buffer.from(script), Buffer.from([0])]));
        client.end();
        console.log('F12 in roblox to see activity of script.');
    }).setTimeout(3000);
}
executeScript(script, 5553); // port is on 5553, default macsploit port.