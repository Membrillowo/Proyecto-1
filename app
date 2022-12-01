const http = require('http');
const server = http.createServer((req, res) => {
    res.end('El server se creó con exito')
});
const port = 3000;

server.listen(port, () => {
    console.log('Recibiendo solicitudes del puerto ' + port + '...')
});

