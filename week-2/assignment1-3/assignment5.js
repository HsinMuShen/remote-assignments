function twoSum(nums, target) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = nums.length - 1; j > i; j--) {
      if (nums[i] + nums[j] === target) {
        ans.push(i, j);
      }
    }
  }
  return ans;
}
/*
    For example:
    twoSum([2, 7, 11, 15], 9);
    Should returns:
    [0, 1]
    Because:
    nums[0] + nums[1] is 9
*/
console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([2, 7, 11, 15, 21, 8], 29));
