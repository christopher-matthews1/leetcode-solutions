let nums = "2133323";

function make10(nums) {
    let i = 1;
    let arr = [(+nums[i-1]), ((+nums[i]))];
    let total = arr[0] + arr[1];
  
    while (i < nums.length) {
      if (total > 10) {
        i -= 1;
        total -= +nums[0];
        nums = nums.substring(1);
        arr.shift();
      } else if (total === 10) {
        return console.log(arr)
      }
      else {
        i += 1;
        total += +nums[i];
        arr.push(+nums[i]);
      }
    }
    return console.log("No sum of 10.")
  }

  make10(nums)