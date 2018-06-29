var MongoClient= require("mongodb").MongoClient;
//var FindQuery = {  BankName: 'ICICI'} ;
MongoClient.connect('mongodb://127.0.0.1:27017/sample', function(err, db){
    if(err){
        console.log(err);
    }
    else{
        var resultSet= db.collection('Bank').find();
        resultSet.each(function(err, doc){
            console.log(doc);
        });
        db.close();
    }

});