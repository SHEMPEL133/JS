/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length == 0) {
        return "";
    }
    if (strs.length == 1) {
        return strs[0];
    }
    var end = 0;
    for (var i = 0; i < strs[0].length; i++) {
        for (var j = 1; j < strs.length; j++) {
            if (strs[j][i] != strs[j - 1][i]) {
                if (i == 0) {
                    return "";
                } else {
                    return strs[0].substring(0, end);
                }
            }
        }
        end = i + 1;
    }
    if (j === undefined){
        return "";
    }
    return strs[0].substring(0, end);
};