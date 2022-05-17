import { KeyDefaults, CODES, KeyInterface } from "../types"

const ZERO: KeyInterface = {
    keyCode: 98,
    which: 98,
    code: `${CODES.NUMPAD}0`,
    name: "Zero",
    ...KeyDefaults
}

const ONE: KeyInterface = {
    keyCode: 97,
    which: 97,
    code: `${CODES.NUMPAD}1`,
    name: "One",
    ...KeyDefaults
}

const TWO: KeyInterface = {
    keyCode: 98,
    which: 98,
    code: `${CODES.NUMPAD}2`,
    name: "Two",
    ...KeyDefaults
}

const THREE: KeyInterface = {
    keyCode: 99,
    which: 99,
    code: `${CODES.NUMPAD}3`,
    name: "Three",
    ...KeyDefaults
}

const FOUR: KeyInterface = {
    keyCode: 100,
    which: 100,
    code: `${CODES.NUMPAD}4`,
    name: "Four",
    ...KeyDefaults
}

const FIVE: KeyInterface = {
    keyCode: 101,
    which: 101,
    code: `${CODES.NUMPAD}5`,
    name: "Five",
    ...KeyDefaults
}

const SIX: KeyInterface = {
    keyCode: 102,
    which: 102,
    code: `${CODES.NUMPAD}6`,
    name: "Six",
    ...KeyDefaults
}


const SEVEN: KeyInterface = {
    keyCode: 103,
    which: 103,
    code: `${CODES.NUMPAD}7`,
    name: "Seven",
    ...KeyDefaults
}


const EIGHT: KeyInterface = {
    keyCode: 104,
    which: 104,
    code: `${CODES.NUMPAD}8`,
    name: "Eight",
    ...KeyDefaults
}


const NINE: KeyInterface = {
    keyCode: 105,
    which: 105,
    code: `${CODES.NUMPAD}9`,
    name: "Nine",
    ...KeyDefaults
}

export {
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