/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function (A) {
    obj = {};
    for (var i = 0; i < A.length; i++) {
        if (obj.hasOwnProperty(A[i])) {
            obj[A[i]]++;
        } else {
            obj[A[i]] = 1;
        }
    }

    var max = 0;
    var max_key;
    for(key in obj){
        if (obj[key] > max){
            max_key = key;
            max = obj[key];
        }
    }
    return max_key;
};


console.log(repeatedNTimes([2,1,2,5,3,2]));