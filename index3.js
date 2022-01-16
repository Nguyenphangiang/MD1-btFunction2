function getFactorial(n){
    let factorial= 1;
    for (let i = 1; i <= n; i++) {
           factorial *= i;
    } alert(factorial)
}
let inputNum= +prompt("Enter A Number To Factorial:");
getFactorial(inputNum);