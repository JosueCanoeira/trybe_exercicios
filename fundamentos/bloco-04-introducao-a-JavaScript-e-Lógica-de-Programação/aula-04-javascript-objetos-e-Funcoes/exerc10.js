//21. Escreva um programa que receba um número e exiba se ele é positivo ou negativo.

function posNeg (numero){
  
    if ( numero > 0){
        console.log("O número é positivo!"); 
    }else if(numero < 0){
        console.log("O número é negativo!");
    }else {
        console.log ("O número é zero!");
    }


}
posNeg (-3)