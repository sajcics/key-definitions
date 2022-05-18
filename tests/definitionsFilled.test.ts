import {Alpha, Functions, Generals, Specials, Digits,NumPads} from "../src";


const checkDefinition = (keyDefinitions, property) => {
 for (const keyDefinition in keyDefinitions) {
  it(`test ${keyDefinition}`, () => {
   expect(keyDefinitions[keyDefinition][property]).toBeDefined();
  })
 }
}

const keyDefinitionsList = {
 AlphaLowerCase: Alpha.LowerCase,
 AlphaUpperCase: Alpha.UpperCase,
 Functions,
 Generals,
 Specials,
 Digits,
 NumPads
}

describe("Check 'keyCode' definitions", () => {
 for (const keyDefinitions in keyDefinitionsList) {
  describe(`Check ${keyDefinitions}`, () => {
   checkDefinition(keyDefinitionsList[keyDefinitions], "keyCode");
  })
 }
})

describe("Check 'code' definition", () => {
 for (const keyDefinitions in keyDefinitionsList) {
  describe(`Check ${keyDefinitions}`, () => {
   checkDefinition(keyDefinitionsList[keyDefinitions], "code");
  })
 }
})

describe("Check 'name' definition", () => {
 for (const keyDefinitions in keyDefinitionsList) {
  describe(`Check ${keyDefinitions}`, () => {
   checkDefinition(keyDefinitionsList[keyDefinitions], "name");
  })
 }
})
