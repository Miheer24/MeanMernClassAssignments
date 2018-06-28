//2
db.BankDetails.createIndex( { "accountNo": 1 }, { unique: true } )

//3
db.BankDetails.find({"customers.loanAmount" : {$gt : 0}},{"customers.customerName" : 1, "customers.city" :1})

//4
db.BankDetails.find({"customers.city" : "Chennai","customers.loanAmount": {$gt : 0}},{"customers.customerName" : 1})

//5
db.BankDetails.find({},{"branch.branchName" : 1, "branch.branchCity" : 1, "branch.assets" : 1}).sort({"branch.assets" : -1}).limit(1)

//6
db.BankDetails.find({"branch.branchCity" : "Pune", "customers.loanAmount" : {$gt : 0 }},{"customers.customerName" : 1, "customers.cities" : 1})

//7 
db.BankDetails.find({$and :[ {"balance":{$gt : 700 }},{"balance":{$lt : 900 }}]}).count()

//8
db.BankDetails.find({"branch.branchCity" : "Pune", "customers.depositAmount" : {$gt : 0 },"customers.loanAmount": {$gt : 0 }},
{ "customers.customerName" : 1})

//9
db.BankDetails.find({$expr:{$gt:["$customers.loanAmount","$balance"]}},{ "customers.customerName" : 1})

//10
db.BankDetails.find( {"customers.street" : {$regex : "Hill$"}} ,{"customers.customerName" : 1 })

//11
db.BankDetails.find({"customers.loanAmount" : 0, "customers.city" : "Pune"},{"customers.customerName" : 1})

//13
db.BankDetails.aggregate([{$group : {_id : "$branch.branchName",average : {$avg : "$balance"}}},{$sort :{"average" : -1}},{$limit : 1}])
      
//14
db.BankDetails.aggregate([{ $group: { _id: "$branch.branchName", count: { $sum: 1}}}])

//15
db.BankDetails.update({ "customers.customerName": "Ram" },{$inc: {balance : 20000}})