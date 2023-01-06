// Can you solve with a for loop like before the holidays? How about with recursion? 

// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.



//a For Loop method:1.3.22
function fibonacci(n){
    let arr = [0,1]
    for (let i = 2; i <= n; i++){
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr[n]

}
console.log(fibonacci(2),1)
console.log(fibonacci(4),3)


//recursive method: fib(5) so we're looking for the 5th index (6th number) -- my method from 1.3.22
//we're looking for the Base Case (0), and the Exit Case () (the 5th index in the array of the fibonacci sequence is 5) so fib(5) = 5
function fibonacci(n){
    if (n < 2){
        return n
    }else{
        fibonacci(n - 1) + fibonacci(n - 2)
    }
}


//1.4.22 : Leon's Version
function fib(num){
    if(num < 2){return num}
    return fib(num - 1) + fib(num - 2)
}


//countDown recursive function
function countDown(n){
    if (n === 0) {
        console.log("Done!")
    }else{
        console.log(n)
        countDown(n - 1)
    }
}
console.log(countDown(3))


//with memoization: 
//    fib(5) === [0,1,1,2,3,5]    BASE CASE === n < 2

const memoize = {}
function fib(n) {
    if (n <= 1) {
        return n
    }else if( memoize[n] ) {
        return memoize[n]
    }else{
        let result = fib(n - 1) + fib(n - 2)
        memoize[n] = result
        return result
    }
}
console.log(fib(5))