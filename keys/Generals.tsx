import {
    KeyInterface,
    KeyDefaults,
    CODES
} from "../types";


const GENERAL_TAB: KeyInterface = {
    keyCode: 9,
    which: 9,
    code: CODES.TAB,
    name: CODES.TAB,
    ...KeyDefaults,
};


const GENERAL_ENTER: KeyInterface = {
    keyCode: 13,
    which: 13,
    code: CODES.ENTER,
    name: CODES.ENTER,
    ...KeyDefaults,
};


const GENERAL_SHIFT_LEFT: KeyInterface = {
    keyCode: 16,
    which: 16,
    code: CODES.SHIFT_LEFT,
    name: CODES.SHIFT,
    ...KeyDefaults,
};

const GENERAL_SHIFT_RIGHT: KeyInterface = {
    keyCode: 16,
    which: 16,
    code: CODES.SHIFT_RIGHT,
    name: CODES.SHIFT,
    ...KeyDefaults,
};

const GENERAL_CTRL_LEFT: KeyInterface = {
    keyCode: 17,
    which: 17,
    code: CODES.CONTROL_LEFT,
    name: CODES.CONTROL,
    ...KeyDefaults,
};

const GENERAL_CTRL_RIGHT: KeyInterface = {
    keyCode: 17,
    which: 17,
    code: CODES.CONTROL_RIGHT,
    name: CODES.CONTROL,
    ...KeyDefaults,
};

const GENERAL_ALT_LEFT: KeyInterface = {
    keyCode: 18,
    which: 18,
    code: CODES.ALT_LEFT,
    name: CODES.ALT,
    ...KeyDefaults,
};

const GENERAL_ALT_RIGHT: KeyInterface = {
    keyCode: 18,
    which: 18,
    code: CODES.ALT_RIGHT,
    name: CODES.ALT,
    ...KeyDefaults,
};

const GENERAL_CAPS_LOCK: KeyInterface = {
    keyCode: 20,
    which: 20,
    code: CODES.CAPS_LOCK,
    name: CODES.CAPS_LOCK,
    ...KeyDefaults,
};

const GENERAL_ESC: KeyInterface = {
    keyCode: 27,
    which: 27,
    code: CODES.ESCAPE,
    name: CODES.ESCAPE,
    ...KeyDefaults,
};


const GENERAL_SPACE: KeyInterface = {
    keyCode: 32,
    which: 32,
    code: CODES.SPACE,
    name: " ",
    ...KeyDefaults,
};

const GENERAL_PAGE_UP: KeyInterface = {
    keyCode: 33,
    which: 33,
    code: CODES.PAGE_UP,
    name: CODES.PAGE_UP,
    ...KeyDefaults,
};

const GENERAL_PAGE_DOWN: KeyInterface = {
    keyCode: 34,
    which: 34,
    code: CODES.PAGE_DOWN,
    name: CODES.PAGE_DOWN,
    ...KeyDefaults,
};

const GENERAL_END: KeyInterface = {
    keyCode: 35,
    which: 35,
    code: CODES.END,
    name: CODES.END,
    ...KeyDefaults,
};

const GENERAL_HOME: KeyInterface = {
    keyCode: 36,
    which: 36,
    code: CODES.HOME,
    name: CODES.HOME,
    ...KeyDefaults,
};

const GENERAL_LEFT_ARROW: KeyInterface = {
    keyCode: 37,
    which: 37,
    code: CODES.LEFT_ARROW,
    name: CODES.LEFT_ARROW,
    ...KeyDefaults,
};

const GENERAL_UP_ARROW: KeyInterface = {
    keyCode: 38,
    which: 38,
    code: CODES.UP_ARROW,
    name: CODES.UP_ARROW,
    ...KeyDefaults,
};

const GENERAL_RIGHT_ARROW: KeyInterface = {
    keyCode: 39,
    which: 39,
    code: CODES.RIGHT_ARROW,
    name: CODES.RIGHT_ARROW,
    ...KeyDefaults,
};

const GENERAL_DOWN_ARROW: KeyInterface = {
    keyCode: 40,
    which: 40,
    code: CODES.DOWN_ARROW,
    name: CODES.DOWN_ARROW,
    ...KeyDefaults,
};

const GENERAL_PRINT_SCREEN: KeyInterface = {
    keyCode: 44,
    which: 44,
    code: CODES.PRINT_SCREEN,
    name: CODES.PRINT_SCREEN,
    ...KeyDefaults,
};

const GENERAL_INSERT: KeyInterface = {
    keyCode: 45,
    which: 45,
    code: CODES.INSERT,
    name: CODES.INSERT,
    ...KeyDefaults,
};

const GENERAL_DELETE: KeyInterface = {
    keyCode: 46,
    which: 46,
    code: CODES.DELETE,
    name: CODES.DELETE,
    ...KeyDefaults,
};

const GENERAL_NUM_LOCK: KeyInterface = {
    keyCode: 144,
    which: 114,
    code: CODES.NUM_LOCK,
    name: CODES.NUM_LOCK,
    ...KeyDefaults
}

const GENERAL_SCROLL_LOCK: KeyInterface = {
    keyCode: 145,
    which: 145,
    code: CODES.SCROLL_LOCK,
    name: CODES.SCROLL_LOCK,
    ...KeyDefaults
}

export {
    GENERAL_ESC,
    GENERAL_ENTER,
    GENERAL_TAB,
    GENERAL_CAPS_LOCK,
    GENERAL_SHIFT_LEFT,
    GENERAL_SHIFT_RIGHT,
    GENERAL_CTRL_LEFT,
    GENERAL_CTRL_RIGHT,
    GENERAL_ALT_LEFT,
    GENERAL_ALT_RIGHT,
    GENERAL_SPACE,
    GENERAL_PAGE_UP,
    GENERAL_PAGE_DOWN,
    GENERAL_END,
    GENERAL_HOME,
    GENERAL_LEFT_ARROW,
    GENERAL_RIGHT_ARROW,
    GENERAL_UP_ARROW,
    GENERAL_DOWN_ARROW,
    GENERAL_PRINT_SCREEN,
    GENERAL_INSERT,
    GENERAL_DELETE,
    GENERAL_NUM_LOCK,
    GENERAL_SCROLL_LOCK
};
