const http = require('http');

const server = http.createServer();

const PORT = 8080;

const callBack = () => console.log("servidor listo ahora mismo en puerto:" + PORT);
console.log("revisar cambios " + PORT)

server.listen(PORT, callBack);
