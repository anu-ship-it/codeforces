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
