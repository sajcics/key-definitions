import { KeyInterface, KeyDefaults, CODES } from '../types';
/** still needs checks!
 * @NOTE 
 */
const EXCLAMATION_MARK: KeyInterface = {
    keyCode: 33,
    which: 33,
    code: `${CODES.SPECIAL}`,
    name: "!",
    ...KeyDefaults
}

const QUOTATION_MARK: KeyInterface = {
    keyCode: 34,
    which: 34,
    code: `${CODES.SPECIAL}`,
    name: "?",
    ...KeyDefaults
}

const HASH: KeyInterface = {
    keyCode: 35,
    which: 35,
    code: `${CODES.SPECIAL}`,
    name: "#",
    ...KeyDefaults
}

const DOLLAR_SIGN: KeyInterface = {
    keyCode: 36,
    which: 36,
    code: `${CODES.SPECIAL}`,
    name: "$",
    ...KeyDefaults
}

const PERCENT: KeyInterface = {
    keyCode: 37,
    which: 37,
    code: `${CODES.SPECIAL}`,
    name: "%",
    ...KeyDefaults
}

const AMPERSAND: KeyInterface = {
    keyCode: 38,
    which: 38,
    code: `${CODES.SPECIAL}`,
    name: "&",
    ...KeyDefaults
}

const APOSTROPHE: KeyInterface = {
    keyCode: 39,
    which: 39,
    code: `${CODES.SPECIAL}`,
    name: "\"",
    ...KeyDefaults
}

const OPEN_PARENTHESIS: KeyInterface = {
    keyCode: 40,
    which: 40,
    code: `${CODES.SPECIAL}`,
    name: "(",
    ...KeyDefaults
}

const CLOSE_PARENTHESIS: KeyInterface = {
    keyCode: 41,
    which: 41,
    code: `${CODES.SPECIAL}`,
    name: ")",
    ...KeyDefaults
}

const ASTERISK: KeyInterface = {
    keyCode: 42,
    which: 42,
    code: `${CODES.SPECIAL}`,
    name: "*",
    ...KeyDefaults
}

const PLUS: KeyInterface = {
    keyCode: 43,
    which: 43,
    code: `${CODES.SPECIAL}`,
    name: "+",
    ...KeyDefaults
}

const COMMA: KeyInterface = {
    keyCode: 44,
    which: 44,
    code: `${CODES.SPECIAL}`,
    name: ",",
    ...KeyDefaults
}

const DASH: KeyInterface = {
    keyCode: 45,
    which: 45,
    code: `${CODES.SPECIAL}`,
    name: "-",
    ...KeyDefaults
}

const DOT: KeyInterface = {
    keyCode: 46,
    which: 46,
    code: `${CODES.SPECIAL}`,
    name: ".",
    ...KeyDefaults
}

const SLASH: KeyInterface = {
    keyCode: 47,
    which: 47,
    code: `${CODES.SPECIAL}`,
    name: "/",
    ...KeyDefaults
}

const COLON: KeyInterface = {
    keyCode: 58,
    which: 58,
    code: `${CODES.SPECIAL}`,
    name: ":",
    ...KeyDefaults
}

const SEMICOLON: KeyInterface = {
    keyCode: 59,
    which: 59,
    code: `${CODES.SPECIAL}`,
    name: ";",
    ...KeyDefaults
}

const LESS_THAN_BRACKET: KeyInterface = {
    keyCode: 60,
    which: 60,
    code: `${CODES.SPECIAL}`,
    name: "<",
    ...KeyDefaults
}

const EQUAL: KeyInterface = {
    keyCode: 61,
    which: 61,
    code: `${CODES.SPECIAL}`,
    name: "=",
    ...KeyDefaults
}

const GREATER_THAN_BRACKET: KeyInterface = {
    keyCode: 62,
    which: 62,
    code: `${CODES.SPECIAL}`,
    name: ">",
    ...KeyDefaults
}

const QUESTION_MARK: KeyInterface = {
    keyCode: 63,
    which: 63,
    code: `${CODES.SPECIAL}`,
    name: "Question mark",
    ...KeyDefaults
}

const AMPERSAT: KeyInterface = {
    keyCode: 64,
    which: 64,
    code: `${CODES.SPECIAL}`,
    name: "@",
    ...KeyDefaults
}

const OPEN_BRACKET: KeyInterface = {
    keyCode: 91,
    which: 91,
    code: `${CODES.SPECIAL}`,
    name: "[",
    ...KeyDefaults
}

const BACKSLASH: KeyInterface = {
    keyCode: 92,
    which: 92,
    code: `${CODES.SPECIAL}`,
    name: "\\",
    ...KeyDefaults
}

const CLOSE_BRACKET: KeyInterface = {
    keyCode: 93,
    which: 93,
    code: `${CODES.SPECIAL}`,
    name: "]",
    ...KeyDefaults
}

const CARET: KeyInterface = {
    keyCode: 94,
    which: 94,
    code: `${CODES.SPECIAL}`,
    name: "^",
    ...KeyDefaults
}

const UNDERSCORE: KeyInterface = {
    keyCode: 95,
    which: 95,
    code: `${CODES.SPECIAL}`,
    name: "_",
    ...KeyDefaults
}

const BACKQUOTE: KeyInterface = {
    keyCode: 96,
    which: 96,
    code: `${CODES.SPECIAL}`,
    name: "`",
    ...KeyDefaults
}

const OPEN_BRACE: KeyInterface = {
    keyCode: 123,
    which: 123,
    code: `${CODES.SPECIAL}`,
    name: "{",
    ...KeyDefaults
}

const VERTICAL_BAR: KeyInterface = {
    keyCode: 124,
    which: 124,
    code: `${CODES.SPECIAL}`,
    name: "|",
    ...KeyDefaults
}

const CLOSE_BRACE: KeyInterface = {
    keyCode: 125,
    which: 125,
    code: `${CODES.SPECIAL}`,
    name: "}",
    ...KeyDefaults
}

const TILDA: KeyInterface = {
    keyCode: 126,
    which: 126,
    code: `${CODES.SPECIAL}`,
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