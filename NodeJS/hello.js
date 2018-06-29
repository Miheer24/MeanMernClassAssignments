function factorial(a){
    var fact=1;
    for(var i=1; i<=a; i++){
    fact= fact*i;
}
return fact;
}


//console.log(factorial(5));
module.exports.factorial= factorial;