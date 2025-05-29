// Classe para representar um docente ( professor ou instrutor ) no sistema de administração de ensino.
import User from "./User.js";

export default class Docente extends User {
  /**
   * Constructor da Classe Docente
   * @param {string} nome - Nome do deocente
   * @param {string} email - Email do docente
   * @param {string} nascimento - Data de nascimento do docente
   * @param {string} role - Papel do usuário no sistema (padrão é "docente")
   * @param {boolean} ativo - Indica se o usuário está ativo (padrão é "true")
   */
  constructor(nome, email, nascimento, role = "docente", ativo = "true") {
    super(nome, email, nascimento, role, ativo);
  }

  /**
   * Aprova um estudante em um curso.
   * @param {string} estudante - Nome do estudante
   * @param {string} curso - Nome do curso
   * @returns {string} - Mensagem de aprovação do estudante no curso.
   */

  aprovarEstudante(estudante, curso) {
    return `estudante ${estudante} passou no curso de ${curso}, responsável ${this.nome}.`;
  }
}
