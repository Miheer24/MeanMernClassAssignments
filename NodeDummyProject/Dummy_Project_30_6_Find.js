var http= require('http');
var fs= require('fs');
var qs= require('querystring');
//var temp= require('D://Dummy_Projects//Dummy_Project_30_6_BL');
var MongoClient= require("mongodb").MongoClient;
var Name;
var NetSal;
var BasicSalary;
//var gross;
//var hra;
//var deduc;
var b;

//var basic;
var objString;
var y;
    

http.createServer(function(req, res){ // 
    if(req.method== "GET"){
        res.writeHead(200, {"Content-Type":"text/html"});
        fs.createReadStream("./DPFind.html","UTF-8").pipe(res)
    }else if(req.method=="POST"){
        var body="";
        req.on("data", function(chunk){
            body+=chunk;
            console.log("data");
        });
        req.on("end", function(){
            var obj= qs.parse(body);
            console.log(obj);
             var id = obj.id;
            // n= obj.name;
            // y= obj.id;
           // var t = new temp.NetPay(b);
            
            // var a= (Temp.celcius*1.8)+32;
            // Temp.Farenheit= console.log(a);
            //var netPay = temp.CalcNetPay(b);
           // console.log(netPay);
            //objString= toString(temp1);
            //res.end(`Data entered in the form => ${body}`);
             //objString= JSON.stringify(temp1);
            res.writeHead(200, {"Content-Type": "Text/html"});
            //res.end(obj.Farenheit.toStr)
          //  res.end(`
            //     <!DOCTYPE html>
            //     <html>
            //         <head>
            //                 <title>Form Results</title>
            //                 </head>
            //                 <body>
            //                     <h1> The temperature in farenheit is </h1>
            //                     <p> ${objString}</p>
            //                     </body>
            //                     </html>
            // `);


            MongoClient.connect('mongodb://127.0.0.1:27017/sample', function(err, db){
                if(err){
                    console.log(err);
                }
            
                var Findcol= db.collection('EmployeePayDetailsModified').find({"EmpId":id}).toArray(function(err, result){
                    if(err){
                        console.log(err);
                    }
                     Name= result[0].EmpName;
                     BasicSalary= result[0].BasicPay;
                     NetSal = result[0].NetPay;
                     res.end(`
                     <!DOCTYPE html>
                     <html>
                         <head>
                                 <title>Employee Details</title>
                                 </head>
                                 <body>
                                 <h1> Employee Details are - </h1>
                                 <p> ${Name}</p>
                                 <p> ${BasicSalary}</p>
                                 <p> ${NetSal}</p>
                                     </body>
                                     </html>
                 `);
                });
               
            
               db.close();
            



    });
});
}
}).listen(3000);
console.log("form server starting on port 3000");



