const task3Element = document.getElementById('task-3');

const onCallAlert = () => {
  alert('this is nobody');
};

const onCallShowName = (name) => {
  alert(`this is ${name}`);
};

const threeGunMan = (man1, man2, man3) => {
  return `${man1} ${man2} ${man3}`;
};

alert(threeGunMan('Good', 'Bad', 'Ugly'));

task3Element.addEventListener('click', onCallAlert);
