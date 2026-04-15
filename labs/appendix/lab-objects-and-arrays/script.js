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

// 2. T0D0: log to the console just the species of the animal object.

// 3. TODO: log to the console the species and age of the animal object.

// 4. TODO: log to the console the fourth object in the zooAnimals array.

// Functional Programming

// 5. TODO: Write a function called `printAnimal` that takes one animal object
//    as a parameter and logs its name and species to the console.
//    Example output: "Saskia is a Zebra"
//    Call it once with the `animal` object to test it.

// 6. TODO: Pass your `printAnimal` function to `zooAnimals.forEach()` so that
//    it prints every animal in the array.

// 7. TODO: Rewrite the forEach call from challenge 6 in one line using an
//    arrow function instead of a named function.

// 8. TODO: Use `filter` to create a new array called `savannahAnimals` that
//    contains only the animals whose enclosure is "Savannah".
//    Log the result to the console.

// 9. TODO: Use `map` to create a new array called `animalSummaries` that
//    transforms each animal object into a plain string in the format:
//    "Saskia the Zebra (age 3)"
//    Log the result to the console.
