const { describe } = require("yargs");
const { default: Card } = require("./Card");

describe("Given a Card component constructor", () => {
  describe("When it receives a div container, a 'test-Component' class and a 'span' tag", () => {
    test("then it should render a span element with a 'test-Component'class inside de div container", () => {
      //arrange
      const container = document.createElement("div");
      const className = "test-Component";
      const tag = "span";

      //Act
      const p = new Component(container, className, tag);
      const result = container.querySelector("span.test-Component");

      //Assert
      expect(result).not.toBeNull();
    });
  });
});
