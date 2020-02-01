
document.getElementById('btn').addEventListener('click', function() {
    document.body.style.background = changeBackgroundColor();
});


function randomNumber() {
    return Math.floor(Math.random() * 255);
}

function changeBackgroundColor() {
    var red, green, blue;
    red = randomNumber();
    green = randomNumber();
    blue = randomNumber();
    return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}