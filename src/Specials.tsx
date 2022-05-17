import { KeyInterface, KeyDefaults, CODES } from '../types';
/** still needs checks!
 * @NOTE 
 */
const EXCLAMATION_MARK: KeyInterface = {
    keyCode: 33,
    which: 33,
    code: `${CODES.DIGIT}1`,
    name: "!",
    ...KeyDefaults,
    isShiftKey: true
}

/** @check */
const QUOTATION_MARK: KeyInterface = {
    keyCode: 34,
    which: 34,
    code: `${CODES.QUOTE}`,
    name: "\"",
    ...KeyDefaults,
    isShiftKey: true
}

const HASH: KeyInterface = {
    keyCode: 35,
    which: 35,
    code: `${CODES.DIGIT}3`,
    name: "#",
    ...KeyDefaults,
    isShiftKey: true
}

const DOLLAR_SIGN: KeyInterface = {
    keyCode: 36,
    which: 36,
    code: `${CODES.DIGIT}4`,
    name: "$",
    ...KeyDefaults,
    isShiftKey: true
}

const PERCENT: KeyInterface = {
    keyCode: 37,
    which: 37,
    code: `${CODES.DIGIT}5`,
    name: "%",
    ...KeyDefaults,
    isShiftKey: true
}

const AMPERSAND: KeyInterface = {
    keyCode: 38,
    which: 38,
    code: `${CODES.DIGIT}7`,
    name: "&",
    ...KeyDefaults,
    isShiftKey: true
}

/** @check */
const APOSTROPHE: KeyInterface = {
    keyCode: 39,
    which: 39,
    code: `${CODES.QUOTE}`,
    name: "'",
    ...KeyDefaults
}

const OPEN_PARENTHESIS: KeyInterface = {
    keyCode: 40,
    which: 40,
    code: `${CODES.DIGIT}9`,
    name: "(",
    ...KeyDefaults,
    isShiftKey: true
}

/** @check */
const CLOSE_PARENTHESIS: KeyInterface = {
    keyCode: 41,
    which: 41,
    code: `${CODES.DIGIT}0`,
    name: ")",
    ...KeyDefaults
}

const ASTERISK: KeyInterface = {
    keyCode: 42,
    which: 42,
    code: `${CODES.DIGIT}8`,
    name: "*",
    ...KeyDefaults,
    isShiftKey: true
}

/** @check */
const PLUS: KeyInterface = {
    keyCode: 43,
    which: 43,
    code: `${CODES.EQUAL}`,
    name: "+",
    ...KeyDefaults,
    isShiftKey: true
}

const COMMA: KeyInterface = {
    keyCode: 44,
    which: 44,
    code: `${CODES.COMMA}`,
    name: ",",
    ...KeyDefaults
}

const DASH: KeyInterface = {
    keyCode: 45,
    which: 45,
    code: `${CODES.MINUS}`,
    name: "-",
    ...KeyDefaults
}

/** @check */
const DOT: KeyInterface = {
    keyCode: 46,
    which: 46,
    code: `${CODES.PERIOD}`,
    name: ".",
    ...KeyDefaults
}

/** @check */
const SLASH: KeyInterface = {
    keyCode: 47,
    which: 47,
    code: `${CODES.SLASH}`,
    name: "/",
    ...KeyDefaults
}

/** @check */
const COLON: KeyInterface = {
    keyCode: 58,
    which: 58,
    code: `${CODES.SEMICOLON}`,
    name: ":",
    ...KeyDefaults
}

/** @check */
const SEMICOLON: KeyInterface = {
    keyCode: 59,
    which: 59,
    code: `${CODES.SEMICOLON}`,
    name: ";",
    ...KeyDefaults
}

/** @check */
const LESS_THAN_BRACKET: KeyInterface = {
    keyCode: 60,
    which: 60,
    code: `${CODES.COMMA}`,
    name: "<",
    ...KeyDefaults
}

const EQUAL: KeyInterface = {
    keyCode: 61,
    which: 61,
    code: `${CODES.EQUAL}`,
    name: "=",
    ...KeyDefaults
}

/** @checl */
const GREATER_THAN_BRACKET: KeyInterface = {
    keyCode: 62,
    which: 62,
    code: `${CODES.PERIOD}`,
    name: ">",
    ...KeyDefaults
}

/** @check */
const QUESTION_MARK: KeyInterface = {
    keyCode: 63,
    which: 63,
    code: `${CODES.SLASH}`,
    name: "?",
    ...KeyDefaults
}

const AMPERSAT: KeyInterface = {
    keyCode: 64,
    which: 64,
    code: `${CODES.DIGIT}2`,
    name: "@",
    ...KeyDefaults,
    isShiftKey: true
}

const OPEN_BRACKET: KeyInterface = {
    keyCode: 91,
    which: 91,
    code: CODES.BRACKET_LEFT,
    name: "[",
    ...KeyDefaults
}

const BACKSLASH: KeyInterface = {
    keyCode: 92,
    which: 92,
    code: `${CODES.BACKSLASH}`,
    name: "\\",
    ...KeyDefaults
}

const CLOSE_BRACKET: KeyInterface = {
    keyCode: 93,
    which: 93,
    code: CODES.BRACKET_RIGHT,
    name: "]",
    ...KeyDefaults
}

const CARET: KeyInterface = {
    keyCode: 94,
    which: 94,
    code: `${CODES.DIGIT}6`,
    name: "^",
    ...KeyDefaults,
    isShiftKey: true
}

const UNDERSCORE: KeyInterface = {
    keyCode: 95,
    which: 95,
    code: `${CODES.MINUS}`,
    name: "_",
    ...KeyDefaults
}

const BACKQUOTE: KeyInterface = {
    keyCode: 96,
    which: 96,
    code: `${CODES.BACKQUOTE}`,
    name: "`",
    ...KeyDefaults
}

const OPEN_BRACE: KeyInterface = {
    keyCode: 123,
    which: 123,
    code: CODES.BRACKET_LEFT,
    name: "{",
    ...KeyDefaults
}

const VERTICAL_BAR: KeyInterface = {
    keyCode: 124,
    which: 124,
    code: `${CODES.BACKSLASH}`,
    name: "|",
    ...KeyDefaults
}

const CLOSE_BRACE: KeyInterface = {
    keyCode: 125,
    which: 125,
    code: CODES.BRACKET_RIGHT,
    name: "}",
    ...KeyDefaults
}

const TILDA: KeyInterface = {
    keyCode: 126,
    which: 126,
    code: `${CODES.BACKQUOTE}`,
    name: "~",
    ...KeyDefaults
}

export {
    EXCLAMATION_MARK,
    QUOTATION_MARK,
    HASH,
    DOLLAR_SIGN,
    PERCENT,
    QUESTION_MARK,
    AMPERSAND,
    OPEN_PARENTHESIS,
    CLOSE_PARENTHESIS,
    ASTERISK,
    COMMA,
    DASH,
    DOT,
    SLASH,
    COLON,
    SEMICOLON,
    LESS_THAN_BRACKET,
    EQUAL,
    GREATER_THAN_BRACKET,
    AMPERSAT,
    OPEN_BRACKET,
    BACKSLASH,
    CLOSE_BRACKET,
    CARET,
    UNDERSCORE,
    BACKQUOTE,
    OPEN_BRACE,
    VERTICAL_BAR,
    CLOSE_BRACE,
    TILDA,
    APOSTROPHE
}