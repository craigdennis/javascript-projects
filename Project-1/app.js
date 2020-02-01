var btn = document.getElementById('btn');



btn.addEventListener('click', function() {
    var color1 = changeBackgroundColor();
    var color2 = changeBackgroundColor();
    document.body.style.background = color1;
    if (color1 === color2) {
        color2 = changeBackgroundColor();
        btn.style.backgroundColor = color2;
    } else {
        btn.style.backgroundColor = color2;
    }
    
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