let nums = "12345";
let result = 0;
let arr = [];

function make10(nums) {
  result = 0;
  for (let number of nums) {
    result += +number;
    arr.push(number);
    if (result > 10) {
      slice = nums.substring(1);
      arr = [];
      make10(slice);
      break;
    }
    if (result === 10) {
      return console.log(arr);
    }
  }
}

make10(nums)