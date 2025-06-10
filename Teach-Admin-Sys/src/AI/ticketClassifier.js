import { OpenAI } from "openai";

const openai = new OpenAI({
  // eslint-disable-next-line no-undef
  apiKey: process.env.OPENAI_API_KEY,
});

// Lista de categorias pode ser facilmente alterada
export const TICKET_CATEGORIES = [
  "BUG",
  "URGENTE",
  "SUGESTÃO",
  "ELOGIO",
  "DÚVIDA",
  "FINANCEIRO",
  "SUPORTE TÉCNICO",
  "ACESSO",
  "OUTRO",
];

const EXAMPLES = [
  { text: "Ao clicar no botão aparece erro 500", category: "BUG" },
  {
    text: "Minha mensalidade está errada, preciso de ajuda!",
    category: "FINANCEIRO",
  },
  { text: "Não consigo fazer login, fala senha inválida", category: "ACESSO" },
  {
    text: "Sistema caiu, preciso de suporte técnico urgente!",
    category: "SUPORTE TÉCNICO",
  },
  { text: "Gostaria de sugerir uma nova funcionalidade para o sistema" },
  { text: "Parabéns pelo atendimento!", category: "ELOGIO" },
  { text: "Como posso acessar o boletim?", category: "DÚVIDA" },
  { text: "Meu computador não conecta no sistema", category: "URGENTE" },
];

export async function classifyTicket(text) {
  const exampleText = EXAMPLES;

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "Você é um classificador de chamadospara um sistema de administração escolar.",
      },
      { role: "user", content: prompt },
    ],
    mperature: 0,
    x_tokens: 10,
  });

  const category = response.choices[0].message.content.trim().toUpperCase();
  return category;
}
