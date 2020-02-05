let letterArr, numberArr, hexCode, backgroundCol;

const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
  backgroundCol = shuffle(createHexCode());
  document.body.style.backgroundColor = '#' + backgroundCol;
  document.getElementById('hex-code').textContent = backgroundCol;
});

//produces a random number

function randomNumber(range) {
  return Math.floor(Math.random() * range);
}

//function to create a hexcode

function createHexCode() {
  const hexCodeLetters = ['a', 'b', 'c', 'd', 'e', 'f'];
  letterArr = [];
  numberArr = [];
  hexCode = [];

  for (let i = 0; i < 6; i++) {
    letterArr.push(hexCodeLetters[randomNumber(6)]);
  }

  for (let i = 0; i < 6; i++) {
    numberArr.push(randomNumber(6));
  }

  for (let i = 0; i < 3; i++) {
    hexCode.push(letterArr.pop());
    hexCode.push(numberArr.pop());
  }
  return hexCode;
}

//function to shuffle array to randomize the hexcode

function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    randomIndex = randomNumber(currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array.join('');
}
