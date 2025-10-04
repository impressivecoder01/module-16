// multiple ways to get and set object properties
const person = {
    nam: 'sodor uddin',
    age: 35,
    salary: 25000,
    country: 'bd',
    'fav places': ['bandorban', 'santinogor', 'santibag'],
    married: true
}
// console.log(person.nam) dot notation
// console.log(person['age']) //bracket notation
console.log(person[`fav places`])


const value = {
    nam: 'sodor uddin',
    age: 35,
    salary: 25000,
    country: 'bd',
    'fav places': ['bandorban', 'santinogor', 'santibag'],
    married: true
}
value.salary = 45000
// value[`fav places`] = 'rangamati'
let val = value[`fav places`].push('rangamati')
console.log(value)

const key = 'salary';
console.log(value[key]);

const keys = 'nam';
value[keys] = 'udddddddddddin';
console.log(value)