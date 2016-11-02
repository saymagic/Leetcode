//Author: saymagic
//Date: 2016年11月2日

/**
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.

 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

 * Example 1:
 * nums1 = [1, 3]
 * nums2 = [2]

 * The median is 2.0
 * Example 2:
 * nums1 = [1, 2]
 * nums2 = [3, 4]

 * The median is (2 + 3)/2 = 2.5
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1 === undefined){
        throw "nums1 is undefined";
    }
    if(nums2 === undefined){
        throw "nums2 is undefined";
    }
    var n1 = nums1.length;
    var n2 = nums2.length;
    var p1 = 0;
    var p2 = 0;
    var p1Val;
    var p2Val;
    var last;
    var pre;
    var sumLength = n1 + n2;
    var determine = (sumLength % 2 === 0);
    var halfLength = parseInt(sumLength / 2);
    for(var step = 0; step <= halfLength ; step++){
        if(step === halfLength){
            pre = last;
        }
        p1Val = nums1[p1];
        p2Val = nums2[p2];
        if(p1Val === undefined){
            last = p2Val;
            p2++;
        }else if(p2Val === undefined){
            last = p1Val;
            p1++;
        }else if(p1Val > p2Val){
            last = p2Val ;
            p2++;
        }else{
            last = p1Val;
            p1++;
        }
        if(step === halfLength){
            return determine ? (pre + last) / 2 : last;
        }
    }

};
