// Here we are going to create a map function that will take an array and a callback function as arguments. The map function will apply the callback function to each element of the array and return a new array with the results.

// Signature .map
// Return? - New Array, Each ele Iterate, userFn

if (!Array.prototype.myMap) {
    Array.prototype.Mymap = function(userFn){
        const result = [];

        for ( let i = 0; i < this.length; i++) {
            const value = userFn(this[i], i);
            result.push(value);
        }
        return result;
    }
}
array = [1, 2, 3, 4, 5];
const newArray = array.Mymap((ele) => {
    return ele * 3;
});
console.log(newArray);