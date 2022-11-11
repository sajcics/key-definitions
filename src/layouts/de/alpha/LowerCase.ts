
import {
  KeyInterface, CODES 
} from "../../../../types";

const Ä:KeyInterface = {
  keyCode: 222,
  code: CODES.QUOTE,
  key: "ä"
};

const Ö:KeyInterface = {
  keyCode: 192,
  code: CODES.SEMICOLON,
  key: "ö"
};

const Ü:KeyInterface = {
  keyCode: 186,
  code: CODES.BRACKET_LEFT,
  key: "ü" 
};

const UMLAUT_A = Ä;
const UMLAUT_O = Ö;
const UMLAUT_U = Ü;

export * from "../../../base/alpha/LowerCase";
export {
  Ä, Ö,Ü, UMLAUT_A, UMLAUT_U, UMLAUT_O 
};