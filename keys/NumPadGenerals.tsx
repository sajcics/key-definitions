import { KeyDefaults, CODES, KeyInterface } from "../types"

const ENTER: KeyInterface = {
    keyCode: 97,
    which: 97,
    code: `${CODES.NUMPAD}Enter`,
    name: CODES.ENTER,
    ...KeyDefaults
}

const LEFT_ARROW: KeyInterface = {
    keyCode: 37,
    which: 37,
    code: `${CODES.NUMPAD}3`,
    name: CODES.LEFT_ARROW,
    ...KeyDefaults,
};

const UP_ARROW: KeyInterface = {
    keyCode: 38,
    which: 38,
    code: `${CODES.NUMPAD}8`,
    name: CODES.UP_ARROW,
    ...KeyDefaults,
};

const RIGHT_ARROW: KeyInterface = {
    keyCode: 39,
    which: 39,
    code: `${CODES.NUMPAD}6`,
    name: CODES.RIGHT_ARROW,
    ...KeyDefaults,
};

const DOWN_ARROW: KeyInterface = {
    keyCode: 40,
    which: 40,
    code: `${CODES.NUMPAD}2`,
    name: CODES.DOWN_ARROW,
    ...KeyDefaults,
};

export {
    ENTER,
    UP_ARROW,
    DOWN_ARROW,
    RIGHT_ARROW,
    LEFT_ARROW
}