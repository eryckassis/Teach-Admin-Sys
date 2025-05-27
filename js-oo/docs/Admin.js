import user from "./User.js";

class Admin extends user {
  constructor(name, email, birthDate, role = "admin", active = true) {
    super(name, email, birthDate, role, active);
  }
}
