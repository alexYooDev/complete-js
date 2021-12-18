/* filter */
const characters = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    eye_color: 'blue',
    gender: 'male',
  },
  {
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    eye_color: 'yellow',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    eye_color: 'brown',
    gender: 'female',
  },
  {
    name: 'Anakin Skywalker',
    height: '188',
    mass: '84',
    eye_color: 'blue',
    gender: 'male',
  },
];

//Get characters with mass greater than 100
const mgt100 = characters.filter((char) => char.mass > 100);

console.log(`mass greater than 100 :`);
console.log(mgt100);

//Get characters with height less than 200

const hlt200 = characters.filter((char) => char.height < 200);

console.log(`height less than 200 :`);
console.log(hlt200);

//Get all male characters

const allMale = characters.filter((char) => char.gender === 'male');

console.log(`all male characters :`);
console.log(allMale);

//Get all female characters
const allFemale = characters.filter((char) => char.gender === 'female');

console.log(`all female characters`);
console.log(allFemale);
