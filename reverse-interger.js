//https://leetcode.com/problems/reverse-integer/

var reverse = function(x) {
    let arr = [...(x + '')];
    let newArr = [];
    let result;
    if (arr[0] === "-") {
        while (1 < arr.length) {
            newArr.push(arr.pop());
        }
        result = newArr.join("")
        result = -Math.abs(+result)
    }
    else {
        while (0 < arr.length) {
            newArr.push(arr.pop());
        }
            result = newArr.join("")
    }
    if (result >= Math.pow(-2,31)) {
        if (result < Math.pow(2,31)) {
            return result;
        }
    }
    return 0;
};