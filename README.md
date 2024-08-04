# Macsploit JavaScript Mini API

## Overview

Macsploit's JavaScript Mini API is an open-source API for interacting with Roblox exploits. It enables developers to send custom scripts to a local server, making it easier to create and manage custom user interfaces for Roblox exploits.

## Features

- **Send Scripts**: Send custom scripts to a local server.
- **Timeout Handling**: Includes timeout management for reliable execution.
- **Default Port**: Uses port 5553 by default.

## Installation

1. Ensure [Node.js](https://nodejs.org/) is installed.
2. Clone the repository or save the script file locally.

## Usage

1. **Define Your Script**: Update the `script` variable with your desired Roblox script.

```javascript
const script = `print("hello world")`; // Put your script here.
```

2. **Execute the Script**: Use the `executeScript` function to send the script to the local server.

 ```javascript
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
 ```

3. **Run the Script**: Execute your JavaScript file using Node.js.

```bash
node your-script.js
 ```

## Configuration

- **Port**: The default port is 5553. Modify the port number if your server uses a different port.

## Troubleshooting

- **No Output**: Ensure the server is running and accessible on the specified port.
- **Connection Issues**: Verify the server address and port settings.

## Thank you!
