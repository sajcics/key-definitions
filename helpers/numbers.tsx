import * as digits from "../keys/Digits";
import * as numpads from "../keys/NumPads";

export const isKeyNumber = (key: any): key is number => {
    if (!key) return false;

    return !!(Object.values({... digits, ...numpads})?.find(item => item.keyCode === key || item.which === key );
}
