import express from 'express';

const server = express();

const PORT = 8080;

const callBack = () => console.log("servidor listo ahora mismo en puerto:" + PORT);
console.log("revisar cambios " + PORT);

server.listen(PORT, callBack);
