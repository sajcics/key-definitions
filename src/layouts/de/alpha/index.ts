import * as LowerCase from "./LowerCase";
import * as UpperCase from "./UpperCase";
import {
  CODES, KeyInterface 
} from "../../../../types";

const ß:KeyInterface = {
  keyCode: 63,
  code: CODES.MINUS,
  key: "ß"
};

const UMLAUT_S = ß;

export {
  LowerCase, UpperCase, ß, UMLAUT_S
};
