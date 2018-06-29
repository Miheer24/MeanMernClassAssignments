var fs= require("fs");
fs.readdir('./lib',function(err, files){
    if(err){
        console.log("error"+err);
    } 
    else{
        console.log(files);
    }
});