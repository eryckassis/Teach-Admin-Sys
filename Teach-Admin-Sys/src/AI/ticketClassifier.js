import { OpenAI } from "openai";

const openai = new OpenAI({
  // eslint-disable-next-line no-undef
  apiKey: process.env.OPENAI_API_KEY,
});

export async function classifyTicket(text) {
  const prompt = `Classifique o chamado abaixo em uma das categorias:
    BUG, URGENTE, SUGESTÃO, ELOGIO, OUTRO.
    Chamado: "${text}"
    Categoria:
    `.trim();

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
