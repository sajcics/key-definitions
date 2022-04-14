import * as chars from "../keys/Characters";

export const isKeyCharacter = (key: any): key is number => {
    if (!key) return false;

    return key >= 65 && key <= 90;
}
