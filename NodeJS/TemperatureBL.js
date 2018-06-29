//Temperature BL:
class Temperature{

    constructor(a){
    this.a=a
  
    }
    
    ConvertToFarenheit(){
    var faren= new Temperature(0);
    faren= (this.a*1.8)+32;
    return faren;
    }

    ConvertToCelcius(){
        var cel= new Temperature(0);
        cel= (this.a-32)/1.8;
        return cel;
    }
}
module.exports.Temperature = Temperature