const teas = [
    "Green tea",
    "Black tea",
    "oolong tea",
    "White tea",
    "Herbal Tea",
];
console.log(teas);

// Probelm: Add "Chamomile Tea" to the existing list of teas
teas.push("Chamomile Tea");

// Problem: Remove "Oolong Tea" from the list of teas.
const index = teas.indexOf("oolong tea");
if (index > -1) {
    teas.slice(index, 1);
}

// Problem: Filter the list to only include teas that are caffeinated.
const caffinatedTeas = teas.filter((tea) => tea !== "Herbal Tea");

// Problem: Sort the list of teas in alphabetical order.
const test = ["🐤", "🥚"];
console.log(test.sort());

// Problem: Use a for loop to print each type of tea in the array.
for(let i = 0; i < teas.length; i++){
    console.log(teas[i]);
}

// Problem: Use a for loop to count how many teas are caffeinated (excluding "Herbal Tea").
let caffinatedMyTeas = 0
for(let i = 0; i < teas.length; i++){
    if(teas[i] !== "Herbal Tea"){
        caffinatedMyTeas++
    }
}

// Probelm: Use a for loop to create a new array with all tea names in uppercase.
const uppcaseTeas = []
for(let i = 0; i < teas.length; i++){
    uppcaseTeas.push(teas[i].toUpperCase())
}
// Problem: Use a for loop to find the tea name with the most characters.

// Problem: