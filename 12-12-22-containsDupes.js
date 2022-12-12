// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true


// Hint:  HASH MAP PATTERN!  As you loop, check to see if element is already in hash map

// From: https://leetcode.com/problems/contains-duplicate/


function containsDuplicate(nums){
    let numsMap = {}
    for(let i = 0; i < nums.length; i++){
        let num = nums[i]
        if(numsMap[num]){
            return true
        }else{
            numsMap[num] = true
        }
    }
    return false
}

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]) )