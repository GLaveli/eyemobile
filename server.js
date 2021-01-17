const http = require('http');
const app = require('./src/app');
const PORT = process.env.PORT || 3333;

const server = http.createServer(app);

/* Deletar este modulo n'ao esta sendo utilizado mais */

server.listen(PORT, () => {
  console.log("Tudo ok!");
});