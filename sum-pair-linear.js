let n = [2, 1, 2, 4, 2, 3, 7, 5, 6]

let sumPair = function(arr, sum) {
    let obj = {};
    for (let i = 0; i < arr.length-1; i++) {
        let addend = sum - arr[i];
        if (obj[arr[i]]) {
            return console.log([arr[i],addend].sort());
        }
        console.log(obj)
        obj[addend] = addend;
    }
    return console.log("There is no pair.")
}