export interface KeyInterface {
  keyCode: number | number[];
  keyCodeDefinitions?: KeyCodeSupportOS[];
  code: string;
  key: string;
  isAltKey?: boolean;
  isMetaKey?: boolean;
  isShiftKey?: boolean;
  isCtrlKey?: boolean;
  hex?: hexNumber | hexNumber[];
}

type hexNumber = `0x${string}`;

export interface KeyCodeSupportOS {
  os: "windows" | "mac" | "linux";
  browser: "chrome" | "ie" | "chromium" | "safari" | "gecko";
  lang?: "us" | "el" | "ja";
  code: number;
  hex?: hexNumber;
}

export const KeyDefaults = {
  isAltKey: false,
  isMetaKey: false,
  isShiftKey: false,
  isCtrlKey: false
};

export enum CODES {
  NUMPAD = "Numpad",
  DIGIT = "Digit",
  FUNCTION = "F",
  KEY = "Key",
  ESCAPE = "Escape",
  TAB = "Tab",
  CAPS_LOCK = "CapsLock",
  SHIFT = "Shift",
  SHIFT_LEFT = "ShiftLeft",
  SHIFT_RIGHT = "ShiftRight",
  CONTROL = "Control",
  CONTROL_LEFT = "ControlLeft",
  CONTROL_RIGHT = "ControlRight",
  ALT = "Alt",
  ALT_LEFT = "AltLeft",
  ALT_RIGHT = "AltRight",
  SPACE = "Space",
  ENTER = "Enter",
  PAGE_UP = "Page Up",
  PAGE_DOWN = "Page Down",
  END = "End",
  HOME = "Home",
  ARROW_LEFT = "ArrowLeft",
  ARROW_UP = "ArrowUp",
  ARROW_RIGHT = "ArrowRight",
  ARROW_DOWN = "ArrowDown",
  PRINT_SCREEN = "PrintScreen",
  INSERT = "Insert",
  DELETE = "Delete",
  NUM_LOCK = "NumLock",
  SCROLL_LOCK = "ScrollLock",
  EQUAL = "Equal",
  HELP = "Help",
  PERIOD = "Period",
  QUOTE = "Quote",
  SEMICOLON = "Semicolon",
  SLASH = "Slash",
  COMMA = "Comma",
  MINUS = "Minus",
  BACKSLASH = "Backslash",
  BRACKET_LEFT = "BracketLeft",
  BRACKET_RIGHT = "BracketRight",
  BACKQUOTE = "Backquote",
}
