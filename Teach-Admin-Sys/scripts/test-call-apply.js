function exibeInfos() {
  console.log(this.nome, this.email);
}

const user = {
  nome: "John Doe",
  email: "M@m.com",
};

exibeInfos.call(user); // John Doe

//

function user(nome, email) {
  this.nome = nome;
  this.email = email;

  this.exibeInfos = function () {
    console.log(this.nome, this.email);
  };
}

const newUser = new user("Morgan", "m@m.com");

const outroUser = {
  nome: "Marena",
  email: "r@r.com",
};

newUser.exibeInfos(); // Morgan
newUser.exibeInfos.call(outroUser); // Marena

// Exemplo com apply

function exibeInfosApply(idade, cidade) {
  console.log("usuario: ${nome}, email ${email}");
}

const user = {
  nome: "John Doe",
  email: "j@j.com",
  executaFuncao: function (fn) {
    fn.apply(user, [this.nome, this.email]);
  },
};
user.executaFuncao(exibeMensagem); // usuario: John Doe, email j@j.com
