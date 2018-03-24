var http = require('http');

var server = http.createServer(function(request, response){
    
    var categoria = request.url;

    if(categoria == '/tecnologia'){
        response.end("<html><body>Notícias de tecnologia</body></html>")

    }else if(categoria == "/moda"){
        response.end("<html><body>Notícias de moda</body></html>")

    }else if(categoria == "/beleza"){
        response.end("<html><body>Notícias de beleza</body></html>")
    }else{
        response.end("<html><body>Portal de notícias</body></html>")
    }
});

server.listen(3000)