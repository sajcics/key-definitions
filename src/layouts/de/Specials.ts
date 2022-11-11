import {
  CODES, KeyDefaults, KeyInterface
} from "../../../types";

const HASH: KeyInterface = {
  keyCode: 191,
  code: `${CODES.BACKSLASH}`,
  key: "#",
  ...KeyDefaults
};

const BACKTICK: KeyInterface = {
  keyCode: 192,
  code: `${CODES.BACKQUOTE}`,
  key: "°",
  ...KeyDefaults,
  isShiftKey: true
};

export {
  HASH,
  BACKTICK
};