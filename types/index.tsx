export interface KeyInterface {
    keyCode: number,
    which: number,
    code: string,
    name: string,
    isAltKey?: boolean,
    isMetaKey: boolean,
}

export const KeyDefaults = {
    isAltKey: false,
    isMetaKey: false
}

export enum CODES {
    NUMPAD = "Numpad",
    DIGIT = "Digit",
    FUNCTION = "F",
    KEY = "Key",
    ESCAPE = "Escape",
    TAB = "Tab",
    CAPS_LOCK = "CapsLock",
    SHIFT = "Shift",
    SHIFT_LEFT = "ShiftLeft",
    SHIFT_RIGHT = "ShiftRight",
    CONTROL = "Control",
    CONTROL_LEFT = "ControlLeft",
    CONTROL_RIGHT = "ControlRight",
    ALT = "Alt",
    ALT_LEFT = "AltLeft",
    ALT_RIGHT = "AltRight",
    SPACE = "Space",
    SPECIAL = "Special",
    ENTER = "Enter",
    PAGE_UP = "Page Up",
    PAGE_DOWN = "Page Down",
    END = "End",
    HOME = "Home",
    LEFT_ARROW = "ArrowLeft",
    UP_ARROW = "ArrowUp",
    RIGHT_ARROW = "ArrowRight",
    DOWN_ARROW = "ArrowDown",
    PRINT_SCREEN = "PrintScreen",
    INSERT = "Insert",
    DELETE = "Delete",
    NUM_LOCK = "NumLock",
    SCROLL_LOCK = "ScrollLock",
}







