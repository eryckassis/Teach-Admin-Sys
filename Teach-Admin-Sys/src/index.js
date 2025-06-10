import "dotenv/config.js";
import { classifyTicket } from "./src/AI/ticketClassifier.js";
import User from "../models/User.js";

const novoUser = new User("Eryk", " eng.assis.dev@gmail.com", "2024-01-01");
console.log(novoUser.exibirInfos());

const dadosFicticios = User.exibirInfos("cassio", "C@Cgmail.com");
console.log(dadosFicticios);

async function exemploClassificador() {
  const mensagem = "Preciso de ajuda urgente com erro no sistema!";
  const categoria = await classifyTicket(mensagem);
  console.log(`Categoria do chamado: ${categoria}`);
}

exemploClassificador();
