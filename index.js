//cargando Router
var router = require('./app/router'),
	server = require("./app/server");
	//iniciaando el server
	// y pasandole como parametro el raurer y decimes oye server
	server.startServer(router);
	
	