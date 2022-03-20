const list = [39, 22, 12, 6, 2, 4, 8];
const retornoSome = list.some((elemento) => elemento % 2 === 0);
console.log(`Algum elemento é par? ${retornoSome}`);

/* Temos uma lista com dados de pessoas inscritas na nossa página, 
e com base nesses dados, queremos mandar algum tipo de anuncio para
elas (Todas tem aque receber o mesmo anúncio) Temos de cerveja
(que pagam mais) e de chocolate, mas não podemos mandar o de 
cerveja para menores de 18 anos, precisamos de um algoritmo que 
analise um array com as idades das pessoas inscritas e nos diga qual
 anuncio devemos mandar*/
//retorno Esperado:
//'Beba Trybeer, suave como um log de erro vazio'
//              ou
// 'ChocoTryber melhor que console.log'

const arrayIdades = [23, 32, 17, 16, 32];
const arryIdades = [23, 32, 27, 46, 34];
