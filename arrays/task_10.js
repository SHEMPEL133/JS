/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var i = digits.length-1;
if(i == 0 && digits[0] == 9){
    digits = [1,0];
    return digits;
}
if(i == 0){
    digits[0]++;
    return digits;
}
for (i; i >= 0; i--) {
    if (digits[i] + 1 == 10) {
        digits[i] = 0;
    } else {
        digits[i]++;
        break;
    }
    if (i == 0) {
        digits.unshift(1);
        break;
    }
}
    return digits;
};