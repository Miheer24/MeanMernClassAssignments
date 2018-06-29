var product = require("./productBL");
var MongoClient = require("mongodb").MongoClient;
MongoClient.connect('mongodb://127.0.0.1:27017/sample', function(err,db){
    if(err)
    console.log(err);
    else{
        var resultSet = db.collection('products').find().toArray(function(err,result){
            console.log(result);
            for(var i = 0; i < result.length; i++){
                console.log("Amount = " + product.calculateAmount(result[i].quantity, result[i].price));
            }
        })
    }
    db.close();
});