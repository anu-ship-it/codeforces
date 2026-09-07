// Here we will be creating our own forEach method to understand how it works under the hood.

if (!Array.prototype.myForEach) {
    Array.prototype.myForEach = function(userFn) {
        const originalArray = this; // Current Object ki taraf point karta hai
        for (let i = 0; i < originalArray.length; i++){
            userFn(originalArray[i], i);
        }
    };
}
const arr = [1, 2, 3, 4, 5];

// Error: forEach function does not exist on arr variable
// Real Signature ko samjo - No return, function input, value, index
// calls my fn for every value
arr.myForEach(function (value, index) {
    console.log(`My For Each Value at Index ${index} id ${value}`);
});
