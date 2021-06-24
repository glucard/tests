const numbers = [1,2,3,4,5,6,7,8,9,0]
const letters = ['a','b','c']

let [letter_a, , letter_c] = letters
console.log(letter_a, letter_c)

let [number_1, ...rest_numbers] = numbers
console.log(number_1, rest_numbers)

let all = [...numbers, ...letters]
console.log(all)