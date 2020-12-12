let n = [2, 6, 1, 2, 4, 2, 3, 7, 5]

let sumPair = function(arr, sum) {
    for (let i = 0; i < arr.length-1; i++) {
        let addend = sum - arr[i];
        let slice = arr.slice(i+1,arr.length)
        if (slice.includes(addend)) {
            return console.log([arr[i],addend]);
        }
    }
    return console.log("There is no pair.")
}