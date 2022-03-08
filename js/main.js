const startButton = document.getElementById('start');
let numbers;

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function createNumbers(length) {
  const numbers = [];

  while (numbers.length < length) {
    const newNumber = getRandomInteger(1, 100);

    if (!numbers.includes(newNumber)) numbers.push(newNumber);
  }

  return numbers;
}

function insertThenHideNumbers() {
  const numberLength = 5;
  numbers = createNumbers(numberLength);

  const placeToInsertNumbers = document.getElementById('numbers');

  placeToInsertNumbers.innerHTML = numbers.join(' ');

  let time = 29;
  startButton.innerHTML = time;
  const interval = setInterval(() => {
    startButton.innerHTML = --time;

    if (time === 0) clearInterval(interval);
  }, 1000);

  setTimeout(() => {
    placeToInsertNumbers.innerHTML = '';

    const answer = [];
    let index = 1;

    while (answer.length < numberLength) {
      const newNumber = parseInt(
        prompt(`Inserisci un numero fra quelli che sono apparsi (${index}/${numberLength})`)
      );

      if (!isNaN(newNumber)) {
        answer.push(newNumber);
        index++;
      }
    }

    const result = document.getElementById('result');

    if (numbers.sort().join('') === answer.sort().join('')) {
      result.innerHTML = 'Hai vinto!';
    } else {
      result.innerHTML = 'Hai perso!';
    }

    placeToInsertNumbers.innerHTML = numbers.join(' ');
    startButton.innerHTML = 'Start game';
  }, 30000);
}

startButton.addEventListener('click', insertThenHideNumbers);
