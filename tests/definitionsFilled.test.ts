import {
  LowerCase, UpperCase 
}from "../src/base/alpha";
import * as Functions from "../src/base/Functions";
import * as Generals from "../src/base/Generals";
import * as Specials from "../src/base/Specials";
import * as Digits from "../src/base/Digits";
import * as Numpad from "../src/base/numpad";

const checkDefinition = (keyDefinitions, property) => {
  for (const keyDefinition in keyDefinitions) {
    if (keyDefinition === "__esModule") {
      continue;
    }
    it(`test ${keyDefinition}`, () => {
      expect(keyDefinitions[keyDefinition][property]).toBeDefined();
    });
  }
};

const keyDefinitionsList = {
  AlphaLowerCase: LowerCase,
  AlphaUpperCase: UpperCase,
  Functions,
  Generals,
  Specials,
  Digits,
  Numpad
};


describe("Check 'keyCode' definitions", () => {
  for (const keyDefinitions in keyDefinitionsList) {
    describe(`Check ${keyDefinitions}`, () => {
      checkDefinition(keyDefinitionsList[keyDefinitions], "keyCode");
    });
  }
 
});

describe("Check 'code' definition", () => {
  for (const keyDefinitions in keyDefinitionsList) {
    describe(`Check ${keyDefinitions}`, () => {
      checkDefinition(keyDefinitionsList[keyDefinitions], "code");
    });
  }
});

describe("Check 'key' definition", () => {
  for (const keyDefinitions in keyDefinitionsList) {
    describe(`Check ${keyDefinitions}`, () => {
      checkDefinition(keyDefinitionsList[keyDefinitions], "key");
    });
  }
});
