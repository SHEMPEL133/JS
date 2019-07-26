/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
    var length_K = K.toString().split("").length;
    if (A.length <= length_K) {
        A = parseInt(A.join(""), 10);
        var result = A + K;
        return result.toString().split("");
    }
    var part_A = parseInt(A.splice(-length_K).join(""), 10);
    var end_new_arr = (part_A + K).toString().split("");
    if (end_new_arr.length == length_K) {
        return A.concat(end_new_arr);
    } else{
        end_new_arr.shift();
    }

    for (var i = A.length - 1; i >= 0; i--) {
        if(A[i] == 9){
            A[i] = 0;
        } else{
            A[i]++;
            return A.concat(end_new_arr);
        }
    }

    A.unshift(1);
    return A.concat(end_new_arr);
};
