function getMinNum(a,b,c){
   if (a<b && a<c){
       alert("min is -" + a);
   } else if (b<a && b<c){
       alert("min is -" + b);
   } else {
       alert("min is -" + c);
   }
}
let inputN1= +prompt("Enter first number")
let inputN2= +prompt("Enter second number")
let inputN3= +prompt("Enter third number")
 getMinNum(inputN1,inputN2,inputN3)
