function switchNum(num1,num2){
    [num1,num2] = [num2,num1]
    return [num1,num2]
}
display = switchNum(5,1)
alert(display);
