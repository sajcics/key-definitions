# About

All keyboard keys definition create by following MDN official site. Now, you do not have to search or remember key codes.

example of usage

**before**

```js
if (e.target.value === 13) {
}
```

**now**

```js
import { GENERALS } from "keys";

if (e.target.value === GENERALS.ENTER.keyCode) {
}
```

Each key definition inherits KeyInterface that has following structure
:

```js
interface KeyInterface {
  keyCode: number;
  which: number;
  code: string;
  name: string;
  isAltKey?: boolean;
  isMetaKey?: boolean;
  isShiftKey?: boolean;
  isCtrlKey?: boolean;
}
```

## Project structure

- Digits - part of alphanumeric section of the keyboard and represent only numbers
- NumPads - part of numpad section of the keyboard
- Alpha - part of alphanumeric section of the keyboard and represent only alpha characters (a-z and A-Z)
- Functions - part of functions section of the keyboard (f1-f12)
- Generals - part of alphanumeric and control pad section of the keyboard (like Home, Alt, Ctrl, CapsLock)
- Specials - part of alphanumeric section of the keyboard and represent only special characters (like !?.$&%/#"`\*)

### Other resources:

https://blogs.longwin.com.tw/lifetype/key_codes.html

https://keycode.info/for/!

https://www.computerhope.com/jargon/s/specchar.htm

https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code
