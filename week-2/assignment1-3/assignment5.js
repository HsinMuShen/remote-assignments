function twoSum(nums, target) {
  let numsObj = {};

  for (let i = 0; i < nums.length; i++) {
    const sub = target - nums[i];
    if (sub in numsObj) {
      // if found, return
      return [numsObj[sub], i];
    }

    numsObj[nums[i]] = i;
    // console.log(numsObj);
  }
  return null;
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
