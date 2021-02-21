const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Engineer";
    this.gitHub = gitHub;
  }
  getGitHub() {
    console.log(this.gitHub);
  }
}

module.exports = Engineer;

let Scott = new Engineer("Scott", "5315", "scott@merkin.com", "E-Martinez77");

console.log("----------");
console.log(Scott);
console.log("----------");
Scott.getName();
console.log("----------");
Scott.getId();
console.log("----------");
Scott.getEmail();
console.log("----------");
Scott.getRole();
console.log("----------");
Scott.getGitHub();
console.log("----------");
