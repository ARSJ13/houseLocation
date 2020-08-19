const express = require('express');
require('./db');
const routes = require('./routes');

const server = express();
server.use(express.json());
server.use(routes);

server.listen(3000, console.log('conection success!'))
