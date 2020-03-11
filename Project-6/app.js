const dogImage = ['dog0', 'dog1', 'dog2', 'dog3', 'dog4'];
let currentIndex = 0;

document.getElementById('left').addEventListener('click', leftClicked);
document.getElementById('right').addEventListener('click', rightClicked);

function rightClicked() {
    currentIndex++;
    if (currentIndex > dogImage.length -1 ) {
        currentIndex = 0;   
    }
    document.getElementById('image').src = 'images/' + dogImage[currentIndex] + '.jpg';
}

function leftClicked() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = dogImage.length - 1;
    }
    document.getElementById('image').src = 'images/' + dogImage[currentIndex] + '.jpg';
}