const user = {
  nome: "John Doe",
  email: "john@gmail.com",
  nascimento: "2024-01-01",
  role: "estudante",
  ativo: true, // por padrão
  exibirInfos: function () {
    console.log(this.nome, this.email);
  },
};
