const findTheOldest = function (arr) {
    let newAges = arr.map((person) => {
        let currentYear = new Date().getFullYear();
        if (person.hasOwnProperty("yearOfDeath")) {
            return { ...person, age: person.yearOfDeath - person.yearOfBirth };
        } else {
            return { ...person, age: currentYear - person.yearOfBirth };
        }
    });
    console.table(newAges);
    //newAges.sort((a, b) => a.age - b.age).reverse();
    return newAges.sort((a, b) => b.age - a.age)[0];
};

const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
];
findTheOldest(people);
// Do not edit below this line
module.exports = findTheOldest;
