/*24. Escreva um programa que receba três números e mostre o maior entre eles.
function maiorNumero(a, b, c){
    
    if (a > b && a > c){
        console.log("a");
    }else if(b > a && b > c){
        console.log("b");
    }else if(c > a && c > b){
        console.log("c");
    }else{
        console.log("Os números são iguais!");
    }
  

}
maiorNumero(4, 2, 7);*/

//26. Escreva um programa que receba 3 valores e escreva a soma dos 2 maiores.
function somaMaiores(valor1, valor2, valor3){
    
    let somaA = valor1 + valor2;
    let somaB = valor1 + valor3;
    let somaC = valor2 + valor3;

    if (valor1> valor3 && valor2 > valor3){
        console.log(somaA);
    }else if (valor2 > valor1 && valor3 > valor1){
        console.log(somaC);
    }else if(valor1 > valor2 && valor3 > valor2){
        console.log(somaB);
   
    }
}
somaMaiores(1, 7, 6);