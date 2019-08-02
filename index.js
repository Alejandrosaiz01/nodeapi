//cargar libreria http

const http = require('http');
const Chance = require ('chance');

const chance = new Chance();


//definir un servidor

const server = http.createServer( function(request, response) {
    //cada peticion se ejecuta esto
    response.writeHead(200, {'content-Type': 'text/html' });

    response.end('Wake up' + chance.name());
});



//arrancar el servidor

server.listen(1337, '127.0.0.1');

console.log('server arrancado en http://127.0.0.1:1337');