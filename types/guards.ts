import { LowerCase, UpperCase } from "../src/base/alpha";
import * as Layout_CRO from "../src/layouts/cro/alpha";

type CHAR =
  | typeof LowerCase[keyof typeof LowerCase]["key"]
  | typeof UpperCase[keyof typeof UpperCase]["key"]
  | typeof Layout_CRO.LowerCase[keyof typeof Layout_CRO.LowerCase]["key"]
  | typeof Layout_CRO.UpperCase[keyof typeof Layout_CRO.UpperCase]["key"];

/**
 * @param {KeyboardEvent|string} x value that we want to check if represent character [a-zA-Z]
 * @returns true if value is a character
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
    ...Object.values(Layout_CRO.UpperCase),
  ];

  if (typeof x === "object") {
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
