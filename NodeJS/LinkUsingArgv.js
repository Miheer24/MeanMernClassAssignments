var fs= require("fs");
var a = process.argv[2];
var b = process.argv[3];
fs.link(a , b , function(err){
    if(err){
        console.log("error"+err);
    } 
    else{
        console.log("file copied succesfully"); 
    }
});