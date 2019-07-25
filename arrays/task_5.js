/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    nums.sort(compareNumber);
    if (nums.length == 1 || nums.length == 2) {
        return nums[0];
    }
    if (nums.length % 2 == 0) {
        return nums[nums.length / 2];
    }
    return nums[(nums.length - 1) / 2];
};

function compareNumber(a, b) {
    return a - b
}





