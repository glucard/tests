function promptPerson({name: they_name, address: {state}, favorite_food = "sushi"}){
    console.log(`${they_name} lives in ${state}. His favorite food is ${favorite_food}.`)
}

const person_one = {
    name: "George",
    age: 21,
    address: {
        country: "Brazil",
        state: "Roraima"
    }
}

promptPerson(person_one)