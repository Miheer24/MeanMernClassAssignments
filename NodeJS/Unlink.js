var fs= require("fs");
fs.unlink("./lib/InputCopy.txt", function(err){
    if(err){
        console.log("error"+err);
    } 
    else{
        console.log("file removed or deleted");
    }
});