import "dotenv/config";
import {
  classifyTicket,
  TICKET_CATEGORIES,
} from "../src/AI/ticketClassifier.js";
import { expect } from "@jest/globals";
// Configuração do Jest para usar a variável de ambiente OPENAI_API_KEY

const TEST_CASES = [
  { text: "Meu coleto está errado!", expected: "FINANCEIRO" },
  { text: "Ajuda, não consigo acessar o sistema", expected: "ACESSO" },
  { text: "Erro 404 na página inicial", expected: "BUG" },
  { text: "Quero elogiar o atendimento", expected: "ELOGIO" },
  { text: "Como altero minha senha?", expected: "DÚVIDA" },
  { text: "Sistema fora do ar, urgente!", expected: "URGENTE" },
  { text: "Sugestão de melhoria para o sistema", expected: "SUGESTÃO" },
  { text: "Preciso de suporte técnico", expected: "SUPORTE TÉCNICO" },
  { text: "Problema de acesso ao boletim", expected: "ACESSO" },
  { text: "Mensagem aleatória", expected: "OUTRO" },
];

// eslint-disable-next-line no-undef
describe("classifyTicket", () => {
  TEST_CASES.forEach(({ text, expected }) => {
    // eslint-disable-next-line no-undef
    test(`Classifica "${text}" como ${expected}`, async () => {
      const categoria = await classifyTicket(text);
      expect(TICKET_CATEGORIES).toContain(categoria);
      expect(categoria).toBe(expected);
    }, 20000); // poder haver uma demora por ser uma API
  });
});
