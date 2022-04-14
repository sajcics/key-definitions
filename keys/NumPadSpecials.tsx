import { KeyDefaults, CODES, KeyInterface } from "../types"

const ASTERISK: KeyInterface = {
    keyCode: 106,
    which: 106,
    code: `${CODES.NUMPAD}Multiply`,
    name: "*",
    ...KeyDefaults
}

const PLUS: KeyInterface = {
    keyCode: 107,
    which: 107,
    code: `${CODES.NUMPAD}Add`,
    name: "+",
    ...KeyDefaults
}

const DASH: KeyInterface = {
    keyCode: 109,
    which: 109,
    code: `${CODES.NUMPAD}Substract`,
    name: "-",
    ...KeyDefaults
}

const COMMA: KeyInterface = {
    keyCode: 110,
    which: 110,
    code: `${CODES.NUMPAD}`,
    name: ",",
    ...KeyDefaults
}

const SLASH: KeyInterface = {
    keyCode: 111,
    which: 111,
    code: `${CODES.NUMPAD}Divide`,
    name: "/",
    ...KeyDefaults
}

export {
    ASTERISK,
    PLUS,
    DASH,
    COMMA,
    SLASH
}