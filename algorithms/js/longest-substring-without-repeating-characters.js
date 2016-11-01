//Author: saymagic
//Date: 2016年11月1日

/**
 * Given a string, find the length of the longest substring without repeating characters.
 *
 *   Examples:
 *
 *   Given "abcabcbb", the answer is "abc", which the length is 3.
 *
 *   Given "bbbbb", the answer is "b", with the length of 1.
 *
 *   Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    if(s === undefined){
        throw "input is undefined!";
    }

    if(s === ""){
        return 0;
    }

    var cache = {}, max = 0, currentStep = 0, start = 0;

    for(var i = 0, length = s.length; i < length; i++){
        var letter = s[i];
        var prePosition = cache[letter];
        if(prePosition === undefined || prePosition < start){
            cache[letter] = i;
            currentStep ++;
        }else{
           cache[letter] = i;
            max = Math.max(currentStep, max);
            start = prePosition;
            currentStep = i - start;
        }
    }
    return Math.max(max, currentStep);
};
