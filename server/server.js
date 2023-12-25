const http = require('http');

const server = http.createServer();

const PORT = 8080;

const callBack = () => console.log("servidor listo en puerto:" + PORT);

server.listen(PORT, callBack);