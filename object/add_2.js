/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    var set = new Set();
    var num, arr;
    if (nums1.length > nums2.length) {
        num = nums2;
        arr = nums1;
    } else {
        num = nums1;
        arr = nums2;
    }

    for (var i = 0; i < num.length; i++) {
        set.add(num[i]);
    }

    var result = [];
    arr.forEach(function (elem) {
        if (set.has(elem)) {
            result.push(elem);
            set.delete(elem);
        }
    });

    return result;
};

console.log(intersection([1, 2, 3], [9, 4, 9, 8, 4]));