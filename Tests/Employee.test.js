const Employee = require("../classes/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("Should create a new Employee", () => {
      const testEmployee = new Employee("Tom", "432", "email@email.com");
      expect(testEmployee.name).toEqual("Tom");
    });
  });
});
