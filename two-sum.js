//https://leetcode.com/problems/two-sum/

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
           if (nums[i] + nums[i+j] == target) {
               return [i,(i+j)]
           }
        }
    }
};