/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    let p1 = 0;
    let p2 = 0;
    while (p1 < name.length || p2 < typed.length) {
        if (name[p1] == typed[p2]) p1 ++, p2++;
        else if (name[p1 - 1] == typed[p2]) p2 ++;
        else return false;
    }
    return p1 == name.length;
};