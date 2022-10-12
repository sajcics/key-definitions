import { KeyDefaults, CODES, KeyInterface } from "../../../types"

/**
 * @checked 21 July 2022
 */
const ZERO: KeyInterface = {
    keyCode: 96,
    hex: "0x60",
    code: `${CODES.NUMPAD}0`,
    key: "0",
    ...KeyDefaults
}

const ONE: KeyInterface = {
    keyCode: 97,
    hex: "0x61",
    code: `${CODES.NUMPAD}1`,
    key: "1",
    ...KeyDefaults
}

const TWO: KeyInterface = {
    keyCode: 98,
    hex: "0x62",
    code: `${CODES.NUMPAD}2`,
    key: "2",
    ...KeyDefaults
}

const THREE: KeyInterface = {
    keyCode: 99,
    hex: "0x63",
    code: `${CODES.NUMPAD}3`,
    key: "3",
    ...KeyDefaults
}

const FOUR: KeyInterface = {
    keyCode: 100,
    hex: "0x64",
    code: `${CODES.NUMPAD}4`,
    key: "4",
    ...KeyDefaults
}

const FIVE: KeyInterface = {
    keyCode: 101,
    hex: "0x65",
    code: `${CODES.NUMPAD}5`,
    key: "5",
    ...KeyDefaults
}

const SIX: KeyInterface = {
    keyCode: 102,
    hex: "0x66",
    code: `${CODES.NUMPAD}6`,
    key: "6",
    ...KeyDefaults
}

const SEVEN: KeyInterface = {
    keyCode: 103,
    hex: "0x67",   
    code: `${CODES.NUMPAD}7`,
    key: "7",
    ...KeyDefaults
}

const EIGHT: KeyInterface = {
    keyCode: 104,
    hex: "0x68",    
    code: `${CODES.NUMPAD}8`,
    key: "8",
    ...KeyDefaults
}


const NINE: KeyInterface = {
    keyCode: 105,
    hex: "0x69",
    code: `${CODES.NUMPAD}9`,
    key: "9",
    ...KeyDefaults
}

export {
    ZERO,
    ONE,
    TWO,
    THREE,
    FOUR,
    FIVE,
    SIX,
    SEVEN,
    EIGHT,
    NINE
}