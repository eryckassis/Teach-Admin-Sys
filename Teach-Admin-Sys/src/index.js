import User from "../models/User.js";
import Docente from "../models/Docente.js";
import Admin from "../models/Admin.js";

const novoUser = new User("Juliana", " j@j.com", "2024-01-01");
console.log(novoUser.exibirInfos());

const dadosFicticios = User.exibirInfos("cassio", "C@Cgmail.com");
console.log(dadosFicticios);

// novoUser.nome = "Macacos";
// console.log(novoUser.nome);

// const novoAdmin = new Admin("Rodrigo", "r@r.com", "2024-01-01");
// console.log(novoAdmin.exibirInfos());
