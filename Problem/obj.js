// Problem: Create an object representing a type of tea with properties for name, type, and caffeine content.

const teas = {
    name: "Lemon tea",
    type: "Green",
    caffine: "low"
}

// Problem: Access and print the name and type properties of the tea object.

console.log(teas.name);
console.log(teas["type"]);

// Problem: Add a new property origin to the tea object.

teas.origin = "Assam"  
// While this be added to object teas even after there is const how ?

// Problem: Change the caffeine level of the tea object to "Medium".

teas.caffine = "Medium"

// Problem: Remove the type property from the tea object.

delete teas.type

// Problem: Check if the tea object has a property origin.
console.log("origin" in teas);

// Problem: Use a for...in loop to print all properties of the tea object.

for(let key in teas){
    console.log(key + ":" + teas[key]);

}

// Problem: Create a nested object represeting different types of teas and their properties.

const myTeas = {
    greentea: {
        name: "Green Tea",
        cups: {
            one: "1",
            two: "2",
        },
    },
    balckTea: {
        name: "Black tea"
    }
}

// Problem: Create a copy of the tea object.

const teaCopy = {...teas} // shallow copy
const newObj = new SVGForeignObjectElement(myTeas);
teaCopy.greentea.cups.one = 4;
console.log(newObj);

const anotherCopy = myTeasteas  // reference
console.log(teaCopy);

// Problem: Add a custom method describe to the tea object that returns a description string.

const tea = {
    name: "Masala Chai",
    type: "Black Tea",
    origin: "India",
    temperature: "Hot",

    describe: function () {
        if (!this.name || !this.type || !this.origin) {
            return "Tea information is incomplete.";
        }
        return `${this.name} is a ${this.type} from ${this.origin}, usually served ${this.temperature}.`;
    }
};

console.log(tea.describe());
const incompleteTea = {
    name: "Green Tea",
    describe: function () {
        if (!this.name || !this.type || !this.origin) {
            return "Tea information is incomplete.";
        }
        return `${this.name} is a ${this.type} from ${this.origin}.`;
    }
};
console.log(incompleteTea.describe());

// Problem: Merge two objects representing different teas into one.
const greenTea = {
    name: "Sencha",
    type: "green",
    origin: "Japan",
    caffine: "medium",
    notes: ["grassy", "umami"]
};
const blackTea = {
    name: "Assam",
    type: "black",
    origin: "India",
    strength: "bold",
    notes: ["matly", "robust"]
};
const blendedTea = {...greenTea, ...blackTea };
const blendedTea2 = Object.assign({}, greenTea, blackTea);
console.log(blendedTea);
