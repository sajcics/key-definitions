import {
  KeyDefaults, CODES, KeyInterface 
} from "../../../types";


/** @checked 21 July 2022 */
const ENTER: KeyInterface = {
  keyCode: 13,
  hex: "0x0D",
  code: `${CODES.NUMPAD}Enter`,
  key: CODES.ENTER,
  ...KeyDefaults
};

const EQUAL: KeyInterface = {
  keyCode: [12, 187, 61],
  keyCodeDefinitions: [
    {
      os: "windows",
      browser: "ie",
      code: 12,
      hex: "0x0C"
    },
    {
      os: "windows",
      browser: "chrome",
      code: 12,
      hex: "0x0C"
    },
    {
      os: "mac",
      browser: "chrome",
      code: 187,
      hex: "0xBB"
    },
    {
      os: "linux",
      browser: "chromium",
      code: 187,
      hex: "0xBB"
    },
    {
      os: "mac",
      browser: "safari",
      code: 187,
      hex: "0xBB"
    },
    {
      os: "windows",
      browser: "gecko",
      code: 12,
      hex: "0x0C"
    },
    {
      os: "mac",
      browser: "gecko",
      code: 61,
      hex: "0x3D"
    },
    {
      os: "linux",
      browser: "gecko",
      code: 61,
      hex: "0x3D"
    }
  ],
  hex: ["0x0C", "0xBB", "0x3D"],
  code: `${CODES.NUMPAD}${CODES.EQUAL}`,
  key: "=",
  ...KeyDefaults
};

/** @check */
const BACKSPACE: KeyInterface = {
  keyCode: undefined,
  code: `${CODES.NUMPAD}Backspace`,
  key: "",
  ...KeyDefaults
};

const MULTIPLY: KeyInterface = {
  keyCode: 106,
  hex: "0x6A",
  code: `${CODES.NUMPAD}Multiply`,
  key: "*",
  ...KeyDefaults
};

const ADD: KeyInterface = {
  keyCode: 107,
  hex: "0x6B",
  code: `${CODES.NUMPAD}Add`,
  key: "+",
  ...KeyDefaults
};

const SUBSTRACT: KeyInterface = {
  keyCode: 109,
  hex: "0x6D",
  code: `${CODES.NUMPAD}Substract`,
  key: "-",
  ...KeyDefaults
};

const COMMA: KeyInterface = {
  keyCode: [194, 188, 108],
  keyCodeDefinitions: [
    {
      os: "windows",
      browser: "ie",
      code: 194,
      hex: "0xC2"
    },
    {
      os: "windows",
      browser: "chrome",
      code: 194,
      hex: "0xC2"
    },
    {
      os: "mac",
      browser: "chrome",
      code: 188,
      hex: "0xBC"
    },
    {
      os: "linux",
      browser: "chromium",
      code: null,
      hex: null
    },
    {
      os: "mac",
      browser: "safari",
      code: 188,
      hex: "0xBC"
    },
    {
      os: "windows",
      browser: "gecko",
      code: 194,
      hex: "0xC2"
    },
    {
      os: "mac",
      browser: "gecko",
      code: 108,
      hex: "0x6C"
    },
    {
      os: "linux",
      browser: "gecko",
      code: null,
      hex: null
    }
  ],
  hex: ["0x6C", "0xC2", "0xBC"],
  code: `${CODES.NUMPAD}Comma`,
  key: ",",
  ...KeyDefaults
};

const DIVIDE: KeyInterface = {
  keyCode: 111,
  hex: "0x6F",
  code: `${CODES.NUMPAD}Divide`,
  key: "/",
  ...KeyDefaults
};

const DECIMAL: KeyInterface = {
  keyCode: 110,
  hex: "0x6E",
  code: `${CODES.NUMPAD}Decimal`,
  key: "."
};

const ARROW_LEFT: KeyInterface = {
  keyCode: 37,
  hex: "0x25",
  code: `${CODES.NUMPAD}3`,
  key: CODES.ARROW_LEFT,
  ...KeyDefaults
};

const ARROW_UP: KeyInterface = {
  keyCode: 38,
  hex: "0x26",
  code: `${CODES.NUMPAD}8`,
  key: CODES.ARROW_UP,
  ...KeyDefaults
};

const ARROW_RIGHT: KeyInterface = {
  keyCode: 39,
  hex: "0x27",
  code: `${CODES.NUMPAD}6`,
  key: CODES.ARROW_RIGHT,
  ...KeyDefaults
};

const ARROW_DOWN: KeyInterface = {
  keyCode: 40,
  hex: "0x28",
  code: `${CODES.NUMPAD}2`,
  key: CODES. ARROW_DOWN,
  ...KeyDefaults
};

const INSERT: KeyInterface = {
  keyCode: 45,
  hex: "0x2D",
  code: `${CODES.NUMPAD}0`,
  key: CODES.INSERT,
  ...KeyDefaults
};

const END: KeyInterface = {
  keyCode: 35,
  hex: "0x23",
  code: `${CODES.NUMPAD}1`,
  key: CODES.END,
  ...KeyDefaults
};

const PAGE_DOWN: KeyInterface = {
  keyCode: 34,
  hex: "0x22",
  code: `${CODES.NUMPAD}3`,
  key: CODES.PAGE_DOWN
};

const HOME: KeyInterface = {
  keyCode: 36,
  hex: "0x24",
  code: `${CODES.NUMPAD}7`,
  key: CODES.HOME
};

const PAGE_UP: KeyInterface = {
  keyCode: 33,
  hex: "0x21",
  code: `${CODES.NUMPAD}9`,
  key: CODES.PAGE_UP
};

const DELETE: KeyInterface = {
  keyCode: 46,
  hex: "0x2E",
  code: `${CODES.NUMPAD}Decimal`,
  key: CODES.DELETE
};

export {
  EQUAL,
  ENTER,
  ARROW_UP,
  ARROW_DOWN,
  ARROW_RIGHT,
  ARROW_LEFT,
  MULTIPLY,
  ADD,
  SUBSTRACT,
  COMMA,
  DIVIDE,
  DECIMAL,
  INSERT,
  END,
  PAGE_DOWN,
  HOME,
  PAGE_UP,
  DELETE
};
