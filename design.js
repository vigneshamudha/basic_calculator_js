var a=parseInt(prompt("Enter a  first_Number"));
var b=parseInt(prompt("Enter a second_ Number"));
var op=prompt("Enter the operator");
switch(op){
    case'+': document.getElementById("result").textContent=(a+b);break;
    case'-':document.getElementById("result").textContent=(a-b);break;
    case'*':document.getElementById("result").textContent=(a*b);break;
    case'/':document.getElementById("result").textContent=(a/b);break;
    default:document.getElementById("result").textContent="Enter the correct operator";
}