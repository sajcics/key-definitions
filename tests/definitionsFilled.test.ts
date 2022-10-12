import {Alpha, Functions, Generals, Specials, Digits, Numpad} from "../src";


const checkDefinition = (keyDefinitions, property) => {
 for (const keyDefinition in keyDefinitions) {
  if (keyDefinition === "__esModule") {
   continue;
  }
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
 NumpadGeneral: Numpad.Generals,
 NumpadDigits: Numpad.Digits
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

describe("Check 'key' definition", () => {
 for (const keyDefinitions in keyDefinitionsList) {
  describe(`Check ${keyDefinitions}`, () => {
   checkDefinition(keyDefinitionsList[keyDefinitions], "key");
  })
 }
})
