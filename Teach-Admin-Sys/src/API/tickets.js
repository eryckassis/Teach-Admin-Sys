import express from "express";
import { classifyTicket, TICKET_CATEGORIES } from "../AI/ticketClassifier";

const router = express.Router();
// Rota para classificar um ticket

/**
 * @route POST /tickets/classify
 * @description Classifica um chamado usando IA
 * @access Public
 * @body { mensagem: string }
 */

router.post("/classify", async (req, res) => {
  try {
    const { mensagem } = req.body;
    if (
      !mensagem ||
      typeof mensagem !== "string" ||
      mensagem.trim().length === 0
    ) {
      return res.status(400).json({
        error: 'O campo "mensagem" é obrigatorio e deve ser um texto.',
      });
    }

    const categoria = await classifyTicket(mensagem);

    return res.json({
      categoria,
      disponiveis: TICKET_CATEGORIES,
      mensagemClassificada: mensagem,
    });
  } catch (error) {
    console.error("Erro ao classificar o ticket:", error);
    return res
      .status(500)
      .json({ error: "Erro interno do servidor ao classificar o ticket." });
  }
});

export default router;
