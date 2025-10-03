//string slice, join, concat and includes
const vag = 'i am doing not good';
const output = vag.slice(3, 7);
console.log(output)
const vag2 = [3, 4, 5, 32 ,22, 56, 7];
const result = vag2.slice(1, 5);
console.log(result);
const trying = 'i am trying to be good again';
// const n = trying.split(' ');
const n = trying.split('a');
console.log(n)
const realFriend = 'Rohim , korim , abbas, jobbar';
const j = realFriend.split('').join('-');
console.log(j)
const friends= ['Rohim', 'Korim', 'Abbas', 'Jobbar', "kuddus"];
const jo = friends.join('+');
console.log(jo) 
const joi = friends.join('||')
console.log('d', joi)
//============== concat;
const first = 'abid';
const nabid = 'nabid';
const fullName = first + ' ' + nabid;
console.log(fullName);
const fullName2 = first.concat(' ').concat(nabid);
console.log(fullName2)
console.log(first.includes('R'))