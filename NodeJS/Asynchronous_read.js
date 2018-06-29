var fs= require("fs");

fs.readFile("Input.txt",function(err, data){
    if(err){
        console.log(err);
    }
    else{
        console.log("Asynchronous Read="+data.toString());
    }

});