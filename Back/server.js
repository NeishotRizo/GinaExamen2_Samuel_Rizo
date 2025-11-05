
//Importamos el modulo http de Node.js para crear un servidor Http 
const http = require('http');
//Importamos Express
const express = require('express');
//Importamos cors
const cors = require('cors');
//Instanciamos la clase Server 
class Server {
    constructor(dirname) {
        //creamos una instancia de express
        this.app = express();
        //creamos un servidor http 
        this.httpServer = http.createServer(this.app);
        //Asignamos puerto si hay puerto en la variable o si no default usa 8080
        this.port = process.env.PORT || 8080;


        //Relacionamos las rutas de las sesiones y autenticación
        this.routes = {
            
            session: '/api/session',
            auth: '/api/auth',
            certificado: '/api/certificado',
            /* pdf: '/api/pdf' */
        };
        //llamamos al metodo middlewares para conectar las rutas

        this.middlewares(dirname);
    }

    middlewares() {
        //interfaz de JSON para express
        this.app.use(express.json());
        //habilitamos Cors para poder consummir la API
        this.app.use(cors());
        //Recorremos las claves del objeto this.routes y luego recorremos sus claves para tomar los archivos
        // asignarle su ruta ya sea api/session o api/auth
        Object.keys(this.routes).forEach((key) => {
            //
            this.app.use(this.routes[key], require(`./routes/${key}`));
        });
    }

    //metodo listen para iniciar el servidor
    listen() {

        this.httpServer.listen(this.port, () => {
            //avisamos en consola en que puerto está corriendo
            //avisamos en consoloa en que momento pprende
            console.log('Running on port', this.port);
            console.log('corriendo desde', new Date());
        });

    }
}

module.exports = Server;