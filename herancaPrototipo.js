const user = {
  nome: "John Doe",
  email: "J@J.com",
  nascimento: " 19/01/1990",
  role: " estudante",
  ativo: true,
  exibeInfos: function () {
    console.log(this.nome, this.email);
  },
};

const admin = {
  nome: "Heloise",
  email: "h@h.com",
  nascimento: " 20/01/1990",
  role: "admin",
  ativo: true,
  criarCurso: function () {
    console.log("curso criado");
  },
};
Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibeInfos();

// utilização NEW para a criação de um novo objeto:

function user() {}
user.prototype.perfil = "estudante";
let estudante = new user();
console.log(estudante.perfil);
