import { KeyInterface, KeyDefaults, ESCAPE, TAB, CAPS_LOCK, SHIFT_LEFT, SHIFT_RIGHT, SHIFT, CONTROL, CONTROL_LEFT, CONTROL_RIGHT, ALT, ALT_LEFT, ALT_RIGHT, SPACE } from '../types';

const GENERAL_ESC: KeyInterface = {
    key: ESCAPE,
    keyCode: 27,
    which: 27,
    code: ESCAPE,
    name: "esc",
    ...KeyDefaults
}

const GENERAL_TAB: KeyInterface = {
    key: TAB,
    keyCode: 9,
    which: 9,
    code: TAB,
    name: "tab",
    ...KeyDefaults
}

const GENERAL_CAPS: KeyInterface = {
    key: CAPS_LOCK,
    keyCode: 20,
    which: 20,
    code: CAPS_LOCK,
    name: "caps lock",
    ...KeyDefaults
}

const GENERAL_SHIFT: KeyInterface = {
    key: SHIFT,
    keyCode: 16,
    which: 16,
    code: SHIFT,
    name: "shift",
    ...KeyDefaults
}


const GENERAL_SHIFT_LEFT: KeyInterface = {
    key: SHIFT,
    keyCode: 16,
    which: 16,
    code: SHIFT_LEFT,
    name: "shift left",
    ...KeyDefaults
}

const GENERAL_SHIFT_RIGHT: KeyInterface = {
    key: SHIFT,
    keyCode: 16,
    which: 16,
    code: SHIFT_RIGHT,
    name: "shift right",
    ...KeyDefaults
}

const GENERAL_CONTROL: KeyInterface = {
    key: CONTROL,
    keyCode: 17,
    which: 17,
    code: CONTROL,
    name: "control",
    ...KeyDefaults
}

const GENERAL_CONTROL_LEFT: KeyInterface = {
    key: CONTROL,
    keyCode: 17,
    which: 17,
    code: CONTROL_LEFT,
    name: "control left",
    ...KeyDefaults
}

const GENERAL_CONTROL_RIGHT: KeyInterface = {
    key: CONTROL,
    keyCode: 17,
    which: 17,
    code: CONTROL_RIGHT,
    name: "control right",
    ...KeyDefaults
}

const GENERAL_ALT: KeyInterface = {
    key: ALT,
    keyCode: 18,
    which: 18,
    code: ALT,
    name: "alt",
    ...KeyDefaults
}

const GENERAL_ALT_LEFT: KeyInterface = {
    key: ALT,
    keyCode: 18,
    
    which: 18,
    code: ALT_LEFT,
    name: "alt left",
    ...KeyDefaults
}

const GENERAL_ALT_RIGHT: KeyInterface = {
    key: ALT,
    keyCode: 18,
    which: 18,
    code: ALT_RIGHT,
    name: "alt right",
    ...KeyDefaults
}

const GENERAL_SPACE: KeyInterface = {
    key: " ",
    keyCode: 32,
    which: 32,
    code: SPACE,
    name: "space",
    ...KeyDefaults
}

export {
    GENERAL_ESC,
    GENERAL_TAB,
    GENERAL_CAPS,
    GENERAL_SHIFT,
    GENERAL_SHIFT_LEFT,
    GENERAL_SHIFT_RIGHT,
    GENERAL_CONTROL,
    GENERAL_CONTROL_LEFT,
    GENERAL_CONTROL_RIGHT,
    GENERAL_ALT,
    GENERAL_ALT_LEFT,
    GENERAL_ALT_RIGHT,
    GENERAL_SPACE
}