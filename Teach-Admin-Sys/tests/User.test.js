import User from "../src/models/User.js";

describe("User Class", () => {
  it("should create a user with default role 'estudante'", () => {
    const user = new User("Juliana", "j@j.com", "2024-01-01");
    expect(user.nome).toBe("Juliana");
    expect(user.email).toBe("J@J.com");
    expect(user.role).toBe("estudante");
    expect(user.ativo).toBe(true);
  });
});

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
