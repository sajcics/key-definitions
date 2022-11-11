import {
  UpperCase,
  LowerCase,
  ONE,
  F1,
  ALT_LEFT,
  ASTERISK,
  Layout_CRO,
  Layout_DE
} from "../src";
import { Numpad } from "../src/layouts/us";
import { CODES } from "../types";

describe("Test import", () => {
  describe("US layout", () => {
    it("test upper case", () => {
      expect(UpperCase.A.code).toBe("KeyA");
      expect(UpperCase.A.key).toBe("A");
    });

    it("test upper case", () => {
      expect(LowerCase.A.code).toBe("KeyA");
      expect(LowerCase.A.key).toBe("a");
    });

    it("test digit", () => {
      expect(ONE.code).toBe("Digit1");
      expect(ONE.key).toBe("1");
    });

    it("test function", () => {
      expect(F1.code).toBe("F1");
      expect(F1.key).toBe("F1");
    });

    it("test generals", () => {
      expect(ALT_LEFT.code).toBe("AltLeft");
      expect(ALT_LEFT.key).toBe("Alt");
    });

    it("test special", () => {
      expect(ASTERISK.code).toBe(`${CODES.DIGIT}8`);
      expect(ASTERISK.key).toBe("*");
    });


    it("test NUMPAD case", () => {
      expect(Numpad.ZERO.key).toBe("0");
      expect(Numpad.ARROW_DOWN.key).toBe("ArrowDown");
    });

  });

  describe("CRO Layout", () => {
    it("test upper case", () => {
      expect(Layout_CRO.UpperCase.A.code).toBe("KeyA");
      expect(Layout_CRO.UpperCase.A.key).toBe("A");
    });

    it("test lower case", () => {
      expect(Layout_CRO.LowerCase.A.code).toBe("KeyA");
      expect(Layout_CRO.LowerCase.A.key).toBe("a");
    });

    it("test upper case - croatian special character", () => {
      expect(Layout_CRO.UpperCase.Č.code).toBe(CODES.SEMICOLON);
      expect(Layout_CRO.UpperCase.Č.key).toBe("Č");
    });

    it("test upper case - croatian special character", () => {
      expect(Layout_CRO.LowerCase.Č.code).toBe(CODES.SEMICOLON);
      expect(Layout_CRO.LowerCase.Č.key).toBe("č");
    });

    it("test function", () => {
      expect(Layout_CRO.F1.code).toBe("F1");
      expect(Layout_CRO.F1.key).toBe("F1");
    });

    it("test generals", () => {
      expect(Layout_CRO.TAB.code).toBe("Tab");
      expect(Layout_CRO.TAB.key).toBe("Tab");
    });

    it("test specials", () => {
      expect(Layout_CRO.QUESTION_MARK.code).toBe("Slash");
      expect(Layout_CRO.QUESTION_MARK.key).toBe("?");
    });

    it("test specials", () => {
      expect(Layout_CRO.ZERO.code).toBe("Digit0");
      expect(Layout_CRO.ZERO.key).toBe("0");
    });
  });

  describe("DE Layout", () => {
    it("test upper case", () => {
      expect(Layout_DE.UpperCase.A.code).toBe("KeyA");
      expect(Layout_DE.UpperCase.A.key).toBe("A");
    });

    it("test lower case", () => {
      expect(Layout_DE.LowerCase.A.code).toBe("KeyA");
      expect(Layout_DE.LowerCase.A.key).toBe("a");
    });

    it("test upper case - croatian special character", () => {
      expect(Layout_DE.UpperCase.UMLAUT_A.code).toBe(CODES.QUOTE);
      expect(Layout_DE.UpperCase.UMLAUT_A.key).toBe("Ä");
    });

    it("test lower case - croatian special character", () => {
      expect(Layout_DE.LowerCase.UMLAUT_A.code).toBe(CODES.QUOTE);
      expect(Layout_DE.LowerCase.UMLAUT_A.key).toBe("ä");
    });

    it("test function", () => {
      expect(Layout_DE.F1.code).toBe("F1");
      expect(Layout_DE.F1.key).toBe("F1");
    });

    it("test generals", () => {
      expect(Layout_DE.TAB.code).toBe("Tab");
      expect(Layout_DE.TAB.key).toBe("Tab");
    });

    it("test specials", () => {
      expect(Layout_DE.HASH.code).toBe("Backslash");
      expect(Layout_DE.HASH.key).toBe("#");
    });

    it("test specials", () => {
      expect(Layout_CRO.ZERO.code).toBe("Digit0");
      expect(Layout_CRO.ZERO.key).toBe("0");
    });
  });
});
