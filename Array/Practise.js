// What does the concat() method do in Javascript..?
ar1 = [1,9,3,4];
ar2 = [11, 12, 13, 14];
let result = ar1.concat(ar2);
//console.log(result);

// Merge teo sorted array
ar1.sort();
ar2.sort();
let array = ar1.concat(ar2);
console.log(array);

// Remove the Duplicate from an array
arr = [12,1,1,14,19,20,20]
let unique = [];
for (let i = 0; i < array.length; i++){
    if (!unique.includes(arr[i])){
        unique.push(arr[i]);
    }
}
console.log(unique);

// Count the frequency of an element in an array
let ar = [1, 9, 4, 9, 2, 6, 9];
let target = 9;
let count = 0;
for (let i = 0; i < ar.length; i++) {
    if (ar[i] === target) {
        count++;
    }
}
console.log(count);


// Find the sum of two numbers in an array and then search them in array which of them would be the sum of those 2 numbers.
a = [2,7,11,15]
t = 26
function TwoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}
console.log(TwoSum([2,7,11,15],26));


// Find the minimum (or maximum) elements of an array

function findMinMax(array) {
    let min = array[0];
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = arr[i];
        }
        if (array[i] > max) {
            max = array[i];
        }
    }
    return { min, max };
}
console.log(findMinMax([5,2,8,1,9,3]));


// Remove duplicates from sorted array
function removeDuplicate(Array) {
    if (Array.length === 0) {
        return [];
    }
    let j = 0;
    for (let i = 1; i < Array.length; i++) {
        if (Array[i] !== Array[j]) {
            j++;
            Array[j] = Array[i];
        }
    }
    return Array.slice(0, j + 1);
}
console.log(removeDuplicate([1,1,2,4,3,2]));

// Remove Element In-Place(Remove all accurance of 3 in-place)
function removeElement(arr1, val) {
    let k = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== val) {
            arr1[k] = arr1[i];
            k++;
        }
    }
    return k;
}
let arr1 = [3,2,2,3];
let k = removeElement(arr1, 3);
console.log(k);
console.log(arr1.slice(0, k));


// Given a sorted array and a target, return the index where the target exists. If it doesn't exist, return the index where it should be inserted to keep the array sorted.(Search Insert Position)

function searchInsert(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= target) {
            return i;
        }
    }
    return arr.length;
}
console.log(searchInsert([1,3,5,6], 6));

// Find the contiguous subarray whose sum is maximum.
function maxSubArray(arr) {
    let currentSum = arr[0];
    let maxSum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (currentSum + arr[i] > arr[i]) {
            currentSum = currentSum + arr[i];
        } else {
            currentSum = arr[i];
        }
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }
    return maxSum;
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));


// Array problem where array represents a number digit by-digit(In this problem wwe will be adding +1 to the last digit of the array and then present a new array)
function plusone(digits) {
    for (let i = digits.length-1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits [i] = 0;
    }
    digits.unshifts(1);
    return digits;
}
console.log(plusone([1,2,3]));

// Convert Sorted Array to Binary search Tree
function SortedArrayToBST(arr) {
    if (arr.length === 0) {
        return null;
    }
    let mid = Math.floor(arr.length / 2);
    let root = {
        val : arr[mid],
        left: null,
        right: null
    };
    root.left = SortedArrayToBST(arr.slice(0, mid));
    root.right = SortedArrayToBST(arr.slice(mid + 1));
    return root;
}
let root = SortedArrayToBST([-10,-3,0,5,9]);
console.log(root);


// Given an array where every element appears twice except one element.
function SingleNumber(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result = result ^ arr[i];
    }
    return result;
}
console.log(SingleNumber([4,1,2,1,2]))