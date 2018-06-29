console.log("Enter a number whose factorial you want to calculate")
var r= parseInt(process.argv[2])

function fact(a) {

var f = 1;
for(var i=1; i<= a; i++){

 f = f *i;
}
return f;
}

var b= fact(r);
console.log("The factorial of the no. is" + b);





