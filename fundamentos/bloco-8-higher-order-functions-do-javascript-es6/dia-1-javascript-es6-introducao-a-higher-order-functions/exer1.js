/*1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma
nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada
pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome 
completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da
pessoa@trybe.com .*/

// Criar uma Função
// retornar { nomeCompleto, email }
// Passar ela como parâmetro da HOF newEmployees
// Parâmetro dece ser nome completo
// A function deve gerar nome_dapessoa@trybe.com

const createEmail = (nome, email) => {
  const strUnderscores = nome.replace(/ /g, "_");
  const addr = "@trybe.com";
  return { nome, email: `${strUnderscores + addr}` };
};

const newEmployees = (callback) => {
  const employees = {
    id1: createEmail("Pedro Guerra"),
    id2: createEmail("Luiza Drumond"),
    id3: createEmail("Carla Paiva"),
  };
  return employees;
};
console.log(newEmployees(createEmail));
