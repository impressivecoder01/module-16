//loop an object and ways to declare an object
let loops = 'looping';
for(let loop of loops){
    console.log(loop)
}

const oneByOne = [3,4,5,676,89];
for(let one of oneByOne){
    console.log(one)
}

const twoByOne = {
    price: 25000,
    brand: 'Samsung',
    color: 'white',
    isNew: true
}
for(const find in twoByOne){
    console.log(find)
    console.log(twoByOne[find])
}

//object----loop by for-in
//array-----loop by for-of
const keys = Object.keys(twoByOne);
console.log(keys)
for(let key of keys){
    console.log(twoByOne[key])
}
//-------------------
const pen = {
    brand: 'm',
    price: 10,
    color: 'black'
}
const pencel = new Object ()
console.log(pencel)
const rubber = Object.create({})
console.log(rubber)