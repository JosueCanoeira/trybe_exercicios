const array = [35, 12, 5, 23, 7, 3];

/*const retornoSome = array.some((elemento) => elemento % 2 === 0);
console.log(`Algum elemento é par? ${retornoSome}`);

const novoArray = ["c", "b", "d", "a", "e"];
const mComSort = novoArray.sort();
console.log(mComSort);*/

//                        Exercise
/*Aquí na trybe estamos criando um bot que vai dar os parabéns para as pessoas que
entregaram 100% dos projetos, esse bot deve imprimir uma mensagem do tipo: 'Olá pessoa,
parabéns por ter finalizado 100% do projeto' para cada pessoa.*/

const estudantes = [
  {
    nome: "Josué",
    projeto: "TrybeWarts",
    Status: 98,
  },
  {
    nome: "Mica",
    Projeto: "Unit tests",
    Status: 100,
  },
  {
    nome: "Hugonardo",
    Projeto: "Trybewarts",
    Status: 97,
  },
  {
    nome: "Aninha",
    Projeto: "Trybewarts",
    Status: 100,
  },
  {
    nome: "Joicy",
    Projeto: "To do list",
    Status: 100,
  },
  {
    nome: "Ronald",
    Projeto: "Trybewarts",
    Status: 79,
  },
];

//console.log(estudantes[0].Status);

const congratulations = (array) => {
  const msg = array.forEach((element) => {
    if (element.Status === 100) {
      console.log(
        `Olá ${element.nome}, parabéns por ter terminado 100% do projeto`
      );
    }
  });
};
const result = congratulations(estudantes);
