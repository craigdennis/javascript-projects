const dogImage = ['dog0', 'dog1', 'dog2', 'dog3', 'dog4'];
let currentIndex = 0;

document.getElementById('left').addEventListener('click', function() { buttonClicked('left'); });
document.getElementById('right').addEventListener('click', function() { buttonClicked('right'); });

function buttonClicked(btn) {
  if (btn === 'left') {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = dogImage.length - 1;
    }
  }
  if (btn === 'right') {
    currentIndex++;
    if (currentIndex > dogImage.length - 1) {
      currentIndex = 0;
    }
  }
  document.getElementById('image').src = 'images/' + dogImage[currentIndex] + '.jpg';
}
