/* eslint-disable no-undef */
import Admin from "../src/models/Admin.js";
// If running outside Jest, uncomment the next line to import expect from jest
// import { expect } from '@jest/globals';

describe("Admin Class", () => {
  it('should create an Admin instance with role as "admin"', () => {
    const admin = new Admin("Rodrigo", "r@r.com", "2024-01-01");
    expect(admin.nome).toBe("Rodrigo");

    expect(admin.role).toBe("admin");
  });

  it("should return admin info", () => {
    const admin = new Admin("Rodrigo", "r@r.com", "2024-01-01");

    expect(admin.exibirInfos()).toBe("admin - dados admin: Rodrigo, admin");
  });

  it("should create a course with specified name and number of slots", () => {
    const admin = new Admin("Rodrigo", "r@r.com", "2024-01-01");

    expect(admin.criarCurso("JavaScript", 20)).toBe(
      "curso JavaScript criado com 20 vagas."
    );
  });
});
