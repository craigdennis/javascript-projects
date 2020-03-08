let counterNumber = 0;
let numberSelector = document.getElementById('number');

document.getElementById('minus').addEventListener('click', function() {
  counterNumber--;
  updateUI();
  if (counterNumber < 0) {
    numberSelector.classList.add('minus-number');
    numberSelector.classList.remove('positive-number');
  }
});

document.getElementById('add').addEventListener('click', function() {
  counterNumber++;
  updateUI();
  if (counterNumber > 0) {
    numberSelector.classList.add('positive-number');
    numberSelector.classList.remove('minus-number');
  }
});

function updateUI() {
  numberSelector.textContent = parseFloat(counterNumber);
}
