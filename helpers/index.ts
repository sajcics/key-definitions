import {
  KeyInterface, CODES 
} from "../types";
import {
  isKeyboardEvent, isKeyInterface 
} from "../types/guards";

const exceptions = [CODES.SHIFT, CODES.ALT, CODES.CONTROL]; 

const isExceptionKey = (key: string): boolean => {
  return exceptions?.includes(key as CODES);
};

/** compare values if they are the same.
 * for KeyboardEvents it will be checked by `key` property
 * @param {KeyboardEvent|string} x value to check
 * @param {KeyInterface|string|[KeyInterface]|[string]} equalTo value to be equal to
 * @returns {boolean} true if two values are equal, otherwise false
 * @since 12 Oct 2022
 */
function compare(
  value: KeyboardEvent,
  equalToValue: KeyInterface | KeyInterface[]
): boolean {
  if (!value || !equalToValue) {
    return false;
  }

  // how to deferintiate ShiftLeft and ShiftRight from key
  if (isKeyboardEvent(value)) {
    if (isKeyInterface(equalToValue)) {
      if (isExceptionKey(value?.key) && value?.code !== equalToValue?.code) return false;
      return value?.key === equalToValue?.key;
    }

    if (Array.isArray(equalToValue)) {
      return equalToValue.some((compareTo) =>
        isKeyInterface(compareTo) ? compareTo.key === value?.key : false
      );
    }
  }

  return false;
}



export { compare };
