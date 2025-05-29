import User from "../src/models/User.js";

describe("Validation Tests", () => {
  it("should throw an error for invalid email format", () => {
    expect(() => {
      new User("Ana", "emailinvalido", "2024-01-01");
    });
  });

  it("should throw an error for empty name", () => {
    expect(() => {
      new User("", "a@a.com", "2024-01-01");
    });
  });

  it("should throw an error for invalid date format", () => {
    expect(() => {
      new User("Ana", "a@a.com", "data-invalida");
    });
  });
});
