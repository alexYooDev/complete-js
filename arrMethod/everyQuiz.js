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

//Does every character have blue eyes?
const allBlueEye = characters.every((char) => char.eye_color === 'blue');
console.log(allBlueEye);

//Does every character have mass more than 40?
const allMassGt40 = characters.every((char) => parseInt(char.mass) > 40);
console.log(allMassGt40);

//Is every character shorter than 200?
const allSt200 = characters.every((char) => parseInt(char.height) < 200);
console.log(allSt200);

//Is every character male?
const allMale = characters.every((char) => char.gender === 'male');
console.log(allMale);
