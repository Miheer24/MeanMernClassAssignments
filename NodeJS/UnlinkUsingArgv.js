var fs= require("fs");
var a = process.argv[2];
fs.link(a , function(err){
    if(err){
        console.log("error"+err);
    } 
    else{
        console.log("file deleted succesfully");
    }
});