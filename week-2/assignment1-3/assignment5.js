function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let sub = target - nums[i];
    let subIndex = nums.indexOf(sub);

    if (subIndex !== -1 && subIndex !== i) {
      return [i, subIndex];
    }
  }
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
