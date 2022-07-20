import {Alpha, Digits, Functions, Generals, Specials} from "../src"

describe("Test import", () => {
 it("test lower case", () => {
  expect(Alpha.UpperCase.A.keyCode).toBe(65)
 });

 it("test upper case", () => {
  expect(Alpha.LowerCase.A.keyCode).toBe(97);
 })

 it("test digit", () => {
  expect(Digits.ONE.keyCode).toBe(49);
 })

 it("test special", () => {
  expect(Specials.ASTERISK.keyCode).toBe(42);
 })

 it("test function", () => {
  expect(Functions.F1.keyCode).toBe(112);
 })

 it("test generals", () => {
  expect(Generals.ALT_LEFT.keyCode).toBe(18);
 })
})