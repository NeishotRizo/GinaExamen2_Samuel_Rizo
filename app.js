//importamos el modulo Server que tenemos en back/server
//no estamos impoprtando directamentte Express, por que es una clase personalizada en server.js para tener todo configurado
const Server = require('./Back/server');
//Creamos una instancia del objeto server, que importamos, 
//y usamos la variable globar de node __dirname para tener la ruta absolua de app.js 
const server = new Server(__dirname);
//Iniciamos el servidor
server.listen();