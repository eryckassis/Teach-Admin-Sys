import User from "../models/User.js";

const novoUser = new User("Juliana", " j@j.com", "2024-01-01");
console.log(novoUser.exibirInfos());

const dadosFicticios = User.exibirInfos("cassio", "C@Cgmail.com");
console.log(dadosFicticios);
