var f1= (a,b) => {
var result= 1;
for(var i=1; i<=b; i++){
result= result*a;
}
return result;
}
var a= f1(2,3);
console.log(a);