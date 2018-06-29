var http= require('http');
// var url= require('url');
var server= http.createServer(function(request, response){
    console.log('request starting...');
    //respond
    if(request.url=="/hi"){
        response.write('hello client!');
        response.end();
    }
    if(request.url == "/int")
    {
        response.write(JSON.stringify({userName:"abc", age:16}));
        response.end();
    }
   
    
});
server.listen(3000);
console.log('server running at http://127.0.0.1:3000');
