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
                switch (true) {
                    case (num >= 900):
                        num -= 900;
                        rom += "CM";
                        break;
                    case (num >= 500):
                    num -= 500;
                        rom += "D"
                        break;
                    case (num >= 400):
                        num -= 400;
                        rom += "CD"
                        break;
                    case (num >= 100):
                        num -= 100;
                        rom += "C"
                        break;
                }
            }
            switch (true) {
                case (num >= 90):
                    num -= 90;
                    rom += "XC";
                    break;
                case (num >= 50):
                    num -= 50;
                    rom += "L"
                    break;
                case (num >= 40):
                    num -= 40;
                    rom += "XL"
                    break;
                case (num >= 10):
                    num -= 10;
                    rom += "X"
                    break;
            }
        }
        switch (true) {
            case (num >= 9):
                num -= 9;
                rom += "IX";
                break;
            case (num >= 5):
                num -= 5;
                rom += "V"
                break;
            case (num >= 4):
                num -= 4;
                rom += "IV"
                break;
            case (num >= 1):
                num -= 1;
                rom += "I"
                break;
        }
    }
    return rom;
};