
//Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const angulo1 = 20;
const angulo2 = 80;
const angulo3 = 40;
 
let somaAngulo = angulo1 + angulo2 + angulo3;
let comparaAngulos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if (comparaAngulos){
    if (somaAngulo === 140){
        console.log(true);
    }else{
        console.log(false);
    };
}else{
    console.log('Erro, ângulo inválido');
}


