const items = [{name: "George", age: 21},
                {name: "João", age: 16},
                {name: "Jerry", age: 64},
                {name: "Lucas", age: 34},
                {name: "Vanessa", age: 25},
                {name: "Nettonalta", age: 20}
]
const numbers = [1,2,3,4,5,6,7,8,9,10]

// // // array methods

// filter
let filteredItems = items.filter(items => items.age >= 18)
console.log("Filter:")
console.log(filteredItems)

// map
let names = items.map(items => items.name)
console.log("Map:")
console.log(names)

// find // returns the first element that satisfy the condition.
let foundItem = items.find(items => items.age > 18)
console.log("Find: ")
console.log(foundItem)

// forEach
console.log("ForEach: ")
items.forEach(item => console.log(item))

// some
let has_some = items.some(item => item.age < 18)
console.log("Some: ")
console.log(has_some)

// every
let is_every = items.every(item => item.age < 18)
console.log("Every: ")
console.log(is_every)

// reduce
let total_age = items.reduce((total_age2, item) => item.age + total_age2, 0)
console.log("Reduce: ")
console.log(total_age)

// includes
let is_included = items.includes(2)
console.log("Includes")
console.log(is_included)