let usuario = { 
  id: 99,
  email: "canoeiraj@gmail.com",
infoPessoal: {
  nome: "Josué",
  sobreNome: "Canoeira",
endereco :{
  rua: "smith street",
  bairro: "Brooklyn",
  cidade: "New York ",
  estado: "New York",
  
  },
 },
};



console.log(usuario.id);
console.log(usuario.email);
console.log(usuario["id"]);
console.log(usuario["email"]);
console.log(usuario["infoPessoal"]["sobreNome"]);
console.log(usuario["infoPessoal"]["endereco"]["estado"]);
console.log(usuario.infoPessoal.nome);
console.log(usuario.infoPessoal.endereco.rua);

