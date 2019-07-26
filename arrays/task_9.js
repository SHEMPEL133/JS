/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    var count = 0;
    len = arr.length;
    var i = 0;  
    while(i < len){
        if (arr[i] == 0) {
            arr.splice(i, 0, 0);
            count++;
            i++;
        }
        i++;
    }
    arr.length = arr.length - count;
};

