const hexCodeLetters = ['0','1','2','3','4','5','6','7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
const btn = document.getElementById('btn');

btn.addEventListener('click', createHexCode);

function createHexCode() {
  let hexcode = "#";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * hexCodeLetters.length);
    hexcode += hexCodeLetters[index];
  
  }

  document.body.style.backgroundColor = hexcode;
  document.getElementById('hex-code').textContent = hexcode;
}
