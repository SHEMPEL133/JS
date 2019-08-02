/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    if (s.length == 0) {
        return -1;
    }
    var obj = {};
    for (var i = 0; i < s.length; i++) {
        if (obj.hasOwnProperty(s[i])) {
            obj[s[i]]++;
        } else {
            obj[s[i]] = 1;
        }
    }
    for (var key in obj) {
        if (obj[key] == 1) {
            return s.indexOf(key);
        }
    }
    return -1;
};


console.log(firstUniqChar('loveleetcode'));