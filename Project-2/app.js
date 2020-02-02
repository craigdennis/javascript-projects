var btn = document.getElementById('btn');
var hexCodeLetters = ['a', 'b', 'c', 'd', 'e', 'f'];
var letterArr = [];
var numberArr = [];
var hexCode = [];



btn.addEventListener('click', function() {
    var backgroundCol = shuffle(createHexCode());
    console.log(backgroundCol);
    document.body.style.backgroundColor = '#' + backgroundCol;
    letterArr = [];
    numberArr = [];
    hexCode = [];
    document.getElementById('hex-code').textContent = backgroundCol;
    
});




function randomNumber(range) {
    return Math.floor(Math.random() * range);
}

function createHexCode() {

    for (var i = 0; i < 6; i++) {
        letterArr.push(hexCodeLetters[randomNumber(6)]);
    }

    for (var i = 0; i < 6; i++) {
        numberArr.push(randomNumber(6));
    }

    for (var i = 0; i < 3; i++) {
        hexCode.push(letterArr.pop());
        hexCode.push(numberArr.pop());

    }
    return hexCode;
}


function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array.join('');
  }


