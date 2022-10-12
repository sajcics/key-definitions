import { KeyInterface, KeyDefaults, CODES } from "../../types";

export const EXCLAMATION_MARK: KeyInterface = {
  keyCode: 49,
  code: `${CODES.DIGIT}1`,
  key: "!",
  ...KeyDefaults,
  isShiftKey: true,
};

export const QUOTATION_MARK: KeyInterface = {
  keyCode: 222,
  code: `${CODES.QUOTE}`,
  key: '"',
  ...KeyDefaults,
  isShiftKey: true,
};

export const HASH: KeyInterface = {
  keyCode: 51,
  code: `${CODES.DIGIT}3`,
  key: "#",
  ...KeyDefaults,
  isShiftKey: true,
};

export const DOLLAR_SIGN: KeyInterface = {
  keyCode: 52,
  code: `${CODES.DIGIT}4`,
  key: "$",
  ...KeyDefaults,
  isShiftKey: true,
};

export const PERCENT: KeyInterface = {
  keyCode: 53,
  code: `${CODES.DIGIT}5`,
  key: "%",
  ...KeyDefaults,
  isShiftKey: true,
};

export const AMPERSAND: KeyInterface = {
  keyCode: 55,
  code: `${CODES.DIGIT}7`,
  key: "&",
  ...KeyDefaults,
  isShiftKey: true,
};

export const APOSTROPHE: KeyInterface = {
  keyCode: 222,
  code: `${CODES.QUOTE}`,
  key: "'",
  ...KeyDefaults,
};

export const OPEN_PARENTHESIS: KeyInterface = {
  keyCode: 57,
  code: `${CODES.DIGIT}9`,
  key: "(",
  ...KeyDefaults,
  isShiftKey: true,
};

export const CLOSE_PARENTHESIS: KeyInterface = {
  keyCode: 48,
  code: `${CODES.DIGIT}0`,
  key: ")",
  ...KeyDefaults,
  isShiftKey: true,
};

export const ASTERISK: KeyInterface = {
  keyCode: 56,
  code: `${CODES.DIGIT}8`,
  key: "*",
  ...KeyDefaults,
  isShiftKey: true,
};

export const PLUS: KeyInterface = {
  keyCode: 187,
  code: `${CODES.EQUAL}`,
  key: "+",
  ...KeyDefaults,
  isShiftKey: true
};

export const COMMA: KeyInterface = {
  keyCode: 188,
  code: `${CODES.COMMA}`,
  key: ",",
  ...KeyDefaults,
};

export const DASH: KeyInterface = {
  keyCode: 189,
  code: `${CODES.MINUS}`,
  key: "-",
  ...KeyDefaults,
};

export const DOT: KeyInterface = {
  keyCode: 190,
  code: `${CODES.PERIOD}`,
  key: ".",
  ...KeyDefaults,
};

export const SLASH: KeyInterface = {
  keyCode: 191,
  code: `${CODES.SLASH}`,
  key: "/",
  ...KeyDefaults
};

export const COLON: KeyInterface = {
  keyCode: 186,
  code: `${CODES.SEMICOLON}`,
  key: ":",
  ...KeyDefaults,
  isShiftKey: true
};

export const SEMICOLON: KeyInterface = {
  keyCode: 186,
  code: `${CODES.SEMICOLON}`,
  key: ";",
  ...KeyDefaults
};

export const LESS_THAN_BRACKET: KeyInterface = {
  keyCode: 220,
  code: `Intl${CODES.BACKSLASH}`,
  key: "<",
  ...KeyDefaults,
};

export const EQUAL: KeyInterface = {
  keyCode: 187,
  code: `${CODES.EQUAL}`,
  key: "=",
  ...KeyDefaults,
};

export const GREATER_THAN_BRACKET: KeyInterface = {
  keyCode: 220,
  code: `Intl${CODES.BACKSLASH}`,
  key: ">",
  ...KeyDefaults,
  isShiftKey: true,
};

export const QUESTION_MARK: KeyInterface = {
  keyCode: 191,
  code: `${CODES.SLASH}`,
  key: "?",
  ...KeyDefaults,
  isShiftKey: true
};

export const AMPERSAT: KeyInterface = {
  keyCode: 50,
  code: `${CODES.DIGIT}2`,
  key: "@",
  ...KeyDefaults,
  isShiftKey: true
};

export const OPEN_BRACKET: KeyInterface = {
  keyCode: 219,
  code: `${CODES.BRACKET_LEFT}`,
  key: "[",
  ...KeyDefaults,
};

export const BACKSLASH: KeyInterface = {
  keyCode: 220,
  code: `${CODES.BACKSLASH}`,
  key: "\\",
  ...KeyDefaults,
};

export const CLOSE_BRACKET: KeyInterface = {
  keyCode: 221,
  code: `${CODES.BRACKET_RIGHT}`,
  key: "]",
  ...KeyDefaults,
};

export const CARET: KeyInterface = {
  keyCode: 54,
  code: `${CODES.DIGIT}6`,
  key: "^",
  ...KeyDefaults,
  isShiftKey: true,
};

export const UNDERSCORE: KeyInterface = {
  keyCode: 189,
  code: `${CODES.SLASH}`,
  key: "_",
  ...KeyDefaults,
  isShiftKey: true
};

export const BACKQUOTE: KeyInterface = {
  keyCode: 192,
  code: `${CODES.BACKQUOTE}`,
  key: "`",
  ...KeyDefaults,
};

export const OPEN_BRACE: KeyInterface = {
  keyCode: 219,
  code: `${CODES.BRACKET_LEFT}`,
  key: "{",
  ...KeyDefaults,
  isShiftKey: true
};

export const VERTICAL_BAR: KeyInterface = {
  keyCode: 220,
  code: `${CODES.BACKSLASH}`,
  key: "|",
  ...KeyDefaults,
  isShiftKey: true
};

export const CLOSE_BRACE: KeyInterface = {
  keyCode: 221,
  code: `${CODES.BRACKET_RIGHT}`,
  key: "}",
  ...KeyDefaults,
  isShiftKey: true
};

export const TILDA: KeyInterface = {
  keyCode: 192,
  code: `${CODES.BACKQUOTE}`,
  key: "~",
  ...KeyDefaults,
  isShiftKey: true
};

