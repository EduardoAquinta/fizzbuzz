const fizzbuzz = require("./fizz-buzz")

describe("Fizz Buzz Unit Testing", () => {
    it("When I fizzbuzz number 1, I get back a string representing it", () => {
        let input = 1;
        expect(fizzbuzz(input)).toBe("1");
    })
})