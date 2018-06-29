function fact(n)
{
	var factorial=1;
	for(var i=1;i<=n; i++)
	{
		
		factorial=factorial*i;
	}
	return factorial;
}

function computeFactorial(){
	var n= document.getElementbyId("n").value;
	var result= fact(n);
	document.getElementbyId("fact").value=result;
}