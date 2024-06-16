const findTheOldest = function (arr) {
    let ages = arr.map((person) => ({
        ...person,
        age: person.yearOfDeath - person.yearOfBirth,
    }));
    console.table(ages);
    ages.sort((a, b) => a.age - b.age).reverse();
    console.log(ages[0]);
    return ages[0];
};

const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
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
