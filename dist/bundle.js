(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Keys = {}));
})(this, (function (exports) { 'use strict';

    var KeyDefaults = {
        isAltKey: false,
        isMetaKey: false,
        isShiftKey: false,
        isCtrlKey: false
    };
    exports.CODES = void 0;
    (function (CODES) {
        CODES["NUMPAD"] = "Numpad";
        CODES["DIGIT"] = "Digit";
        CODES["FUNCTION"] = "F";
        CODES["KEY"] = "Key";
        CODES["ESCAPE"] = "Escape";
        CODES["TAB"] = "Tab";
        CODES["CAPS_LOCK"] = "CapsLock";
        CODES["SHIFT"] = "Shift";
        CODES["SHIFT_LEFT"] = "ShiftLeft";
        CODES["SHIFT_RIGHT"] = "ShiftRight";
        CODES["CONTROL"] = "Control";
        CODES["CONTROL_LEFT"] = "ControlLeft";
        CODES["CONTROL_RIGHT"] = "ControlRight";
        CODES["ALT"] = "Alt";
        CODES["ALT_LEFT"] = "AltLeft";
        CODES["ALT_RIGHT"] = "AltRight";
        CODES["SPACE"] = "Space";
        CODES["ENTER"] = "Enter";
        CODES["PAGE_UP"] = "Page Up";
        CODES["PAGE_DOWN"] = "Page Down";
        CODES["END"] = "End";
        CODES["HOME"] = "Home";
        CODES["LEFT_ARROW"] = "ArrowLeft";
        CODES["UP_ARROW"] = "ArrowUp";
        CODES["RIGHT_ARROW"] = "ArrowRight";
        CODES["DOWN_ARROW"] = "ArrowDown";
        CODES["PRINT_SCREEN"] = "PrintScreen";
        CODES["INSERT"] = "Insert";
        CODES["DELETE"] = "Delete";
        CODES["NUM_LOCK"] = "NumLock";
        CODES["SCROLL_LOCK"] = "ScrollLock";
        CODES["EQUAL"] = "Equal";
        CODES["HELP"] = "Help";
        CODES["PERIOD"] = "Period";
        CODES["QUOTE"] = "Quote";
        CODES["SEMICOLON"] = "Semicolon";
        CODES["SLASH"] = "Slash";
        CODES["COMMA"] = "Comma";
        CODES["MINUS"] = "Minus";
        CODES["BACKSLASH"] = "Backslash";
        CODES["BRACKET_LEFT"] = "BracketLeft";
        CODES["BRACKET_RIGHT"] = "BracketRight";
        CODES["BACKQUOTE"] = "Backquote";
    })(exports.CODES || (exports.CODES = {}));

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    var A$1 = __assign({ keyCode: 97, which: 97, code: "".concat(exports.CODES.KEY, "A"), name: "a" }, KeyDefaults);
    var B$1 = __assign({ keyCode: 98, which: 98, code: "".concat(exports.CODES.KEY, "B"), name: "b" }, KeyDefaults);
    var C$1 = __assign({ keyCode: 99, which: 99, code: "".concat(exports.CODES.KEY, "C"), name: "c" }, KeyDefaults);
    var D$1 = __assign({ keyCode: 100, which: 100, code: "".concat(exports.CODES.KEY, "D"), name: "d" }, KeyDefaults);
    var E$1 = __assign({ keyCode: 101, which: 101, code: "".concat(exports.CODES.KEY, "E"), name: "e" }, KeyDefaults);
    var F$1 = __assign({ keyCode: 102, which: 102, code: "".concat(exports.CODES.KEY, "F"), name: "f" }, KeyDefaults);
    var G$1 = __assign({ keyCode: 103, which: 103, code: "".concat(exports.CODES.KEY, "G"), name: "g" }, KeyDefaults);
    var H$1 = __assign({ keyCode: 104, which: 104, code: "".concat(exports.CODES.KEY, "H"), name: "h" }, KeyDefaults);
    var I$1 = __assign({ keyCode: 105, which: 105, code: "".concat(exports.CODES.KEY, "I"), name: "i" }, KeyDefaults);
    var J$1 = __assign({ keyCode: 106, which: 106, code: "".concat(exports.CODES.KEY, "J"), name: "j" }, KeyDefaults);
    var K$1 = __assign({ keyCode: 107, which: 107, code: "".concat(exports.CODES.KEY, "K"), name: "k" }, KeyDefaults);
    var L$1 = __assign({ keyCode: 108, which: 108, code: "".concat(exports.CODES.KEY, "L"), name: "l" }, KeyDefaults);
    var M$1 = __assign({ keyCode: 109, which: 109, code: "".concat(exports.CODES.KEY, "M"), name: "m" }, KeyDefaults);
    var N$1 = __assign({ keyCode: 110, which: 110, code: "".concat(exports.CODES.KEY, "N"), name: "n" }, KeyDefaults);
    var O$1 = __assign({ keyCode: 111, which: 111, code: "".concat(exports.CODES.KEY, "O"), name: "o" }, KeyDefaults);
    var P$1 = __assign({ keyCode: 112, which: 112, code: "".concat(exports.CODES.KEY, "P"), name: "p" }, KeyDefaults);
    var Q$1 = __assign({ keyCode: 113, which: 113, code: "".concat(exports.CODES.KEY, "Q"), name: "q" }, KeyDefaults);
    var R$1 = __assign({ keyCode: 114, which: 114, code: "".concat(exports.CODES.KEY, "R"), name: "r" }, KeyDefaults);
    var S$1 = __assign({ keyCode: 115, which: 115, code: "".concat(exports.CODES.KEY, "S"), name: "s" }, KeyDefaults);
    var T$1 = __assign({ keyCode: 116, which: 116, code: "".concat(exports.CODES.KEY, "T"), name: "t" }, KeyDefaults);
    var U$1 = __assign({ keyCode: 117, which: 117, code: "".concat(exports.CODES.KEY, "U"), name: "u" }, KeyDefaults);
    var V$1 = __assign({ keyCode: 118, which: 118, code: "".concat(exports.CODES.KEY, "V"), name: "v" }, KeyDefaults);
    var W$1 = __assign({ keyCode: 119, which: 119, code: "".concat(exports.CODES.KEY, "W"), name: "w" }, KeyDefaults);
    var X$1 = __assign({ keyCode: 120, which: 120, code: "".concat(exports.CODES.KEY, "X"), name: "x" }, KeyDefaults);
    var Y$1 = __assign({ keyCode: 121, which: 121, code: "".concat(exports.CODES.KEY, "Y"), name: "y" }, KeyDefaults);
    var Z$1 = __assign({ keyCode: 122, which: 122, code: "".concat(exports.CODES.KEY, "Z"), name: "z" }, KeyDefaults);

    var AlphaLowerCase = /*#__PURE__*/Object.freeze({
        __proto__: null,
        A: A$1,
        B: B$1,
        C: C$1,
        D: D$1,
        E: E$1,
        F: F$1,
        G: G$1,
        H: H$1,
        I: I$1,
        J: J$1,
        K: K$1,
        L: L$1,
        M: M$1,
        N: N$1,
        O: O$1,
        P: P$1,
        Q: Q$1,
        R: R$1,
        S: S$1,
        T: T$1,
        U: U$1,
        V: V$1,
        W: W$1,
        X: X$1,
        Y: Y$1,
        Z: Z$1
    });

    var A = __assign(__assign({ keyCode: 65, which: 65, code: "".concat(exports.CODES.KEY, "A"), name: "A" }, KeyDefaults), { isShiftKey: true });
    var B = __assign(__assign({ keyCode: 66, which: 66, code: "".concat(exports.CODES.KEY, "B"), name: "B" }, KeyDefaults), { isShiftKey: true });
    var C = __assign(__assign({ keyCode: 67, which: 67, code: "".concat(exports.CODES.KEY, "C"), name: "C" }, KeyDefaults), { isShiftKey: true });
    var D = __assign(__assign({ keyCode: 68, which: 68, code: "".concat(exports.CODES.KEY, "D"), name: "D" }, KeyDefaults), { isShiftKey: true });
    var E = __assign(__assign({ keyCode: 69, which: 69, code: "".concat(exports.CODES.KEY, "E"), name: "E" }, KeyDefaults), { isShiftKey: true });
    var F = __assign(__assign({ keyCode: 70, which: 70, code: "".concat(exports.CODES.KEY, "F"), name: "F" }, KeyDefaults), { isShiftKey: true });
    var G = __assign(__assign({ keyCode: 71, which: 71, code: "".concat(exports.CODES.KEY, "G"), name: "G" }, KeyDefaults), { isShiftKey: true });
    var H = __assign(__assign({ keyCode: 72, which: 72, code: "".concat(exports.CODES.KEY, "H"), name: "H" }, KeyDefaults), { isShiftKey: true });
    var I = __assign(__assign({ keyCode: 73, which: 73, code: "".concat(exports.CODES.KEY, "I"), name: "I" }, KeyDefaults), { isShiftKey: true });
    var J = __assign(__assign({ keyCode: 74, which: 74, code: "".concat(exports.CODES.KEY, "J"), name: "J" }, KeyDefaults), { isShiftKey: true });
    var K = __assign(__assign({ keyCode: 75, which: 75, code: "".concat(exports.CODES.KEY, "K"), name: "K" }, KeyDefaults), { isShiftKey: true });
    var L = __assign(__assign({ keyCode: 76, which: 76, code: "".concat(exports.CODES.KEY, "L"), name: "L" }, KeyDefaults), { isShiftKey: true });
    var M = __assign(__assign({ keyCode: 77, which: 77, code: "".concat(exports.CODES.KEY, "M"), name: "M" }, KeyDefaults), { isShiftKey: true });
    var N = __assign(__assign({ keyCode: 78, which: 78, code: "".concat(exports.CODES.KEY, "N"), name: "N" }, KeyDefaults), { isShiftKey: true });
    var O = __assign(__assign({ keyCode: 79, which: 79, code: "".concat(exports.CODES.KEY, "O"), name: "O" }, KeyDefaults), { isShiftKey: true });
    var P = __assign(__assign({ keyCode: 80, which: 80, code: "".concat(exports.CODES.KEY, "P"), name: "P" }, KeyDefaults), { isShiftKey: true });
    var Q = __assign(__assign({ keyCode: 81, which: 81, code: "".concat(exports.CODES.KEY, "Q"), name: "Q" }, KeyDefaults), { isShiftKey: true });
    var R = __assign(__assign({ keyCode: 82, which: 82, code: "".concat(exports.CODES.KEY, "R"), name: "R" }, KeyDefaults), { isShiftKey: true });
    var S = __assign(__assign({ keyCode: 83, which: 83, code: "".concat(exports.CODES.KEY, "S"), name: "S" }, KeyDefaults), { isShiftKey: true });
    var T = __assign(__assign({ keyCode: 84, which: 84, code: "".concat(exports.CODES.KEY, "T"), name: "T" }, KeyDefaults), { isShiftKey: true });
    var U = __assign(__assign({ keyCode: 85, which: 85, code: "".concat(exports.CODES.KEY, "U"), name: "U" }, KeyDefaults), { isShiftKey: true });
    var V = __assign(__assign({ keyCode: 86, which: 86, code: "".concat(exports.CODES.KEY, "V"), name: "V" }, KeyDefaults), { isShiftKey: true });
    var W = __assign(__assign({ keyCode: 87, which: 87, code: "".concat(exports.CODES.KEY, "W"), name: "W" }, KeyDefaults), { isShiftKey: true });
    var X = __assign(__assign({ keyCode: 88, which: 88, code: "".concat(exports.CODES.KEY, "X"), name: "X" }, KeyDefaults), { isShiftKey: true });
    var Y = __assign(__assign({ keyCode: 89, which: 89, code: "".concat(exports.CODES.KEY, "Y"), name: "Y" }, KeyDefaults), { isShiftKey: true });
    var Z = __assign(__assign({ keyCode: 90, which: 90, code: "".concat(exports.CODES.KEY, "Z"), name: "Z" }, KeyDefaults), { isShiftKey: true });

    var AlphaUpperCase = /*#__PURE__*/Object.freeze({
        __proto__: null,
        A: A,
        B: B,
        C: C,
        D: D,
        E: E,
        F: F,
        G: G,
        H: H,
        I: I,
        J: J,
        K: K,
        L: L,
        M: M,
        N: N,
        O: O,
        P: P,
        Q: Q,
        R: R,
        S: S,
        T: T,
        U: U,
        V: V,
        W: W,
        X: X,
        Y: Y,
        Z: Z
    });

    var index$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        LowerCase: AlphaLowerCase,
        UpperCase: AlphaUpperCase
    });

    var F1 = __assign({ keyCode: 112, which: 112, code: "".concat(exports.CODES.FUNCTION, "1"), name: "".concat(exports.CODES.FUNCTION, "1") }, KeyDefaults);
    var F2 = __assign({ keyCode: 113, which: 113, code: "".concat(exports.CODES.FUNCTION, "2"), name: "".concat(exports.CODES.FUNCTION, "2") }, KeyDefaults);
    var F3 = __assign({ keyCode: 114, which: 114, code: "".concat(exports.CODES.FUNCTION, "3"), name: "".concat(exports.CODES.FUNCTION, "3") }, KeyDefaults);
    var F4 = __assign({ keyCode: 115, which: 115, code: "".concat(exports.CODES.FUNCTION, "4"), name: "".concat(exports.CODES.FUNCTION, "4") }, KeyDefaults);
    var F5 = __assign({ keyCode: 116, which: 116, code: "".concat(exports.CODES.FUNCTION, "5"), name: "".concat(exports.CODES.FUNCTION, "5") }, KeyDefaults);
    var F6 = __assign({ keyCode: 117, which: 117, code: "".concat(exports.CODES.FUNCTION, "6"), name: "".concat(exports.CODES.FUNCTION, "6") }, KeyDefaults);
    var F7 = __assign({ keyCode: 118, which: 118, code: "".concat(exports.CODES.FUNCTION, "7"), name: "".concat(exports.CODES.FUNCTION, "7") }, KeyDefaults);
    var F8 = __assign({ keyCode: 119, which: 119, code: "".concat(exports.CODES.FUNCTION, "8"), name: "".concat(exports.CODES.FUNCTION, "8") }, KeyDefaults);
    var F9 = __assign({ keyCode: 120, which: 120, code: "".concat(exports.CODES.FUNCTION, "9"), name: "".concat(exports.CODES.FUNCTION, "9") }, KeyDefaults);
    var F10 = __assign({ keyCode: 121, which: 121, code: "".concat(exports.CODES.FUNCTION, "10"), name: "".concat(exports.CODES.FUNCTION, "10") }, KeyDefaults);
    var F11 = __assign({ keyCode: 122, which: 122, code: "".concat(exports.CODES.FUNCTION, "11"), name: "".concat(exports.CODES.FUNCTION, "11") }, KeyDefaults);
    var F12 = __assign({ keyCode: 123, which: 123, code: "".concat(exports.CODES.FUNCTION, "12"), name: "".concat(exports.CODES.FUNCTION, "12") }, KeyDefaults);

    var Functions = /*#__PURE__*/Object.freeze({
        __proto__: null,
        F1: F1,
        F2: F2,
        F3: F3,
        F4: F4,
        F5: F5,
        F6: F6,
        F7: F7,
        F8: F8,
        F9: F9,
        F10: F10,
        F11: F11,
        F12: F12
    });

    var TAB = __assign({ keyCode: 9, which: 9, code: exports.CODES.TAB, name: exports.CODES.TAB }, KeyDefaults);
    var ENTER$1 = __assign({ keyCode: 13, which: 13, code: exports.CODES.ENTER, name: exports.CODES.ENTER }, KeyDefaults);
    var SHIFT_LEFT = __assign(__assign({ keyCode: 16, which: 16, code: exports.CODES.SHIFT_LEFT, name: exports.CODES.SHIFT }, KeyDefaults), { isShiftKey: true });
    var SHIFT_RIGHT = __assign(__assign({ keyCode: 16, which: 16, code: exports.CODES.SHIFT_RIGHT, name: exports.CODES.SHIFT }, KeyDefaults), { isShiftKey: true });
    var CTRL_LEFT = __assign(__assign({ keyCode: 17, which: 17, code: exports.CODES.CONTROL_LEFT, name: exports.CODES.CONTROL }, KeyDefaults), { isCtrlKey: true });
    var CTRL_RIGHT = __assign(__assign({ keyCode: 17, which: 17, code: exports.CODES.CONTROL_RIGHT, name: exports.CODES.CONTROL }, KeyDefaults), { isCtrlKey: true });
    var ALT_LEFT = __assign(__assign({ keyCode: 18, which: 18, code: exports.CODES.ALT_LEFT, name: exports.CODES.ALT }, KeyDefaults), { isAltKey: true });
    var ALT_RIGHT = __assign(__assign({ keyCode: 18, which: 18, code: exports.CODES.ALT_RIGHT, name: exports.CODES.ALT }, KeyDefaults), { isAltKey: true });
    var CAPS_LOCK = __assign({ keyCode: 20, which: 20, code: exports.CODES.CAPS_LOCK, name: exports.CODES.CAPS_LOCK }, KeyDefaults);
    var ESC = __assign({ keyCode: 27, which: 27, code: exports.CODES.ESCAPE, name: exports.CODES.ESCAPE }, KeyDefaults);
    var SPACE = __assign({ keyCode: 32, which: 32, code: exports.CODES.SPACE, name: " " }, KeyDefaults);
    var PAGE_UP = __assign({ keyCode: 33, which: 33, code: exports.CODES.PAGE_UP, name: exports.CODES.PAGE_UP }, KeyDefaults);
    var PAGE_DOWN = __assign({ keyCode: 34, which: 34, code: exports.CODES.PAGE_DOWN, name: exports.CODES.PAGE_DOWN }, KeyDefaults);
    var END = __assign({ keyCode: 35, which: 35, code: exports.CODES.END, name: exports.CODES.END }, KeyDefaults);
    var HOME = __assign({ keyCode: 36, which: 36, code: exports.CODES.HOME, name: exports.CODES.HOME }, KeyDefaults);
    var LEFT_ARROW$1 = __assign({ keyCode: 37, which: 37, code: exports.CODES.LEFT_ARROW, name: exports.CODES.LEFT_ARROW }, KeyDefaults);
    var UP_ARROW$1 = __assign({ keyCode: 38, which: 38, code: exports.CODES.UP_ARROW, name: exports.CODES.UP_ARROW }, KeyDefaults);
    var RIGHT_ARROW$1 = __assign({ keyCode: 39, which: 39, code: exports.CODES.RIGHT_ARROW, name: exports.CODES.RIGHT_ARROW }, KeyDefaults);
    var DOWN_ARROW$1 = __assign({ keyCode: 40, which: 40, code: exports.CODES.DOWN_ARROW, name: exports.CODES.DOWN_ARROW }, KeyDefaults);
    var PRINT_SCREEN = __assign({ keyCode: 44, which: 44, code: exports.CODES.PRINT_SCREEN, name: exports.CODES.PRINT_SCREEN }, KeyDefaults);
    var INSERT = __assign({ keyCode: 45, which: 45, code: exports.CODES.INSERT, name: exports.CODES.INSERT }, KeyDefaults);
    var DELETE = __assign({ keyCode: 46, which: 46, code: exports.CODES.DELETE, name: exports.CODES.DELETE }, KeyDefaults);
    var NUM_LOCK = __assign({ keyCode: 144, which: 114, code: exports.CODES.NUM_LOCK, name: exports.CODES.NUM_LOCK }, KeyDefaults);
    var SCROLL_LOCK = __assign({ keyCode: 145, which: 145, code: exports.CODES.SCROLL_LOCK, name: exports.CODES.SCROLL_LOCK }, KeyDefaults);
    var HELP = __assign({ keyCode: undefined, which: undefined, code: exports.CODES.HELP, name: exports.CODES.HELP }, KeyDefaults);

    var Generals = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ESC: ESC,
        ENTER: ENTER$1,
        TAB: TAB,
        CAPS_LOCK: CAPS_LOCK,
        SHIFT_LEFT: SHIFT_LEFT,
        SHIFT_RIGHT: SHIFT_RIGHT,
        CTRL_LEFT: CTRL_LEFT,
        CTRL_RIGHT: CTRL_RIGHT,
        ALT_LEFT: ALT_LEFT,
        ALT_RIGHT: ALT_RIGHT,
        SPACE: SPACE,
        PAGE_UP: PAGE_UP,
        PAGE_DOWN: PAGE_DOWN,
        END: END,
        HOME: HOME,
        LEFT_ARROW: LEFT_ARROW$1,
        RIGHT_ARROW: RIGHT_ARROW$1,
        UP_ARROW: UP_ARROW$1,
        DOWN_ARROW: DOWN_ARROW$1,
        PRINT_SCREEN: PRINT_SCREEN,
        INSERT: INSERT,
        DELETE: DELETE,
        NUM_LOCK: NUM_LOCK,
        SCROLL_LOCK: SCROLL_LOCK,
        HELP: HELP
    });

    /** still needs checks!
     * @NOTE
     */
    var EXCLAMATION_MARK = __assign(__assign({ keyCode: 33, which: 33, code: "".concat(exports.CODES.DIGIT, "1"), name: "!" }, KeyDefaults), { isShiftKey: true });
    /** @check */
    var QUOTATION_MARK = __assign(__assign({ keyCode: 34, which: 34, code: "".concat(exports.CODES.QUOTE), name: "\"" }, KeyDefaults), { isShiftKey: true });
    var HASH = __assign(__assign({ keyCode: 35, which: 35, code: "".concat(exports.CODES.DIGIT, "3"), name: "#" }, KeyDefaults), { isShiftKey: true });
    var DOLLAR_SIGN = __assign(__assign({ keyCode: 36, which: 36, code: "".concat(exports.CODES.DIGIT, "4"), name: "$" }, KeyDefaults), { isShiftKey: true });
    var PERCENT = __assign(__assign({ keyCode: 37, which: 37, code: "".concat(exports.CODES.DIGIT, "5"), name: "%" }, KeyDefaults), { isShiftKey: true });
    var AMPERSAND = __assign(__assign({ keyCode: 38, which: 38, code: "".concat(exports.CODES.DIGIT, "7"), name: "&" }, KeyDefaults), { isShiftKey: true });
    /** @check */
    var APOSTROPHE = __assign({ keyCode: 39, which: 39, code: "".concat(exports.CODES.QUOTE), name: "'" }, KeyDefaults);
    var OPEN_PARENTHESIS = __assign(__assign({ keyCode: 40, which: 40, code: "".concat(exports.CODES.DIGIT, "9"), name: "(" }, KeyDefaults), { isShiftKey: true });
    /** @check */
    var CLOSE_PARENTHESIS = __assign({ keyCode: 41, which: 41, code: "".concat(exports.CODES.DIGIT, "0"), name: ")" }, KeyDefaults);
    var ASTERISK$1 = __assign(__assign({ keyCode: 42, which: 42, code: "".concat(exports.CODES.DIGIT, "8"), name: "*" }, KeyDefaults), { isShiftKey: true });
    /** @check */
    var PLUS$1 = __assign(__assign({ keyCode: 43, which: 43, code: "".concat(exports.CODES.EQUAL), name: "+" }, KeyDefaults), { isShiftKey: true });
    var COMMA$1 = __assign({ keyCode: 44, which: 44, code: "".concat(exports.CODES.COMMA), name: "," }, KeyDefaults);
    var DASH$1 = __assign({ keyCode: 45, which: 45, code: "".concat(exports.CODES.MINUS), name: "-" }, KeyDefaults);
    /** @check */
    var DOT = __assign({ keyCode: 46, which: 46, code: "".concat(exports.CODES.PERIOD), name: "." }, KeyDefaults);
    /** @check */
    var SLASH$1 = __assign({ keyCode: 47, which: 47, code: "".concat(exports.CODES.SLASH), name: "/" }, KeyDefaults);
    /** @check */
    var COLON = __assign({ keyCode: 58, which: 58, code: "".concat(exports.CODES.SEMICOLON), name: ":" }, KeyDefaults);
    /** @check */
    var SEMICOLON = __assign({ keyCode: 59, which: 59, code: "".concat(exports.CODES.SEMICOLON), name: ";" }, KeyDefaults);
    /** @check */
    var LESS_THAN_BRACKET = __assign({ keyCode: 60, which: 60, code: "".concat(exports.CODES.COMMA), name: "<" }, KeyDefaults);
    var EQUAL = __assign({ keyCode: 61, which: 61, code: "".concat(exports.CODES.EQUAL), name: "=" }, KeyDefaults);
    /** @checl */
    var GREATER_THAN_BRACKET = __assign({ keyCode: 62, which: 62, code: "".concat(exports.CODES.PERIOD), name: ">" }, KeyDefaults);
    /** @check */
    var QUESTION_MARK = __assign({ keyCode: 63, which: 63, code: "".concat(exports.CODES.SLASH), name: "?" }, KeyDefaults);
    var AMPERSAT = __assign(__assign({ keyCode: 64, which: 64, code: "".concat(exports.CODES.DIGIT, "2"), name: "@" }, KeyDefaults), { isShiftKey: true });
    var OPEN_BRACKET = __assign({ keyCode: 91, which: 91, code: exports.CODES.BRACKET_LEFT, name: "[" }, KeyDefaults);
    var BACKSLASH = __assign({ keyCode: 92, which: 92, code: "".concat(exports.CODES.BACKSLASH), name: "\\" }, KeyDefaults);
    var CLOSE_BRACKET = __assign({ keyCode: 93, which: 93, code: exports.CODES.BRACKET_RIGHT, name: "]" }, KeyDefaults);
    var CARET = __assign(__assign({ keyCode: 94, which: 94, code: "".concat(exports.CODES.DIGIT, "6"), name: "^" }, KeyDefaults), { isShiftKey: true });
    var UNDERSCORE = __assign({ keyCode: 95, which: 95, code: "".concat(exports.CODES.MINUS), name: "_" }, KeyDefaults);
    var BACKQUOTE = __assign({ keyCode: 96, which: 96, code: "".concat(exports.CODES.BACKQUOTE), name: "`" }, KeyDefaults);
    var OPEN_BRACE = __assign({ keyCode: 123, which: 123, code: exports.CODES.BRACKET_LEFT, name: "{" }, KeyDefaults);
    var VERTICAL_BAR = __assign({ keyCode: 124, which: 124, code: "".concat(exports.CODES.BACKSLASH), name: "|" }, KeyDefaults);
    var CLOSE_BRACE = __assign({ keyCode: 125, which: 125, code: exports.CODES.BRACKET_RIGHT, name: "}" }, KeyDefaults);
    var TILDA = __assign({ keyCode: 126, which: 126, code: "".concat(exports.CODES.BACKQUOTE), name: "~" }, KeyDefaults);

    var Specials = /*#__PURE__*/Object.freeze({
        __proto__: null,
        EXCLAMATION_MARK: EXCLAMATION_MARK,
        QUOTATION_MARK: QUOTATION_MARK,
        HASH: HASH,
        DOLLAR_SIGN: DOLLAR_SIGN,
        PERCENT: PERCENT,
        QUESTION_MARK: QUESTION_MARK,
        AMPERSAND: AMPERSAND,
        OPEN_PARENTHESIS: OPEN_PARENTHESIS,
        CLOSE_PARENTHESIS: CLOSE_PARENTHESIS,
        ASTERISK: ASTERISK$1,
        COMMA: COMMA$1,
        DASH: DASH$1,
        DOT: DOT,
        SLASH: SLASH$1,
        COLON: COLON,
        SEMICOLON: SEMICOLON,
        LESS_THAN_BRACKET: LESS_THAN_BRACKET,
        EQUAL: EQUAL,
        GREATER_THAN_BRACKET: GREATER_THAN_BRACKET,
        AMPERSAT: AMPERSAT,
        OPEN_BRACKET: OPEN_BRACKET,
        BACKSLASH: BACKSLASH,
        CLOSE_BRACKET: CLOSE_BRACKET,
        CARET: CARET,
        UNDERSCORE: UNDERSCORE,
        BACKQUOTE: BACKQUOTE,
        OPEN_BRACE: OPEN_BRACE,
        VERTICAL_BAR: VERTICAL_BAR,
        CLOSE_BRACE: CLOSE_BRACE,
        TILDA: TILDA,
        APOSTROPHE: APOSTROPHE,
        PLUS: PLUS$1
    });

    var ZERO$1 = __assign({ keyCode: 48, which: 48, code: "".concat(exports.CODES.DIGIT, "0"), name: "Zero" }, KeyDefaults);
    var ONE$1 = __assign({ keyCode: 49, which: 49, code: "".concat(exports.CODES.DIGIT, "1"), name: "One" }, KeyDefaults);
    var TWO$1 = __assign({ keyCode: 50, which: 50, code: "".concat(exports.CODES.DIGIT, "2"), name: "Two" }, KeyDefaults);
    var THREE$1 = __assign({ keyCode: 51, which: 51, code: "".concat(exports.CODES.DIGIT, "3"), name: "Three" }, KeyDefaults);
    var FOUR$1 = __assign({ keyCode: 52, which: 52, code: "".concat(exports.CODES.DIGIT, "4"), name: "Four" }, KeyDefaults);
    var FIVE$1 = __assign({ keyCode: 53, which: 53, code: "".concat(exports.CODES.DIGIT, "5"), name: "Five" }, KeyDefaults);
    var SIX$1 = __assign({ keyCode: 54, which: 54, code: "".concat(exports.CODES.DIGIT, "6"), name: "Six" }, KeyDefaults);
    var SEVEN$1 = __assign({ keyCode: 55, which: 55, code: "".concat(exports.CODES.DIGIT, "7"), name: "Seven" }, KeyDefaults);
    var EIGHT$1 = __assign({ keyCode: 56, which: 56, code: "".concat(exports.CODES.DIGIT, "8"), name: "Eight" }, KeyDefaults);
    var NINE$1 = __assign({ keyCode: 57, which: 57, code: "".concat(exports.CODES.DIGIT, "9"), name: "Nine" }, KeyDefaults);

    var Digits = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ZERO: ZERO$1,
        ONE: ONE$1,
        TWO: TWO$1,
        THREE: THREE$1,
        FOUR: FOUR$1,
        FIVE: FIVE$1,
        SIX: SIX$1,
        SEVEN: SEVEN$1,
        EIGHT: EIGHT$1,
        NINE: NINE$1
    });

    var ENTER = __assign({ keyCode: 97, which: 97, code: "".concat(exports.CODES.NUMPAD, "Enter"), name: exports.CODES.ENTER }, KeyDefaults);
    /** @check */
    __assign({ keyCode: undefined, which: undefined, code: "".concat(exports.CODES.NUMPAD).concat(exports.CODES.EQUAL), name: "=" }, KeyDefaults);
    var LEFT_ARROW = __assign({ keyCode: 37, which: 37, code: "".concat(exports.CODES.NUMPAD, "3"), name: exports.CODES.LEFT_ARROW }, KeyDefaults);
    var UP_ARROW = __assign({ keyCode: 38, which: 38, code: "".concat(exports.CODES.NUMPAD, "8"), name: exports.CODES.UP_ARROW }, KeyDefaults);
    var RIGHT_ARROW = __assign({ keyCode: 39, which: 39, code: "".concat(exports.CODES.NUMPAD, "6"), name: exports.CODES.RIGHT_ARROW }, KeyDefaults);
    var DOWN_ARROW = __assign({ keyCode: 40, which: 40, code: "".concat(exports.CODES.NUMPAD, "2"), name: exports.CODES.DOWN_ARROW }, KeyDefaults);
    /** @check */
    __assign({ keyCode: undefined, which: undefined, code: "".concat(exports.CODES.NUMPAD, "Backspace"), name: "" }, KeyDefaults);

    var ZERO = __assign({ keyCode: 98, which: 98, code: "".concat(exports.CODES.NUMPAD, "0"), name: "Zero" }, KeyDefaults);
    var ONE = __assign({ keyCode: 97, which: 97, code: "".concat(exports.CODES.NUMPAD, "1"), name: "One" }, KeyDefaults);
    var TWO = __assign({ keyCode: 98, which: 98, code: "".concat(exports.CODES.NUMPAD, "2"), name: "Two" }, KeyDefaults);
    var THREE = __assign({ keyCode: 99, which: 99, code: "".concat(exports.CODES.NUMPAD, "3"), name: "Three" }, KeyDefaults);
    var FOUR = __assign({ keyCode: 100, which: 100, code: "".concat(exports.CODES.NUMPAD, "4"), name: "Four" }, KeyDefaults);
    var FIVE = __assign({ keyCode: 101, which: 101, code: "".concat(exports.CODES.NUMPAD, "5"), name: "Five" }, KeyDefaults);
    var SIX = __assign({ keyCode: 102, which: 102, code: "".concat(exports.CODES.NUMPAD, "6"), name: "Six" }, KeyDefaults);
    var SEVEN = __assign({ keyCode: 103, which: 103, code: "".concat(exports.CODES.NUMPAD, "7"), name: "Seven" }, KeyDefaults);
    var EIGHT = __assign({ keyCode: 104, which: 104, code: "".concat(exports.CODES.NUMPAD, "8"), name: "Eight" }, KeyDefaults);
    var NINE = __assign({ keyCode: 105, which: 105, code: "".concat(exports.CODES.NUMPAD, "9"), name: "Nine" }, KeyDefaults);

    var ASTERISK = __assign({ keyCode: 106, which: 106, code: "".concat(exports.CODES.NUMPAD, "Multiply"), name: "*" }, KeyDefaults);
    var PLUS = __assign({ keyCode: 107, which: 107, code: "".concat(exports.CODES.NUMPAD, "Add"), name: "+" }, KeyDefaults);
    var DASH = __assign({ keyCode: 109, which: 109, code: "".concat(exports.CODES.NUMPAD, "Substract"), name: "-" }, KeyDefaults);
    var COMMA = __assign({ keyCode: 110, which: 110, code: "".concat(exports.CODES.NUMPAD, "Comma"), name: "," }, KeyDefaults);
    var SLASH = __assign({ keyCode: 111, which: 111, code: "".concat(exports.CODES.NUMPAD, "Divide"), name: "/" }, KeyDefaults);

    var index = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ENTER: ENTER,
        UP_ARROW: UP_ARROW,
        DOWN_ARROW: DOWN_ARROW,
        RIGHT_ARROW: RIGHT_ARROW,
        LEFT_ARROW: LEFT_ARROW,
        ZERO: ZERO,
        ONE: ONE,
        TWO: TWO,
        THREE: THREE,
        FOUR: FOUR,
        FIVE: FIVE,
        SIX: SIX,
        SEVEN: SEVEN,
        EIGHT: EIGHT,
        NINE: NINE,
        ASTERISK: ASTERISK,
        PLUS: PLUS,
        DASH: DASH,
        COMMA: COMMA,
        SLASH: SLASH
    });

    exports.Alpha = index$1;
    exports.Digits = Digits;
    exports.Functions = Functions;
    exports.Generals = Generals;
    exports.KeyDefaults = KeyDefaults;
    exports.NumPads = index;
    exports.Specials = Specials;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
