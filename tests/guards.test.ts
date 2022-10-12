import { isCharacter } from "../types/guards";

describe("Test type guard isCharacter", () => {
  describe("Test by 'key'", () => {
    it("test 'a'", () => {
      expect(isCharacter("a")).toBeTruthy();
    });

    it("test 'Z'", () => {
      expect(isCharacter("Z")).toBeTruthy();
    });

    it("test '?'", () => {
      expect(isCharacter("?")).toBeFalsy();
    });

    it("test '1'", () => {
      expect(isCharacter("1")).toBeFalsy();
    });

    it("test 'č'", () => {
      expect(isCharacter("č")).toBeTruthy();
    });

    it("test 'Ž'", () => {
      expect(isCharacter("Ž")).toBeTruthy();
    });
  });

  describe("Test by 'code'", () => {
   it("test 'a'", () => {
     expect(isCharacter("KeyA")).toBeTruthy();
   });

   it("test 'Z'", () => {
     expect(isCharacter("KeyZ")).toBeTruthy();
   });

   it("test 'ENTER'", () => {
     expect(isCharacter("Enter")).toBeFalsy();
   });

   it("test 'a'", () => {
    expect(isCharacter("keyA")).toBeTruthy();
  });

   it("test '1'", () => {
     expect(isCharacter("Digit1")).toBeFalsy();
   });
 });


  describe("test by KeyboardEvent", () => {
    it("test 'keyEvent' key 'a'", () => {
      const event = { key: "a", keyCode: 65, code: "KeyA" };
      expect(isCharacter(event as KeyboardEvent)).toBeTruthy();
    });

    it("test 'keyEvent' key 'Z'", () => {
      const event = { key: "Z" };
      expect(isCharacter(event as KeyboardEvent)).toBeFalsy();
    });

    it("test 'keyEvent' key '?'", () => {
      const event = { key: "?" };
      expect(isCharacter(event as KeyboardEvent)).toBeFalsy();
    });

    it("test 'keyEvent' key '1'", () => {
      const event = { key: "1", keyCode: 49, code: "Digit1" };
      expect(isCharacter(event as KeyboardEvent)).toBeFalsy();
    });
  });

  describe("test by number", () => {
    it("test 'keyEvent' key 'a'", () => {
      expect(isCharacter(65)).toBeTruthy();
    });

    it("test 'keyEvent' key 'Z'", () => {
      expect(isCharacter(90)).toBeTruthy();
    });

    it("test 'keyEvent' key '?'", () => {
      expect(isCharacter(191)).toBeFalsy();
    });

    it("test 'keyEvent' key '1'", () => {
       expect(isCharacter(49)).toBeFalsy();
    });
  });
});
