/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
    var obj = {};
    for (var i = 0; i < J.length; i++) {
        obj[J[i]] = true;
    }
    var count = 0;
    for (i = 0; i < S.length; i++) {
        if (obj.hasOwnProperty(S[i])) {
            count++;
        }
    }
    return count;
};

console.log(numJewelsInStones('aA', 'aAAbbbb'));