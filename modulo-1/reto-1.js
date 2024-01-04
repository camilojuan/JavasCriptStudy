var peso = 70;
var altura= 1.71;
var imc=0; 

imc= peso/(altura*altura);

if(imc < 18.5){
console.log("peso pluma");
}else if (imc >= 18.5 && imc <= 24.9){
    console.log("peso normal");
}else if(imc >= 25 && imc <= 29.9){
    console.log("Sobrepeso");
} else {
    console.log("Obesidad");
}