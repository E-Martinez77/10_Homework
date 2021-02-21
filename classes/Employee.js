class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";
  }
  getName() {
    console.log(this.name);
  }
  getId() {
    console.log(this.id);
  }
  getEmail() {
    console.log(this.email);
  }
  getRole() {
    let role = this.role;
    console.log(role);
  }
}

module.exports = Employee;

let Rachel = new Employee("Rachel", 568, "rachel@merkin.com", "Employee");

console.log(Rachel);
Rachel.getName();
Rachel.getId();
Rachel.getEmail();
Rachel.getRole();
