/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    obj = {};
    var nums;
    var arr;
    if (nums1.length > nums2.length) {
        nums = nums2;
        arr = nums1;
    } else {
        nums = nums1;
        arr = nums2;
    }

    for (var i = 0; i < nums.length; i++) {
        if (obj.hasOwnProperty(nums[i])) {
            obj[nums[i]]++;
        } else {
            obj[nums[i]] = 1;
        }
    }

    var result = [];
    for (i = 0; i < arr.length; i++) {
        if (obj.hasOwnProperty(arr[i])) {
            obj[arr[i]]--;
            if (obj[arr[i]] == 0) {
                delete obj[arr[i]];
            }
            result.push(arr[i]);
        }
    }
    return result;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));