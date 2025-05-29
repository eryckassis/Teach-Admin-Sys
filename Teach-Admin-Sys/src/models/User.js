// Classe base para representar um usuário no sistema de administração de ensino
export default class User {
  // Propriedades privadas
  #nome;
  #email;
  #nascimento;
  #role;
  #ativo;

  /**
   * Construtor da classe User
   * @param {string} nome - Nome do usuário
   * @param {string} email - Email do usuário
   * @param {string} nascimento - Data de nascimento do usuário
   * @param {string} role - Papel do usuário no sistema (estudante, docente, admin)
   * @param {boolean} ativo - Indica se o usuário está ativo
   */

  constructor(nome, email, nascimento, role, ativo = true) {
    this.#nome = nome;
    this.#email = email;
    this.#nascimento = nascimento;
    this.#role = role || "estudante"; // Papel padrão é 'estudante'
    this.#ativo = ativo;
  }

  // métodos getters e setters

  /**
   * * Retorna o nome dp usuário.
   * @throws {Erros} Lança um erro se o nome não estiver definido.
   */

  get nome() {
    if (this.#nome === undefined) {
      throw new Error("Nome não definido");
    }
    return this.#nome;
  }

  /**
   * * Define um novo nome para o usuário.
   * @param {string} novoNome - O novo nome do usuário.
   */
  set nome(novoNome) {
    this.#nome = novoNome;
  }

  // ! Outros getters

  get email() {
    return this.#email;
  }
  get nascimento() {
    return this.#nascimento;
  }
  get role() {
    return this.#role;
  }
  get ativo() {
    return this.#ativo;
  }

  /**
   * Exibe informações do usuário baseado no papel
   * @returns {string} - Informações do usuário formatadas.
   */

  exibirInfos() {
    if (this.role === "estudante") {
      return `dados estudante: ${this.nome}`;
    }
    if (this.role === "admin") {
      return `dados admin: ${this.nome}, ${this.role}`;
    }
    if (this.role === "docente") {
      return `dados docente: ${this.nome}, ${this.email}`;
    }
  }

  /**
   * Método estático para exibir informações básicas
   * @param {string} nome - Nome do usuário
   * @param {string} email - Email do usuário
   * @returns {string} - Informações formatadas.
   */
  static exibirInfos(nome, email) {
    return ` ${nome}, ${email}`;
  }
}
// ? Exemplo de uso
// ? const novoUser = new User("Juliana", "
