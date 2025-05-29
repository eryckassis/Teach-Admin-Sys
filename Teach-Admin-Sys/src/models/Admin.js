// Classe para representar um administrador no sistema.
import User from "./User.js";

export default class Admin extends User {
  /**
   *
   * @param {*} nome - Nome do administrador
   * @param {*} email - Email do administrador
   * @param {*} nascimento - Data de nascimento do administrador
   * @param {*} role - Papel do usuário no sistema (padrão é "admin")
   * @param {*} ativo  - Indica se o usuário está ativo (padrão é "true")
   */
  constructor(nome, email, nascimento, role = "admin", ativo = "true") {
    super(nome, email, nascimento, role, ativo);
  }

  /**
   * Sobrescrever o método exibirInfos da classe User.
   * @returns {string} - Informações formatadas do administrador.
   */

  exibirInfos() {
    const infos = super.exibirInfos();
    return `admin - ${infos}`;
  }

  /**
   * Cria um novo curso com o nome e quantidade de vagas especificados.
   * @param {string} nomeCurso - Nome do curso a ser criado.
   * @param {number} qtdVagas - Quantidade de vagas disponíveis no curso.
   * @returns {string} - Mensagem de confirmação da criação do curso.
   */

  criarCurso(nomeCurso, qtdVagas) {
    return `curso ${nomeCurso} criado com ${qtdVagas} vagas.`;
  }
}
