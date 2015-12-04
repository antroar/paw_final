var fs = require('fs'),
mime = require('mime');

//modulo encargado de servir contenido estatico
exports.serve = function(url, res){
   //1. acompleto la ruta estatica
   var staticPath ='./static' + url;
			 //2.verifico que existe
   fs.exists(staticPath,function(exists){
	 if(exists){
		//si si existe la ruta estatica
	    fs.readFile(staticPath, function(err, content){
		  if(err){
			//hubo error en la lectura
			res.writeHead(500,{
				'Content-Type' : "text/html" 
			});
			res.end("<h1 style ='color: red'>500 no encontro el recurso :(</h1>");
		}else{
			//seleccionar mime
			var contentType = mime.lookup(staticPath);
			//no hubo error se sirve archivo
			res.writeHead(200, {
				'Content-Type' : contentType,
				'Server' : 'ITGAM@1.0.0'
	        });
			res.end(content, 'utf-8');
		}
	   });
	 }else{
			 //no existe el handler
			 res.writeHead(404,{
			 "Content-Type" : "text/html"
		   });
			 res.end("<h1 style='color: blue'>404. NOT FOUND</h1>");
		  }
	  });	
};