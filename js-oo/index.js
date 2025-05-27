import User from "/js-oo/User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

const novoUser = new User("Juliana", " j@j.com", "2024-01-01");
console.log(novoUser.exibirInfos());

novoUser.nome = "Juliana Silva";
console.log(novoUser.exibirInfos());
console.log(novoUser.nome);
