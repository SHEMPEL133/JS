/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    s = s.split('');
    var vowels_arr = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
    var vowels = s.filter(vowel_fun);
    for (var i = 0; i < s.length; i++) {
        if (vowel_fun(s[i])){
            s[i] = vowels[vowels.length-1];
            vowels.length--;
        }
    }
    return s.join('');
};

var vowel_fun = function (item) {
    var vowels_arr = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
    return vowels_arr.indexOf(item) >= 0;
}
