
import {
  KeyInterface, KeyDefaults, CODES 
} from "../../../../types";

const Č: KeyInterface = {
  keyCode: 186,
  code: CODES.SEMICOLON,
  key: "č",
  ...KeyDefaults
};

const Ć: KeyInterface = {
  keyCode: 222,
  code: CODES.QUOTE,
  key: "ć",
  ...KeyDefaults
};

const Đ: KeyInterface = {
  keyCode: 221,
  code: CODES.BRACKET_RIGHT,
  key: "đ",
  ...KeyDefaults
};

const Ž: KeyInterface = {
  keyCode: 220,
  code: CODES.BACKSLASH,
  key: "ž",
  ...KeyDefaults
};

const Š: KeyInterface = {
  keyCode: 219,
  code: CODES.BRACKET_LEFT,
  key: "š",
  ...KeyDefaults
};

export {
  Č,
  Ć,
  Đ,
  Ž,
  Š
};

export * from "../../../base/alpha/LowerCase";