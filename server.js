const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;


const logEvents = require('./logEvents');
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {};
//intitalize object
const myemitter = new MyEmitter();

const PORT = process.env.PORT || 3500;

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
});

server.listen(PORT, () => console.log(`server running on port ${PORT}`));




// myemitter.on('log', (msg) => logEvents(msg));

// setTimeout(() => {
//     myemitter.emit('log', 'log event emiited!');
// }, 2000);