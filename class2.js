//string comparison lowercase uppercase and trim
const school = 'rajuk uttor model school';
// console.log(school.toUpperCase());
const subject = 'Chemistry';
const book = 'Chemistry';
if(subject === book){
    console.log('same')
}
else{
    console.log('different case')
}

const drink = ' water';
const liquid = '   water';
if(drink.trim() === liquid.trim()){
    console.log('equal')
}
else{
    console.log('not equal')
}