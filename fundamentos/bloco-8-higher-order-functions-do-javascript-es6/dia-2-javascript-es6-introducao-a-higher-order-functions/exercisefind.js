/* Aquí na Trybe estamos planejando um bot que vai enviar mensagem para as pessoas
 que ainda não terminaram o projeto, o objetivo é lembrá-las do prazo e oferecer 
 alguma ajuda. O bot só consegue enviar uma mensagem por véz.
 A msg deve  ter o formato 'Olá pessoa, o prazo para a entrega do projeto é daquí a
3 dias, você precisa de alguma ajuda?'*/

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

const msgPrazo = (array) => {
  const mandarMensagem = array.find((element) => element.Status < 80);
  if (mandarMensagem) {
    const pessoa = mandarMensagem.nome;
    console.log(`Olá ${pessoa}, o prazo para a entrega do projeto é daquí a
    3 dias, você precisa de alguma ajuda?`);
  }
};
msgPrazo(estudantes);
