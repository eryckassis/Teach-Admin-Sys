export default class User {
  constructor(name, email, birthDate, role, active = true) {
    this.name = name;
    this.email = email;
    this.birthDate = birthDate;
    this.role = role || "estudante";
    this.active = active;
  }

  exibirInfos() {
    return `${this.name} - ${this.email}`;
  }
}

const newUser = new User(
  "baiano",
  "baianagens@gmail.com ",
  " 19/01/1990",
  "estudante"
);
console.log({
  isPrototype: User.prototype.isPrototypeOf(newUser),
  userInfo: newUser.exibirInfos(),
});

// utlizado Objeto consolidado para informaçoes de objeto,
// e assim eliminando a necessidade de criar varios console.log
