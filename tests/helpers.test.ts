import { compare } from "../helpers";

describe("Test helper compare", () => {
  describe("test by KeyboardEvent", () => {
    it("test 'keyEvent' key 'a'", () => {
      const event = { key: "a", keyCode: 65, code: "KeyA" };
      expect(compare(event as KeyboardEvent, "a")).toBeTruthy();
    });

    it("test 'keyEvent' key 'z'", () => {
      const event = { key: "z", keyCode: 90, code: "KeyZ" };
      expect(compare(event as KeyboardEvent, "a")).toBeFalsy();
    });

    it("test malformed 'keyEvent' key 'z'", () => {
      const event = { keyCode: 90 };
      expect(compare(event as KeyboardEvent, "a")).toBeFalsy();
    });

    it("test 'keyEvent' key '?'", () => {
      const event = { key: "?", keyCode: 191, code: "Slash" };
      expect(compare(event as KeyboardEvent, "?")).toBeTruthy();
    });

    it("test 'keyEvent' key 'shift'", () => {
     const event = { key: "Shift", keyCode: 16, code: "ShiftLeft" };
     expect(compare(event as KeyboardEvent, "Shift")).toBeTruthy();
   });

   it("test 'keyEvent' key 'shift right'", () => {
    const event = { key: "Shift", keyCode: 16, code: "ShiftRight" };
    expect(compare(event as KeyboardEvent, "Shift")).toBeTruthy();
  });
  });

  describe("test by string", () => {
    it("test key 'z' case sensitive", () => {
      expect(compare("z", "z", true)).toBeTruthy();
    });

    it("test key 'a' case sensitive", () => {
      expect(compare("a", "A", true)).toBeFalsy();
    });

    it("test key 'Z' no case sensitive", () => {
      expect(compare("z", "Z")).toBeTruthy();
    });

    it("test key '!'", () => {
     expect(compare("!", "?")).toBeFalsy();
   });
  });
});
