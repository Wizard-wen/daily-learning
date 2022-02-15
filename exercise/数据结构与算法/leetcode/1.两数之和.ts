/**
 * @author songxiwen
 * @date  2022/1/24 10:39
 */

function twoSum(nums: number[], target: number): number[] {
  const map = new Map();
  let i = 0;
  const length = nums.length;
  while(i < length) {
    if(map.has(target - nums[i])){
      return [i, map.get(target - nums[i])];
    } else {
      map.set(nums[i], i);
    }
    i += 1;
  }
}
