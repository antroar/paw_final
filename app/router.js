// importando handlders
var handlers = require('./handler');
// importando static server y fs
	 var staticServer = require('./static.server'),
	 fs = require('fs');


exports.route = function(url, req, res){
console.log("> Enrutando la peticion: %s",url);
// verificar si existe un manejador para la url que se pide
if(typeof(handlers[url]) === 'function'){
	// existe handler
	// enrutando URL con su handler
	handlers[url](req, res)
}else{
	
	//mandamos a servir la ruta estatica
				staticServer.serve(url, res);
			
	/*// no existe un handler
	res.writeHead(404,{
		"Content-Type" : "text/html"
	});
	res.end("<h1 style='color: red;'>404. NOT FOUND</h1>");*/
}	
};