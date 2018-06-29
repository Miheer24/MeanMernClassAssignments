var fs=  require("fs");

console.log("Before Writing");
fs.writeFile("output.txt", "Dare to win, dare to do", function(err){
    if(err)
    {
        return console.error(err);
    }
    console.log("Data Written Succesfully");
    console.log("Reading Written data");
    fs.readFile("output.txt", function(err, data){
        if(err){
            return console.log(err);
        }
        console.log("Asynchronous Read:"+ data.toString());
    });

});