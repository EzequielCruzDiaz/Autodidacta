// Given an integer x, return true if x is a palindrome , and false otherwise.


// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.


var isPalindrome = function (palabra) {
    palabra = palabra.toString();
    let reverse = palabra.split('').reverse().join('');
    return palabra === reverse;
};

console.log(isPalindrome("reconocer"));

