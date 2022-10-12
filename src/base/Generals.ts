import { KeyInterface, KeyDefaults, CODES } from "../../types";

export const TAB: KeyInterface = {
  keyCode: 9,
  hex: "0x09",
  code: CODES.TAB,
  key: CODES.TAB,
  ...KeyDefaults,
};

export const ENTER: KeyInterface = {
  keyCode: 13,
  hex: "0x0D",
  code: CODES.ENTER,
  key: CODES.ENTER,
  ...KeyDefaults,
};

export const SHIFT_LEFT: KeyInterface = {
  keyCode: 16,
  hex: "0x10",
  code: CODES.SHIFT_LEFT,
  key: CODES.SHIFT,
  ...KeyDefaults,
  isShiftKey: true,
};

export const SHIFT_RIGHT: KeyInterface = {
  keyCode: 16,
  hex: "0x10",
  code: CODES.SHIFT_RIGHT,
  key: CODES.SHIFT,
  ...KeyDefaults,
  isShiftKey: true,
};

export const CTRL_LEFT: KeyInterface = {
  keyCode: 17,
  hex: "0x11",
  code: CODES.CONTROL_LEFT,
  key: CODES.CONTROL,
  ...KeyDefaults,
  isCtrlKey: true,
};

export const CTRL_RIGHT: KeyInterface = {
  keyCode: 17,
  hex: "0x11",
  code: CODES.CONTROL_RIGHT,
  key: CODES.CONTROL,
  ...KeyDefaults,
  isCtrlKey: true,
};

export const ALT_LEFT: KeyInterface = {
  keyCode: 18,
  hex: "0x12",
  code: CODES.ALT_LEFT,
  key: CODES.ALT,
  ...KeyDefaults,
  isAltKey: true,
};

export const ALT_RIGHT: KeyInterface = {
  keyCode: 18,
  hex: "0x12",
  code: CODES.ALT_RIGHT,
  key: CODES.ALT,
  ...KeyDefaults,
  isAltKey: true,
};

export const CAPS_LOCK: KeyInterface = {
  keyCode: 20,
  hex: "0x14",
  code: CODES.CAPS_LOCK,
  key: CODES.CAPS_LOCK,
  ...KeyDefaults,
};

export const ESC: KeyInterface = {
  keyCode: 27,
  hex: "0x1B",
  code: CODES.ESCAPE,
  key: CODES.ESCAPE,
  ...KeyDefaults,
};

export const SPACE: KeyInterface = {
  keyCode: 32,
  hex: "0x20",
  code: CODES.SPACE,
  key: " ",
  ...KeyDefaults,
};

export const PAGE_UP: KeyInterface = {
  keyCode: 33,
  hex: "0x21",
  code: CODES.PAGE_UP,
  key: CODES.PAGE_UP,
  ...KeyDefaults,
};

export const PAGE_DOWN: KeyInterface = {
  keyCode: 34,
  hex: "0x22",
  code: CODES.PAGE_DOWN,
  key: CODES.PAGE_DOWN,
  ...KeyDefaults,
};

export const END: KeyInterface = {
  keyCode: 35,
  hex: "0x23",
  code: CODES.END,
  key: CODES.END,
  ...KeyDefaults,
};

export const HOME: KeyInterface = {
  keyCode: 36,
  hex: "0x24",
  code: CODES.HOME,
  key: CODES.HOME,
  ...KeyDefaults,
};

export const ARROW_LEFT: KeyInterface = {
  keyCode: 37,
  hex: "0x25",
  code: CODES.ARROW_LEFT,
  key: CODES.ARROW_LEFT,
  ...KeyDefaults,
};

export const ARROW_UP: KeyInterface = {
  keyCode: 38,
  hex: "0x26",
  code: CODES.ARROW_UP,
  key: CODES.ARROW_UP,
  ...KeyDefaults,
};

export const ARROW_RIGHT: KeyInterface = {
  keyCode: 39,
  hex: "0x27",
  code: CODES.ARROW_RIGHT,
  key: CODES.ARROW_RIGHT,
  ...KeyDefaults,
};

export const  ARROW_DOWN: KeyInterface = {
  keyCode: 40,
  hex: "0x28",
  code: CODES. ARROW_DOWN,
  key: CODES. ARROW_DOWN,
  ...KeyDefaults,
};

