const http = require('http');
const app = require('./app');
const { log } = require('console');


const server = http.createServer(app);

server.listen(3000, () => {
    console.log("Serveur est en cours sur localhost:3000");
});


