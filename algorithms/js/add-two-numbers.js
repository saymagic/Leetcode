//Author: saymagic
//Date: 2016年10月31日

/**
 * You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 *
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
     if(!l1){
         return l2;
     }

     if(!l2){
         return l1;
     }

     var carry = 0;
     var ret, walker;
     while(l1 || l2){
         var val = carry + (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
         carry = val >= 10 ? 1 : 0;
         if(ret === undefined){
             ret = new ListNode(val % 10);
             walker = ret;
         }else{
             walker.next = new ListNode(val % 10);
             walker = walker.next;
         }
         l1 = l1 ? l1.next : undefined;
         l2 = l2 ? l2.next : undefined;
     }

     if(carry > 0){
        walker.next = new ListNode(carry);
     }
     return ret;
};
