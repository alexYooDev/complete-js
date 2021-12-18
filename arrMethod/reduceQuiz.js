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

// Get the total mass of all characters
const totalMass = characters.reduce((total, char) => {
  return total + parseInt(char.mass);
}, 0);

console.log(`total mass of all characters ${totalMass}`);

// Get the total height of all characters
const totalHeight = characters.reduce((total, char) => {
  return total + parseInt(char.height);
}, 0);

console.log(`total height of all characters${totalHeight}`);

// Get the total number of characters in all the character names
const totalNameLen = characters.reduce((total, char) => {
  return total + char.name.length;
}, 0);

console.log(totalNameLen);

// Get the total number of characters by eye color (hint. a map of eye color to count)
const totalNumByEye = characters.reduce((total, char) => {
  if (total[char.eye_color]) {
    total[char.eye_color]++;
  } else {
    total[char.eye_color] = 1;
  }
  return total;
}, {});

console.log(totalNumByEye);
