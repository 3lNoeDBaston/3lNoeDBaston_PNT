//vamos a crear nuestro propio servidor

var http = require('http');

//todo servidor debe de poder de atender peticiones y debe de generar respuestas por lo tanto nuestra funcion deb de tener dos parametros request y response

var servidor = http.createServer(function(request, response)
{
    response.writeHead(200, {'content-type' : 'text/html; charset = utf-8'});
    response.write('<h2> Este es el servidor de elNoeDBaston y vamos a hacer un server de minecraft xdlkfhkjdhfjdjkhdfs</h2>');
    console.log('se hizo una petición web');
    response.end();
});

//en que puerto funciona el servidor
servidor.listen(300);

//ejecutamos en consola
console.log('Ejecutando el servidor en puerto 3000');
//para interrumpir el servio es ctrl+c