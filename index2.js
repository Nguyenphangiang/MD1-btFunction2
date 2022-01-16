function getAcreage(n){
    return n*n*3.14;
}
function getPerimeter(n){
    return n*2*3.14;
}
let inputNum= +prompt("Enter radius : ")
let acreage= getAcreage(inputNum);
let perimeter= getPerimeter(inputNum);
alert("Acreage is = " + acreage + "-Perimeter is = " + perimeter);
