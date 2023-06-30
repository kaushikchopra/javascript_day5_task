const person = {
   fname: "Nick",
   lname: "Jonas",
   age: 26
};

// General For loop

let keys = Object.keys(person);

for (let i = 0; i < keys.length; i++) {
   console.log(`${keys[i]}: ${person[keys[i]]}`);
}

console.log("\n");

// For in Loop

for (const info in person) {
   if (person.hasOwnProperty(info)) {
      const value = person[info];
      console.log(`${info}: ${value}`);
   }
}

console.log("\n");

// For of loop

for (const [info, value] of Object.entries(person)) {
   console.log(`${info}: ${value}`);
}

console.log("\n");

// ForEach Loop

Object.entries(person).forEach(([info, value]) => {
   console.log(`${info}: ${value}`);
});