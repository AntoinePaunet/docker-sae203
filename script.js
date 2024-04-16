const http = require('http');
const fs = require('fs');

const hostname = '0.0.0.0'; // Pour écouter sur toutes les interfaces
const port = 3000; // Port sur lequel le serveur écoutera

const server = http.createServer((req, res) => {
  

});

server.listen(port, hostname, () => {
  console.log("Connecté")
});