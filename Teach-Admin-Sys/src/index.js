import "dotenv/config.js";
import { classifyTicket } from "./src/AI/ticketClassifier.js";
import User from "../models/User.js";
import ticketsRouter from "./src/API/tickets.js";
import express from "express";
import cors from "cors";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Healthcheck endpoint
app.get("/", (req, res) => {
  res.json({
    status: "OK",
    service: "Classificador de Tickets IA",
    version: "1.0.0",
  });
});

// API de tickets IA
app.use("/tickets", ticketsRouter);

// Middleware para tratamento global de erros
app.use((err, req, res) => {
  console.error("Erro no middleware global:", err);
  res.status(500).json({ error: "Erro interno do servidor." });
});

// Inicialização do servidor ( porta configurável por ambiente)
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

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
