import { KeyInterface } from "../../../../types";
import * as Cro_LowerCase from "./LowerCase";

const Č: KeyInterface = {
  ...Cro_LowerCase.Č,
  isShiftKey: true,
  key: "Č" 
};

const Ć: KeyInterface = {
  ...Cro_LowerCase.Ć,
  isShiftKey: true,
  key: "Ć" 
};

const Đ: KeyInterface = {
  ...Cro_LowerCase.Đ,
  isShiftKey: true,
  key: "Đ" 
};

const Ž: KeyInterface = {
  ...Cro_LowerCase.Ž,
  isShiftKey: true,
  key: "Ž" 
};

const Š: KeyInterface = {
  ...Cro_LowerCase.Š,
  isShiftKey: true,
  key: "Š" 
};

export {
  Č,
  Ć,
  Đ,
  Ž,
  Š
};

export * from "../../../base/alpha/UpperCase";