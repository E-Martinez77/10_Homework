const Manager = require("../classes/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("Should create a new Manager", () => {
      const testManager = new Manager(
        "Scott",
        "5315",
        "scott@merkin.com",
        "801-555-5555"
      );
      expect(testManager.name).toEqual("Scott");
    });
  });
});
