import {
  LowerCase, UpperCase 
} from "../src/base/alpha";
import * as Layout_CRO from "../src/layouts/cro/alpha";
import * as Layout_DE from "../src/layouts/de/alpha";

type CHAR_CRO = typeof Layout_CRO.LowerCase[keyof typeof Layout_CRO.LowerCase]["key"]
| typeof Layout_CRO.UpperCase[keyof typeof Layout_CRO.UpperCase]["key"];

type CHAR_DE = typeof Layout_DE.LowerCase[keyof typeof Layout_DE.LowerCase]["key"]
| typeof Layout_DE.UpperCase[keyof typeof Layout_DE.UpperCase]["key"];

type CHAR =
  | typeof LowerCase[keyof typeof LowerCase]["key"]
  | typeof UpperCase[keyof typeof UpperCase]["key"] 
  | CHAR_CRO
  | CHAR_DE

/**
 * @param {KeyboardEvent|string} x value that we want to check if represent character [a-zA-Z]
 * @returns {boolean} true if value is a character
 * @since 22 July 2022
 */
function isCharacter(x: KeyboardEvent | string | number): x is CHAR {
  if (!x) {
    return false;
  }

  const characters = [
    ...Object.values(LowerCase),
    ...Object.values(UpperCase),
    ...Object.values(Layout_CRO.LowerCase),
    ...Object.values(Layout_CRO.UpperCase)
  ];

  if (x instanceof Object) {
    if (!x.code || !x.key || !x.keyCode) {
      return false;
    }

    return !!characters.find(
      (item) =>
        x.key.toUpperCase() === item.key?.toUpperCase() ||
        x.code.toUpperCase() === item.code?.toUpperCase() ||
        x.keyCode === item.keyCode
    );
  }

  if (typeof x === "string") {
    return !!characters.find(
      (item) =>
        item.key?.toUpperCase() === x.toUpperCase() ||
        item.code?.toUpperCase() === x.toUpperCase()
    );
  }

  if (typeof x === "number") {
    return !!characters.find(
      (item) => item.keyCode === x
    );
  }

  return false;
}

export { isCharacter };
