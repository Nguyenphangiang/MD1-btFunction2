function getMinNum(a,b,c){
   if (a<b){
       if (a<c){
           alert("min là -" + a);
       } else {
           alert("min là -" + c);
       }
   } else if (b<c){
       alert("min là -" + b);
   } else alert("min là -" + c )
}
let inputN1= +prompt("Enter first number")
let inputN2= +prompt("Enter second number")
let inputN3= +prompt("Enter third number")
 getMinNum(inputN1,inputN2,inputN3)
