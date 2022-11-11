/** compare values if they are the same.
 * for KeyboardEvents it will be checked by `key` property
 * @param {KeyboardEvent|string} x value to check
 * @param {string} equalTo value to be equal to 
 * @param {boolean} caseSensitive case sensitive where a != A, if is set false then a === A is true 
 * @returns {boolean} true if two values are equal, otherwise false
 * @since 12 Oct 2022
 */
function compare(x: KeyboardEvent | string, equalTo: string, caseSensitive?: boolean): boolean {
  if (!x || !equalTo) {
    return false;
  }

  if (x instanceof Object) {
    if (!x.code || !x.key || !x.keyCode) {
      return false;
    }

    return caseSensitive ? x.key === equalTo : x.key.toLowerCase() === equalTo.toLowerCase();
  }

  if (typeof x === "string") {
    return caseSensitive ? x === equalTo : x.toLowerCase() === equalTo.toLowerCase();
  }

  return false;
}

export { compare };
