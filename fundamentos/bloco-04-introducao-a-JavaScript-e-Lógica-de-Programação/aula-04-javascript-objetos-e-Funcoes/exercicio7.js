//1. Dado o tamanho da base e da altura de um retângulo, calcular a sua área e o seu 
//perímetro.
function calcArea(base, altura ){

    let resultado = (base * altura);
    console.log(resultado);

    let calcPerimetro = base + base + altura + altura;  
    console.log ( calcPerimetro);
}
calcArea(4, 6)