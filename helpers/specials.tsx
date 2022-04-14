import * as specials from "../keys/Specials";

export const isKeySpecial = (key: any): key is boolean => {
    if (!key) return false;

    return !!(Object.values(specials)?.find(item => item.keyCode === key || item.which === key);
}