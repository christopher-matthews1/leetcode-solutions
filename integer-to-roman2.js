//https://leetcode.com/problems/integer-to-roman/

var intToRoman = function(num) {
    let rom = "";
    
    while (num >=  1) {
        while (num >= 10) {
            while (num >= 100) {
                while (num >= 1000) {
                    num -= 1000;
                    rom += "M"
                }
                if (num >= 900) {
                    num -= 900;
                    rom += "CM"
                }
                if (num >= 500) {
                    num -= 500;
                    rom += "D"
                }
                if (num >= 400) {
                    num -= 400;
                    rom += "CD"
                }
                if (num >= 100) {
                    num -= 100;
                    rom += "C"
                }
            }
            if (num >= 90) {
                num -= 90;
                rom += "XC"
            }
            if (num >= 50) {
                num -= 50;
                rom += "L"
            }
            if (num >= 40) {
                num -= 40;
                rom += "XL"
            }
            if (num >= 10) {
                num -= 10;
                rom += "X"
            }
        }
        if (num >= 9) {
            num -= 9;
            rom += "IX"
        }
        if (num >= 5) {
            num -= 5;
            rom += "V"
        }
        if (num >= 4) {
            num -= 4;
            rom += "IV"
        }
        if (num >= 1) {
            num -= 1;
            rom += "I"
        }
    }
    return rom;
};