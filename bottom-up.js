let n = 4;

let test = function(n) {
    let result = [];
    if (n === 1 || n === 2) {
        return console.log(1);
    } else {
        console.log(result)
        result[1] = 1;
        console.log(result)
        result[2] = 1;
        console.log(result)
        for (let i = 3; i < n+1; i++) {
            result[i] = result[i-1] + result[i-2];
        }
        console.log(result)
        console.log(result[n])
    }
}


