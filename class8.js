//keys, values. nested object and delete
const computer = {
    brand: 'lenovo',
    price: 35000,
    processor: 'intel',
    hdd: '1tb'
}
const keys = Object.keys(computer)
console.log(keys)
const values = Object.values(computer)
console.log(values);

const college = {
    nam: 'vvv',
    class: ['11', '12'],
    events: ['science fair', 'bijoy dibosh'],
    unique : {
        color : 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}
const get = college.unique.result.merit;
console.log(get)
const ary = college.events[1];
const add = college.events.push('dower competition');
console.log(college.events[2])
console.log(college)
console.log(ary)