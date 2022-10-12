# About

Key-definitions module is made by one purpose: to have key definitions in one place. Key definitions are followed by MDN documentation and as recommended a web developers should check `event.key` on `keyup` event to detect pressed key (not a `keydown` event nor `keyCode` property). The reason for this read more in [documentation](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key#case_1).

Because there are numerous keyboard layouts this library is not 100% bulletproof.

# Usage

**before**

```js
if (e.keyCode === 65) {
  // this approach is deprecated but it's still in usage
}

// or

if (e.key === "ArrowLeft") {
}
```

**now**

```js
import { UpperCase, ARROW_LEFT } from "key-definitions";

if (e.key === UpperCase.A.key) {
  // if event key is equal to "A"
}

if (e.key === ARROW_LEFT.key) {
  /// if event key is a ArrowLeft
}
```

# Interfaces

Each key definition inherits `KeyInterface` that has following structure:

```js
interface KeyInterface {
  keyCode: number | number[]; // event.keyCode, it's array if there are numerous supports for different operation systems
  keyCodeDefinitions?: KeyCodeSupportOS[]; // description of keyCode in case if exists multiple keyCode values
  hex?: hexNumber | hexNumber[]; // key's hex number, it's array if multiple keyCodeDefinitions exists
  code: string; // the same as event.code
  key: string; // the same as event.key
  isAltKey?: boolean;
  isMetaKey?: boolean;
  isShiftKey?: boolean;
  isCtrlKey?: boolean;
```

# Functions

| Name        | Description                                         |
| ----------- | --------------------------------------------------- |
| isCharacter | Detect if pressed value is a character a-z and A-Z. |

## isCharacter (x: KeyboardEvent)

Function will check `key`, `code` or `keyCode` values of KeyboardEvent.

```js
onClick = (e: KeyboardEvent) => {
  isCharacter(e); // you can forward KeyboardEvent to detect if pressed key is a character
};
```

## isCharacter(x: string)

```js
isCharacter("A"); // true
isCharacter("a"); // true
isCharacter("?"); // false
isCharacter("č"); // true
isCharacter("1"); // false
isCharacter("KeyA"); // true
isCharacter("KeyZ"); // true
isCharacter("Enter"); // false
```

## isCharacter(x: number)

Even `keyCode` is deprecated it's still in usage by some developers. **Forward `keyCode` value from `keyup` event.**

```js
isCharacter(64); // check 'a' value --> true
isCharacter(90); // check 'Z' value --> true
isCharacter(191); // check '?' value --> false
isCharacter(49); // check '1' value --> false
```

# Supported table

## Language layouts

| Language | Layout |
| -------- | ------ |
| English  | US     |
| Croatian | CRO    |

By default US layout is set, for different layout you need to import it independently.

```js
import { LowerCase }, Layout_CRO from "key-definitions";

console.log(LowerCase.A.key); // --> returns US layout --> value 'a'
console.log(Layout_CRO.LowerCase.A.key); // --> returns croatian layout --> value 'a'
console.log(Layout_CRO.LowerCase.Č.key); // --> returns croatian layout --> value 'č'
console.log(LowerCase.Č.key); // --> undefined (not supported for US layout)
```

## Sections

### Alpha

---

Includes lower and upper case `a-zA-Z`.

| Key | Layout |
| --- | ------ |
| A-Z | all    |
| Č   | cro    |
| Ć   | cro    |
| Ž   | cro    |
| Đ   | cro    |
| Š   | cro    |

```js
import { LowerCase, UpperCase } from "key-definitions";

console.log(LowerCase.A.key); // --> returns value 'a'
console.log(UpperCase.A.key); // --> returns value 'A'
```

### Digits

---

Includes all numerical keys `0-9` in alphanumeric keyboard section.

| Key | Name  |
| --- | ----- |
| 0   | ZERO  |
| 1   | ONE   |
| 2   | TWO   |
| 3   | THREE |
| 4   | FOUR  |
| 5   | FIVE  |
| 6   | SIX   |
| 7   | SEVEN |
| 8   | EIGHT |
| 9   | NINE  |

```js
import { ZERO, SEVEN } from "key-definitions";

console.log(ZERO.key); // returns value '0'
console.log(SEVEN.key); // returns value '7'
```

### Numpad

---

Includes all keys in numpad section - digits and general (functional keys such as enter, num lock). Example: `0-9, NumLock, Enter`; We have two sections `General` (functional keys) and `Digits` (0-9 numbers).

| Key            | Name        |
| -------------- | ----------- |
| 0-9            | ZERO-NINE   |
| = (equal sign) | EQUAL       |
| enter          | ENTER       |
| arrow up       | ARROW_UP    |
| arrow down     | ARROW_DOWN  |
| arrow right    | ARROW_RIGHT |
| arrow left     | ARROW_LEFT  |
| \*             | MULTIPLY    |
| +              | ADD         |
| -              | SUBSTRACT   |
| ,              | COMMA       |
| /              | DIVIDE      |
| .              | DECIMAL     |
| insert         | INSERT      |
| end            | END         |
| page down      | PAGE_DOWN   |
| home           | HOME        |
| page up        | PAGE_UP     |
| delete         | DELETE      |

```js
import { Numpad } from "key-definitions";

console.log(Numpad.ARROW_DOWN.key); // returns value 'ArrowDown'
console.log(Numpad.ZERO.key); // returns '0'
```

### Functions

---

Includes all keys from `F1-F12` in function section.

```js
import { F1 } from "key-definitions";

console.log(F1.key); // returns value 'F1'
```

### Generics

---

Includes functional keys in alphanumeric keyboard section. Example: `AltLeft, Shift, Enter, Tab, CapsLock`.

| Key          | Name         |
| ------------ | ------------ |
| tab          | TAB          |
| enter        | ENTER        |
| shift left   | SHIFT_LEFT   |
| shift right  | SHIFT RIGHT  |
| ctrl left    | CTRL_LEFT    |
| ctrl right   | CTRL_RIGHT   |
| alt left     | ALT_LEFT     |
| alt right    | ALT_RIGHT    |
| caps lock    | CAPS_LOCK    |
| escape       | ESC          |
| space        | SPACE        |
| page up      | PAGE_UP      |
| page down    | PAGE_DOWN    |
| end          | END          |
| home         | HOME         |
| arrow left   | ARROW_LEFT   |
| arrow up     | ARROW_UP     |
| arrow right  | ARROW_RIGHT  |
| arrow down   | ARROW_DOWN   |
| print screen | PRINT_SCREEN |
| insert       | INSERT       |
| delete       | DELETE       |
| num lock     | NUM_LOCK     |
| scroll lock  | SCROLL_LOCK  |
| help         | HELP         |
| pause        | PAUSE        |

```js
import { ALT_LEFT, ALT_RIGHT } from "key-definitions";

console.log(ALT_LEFT.key); // returns value 'Alt'
console.log(ALT_LEFT.code); // returns value 'AltLeft'
console.log(ALT_RIGHT.key); // returns 'Alt'
console.log(ALT_RIGHT.code); // returns 'AltRight'
```

### Specials

Includes special keys like `question marks )!?.$&%/#"\*)` as part of alphanumeric keyboard section.

| Key | Name                 |
| --- | -------------------- |
| !   | EXCLAMATION_MARK     |
| "   | QUOTATION_MARK       |
| #   | HASH                 |
| $   | DOLLAR_SIGN          |
| %   | PERCENT              |
| &   | AMPERSAND            |
| '   | APOSTROPHE           |
| (   | OPEN_PARENTHESIS     |
| )   | CLOSE_PARENTHESIS    |
| \*  | ASTERISK             |
| +   | PLUS                 |
| ,   | COMMA                |
| -   | DASH                 |
| .   | DOT                  |
| /   | SLASH                |
| :   | COLON                |
| ;   | SEMICOLON            |
| <   | LESS_THAN_BRACKET    |
| =   | EQUAL                |
| >   | GREATER_THAN_BRACKET |
| ?   | QUESTION_MARK        |
| @   | AMPERSAT             |
| [   | OPEN_BRACKET         |
| \   | BACKSLASH            |
| ]   | CLOSE_BRACKET        |
| ^   | CARET                |
| \_  | UNDERSCORE           |
| `   | BACKQUOTE            |
| {   | OPEN_BRACE           |
| \|  | VERTICAL_BAR         |
| }   | CLOSE_BRACE          |
| ~   | TILDA                |

```js
import { DOLLAR_SIGN } from "key-definitions";

console.log(DOLLAR_SIGN.key); // returns value '$'
```

### Other resources:

https://blogs.longwin.com.tw/lifetype/key_codes.html

https://keycode.info/for/!

https://www.computerhope.com/jargon/s/specchar.htm

https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code

https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
