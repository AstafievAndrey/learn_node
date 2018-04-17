const PORT = 8882;
const TEXT_PLAIN = {'Content-Type': 'text/plain'};

let http = require('http');
let fs = require('fs');
let success = function(response, stat, data){
	response.contentType = 'image/png';
	response.contentLength = stat.size;
	response.end(data, 'binary');
}
let error = function(err, response, text){
	console.error(err);
	text = text || 'something wrong';
	response.writeHead(200, TEXT_PLAIN);
	response.end(text);
}

http.createServer(function(request, response){
	let name = require('url').parse(request.url, true).query.name;
	
	if(name === undefined) name = 'word';

	if(name === 'kotik'){
		let file = 'kotik.jpg';
		fs.stat(file, function(err, stat){
			if(err){
				error(err, response, 'Sorry i can\'t find cat');
			}else{
				//синхронный способ передачи файла
				//let img = fs.readFileSync(file);
				//success(response, stat, img);
				//асинхронный способ передачи файла
				fs.readFile(file, function(err, data){
					if(err){
						error(err,response);
					}else{
						success(response, stat, data);
					}
				});
			}
		});
	}else{
		response.writeHead(200, TEXT_PLAIN);
		response.end('running server on port: '+ PORT +' you use name: '+ name);
	}

}).listen(PORT);

console.log('running server');
