// Here we are creating myFilter prototype function that will take an array and a callback function as arguments. The myFilter function will apply the callback function to each element of the array and return a new array with the elements that pass the test implemented by the provided function.

// Filter
// Signature: Return? - New Array | input: userFn
// agar user ka function True return karta hai to current value ko new array mai include kar leta h

if (!Array.prototype.myFilter){
    Array.prototype.myFilter = function(userFn){
        const result = [];
        for (let i = 0; i < this.length; i++){
            if (userFn(this[i], i)){
                result.push(this[i]);
            }
        }
        return result;
    }
}
const arr = [1, 2, 3, 4, 5];
const filteredArr = arr.myFilter((value) => value % 2 == 0);
console.log(filteredArr);