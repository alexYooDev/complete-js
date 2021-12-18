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

//Sort by name
const orderByName = characters.sort((a, b) => {
  if (a.name < b.name) return -1;
  return 1;
});
console.log('order by name');
console.log(orderByName);

//Sort by mass
const orderByMass = characters.sort((a, b) => a.mass - b.mass);
console.log('order by mass');
console.log(orderByMass);

//Sort by height
const orderByHeight = characters.sort((a, b) => a.height - b.height);
console.log('order by height');
console.log(orderByHeight);

//Sort by gender
const orderByGender = characters.sort((a, b) => {
  if (a.gender === 'female') return -1;
  return 1;
});
