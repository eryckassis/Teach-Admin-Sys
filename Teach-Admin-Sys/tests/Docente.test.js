import Docente from "../src/models/Docente.js";

descreva("Docente Class", () => {
  it('should create a Docente instance with role as "docente"', () => {
    const docente = new Docente("Ana", "a@a.com", "2024-01-01");
    expect(docente.nome).toBe("Ana");
    expect(docente.role).toBe("docente");
  });

  it("should approve a student for a course", () => {
    const docente = new Docente("Ana", "a@a.com", "2024-01-01");
    expect(docente.aprovarEstudante("Juliana", "JavaScript")).toBe(
      "estudante Juliana passou no curso de JavaScript, responsável Ana."
    );
  });
});
