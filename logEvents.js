const { format } = require('date-fns');
const { v4: uuid } = require('uuid');
const fs = require('fs'); // Import 'fs' for synchronous file system operations
const fsPromises = require('fs').promises; // Import 'fs.promises' for asynchronous file system operations
const path = require('path');

const logEvents = async(message) => {
    const datetime = ` ${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItems = ` ${datetime}\t${uuid()}\t${message}`;
    console.log(logItems);
    try {
        if (!fs.existsSync(path.join(__dirname, 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, 'logs'));
        }
        await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventlog.txt'), logItems);
    } catch (err) {
        console.error(err); // Use console.error for error logging
    }
};

module.exports = logEvents;