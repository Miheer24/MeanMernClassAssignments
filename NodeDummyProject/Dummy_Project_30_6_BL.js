/*class NetPay{
    constructor(basic){
      //var basic;
         
        // this.gross= gross;
       //  this.hra= hra;
         this.basic= basic;
        //this.deduc= deduc;
    }
    
*/
  function  CalcNetPay(basic){
       // var basic = new NetPay(0)
        var hra;
        var deduc;
        var gross;
        if(basic>=50000){
            hra= (basic*0.4);
        }
        else{
            hra= (basic*0.3)
        }
        //var gr= new NetPay(0)
        deduc=1000;
        gross= basic+hra;
        var net= gross-deduc;
        return net;
    }
    
//}

module.exports.CalcNetPay= CalcNetPay