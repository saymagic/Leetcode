//Author: saymagic
//Date: 2016年10月30日

/**
*    Given an array of integers, return indices of the two numbers such that *    they add up to a specific target.
*
*    You may assume that each input would have exactly one solution.
*
*    Example:
*    Given nums = [2, 7, 11, 15], target = 9,
*
*    Because nums[0] + nums[1] = 2 + 7 = 9,
*    return [0, 1].
**/

/**
 *   @param {number[]} nums
 *   @param {number} target
 *   @return {number[]}
 */

var twoSum = function(nums, target) {
    var cache = new Object();
    var length = nums.length;
    for(var i = 0; i < length; i++){
        var dif = target - nums[i];
        if(cache[dif]  || cache[dif] === 0){
            return new Array(cache[dif], i);
        }
        if(!cache[nums[i]]){
           cache[nums[i]] = i;
        }
    }
    throw "no match!";
};