export const PRINT_SCREEN: KeyInterface = {
  keyCode: [44, 124, 42],
  keyCodeDefinitions: [
    {
      os: "windows",
      browser: "ie",
      code: 44,
      hex: "0x2C"
    },
    {
      os: "windows",
      browser: "chrome",
      code: 44,
      hex: "0x2C"
    },
    {
      os: "mac",
      browser: "chrome",
      code: 124,
      hex: "0x7C"
    },
    {
      os: "linux",
      browser: "chromium",
      code: 42,
      hex: "0x2A"
    },
    {
      os: "mac",
      browser: "safari",
      code: 124,
      hex: "0x7C"
    },
    {
      os: "windows",
      browser: "gecko",
      code: 44,
      hex: "0x2C"
    },
    {
      os: "mac",
      browser: "gecko",
      code: 44,
      hex: "0x2C"
    },
    {
      os: "linux",
      browser: "gecko",
      code: 42,
      hex: "0x2A"
    },
  ],
  hex: ["0x2C", "0x7C", "0x2A"],
  code: CODES.PRINT_SCREEN,
  key: CODES.PRINT_SCREEN,
  ...KeyDefaults,
};

export const INSERT: KeyInterface = {
  keyCode: 45,
  hex: "0x2D",
  code: CODES.INSERT,
  key: CODES.INSERT,
  ...KeyDefaults,
};

export const DELETE: KeyInterface = {
  keyCode: 46,
  hex: "0x2E",
  code: CODES.DELETE,
  key: CODES.DELETE,
  ...KeyDefaults,
};

export const NUM_LOCK: KeyInterface = {
  keyCode: 144,
  hex: "0x90",
  code: CODES.NUM_LOCK,
  key: CODES.NUM_LOCK,
  ...KeyDefaults,
};

export const SCROLL_LOCK: KeyInterface = {
  keyCode: [145, 125],
  keyCodeDefinitions: [
    {
      os: "windows",
      browser: "ie",
      code: 145,
      hex: "0x91"
    },
    {
      os: "windows",
      browser: "chrome",
      code: 145,
      hex: "0x91"
    },
    {
      os: "mac",
      browser: "chrome",
      code: 125,
      hex: "0x7D"
    },
    {
      os: "linux",
      browser: "chromium",
      code: 145,
      hex: "0x91"
    },
    {
      os: "mac",
      browser: "safari",
      code: 125,
      hex: "0x7D"
    },
    {
      os: "windows",
      browser: "gecko",
      code: 145,
      hex: "0x91"
    },
    {
      os: "mac",
      browser: "gecko",
      code: 145,
      hex: "0x91"
    },
    {
      os: "linux",
      browser: "gecko",
      code: 145,
      hex: "0x91"
    },
  ],
  hex: ['0x91', '0x7D'],
  code: CODES.SCROLL_LOCK,
  key: CODES.SCROLL_LOCK,
  ...KeyDefaults,
};

export const HELP: KeyInterface = {
  keyCode: [45, 47, 6],
  keyCodeDefinitions: [
    {
      os: "windows",
      browser: "ie",
      code: null,
      hex: null
    },
    {
      os: "windows",
      browser: "chrome",
      code: null,
      hex: null
    },
    {
      os: "mac",
      browser: "chrome",
      code: 45,
      hex: "0x2D"
    },
    {
      os: "linux",
      browser: "chromium",
      code: 47,
      hex: "0x2F"
    },
    {
      os: "mac",
      browser: "safari",
      code: 45,
      hex: "0x2D",
    },
    {
      os: "windows",
      browser: "gecko",
      code: null,
      hex: null
    },
    {
      os: "mac",
      browser: "gecko",
      code: 45,
      hex: "0x2D"
    },
    {
      os: "linux",
      browser: "gecko",
      code: 6,
      hex: "0x06"
    },
  ],
  hex: ["0x06", "0x2D", "0x2F"],
  code: CODES.HELP,
  key: CODES.HELP,
  ...KeyDefaults,
};

export const PAUSE: KeyInterface = {
  keyCode: [19, 126],
  keyCodeDefinitions: [
    {
      os: "windows",
      browser: "ie",
      code: 19,
      hex: "0x13"
    },
    {
      os: "windows",
      browser: "chrome",
      code: 19,
      hex: "0x13"
    },
    {
      os: "mac",
      browser: "chrome",
      code: 126,
      hex: "0x7E"
    },
    {
      os: "linux",
      browser: "chromium",
      code: 19,
      hex: "0x13"
    },
    {
      os: "mac",
      browser: "safari",
      code: 126,
      hex: "0x7E"
    },
    {
      os: "windows",
      browser: "gecko",
      code: 19,
      hex: "0x13"
    },
    {
      os: "mac",
      browser: "gecko",
      code: 19,
      hex: "0x13"
    },
    {
      os: "linux",
      browser: "gecko",
      code: 19,
      hex: "0x13"
    },
  ],
  hex: ["0x13", "0x7E"],
  code: CODES.SCROLL_LOCK,
  key: CODES.SCROLL_LOCK,
  ...KeyDefaults,
};

