import {KeyInterface, KeyDefaults, DIGIT} from "../types"

const ONE:KeyInterface = {
    key: 1,
    keyCode: 49,
    which: 49,
    code: `${DIGIT}1`,
    name: "One",
    ...KeyDefaults
}

const TWO:KeyInterface = {
    key: 2,
    keyCode: 50,
    which: 50,
    code: `${DIGIT}2`,
    name: "Two",
    ...KeyDefaults
}

const THREE:KeyInterface = {
    key: 3,
    keyCode: 51,
    which: 51,
    code: `${DIGIT}3`,
    name: "Three",
    ...KeyDefaults
}

const FOUR:KeyInterface = {
    key: 4,
    keyCode: 52,
    which: 52,
    code: `${DIGIT}4`,
    name: "Four",
    ...KeyDefaults
}

const FIVE:KeyInterface = {
    key: 5,
    keyCode: 53,
    which: 53,
    code: `${DIGIT}5`,
    name: "Five",
    ...KeyDefaults
}

const SIX:KeyInterface = {
    key: 6,
    keyCode: 54,
    which: 54,
    code: `${DIGIT}6`,
    name: "Six",
    ...KeyDefaults
}


const SEVEN:KeyInterface = {
    key: 7,
    keyCode: 55,
    which: 55,
    code: `${DIGIT}7`,
    name: "Seven",
    ...KeyDefaults
}


const EIGHT:KeyInterface = {
    key: 8,
    keyCode: 56,
    which: 56,
    code: `${DIGIT}8`,
    name: "Eight",
    ...KeyDefaults
}


const NINE:KeyInterface = {
    key: 9,
    keyCode: 57,
    which: 57,
    code: `${DIGIT}9`,
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