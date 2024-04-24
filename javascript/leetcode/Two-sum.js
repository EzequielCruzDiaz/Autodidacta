/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.*/



var twosum = (nums, target) => {

const numMap = {}

for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i];

    if (numMap.hasOwnProperty(difference)) {


        return [numMap[difference],i];
    }

    numMap[nums[i]]

}

return [];

}   


const nums = [2, 7, 11, 15];
const target = 9;
console.log(twosum(nums, target));