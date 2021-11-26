//43. Escreva um programa que imprima todos os números pares do intervalo fechado de 1 a 100
function numeros(a){
    for (let i = 1; i <= a; i+= 1){
         if (i % 2 === 0){
             console.log(i);
         }
    }
}
numeros(100)