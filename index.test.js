const { reverse, capitalize, add, sub, mul, div,Calculator,caesarCipher,analyzeArray} = require("./index");

test("firstcharaterto", () => {
  expect(capitalize("string")).toBe("String");
});
test("reverse string", () => {
  expect(reverse("string")).toBe("gnirts");
});
test("addition tobe", () => {
  expect(add(2, 3)).toBe(5);
});
test("addition tobe", () => {
  expect(sub(3, 3)).toBe(0);
});
test("addition tobe", () => {
  expect(mul(3, 3)).toBe(9);
});
test("addition tobe", () => {
  expect(div(3, 3)).toBe(1);
});
test("", () => {
  const calculator = Calculator();
  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.sub(3, 3)).toBe(0);
  expect(calculator.mul(3, 5)).toBe(15);
  expect(calculator.div(5, 5)).toBe(1);
});
test(" analaysing",()=>{
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
})
});


test("Caesar Cipher of a normal string", () => {
  expect(caesarCipher("pqrst", 1)).toBe("qrstu");
});
