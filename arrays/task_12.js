/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    var result = [];
    for (var i = 0; i < arr2.length; i++) {
        var j = 0; 
        while(j < arr1.length){
            if (arr1[j] == arr2[i]) {
                result.push(arr1.splice(j, 1));
                j--;
            }
            j++;
        }
    }
    return result.concat(arr1.sort(sortNUmb));
};

function sortNUmb(a, b) {
    return a - b;
}
