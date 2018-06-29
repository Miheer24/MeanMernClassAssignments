class Point{
	constructor(x,y){
		this.x=x;
		this.y=y;
	}
CalDistance(d){
	var dist= new dist();
	dist.x= this.x-d.x;
	dist.y= this.y-d.y;
	return Math.sqrt((dist.x*dist.x)+(dist.y*dist.y));

}
}