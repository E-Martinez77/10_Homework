const Intern = require("../classes/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("Should create a new Intern", () => {
      const testIntern = new Intern(
        "Scott",
        "5315",
        "scott@merkin.com",
        "University of Westview"
      );
      expect(testIntern.name).toEqual("Scott");
    });
  });
});
