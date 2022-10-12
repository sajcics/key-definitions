import {
  Alpha,
  Digits,
  Functions,
  Generals,
  Specials,
  Layout_CRO,
} from "../";
import { Numpad } from "../src/layouts/us";
import { CODES } from "../types";

describe("Test import", () => {
  describe("US layout", () => {
    it("test lower case", () => {
      expect(Alpha.UpperCase.A.code).toBe("KeyA");
      expect(Alpha.UpperCase.A.key).toBe("A");
    });

    it("test upper case", () => {
      expect(Alpha.LowerCase.A.code).toBe("KeyA");
      expect(Alpha.LowerCase.A.key).toBe("a");
    });

    it("test digit", () => {
      expect(Digits.ONE.code).toBe("Digit1");
      expect(Digits.ONE.key).toBe("1");
    });

    it("test function", () => {
      expect(Functions.F1.code).toBe("F1");
      expect(Functions.F1.key).toBe("F1");
    });

    it("test generals", () => {
      expect(Generals.ALT_LEFT.code).toBe("AltLeft");
      expect(Generals.ALT_LEFT.key).toBe("Alt");
    });

    it("test special", () => {
      expect(Specials.ASTERISK.code).toBe(`${CODES.DIGIT}8`);
      expect(Specials.ASTERISK.key).toBe("*");
    });


    it("test NUMPAD case", () => {
      expect(Numpad.ZERO.key).toBe("0");
      expect(Numpad.ARROW_DOWN.key).toBe("ArrowDown");
    });

  });

  describe("CRO Layout", () => {
    it("test lower case", () => {
      expect(Layout_CRO.Alpha.UpperCase.A.code).toBe("KeyA");
      expect(Layout_CRO.Alpha.UpperCase.A.key).toBe("A");
    });

    it("test upper case", () => {
      expect(Layout_CRO.Alpha.LowerCase.A.code).toBe("KeyA");
      expect(Layout_CRO.Alpha.LowerCase.A.key).toBe("a");
    });

    it("test lower case - croatian special character", () => {
      expect(Layout_CRO.Alpha.UpperCase.Č.code).toBe(CODES.SEMICOLON);
      expect(Layout_CRO.Alpha.UpperCase.Č.key).toBe("Č");
    });

    it("test upper case - croatian special character", () => {
      expect(Layout_CRO.Alpha.LowerCase.Č.code).toBe(CODES.SEMICOLON);
      expect(Layout_CRO.Alpha.LowerCase.Č.key).toBe("č");
    });
  });
});
