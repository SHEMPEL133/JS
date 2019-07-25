/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
    for (var i = 0; i < A.length; i++) {
        A[i] = A[i] ** 2;
    }
    return A.sort(compareNumbers);
};

function compareNumbers(a, b) {
    return a - b;
  }

