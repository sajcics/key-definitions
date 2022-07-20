import {
    KeyInterface,
    KeyDefaults,
    CODES
} from "../types";


const TAB: KeyInterface = {
    keyCode: 9,
    which: 9,
    code: CODES.TAB,
    name: CODES.TAB,
    ...KeyDefaults,
};


const ENTER: KeyInterface = {
    keyCode: 13,
    which: 13,
    code: CODES.ENTER,
    name: CODES.ENTER,
    ...KeyDefaults,
};


const SHIFT_LEFT: KeyInterface = {
    keyCode: 16,
    which: 16,
    code: CODES.SHIFT_LEFT,
    name: CODES.SHIFT,
    ...KeyDefaults,
    isShiftKey: true
};

const SHIFT_RIGHT: KeyInterface = {
    keyCode: 16,
    which: 16,
    code: CODES.SHIFT_RIGHT,
    name: CODES.SHIFT,
    ...KeyDefaults,
    isShiftKey: true
};

const CTRL_LEFT: KeyInterface = {
    keyCode: 17,
    which: 17,
    code: CODES.CONTROL_LEFT,
    name: CODES.CONTROL,
    ...KeyDefaults,
    isCtrlKey: true
};

const CTRL_RIGHT: KeyInterface = {
    keyCode: 17,
    which: 17,
    code: CODES.CONTROL_RIGHT,
    name: CODES.CONTROL,
    ...KeyDefaults,
    isCtrlKey: true
};

const ALT_LEFT: KeyInterface = {
    keyCode: 18,
    which: 18,
    code: CODES.ALT_LEFT,
    name: CODES.ALT,
    ...KeyDefaults,
    isAltKey: true
};

const ALT_RIGHT: KeyInterface = {
    keyCode: 18,
    which: 18,
    code: CODES.ALT_RIGHT,
    name: CODES.ALT,
    ...KeyDefaults,
    isAltKey: true
};

const CAPS_LOCK: KeyInterface = {
    keyCode: 20,
    which: 20,
    code: CODES.CAPS_LOCK,
    name: CODES.CAPS_LOCK,
    ...KeyDefaults,
};

const ESC: KeyInterface = {
    keyCode: 27,
    which: 27,
    code: CODES.ESCAPE,
    name: CODES.ESCAPE,
    ...KeyDefaults,
};


const SPACE: KeyInterface = {
    keyCode: 32,
    which: 32,
    code: CODES.SPACE,
    name: " ",
    ...KeyDefaults,
};

const PAGE_UP: KeyInterface = {
    keyCode: 33,
    which: 33,
    code: CODES.PAGE_UP,
    name: CODES.PAGE_UP,
    ...KeyDefaults,
};

const PAGE_DOWN: KeyInterface = {
    keyCode: 34,
    which: 34,
    code: CODES.PAGE_DOWN,
    name: CODES.PAGE_DOWN,
    ...KeyDefaults,
};

const END: KeyInterface = {
    keyCode: 35,
    which: 35,
    code: CODES.END,
    name: CODES.END,
    ...KeyDefaults,
};

const HOME: KeyInterface = {
    keyCode: 36,
    which: 36,
    code: CODES.HOME,
    name: CODES.HOME,
    ...KeyDefaults,
};

const LEFT_ARROW: KeyInterface = {
    keyCode: 37,
    which: 37,
    code: CODES.LEFT_ARROW,
    name: CODES.LEFT_ARROW,
    ...KeyDefaults,
};

const UP_ARROW: KeyInterface = {
    keyCode: 38,
    which: 38,
    code: CODES.UP_ARROW,
    name: CODES.UP_ARROW,
    ...KeyDefaults,
};

const RIGHT_ARROW: KeyInterface = {
    keyCode: 39,
    which: 39,
    code: CODES.RIGHT_ARROW,
    name: CODES.RIGHT_ARROW,
    ...KeyDefaults,
};

const DOWN_ARROW: KeyInterface = {
    keyCode: 40,
    which: 40,
    code: CODES.DOWN_ARROW,
    name: CODES.DOWN_ARROW,
    ...KeyDefaults,
};

const PRINT_SCREEN: KeyInterface = {
    keyCode: 44,
    which: 44,
    code: CODES.PRINT_SCREEN,
    name: CODES.PRINT_SCREEN,
    ...KeyDefaults,
};

const INSERT: KeyInterface = {
    keyCode: 45,
    which: 45,
    code: CODES.INSERT,
    name: CODES.INSERT,
    ...KeyDefaults,
};

const DELETE: KeyInterface = {
    keyCode: 46,
    which: 46,
    code: CODES.DELETE,
    name: CODES.DELETE,
    ...KeyDefaults,
};

const NUM_LOCK: KeyInterface = {
    keyCode: 144,
    which: 114,
    code: CODES.NUM_LOCK,
    name: CODES.NUM_LOCK,
    ...KeyDefaults
}

const SCROLL_LOCK: KeyInterface = {
    keyCode: 145,
    which: 145,
    code: CODES.SCROLL_LOCK,
    name: CODES.SCROLL_LOCK,
    ...KeyDefaults
}

const HELP: KeyInterface = {
    keyCode: undefined,
    which: undefined,
    code: CODES.HELP,
    name: CODES.HELP,
    ...KeyDefaults
}

export {
    ESC,
    ENTER,
    TAB,
    CAPS_LOCK,
    SHIFT_LEFT,
    SHIFT_RIGHT,
    CTRL_LEFT,
    CTRL_RIGHT,
    ALT_LEFT,
    ALT_RIGHT,
    SPACE,
    PAGE_UP,
    PAGE_DOWN,
    END,
    HOME,
    LEFT_ARROW,
    RIGHT_ARROW,
    UP_ARROW,
    DOWN_ARROW,
    PRINT_SCREEN,
    INSERT,
    DELETE,
    NUM_LOCK,
    SCROLL_LOCK
};
