//https://leetcode.com/problems/median-of-two-sorted-arrays/

let nums1 = [1,3];
let nums2 = [2,4,5,9,9,9];

var findMedianSortedArrays = function(nums1, nums2) {
    let mergedArr = [...nums1,...nums2].sort((a,b) => a-b);
    let middle = mergedArr.length/2;
    if (Number.isInteger(middle)) {
      return (mergedArr[middle - 1] + mergedArr[middle]) / 2;
    } else {
      return mergedArr[Math.floor(middle)];
    }
  };

findMedianSortedArrays(nums1, nums2);