import { KeyInterface, KeyDefaults, CODES } from "../../types";

export const ZERO: KeyInterface = {
  keyCode: 48,
  code: `${CODES.DIGIT}0`,
  key: "0",
  hex: "0x30",
  ...KeyDefaults,
};

export const ONE: KeyInterface = {
  keyCode: 49,
  code: `${CODES.DIGIT}1`,
  key: "1",
  hex: "0x31",
  ...KeyDefaults,
};

export const TWO: KeyInterface = {
  keyCode: 50,
  code: `${CODES.DIGIT}2`,
  key: "2",
  hex: "0x32",
  ...KeyDefaults,
};

export const THREE: KeyInterface = {
  keyCode: 51,
  code: `${CODES.DIGIT}3`,
  key: "3",
  hex: "0x33",
  ...KeyDefaults,
};

export const FOUR: KeyInterface = {
  keyCode: 52,
  code: `${CODES.DIGIT}4`,
  key: "4",
  hex: "0x34",
  ...KeyDefaults,
};

export const FIVE: KeyInterface = {
  keyCode: 53,
  code: `${CODES.DIGIT}5`,
  key: "5",
  hex: "0x35",
  ...KeyDefaults,
};

export const SIX: KeyInterface = {
  keyCode: 54,
  code: `${CODES.DIGIT}6`,
  key: "6",
  hex: "0x36",
  ...KeyDefaults,
};

export const SEVEN: KeyInterface = {
  keyCode: 55,
  code: `${CODES.DIGIT}7`,
  key: "7",
  hex: "0x37",
  ...KeyDefaults,
};

export const EIGHT: KeyInterface = {
  keyCode: 56,
  code: `${CODES.DIGIT}8`,
  key: "8",
  hex: "0x38",
  ...KeyDefaults,
};

export const NINE: KeyInterface = {
  keyCode: 57,
  code: `${CODES.DIGIT}9`,
  key: "9",
  hex: "0x39",
  ...KeyDefaults,
};
