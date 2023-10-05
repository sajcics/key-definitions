import { compare } from "../helpers";
import {
  LowerCase, QUESTION_MARK, ALT_LEFT, SHIFT_LEFT, SHIFT_RIGHT, SPACE
} from "../src";

describe("Test helper compare", () => {
  describe("test by KeyboardEvent", () => {
    it("test event 'a' to be 'a' key interface", () => {
      const event = {
        key: "a",
        keyCode: 65,
        code: "KeyA",
        altKey: false,
        ctrlKey: false,
        location: 1,
        metaKey: false,
        repeat: false,
        shiftKey: false,
        isComposing: false
      };
      expect(compare(event as KeyboardEvent, LowerCase.A)).toBeTruthy();
    });

    it("test event 'z' to be 'a' key interface", () => {
      const event = {
        key: "z",
        keyCode: 90,
        code: "KeyZ",
        altKey: false,
        ctrlKey: false,
        location: 1,
        metaKey: false,
        repeat: false,
        shiftKey: false,
        isComposing: false
      };
      expect(compare(event as KeyboardEvent, LowerCase.A)).toBeFalsy();
    });

    it("test malformed event interface to be 'a' key interface", () => {
      const event = { keyCode: 90 };
      expect(compare(event as KeyboardEvent, LowerCase.A)).toBeFalsy();
    });

    it("test event '?' to be question mark interface", () => {
      const event = {
        key: "?",
        keyCode: 191,
        code: "Slash",
        altKey: false,
        ctrlKey: false,
        location: 1,
        metaKey: false,
        repeat: false,
        shiftKey: false,
        isComposing: false
      };
      expect(compare(event as KeyboardEvent, QUESTION_MARK)).toBeTruthy();
    });

    it("test event 'ShiftLeft' to be 'ShiftLeft' key interface", () => {
      const event = {
        key: "Shift",
        keyCode: 16,
        code: "ShiftLeft",
        altKey: false,
        ctrlKey: false,
        location: 1,
        metaKey: false,
        repeat: false,
        shiftKey: false,
        isComposing: false
      };
      expect(compare(event as KeyboardEvent, SHIFT_LEFT)).toBeTruthy();
    });

    it("test event 'ShiftLeft' to be 'ShiftRight' key interface", () => {
      const event = {
        key: "Shift",
        keyCode: 16,
        code: "ShiftLeft",
        altKey: false,
        ctrlKey: false,
        location: 1,
        metaKey: false,
        repeat: false,
        shiftKey: false,
        isComposing: false
      };
      expect(compare(event as KeyboardEvent, SHIFT_RIGHT)).toBeFalsy();
    });

    it("test event 'space' to be 'Space' key interface", () => {
      const event = {
        code: "Space",
        key: " ",
        keyCode: 32,
        altKey: false,
        ctrlKey: false,
        location: 1,
        metaKey: false,
        repeat: false,
        shiftKey: false,
        isComposing: false
      };

      expect(compare(event as KeyboardEvent, SPACE)).toBeTruthy();
    });
  });

  describe("test compare with array of values", () => {
    it("test event to matches at least one key interface", () => {
      const event = {
        key: "Shift",
        keyCode: 16,
        code: "ShiftRight",
        altKey: false,
        ctrlKey: false,
        location: 1,
        metaKey: false,
        repeat: false,
        shiftKey: false,
        isComposing: false
      };

      expect(
        compare(event as KeyboardEvent, [SHIFT_RIGHT, SHIFT_LEFT])
      ).toBeTruthy();
    });

    it("test event to not match any of the key interfaces", () => {
      const event = {
        key: "Shift",
        keyCode: 16,
        code: "ShiftRight",
        altKey: false,
        ctrlKey: false,
        location: 1,
        metaKey: false,
        repeat: false,
        shiftKey: false,
        isComposing: false
      };

      expect(compare(event as KeyboardEvent, [SPACE, ALT_LEFT])).toBeFalsy();
    });
  });
});
