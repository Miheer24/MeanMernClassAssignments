var fs= require('fs');
try{
var data = fs.readFileSync('Inputass.txt');
console.log("Synchronous Read : "+data.toString());
}
catch(err){
console.log("error="+err);
}

console.log("Program Ended");