var sum=0;
function ShowResults(value){
    sum= sum+value;
}

var letters= [1,2,3];
letters.forEach(ShowResults);
console.log(sum);