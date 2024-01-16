function getBudgets(people) {
    return people.reduce((totalBudget, person) => totalBudget + person.budget, 0);
}

const result1 = getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 31, budget: 40000},
    { name: "Martin", age: 16, budget: 2700}
]);

const result2 = getBudgets([
    { name: "John", age: 21, budget: 29000 },
    { name: "Steve", age: 31, budget: 32000},
    { name: "Martin", age: 16, budget: 1600}
]);

console.log(result1);
console.log(result2);
