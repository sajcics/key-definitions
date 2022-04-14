export interface KeyInterface {
    key: number|string,
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

export const NUMPAD =  "Numpad";
export const DIGIT = "Digit";
export const KEY = "Key";
export const ESCAPE = "Escape";
export const TAB = "Tab";
export const CAPS_LOCK = "CapsLock";
export const SHIFT = "Shift";
export const SHIFT_LEFT = SHIFT+"Left";
export const SHIFT_RIGHT = SHIFT+"Right";
export const CONTROL = "Control";
export const CONTROL_LEFT = CONTROL+"Left";
export const CONTROL_RIGHT = CONTROL+"Right";
export const ALT = "Alt";
export const ALT_LEFT = ALT+"Left";
export const ALT_RIGHT = ALT+"Right";
export const SPACE = "Space";
