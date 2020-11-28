//https://leetcode.com/problems/roman-to-integer/

var romanToInt = function(s) {
    let result = 0;
    let regex2 = new RegExp("I(X|V)","g");
    let regex20 = new RegExp("X(C|L)","g");
    let regex200 = new RegExp("C(D|M)","g");
    if (regex2.test(s)) {
        result -= 2
    }
    if (regex20.test(s)) {
        result -= 20
    }
    if (regex200.test(s)) {
        result -= 200
    }
    let arr = [...s]
    arr.forEach(rom => { 
               switch(rom) {
        case 'I': result += 1;
            break;
        case 'V': result += 5;
            break;
        case 'X': result += 10;
            break;
        case 'L': result += 50;
            break;
        case 'C': result += 100;
            break
        case 'D': result += 500;
            break;
        case 'M': result += 1000;
            break;
    }})
    return result;
};