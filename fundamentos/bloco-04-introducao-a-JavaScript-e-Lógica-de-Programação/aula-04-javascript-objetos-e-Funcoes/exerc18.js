/*44. Escreva um programa que imprima todos os números de 1 até 100, inclusive, e a soma 
//de todos eles.
function numeros(inteiros){
      let soma = 0;

    for (i = 1; i <= inteiros; i += 1){
        console.log(i);
        soma = soma + i;
        console.log(soma);
  }
}
numeros(100);*/

//Escreva um programa que imprima todos os números de 1 até 100, inclusive, e a soma de todos eles.
//OBS:caso ele pedir a quantidade de números pares usamos a variável soma.
function numeros(inteiros){
      let soma = 0;

    for (i = 1; i <= inteiros; i += 1){   
        console.log(i)
    if (i % 2 === 0){
        soma = soma + 1;
    }    
  }
    console.log(soma);
}
numeros(100);