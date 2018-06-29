var MongoClient= require("mongodb").MongoClient;
var FindQuery = { "BankName" : 'ICICI'} ;
MongoClient.connect('mongodb://127.0.0.1:27017/sample', function(err, db){
    if(err){
        console.log(err);
    }
   db.collection('Bank').find({},{_id:0, BankName:1}).sort({BankID : 1}).toArray(function(err, result){
       if(err) throw err;
        console.log(result);
   })
   db.close();
    

});