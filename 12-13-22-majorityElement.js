// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2



// Hint:  HASH MAP PATTERN! and possibly sorting for nlogn 


//there is a number that will always appear more than half the time [n / 2]


function majorityElement(numsArray){
    // numsArray.sort()
    //     return numsArray[Math.floor(arr.length / 2)] 
        //sort the array then grab the middle element (more at end of doc)
        //linear, constant, and logarithmic (using.sort()) solutions all here. 


    let elements = {}
        count = 0
        majElem = numsArray[0]

    for(const num of numsArray){
        elements[num] = elements[num] + 1 || 1
        elem[num] > numsArray.length / 2
 }
//  for(const n in elements){
//     if(elements[n] > count){
//         count = elements[n]
//         majElem = n
//     }
//  }
 return majElem

}
console.log(majorityElement([3,2,3]), 3)
console.log(majorityElement([2,2,1,1,1,2,2]), 2)

//note: commented-out code uses more space but it works. 

//he sorts the inputs in ascending order, then grabs the middle element

