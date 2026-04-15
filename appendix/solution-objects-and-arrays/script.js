// Objects + Arrays
// Implement the TODOs below.

// animal object
const animal = {
  animalName: "Saskia",
  species: "Zebra",
  age: 3,
  enclosure: "Savannah",
};

// array of objects
const zooAnimals = [
  {
    animalName: "Saskia",
    species: "Zebra",
    age: 3,
    enclosure: "Savannah",
  },
  {
    animalName: "Kofi",
    species: "Zebra",
    age: 7,
    enclosure: "Savannah",
  },
  {
    animalName: "Didi",
    species: "Meerkat",
    age: 2,
    enclosure: "Desert Den",
  },
  {
    animalName: "Riku",
    species: "Meerkat",
    age: 4,
    enclosure: "Desert Den",
  },
  {
    animalName: "Nero",
    species: "Lion",
    age: 6,
    enclosure: "Pride Rock",
  },
  {
    animalName: "Zara",
    species: "Giraffe",
    age: 5,
    enclosure: "Savannah",
  },
];

// Drawing Information from Objects and Arrays

// 1. TODO: Log the animal object to the console
console.log(animal);

// 2. T0D0: log to the console just the species of the animal object.
console.log(animal.species);

// 3. TODO: log to the console the species and age of the animal object.
console.log(animal.species, animal.age);

// 4. TODO: log to the console the fourth object in the zooAnimals array.
// Arrays are zero-indexed, so the fourth item is at index 3.
console.log(zooAnimals[3]);

// Functional Programming

// 5. TODO: Write a function called `printAnimal` that takes one animal object
//    as a parameter and logs its name and species to the console.
//    Example output: "Saskia is a Zebra"
//    Call it once with the `animal` object to test it.

function printAnimal(a) {
  console.log(a.animalName + " is a " + a.species);
}

printAnimal(animal);

// 6. TODO: Pass your `printAnimal` function to `zooAnimals.forEach()` so that
//    it prints every animal in the array.
// forEach calls printAnimal once for each animal in the array.
zooAnimals.forEach(printAnimal);

// 7. TODO: Rewrite the forEach call from challenge 6 in one line using an
//    arrow function instead of a named function.
// An arrow function lets us write the same logic inline without naming it.
zooAnimals.forEach((a) => console.log(a.animalName + " is a " + a.species));

// 8. TODO: Use `filter` to create a new array called `savannahAnimals` that
//    contains only the animals whose enclosure is "Savannah".
//    Log the result to the console.
// filter keeps an item when the function returns true, and removes it when false.
const savannahAnimals = zooAnimals.filter((a) => {
  return a.enclosure === "Savannah";
});

console.log(savannahAnimals);

// 9. TODO: Use `map` to create a new array called `animalSummaries` that
//    transforms each animal object into a plain string in the format:
//    "Saskia the Zebra (age 3)"
//    Log the result to the console.
// map creates a new array by transforming every item using the function.
const animalSummaries = zooAnimals.map((a) => {
  return a.animalName + " the " + a.species + " (age " + a.age + ")";
});

console.log(animalSummaries);
