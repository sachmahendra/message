const express = require('express');
const SerialPort = require('serialport'); // Use 'serialport' package to communicate with the microcontroller
const Readline = require('@serialport/parser-readline');

const app = express();
const port = 3000;
const serialPort = new SerialPort('YOUR_SERIAL_PORT_PATH', { baudRate: 9600 }); // Replace 'YOUR_SERIAL_PORT_PATH' with the correct path for your microcontroller

const parser = new Readline();
serialPort.pipe(parser);

parser.on('data', (data) => {
    const temperature = parseFloat(data);
    // Store the temperature data in a variable or database to serve it via API
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});