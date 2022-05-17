import { KeyInterface, KeyDefaults, CODES } from "../types"

const ZERO: KeyInterface = {
    keyCode: 48,
    which: 48,
    code: `${CODES.DIGIT}0`,
    name: "Zero",
    ...KeyDefaults
}

const ONE: KeyInterface = {
    keyCode: 49,
    which: 49,
    code: `${CODES.DIGIT}1`,
    name: "One",
    ...KeyDefaults
}

const TWO: KeyInterface = {
    keyCode: 50,
    which: 50,
    code: `${CODES.DIGIT}2`,
    name: "Two",
    ...KeyDefaults
}

const THREE: KeyInterface = {
    keyCode: 51,
    which: 51,
    code: `${CODES.DIGIT}3`,
    name: "Three",
    ...KeyDefaults
}

const FOUR: KeyInterface = {
    keyCode: 52,
    which: 52,
    code: `${CODES.DIGIT}4`,
    name: "Four",
    ...KeyDefaults
}

const FIVE: KeyInterface = {
    keyCode: 53,
    which: 53,
    code: `${CODES.DIGIT}5`,
    name: "Five",
    ...KeyDefaults
}

const SIX: KeyInterface = {
    keyCode: 54,
    which: 54,
    code: `${CODES.DIGIT}6`,
    name: "Six",
    ...KeyDefaults
}


const SEVEN: KeyInterface = {
    keyCode: 55,
    which: 55,
    code: `${CODES.DIGIT}7`,
    name: "Seven",
    ...KeyDefaults
}


const EIGHT: KeyInterface = {
    keyCode: 56,
    which: 56,
    code: `${CODES.DIGIT}8`,
    name: "Eight",
    ...KeyDefaults
}


const NINE: KeyInterface = {
    keyCode: 57,
    which: 57,
    code: `${CODES.DIGIT}9`,
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