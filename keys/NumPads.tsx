import {KeyDefaults, NUMPAD, KeyInterface} from "../types"

const ONE:KeyInterface = {
    key: 1,
    keyCode: 97,
    which: 97,
    code: `${NUMPAD}1`,
    name: "One",
    ...KeyDefaults
}

const TWO:KeyInterface = {
    key: 2,
    keyCode: 98,
    which: 98,
    code: `${NUMPAD}2`,
    name: "Two",
    ...KeyDefaults
}

const THREE:KeyInterface = {
    key: 3,
    keyCode: 99,
    which: 99,
    code: `${NUMPAD}3`,
    name: "Three",
    ...KeyDefaults
}

const FOUR:KeyInterface = {
    key: 4,
    keyCode: 100,
    which: 100,
    code: `${NUMPAD}4`,
    name: "Four",
    ...KeyDefaults
}

const FIVE:KeyInterface = {
    key: 5,
    keyCode: 101,
    which: 101,
    code: `${NUMPAD}5`,
    name: "Five",
    ...KeyDefaults
}

const SIX:KeyInterface = {
    key: 6,
    keyCode: 102,
    which: 102,
    code: `${NUMPAD}6`,
    name: "Six",
    ...KeyDefaults
}


const SEVEN:KeyInterface = {
    key: 7,
    keyCode: 103,
    which: 103,
    code: `${NUMPAD}7`,
    name: "Seven",
    ...KeyDefaults
}


const EIGHT:KeyInterface = {
    key: 8,
    keyCode: 104,
    which: 104,
    code: `${NUMPAD}8`,
    name: "Eight",
    ...KeyDefaults
}


const NINE:KeyInterface = {
    key: 9,
    keyCode: 105,
    which: 105,
    code: `${NUMPAD}9`,
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