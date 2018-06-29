var MongoClient= require("mongodb").MongoClient;
var empDoc= {"BankID":"105", "BankName": "Axis Bank", "Branch": "Porur"}
MongoClient.connect('mongodb://127.0.0.1:27017/sample', function(err, db){
    if(err){
        console.log(err);
    }
   var ResultSet= db.collection('Bank').insert(empDoc, function(err, result){
       if(err) throw err;
        console.log("Document inserted sucessfully");
   })
   db.close();
    

});


