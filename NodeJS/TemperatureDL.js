var http= require('http');
var fs= require('fs');
var qs= require('querystring');
var temp= require('./TemperatureBL');
var MongoClient= require("mongodb").MongoClient;

var p;
var objString;

    

http.createServer(function(req, res){
    if(req.method== "GET"){
        res.writeHead(200, {"Content-Type":"text/html"});
        fs.createReadStream("./Temp.html","UTF-8").pipe(res)
    }else if(req.method=="POST"){
        var body="";
        req.on("data", function(chunk){
            body+=chunk;
            console.log("data");
        });
        req.on("end", function(){
            var obj= qs.parse(body);
            console.log(obj);
             p = obj.celcius;
            var t = new temp.Temperature(p);
            
            // var a= (Temp.celcius*1.8)+32;
            // Temp.Farenheit= console.log(a);
            var temp1= t.ConvertToFarenheit(p);
            //res.end(`Data entered in the form => ${body}`);
             objString= JSON.stringify(temp1);
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
            res.end(`
            <!DocTYPE html>
            <html>
             <head>
               <title>Get converted value</title>
              </head>
                 <body> 
                 <form action="/" method="POST">
                       <label> Temperature in celcius</label>
                       <input type="text" id="celcius" value= ${p} name= "celcius" required/>
                         <!-- <label>Password</label> -->
                         <!-- <input type="text"  id="last" name="password" required/> -->
                        <label> Farenheit</label>
                         <input type="text" id="faren" name= "Farenheit" value= ${objString} readonly />
                           <button>Convert </button> 
                         </form>
                            </body> 
                            </html>
        `);
        MongoClient.connect('mongodb://127.0.0.1:27017/sample', function(err, db){
    if(err){
        console.log(err);
    }
   //db.collection('Bank').find({},{_id:0, BankName:1}).sort({BankID : 1}).toArray(function(err, result){
   console.log(p);
   //console.log(p);
   db.collection('TemperatureLogMod1').insert({"celcius": p, "Farenheit":objString});

   db.close();
});
        });
        }
        }).listen(3000);
    console.log("form server starting on port 3000");

    
