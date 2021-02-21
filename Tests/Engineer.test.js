const Engineer = require("../classes/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("Should create a new Engineer", () => {
      const testEngineer = new Engineer(
        "Scott",
        "5315",
        "scott@merkin.com",
        "E-Martinez77"
      );
      expect(testEngineer.name).toEqual("Scott");
    });
  });
});
