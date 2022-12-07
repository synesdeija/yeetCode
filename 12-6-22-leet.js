// This one is tough and our first LEETCODE, but we will see it two days in a row!
// From: https://leetcode.com/problems/jewels-and-stones/
// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0
 

                // Constraints:

                // 1 <= jewels.length, stones.length <= 50
                // jewels and stones consist of only English letters.
                // All the characters of jewels are unique.

//    my pseudo:
//you have a bag of stones
//some of the stones are jewels. (jewels is a subset of stones)

// str 'jewels' shows which stones are 'jewels'
// str 'stones' shows what's in your bag
//   each char in 'stones' is a type of stone in the bag
//return quantity of stones THAT ARE JEWELS in your bag
// case changes mean different jewels! CASE SENSITIVE!
// all chars of jewels are unique (<--?)

//so we will compare str 'stones' to str 'jewels' 
//if a 'stone' matches a char in 'jewels', we will add that char to theBagJewels the first time, then add 1 to it each additional time it is encountered.
//if a 'stone' does not match a char in 'jewels', we will skip it and move to the next char. 
//after totaling all the jewels in our bag of stones, we return the jewel total.

// function confirmedJewels(jewels, stones){
// let jewelBag = {}    
//     for(const c in jewels){ 
//      if( jewels[c] === stones[c] ){
//         jewelBag[c]++
// }else{
//      jewelBag[c] = 1

//     }
// }
//     return jewelBag;
// }


function findJewels(jewels, stones){
    const jewelBag = {}
        let count = 0
    for (const jewel of jewels){
        jewelBag[jewel] = true
    }
    for ( const stone of stones){
        if (jewelBag[stone] ){
            count++
        }
    }
    return count
}


console.log(findJewels("aA", "aAAbbbb"), "3")

// }
// class Solution {
//     public:
//         int numJewelsInStones(string jewels, string stones) {
            
//         }
//     };