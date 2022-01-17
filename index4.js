function checkNumber(n){
    return !isNaN(parseFloat(n)) && !isNaN(n - 0)
}
let inputN= +prompt("Enter Number");
let result = checkNumber(inputN);
alert(result);