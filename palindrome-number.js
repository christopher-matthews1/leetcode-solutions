//https://leetcode.com/problems/palindrome-number/

var isPalindrome = function(x) { 
    numStr = x + "";
    numArr = [...numStr];
    arr = [];
        while (0 < numArr.length) {
            arr.push(numArr.pop());
            result = +(arr.join(''));
    }
    return x === result;
};