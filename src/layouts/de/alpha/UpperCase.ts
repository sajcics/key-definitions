
import { KeyInterface } from "../../../../types";
import * as DE_LowerCase from "./LowerCase";

const Ä:KeyInterface = {
  ...DE_LowerCase.Ä,
  key: "Ä"
};

const Ö:KeyInterface = {
  ...DE_LowerCase.Ö,
  key: "Ö"
};

const Ü:KeyInterface = {
  ...DE_LowerCase.Ü,
  key: "Ü" 
};

const UMLAUT_A = Ä;
const UMLAUT_O = Ö;
const UMLAUT_U = Ü;

export * from "../../../base/alpha/UpperCase";
export {
  Ä, Ö,Ü, UMLAUT_A, UMLAUT_U, UMLAUT_O
};