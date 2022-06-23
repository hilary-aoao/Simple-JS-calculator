
var num1 = prompt("Enter 1st number: ")
var num2 = prompt("Enter 2nd number: ")
var op = prompt(" Pick operator +, -, *, / : ")

num1 = parseFloat(num1)
num2 = parseFloat(num2)

if(op === "+"){
    var sum = num1 + num2
    alert(num1 + "+" + num2 + "=" + sum)
}
else if(op === "-"){
    var sub = num1 - num2
    alert(num1 + "-" + num2 + "=" + sub)
}
else if(op === "*"){
    var mul = num1 * num2
    alert(num1 + "x" + num2 + "=" + mul)
}
else if(op === "/"){
    var div = num1 / num2
    alert(num1 + "/" + num2 + "=" + div)
}
else{
    alert("Invalid")
}