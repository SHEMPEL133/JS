/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var obj = {};
    for (var i = 0; i < nums.length; i++) {
        // console.log(obj[nums[i]]);
        if (obj.hasOwnProperty(nums[i])) {
            var temp = [];
            temp.push(obj[nums[i]], i);
            obj[nums[i]] = temp;
            continue;
        }
        obj[nums[i]] = i;
    }

    for (var key in obj) {
        var equal = obj.hasOwnProperty(target - key);
        if ((target - key) == key) {
            return obj[key];
        }
        if (equal) {
            return [obj[key], obj[target - key]];
        }
    }
};

// console.log(twoSum([-1, -2, -3, -4, -5], -8));