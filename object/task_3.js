/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    obj = {};
    for (var i = 0; i < nums.length; i++) {
        if (obj.hasOwnProperty(nums[i])) {
            obj[nums[i]]++;
        } else {
            obj[nums[i]] = 1;
        }
    }
    for (var key in obj) {
        if (obj[key] == 1) {
            return key;
        }
    }
};