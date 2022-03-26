/*const listaFrutas = [
  "Laranja",
  "Limão",
  "Abacate",
  "Laranja",
  "Pera",
  "Laranja",
  "Maçã",
  "Abacate",
];

const filtrarMaçã = (array) => array.filter((element) => element === "Laranja");
console.log(filtrarMaçã(listaFrutas));*/


/////////////////////////
/*const cities = [
  {state: 'AM', name: 'Manaus', region: 'N'},
  {state: 'AP', name: 'Belém', region: 'N'},
  {state: 'TO', name: 'Porto Nacional', region: 'N'},
  {state: 'MG', name: 'Nepomuceno', region: 'SE'},
  {state: 'BA', name: 'Cachoeira', region: 'NE'},
  {state: 'PR', name: 'Curitiba', region: 'S'},
  {state: 'SP', name: 'Hortolândia', region: 'SE'},
  {state: 'RN', name: 'Touros', region: 'NE'},
  {state: 'CE', name: 'Jericoacoara', region: 'NE'},
  {state: 'TO', name: 'Três Pedras', region: 'N'},
  {state: 'MG', name: 'João Pinheiro', region: 'SE'}
];*/

// Encontre todas as cidades do estado de tocantis (TO);

/*function bmi(weight, height) {
  const calcBmi = weight / (height * height);
  
  if (calcBmi <= 18,5){
    return 'Abaixo peso';
  }else if(calcBmi <= 25,0){
    return 'Normal';
  }else if(calcBmi <= 30,0){
    return 'Excesso de peso';
  }else(calcBmi > 30)
     return 'Obeso';
  }

 const result = bmi(20, 10);
 console.log(result);*/


 /*function bmi(weight, height) {
  const calcBmi = weight / ( height **2);
  
  if (calcBmi <= 18,5 && calcBmi){
    return 'Abaixo peso';
  }else if(calcBmi <= 25,0){
    return 'Normal';
  }else if(calcBmi <= 30,0){
    return 'Excesso de peso';
  }else(calcBmi > 30)
     return 'Obeso';
  }

 const result = bmi(80, 1.8);
 console.log(result);*/

 /*setTimeout(() => {
  console.log('Comprar parafusos') // Comprar parafusos
  console.log('Adicionar ao estoque') // Adicionar ao estoque
}, 2000);

console.log('1 - Receber roda'); // 1 - Receber roda
console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro*/

/*const pushNumber = (list, number) => list.push(number);

let numbers = [];

pushNumber(numbers, 1);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

console.log(numbers);*/

/*const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

console.log(numbers); // O retorno é [2, 3]*/


/*const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

setTimeout(() => console.log(numbers), 3000);*/


/*const despesas = [
  {
    gym: 99,
  },
  {
    ifood: 200,
  },
  {
    phone: 60,
  },
  {
    internet: 100,
  },
];

const renda = 1000;


const despesaMensal = (renda, despesas, callback) => {

  const despesaTotal = callback(despesas);
  const saldoFinal = renda - despesaTotal;

  console.log(`Balanço do mês:
    Recebido: R$${renda},00
    Gasto: R$${despesaTotal},00
    Saldo: R$${saldoFinal},00 `);
};

const somaDespesas = (despesas) => {
  const custoItem = despesas.map((item) => Object.values(item));
  const despesaTotal = custoItem.reduce((acc, curr) => acc += curr[0], 0);
  return despesaTotal;
};*/

// acc é a sigla para accumulator (acumulador)
// curr é a sigla para current (valor atual)

//despesaMensal(renda, despesas, somaDespesas);