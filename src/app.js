const http = require('http');
const path = require('path');
const route = require('./helper/route')
const chalk = require('chalk');
const config = require('./config/defaultConfig');

const server = http.createServer((req, res) => {
    const filePath = path.join(config.root, req.url);
    route(req, res, filePath);
    
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    
    // res.end(filePath);
})

server.listen(config.port, config.hostname, () => {
    const addr = `http://${config.hostname}:${config.port}/`;
    console.log(`服务器运行在${chalk.red(addr)} `);
})