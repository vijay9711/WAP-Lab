// var twoSum = function(nums, target) {
//   let arr = [];
//   nums.forEach((num,index) => {
//     nums.forEach((numSec, secondIndex)=>{
//       if((num + numSec == target) && (index != secondIndex)){
//         arr[0] = index;
//         arr[1] = secondIndex;
//       }
//     })
//     nums.reduce()
//   } )
//   return arr;
// };
// if(index != nums.length-1 && num + nums[index+1] == target){
//   // console.log(num, nums[index+1]);
//   arr[0] = index;
//   arr[1] = index+1;
// }

// solution 1
var twoSum = function(nums, target){
  const numsWithIndex = nums.map((num, index) => [num, index]);
    numsWithIndex.sort((a, b) => a[0] - b[0]);
    let left = 0, right = nums.length - 1;
    while (left < right) {
        const sum = numsWithIndex[left][0] + numsWithIndex[right][0];
        if (sum === target) {
            return [numsWithIndex[left][1], numsWithIndex[right][1]];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [];
}


let nums = [2,11,3,7,6,15], target = 9;
let res = twoSum(nums,target);
console.log(res);