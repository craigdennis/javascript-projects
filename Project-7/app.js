const customerImage = [""]

let currentIndex = 0;

document.getElementById('left').addEventListener('click', function() { buttonClicked('left'); });
document.getElementById('right').addEventListener('click', function() { buttonClicked('right'); });

function buttonClicked(btn) {
  if (btn === 'left') {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = customerImage.length - 1;
    }
  }
  if (btn === 'right') {
    currentIndex++;
    if (currentIndex > customerImage.length - 1) {
      currentIndex = 0;
    }
  }
  document.getElementById('customer-image').src = 'images/' + customerImage[currentIndex] + '.jpg';
}