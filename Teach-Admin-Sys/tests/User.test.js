import User from "../src/models/User.js";

export default class UserTest {
  constructor(nome, email, nascimento, role = "estudante", ativo = true) {
    this.nome = nome.trim();
    this.email = email.trim();
    this.nascimento = nascimento;
    this.role = role;
    this.ativo = ativo;
  }
}

it("should throw an error when trying to get an undefined name", () => {
  const user = new User();
  expect(() => user.nome).toThrow("Nome não definido");
});

it("should update the user name", () => {
  const user = new User("Juliana", "j@j.com", "2024-01-01");
  user.nome = "Ana";
  expect(user.nome).toBe("Ana");
});

it("should return correct info for role estudante", () => {
  const user = new User("Juliana", "j@j.com", "2024-01-01", "estudante");
  expect(user.exibirInfos()).toBe("dados estudante: Juliana");
});
