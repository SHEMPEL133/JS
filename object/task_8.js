/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    var obj = {};
    var count = 0;
    for (var i = 0; i < s.length; i++) {
        if (obj.hasOwnProperty(s[i])) {
            obj[s[i]]++;
        } else {
            obj[s[i]] = 1;
            count++;
        }
    }
    for (i = 0; i < t.length; i++) {
        if(obj.hasOwnProperty(t[i])){
            obj[t[i]]--;
            if(obj[t[i]] == 0){
                delete obj[t[i]];
                count--;
            }
        }else{
            return false;
        }
    }
    if(count == 0){
        return true;
    }
    return false;
    
};