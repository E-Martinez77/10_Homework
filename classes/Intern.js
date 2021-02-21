const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Intern";
    this.school = school;
  }
  getSchool() {
    console.log(this.school);
  }
}

module.exports = Intern;

let Scott = new Intern(
  "Scott",
  "5315",
  "scott@merkin.com",
  "Univeristy of Westview"
);

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
Scott.getSchool();
console.log("----------");
