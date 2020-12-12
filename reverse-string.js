str = "hello";

function revStr(str) {
    newStr = "";
    for (let char of str) {
        newStr = char + newStr;
    }
    console.log(newStr);
}

revStr(str)
