const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Manager";
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    console.log(this.officeNumber);
  }
  //   getRole() {
  //     console.log(this.role);
  //   }
}

module.exports = Manager;

let Scott = new Manager("Scott", "5315", "scott@merkin.com", "801-555-5555");

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
Scott.getOfficeNumber();
console.log("----------");
