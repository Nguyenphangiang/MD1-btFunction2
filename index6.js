function checkInterger(n){
    if (n>0){
        return true;
    }
    else return false;
}
let inputN= +prompt("Enter Number");
let result = checkInterger(inputN);
alert(result);