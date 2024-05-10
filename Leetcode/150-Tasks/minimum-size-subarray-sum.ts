const target = 7;
const nums = [2,3,1,2,11,3];


const minSubArrayLen = (target: number, nums: number[]): number => {
  let minLength = Number.MAX_SAFE_INTEGER;
  let left = 0;
  let sum = 0;
  
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    
    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }
  
  return minLength !== Number.MAX_SAFE_INTEGER ? minLength : 0;
};

console.log(minSubArrayLen(target, nums));
