var fs= require("fs");
fs.link("./lib/Input.txt" , "./lib/InputCopy.txt", function(err){
    if(err){
        console.log("error"+err);
    } 
    else{
        console.log("file copied succesfully");
    }
});