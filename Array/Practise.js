// What does the concat() method do in Javascript..?
ar1 = [1,9,3,4];
ar2 = [11, 12, 13, 14];
let result = ar1.concat(ar2);
console.log(result);

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

// Count the frequency of an elements of an array
let ar = [1,4,2,6,9];
let target = 9
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
function TwoSum(arr, target){
    for(let i = 0; i < a.length; i++) {
        for(let j = i + 1; j < a.length; j++) {
            if (a[i]+a[j] === target){
                return[i,j];
            }
        }
    }
    return[];
}
console.log(TwoSum([2,7,11,15],26));