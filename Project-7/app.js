const customerFeedback = [
  new Feedback('Bob', 'person1.jpeg', '4-star.png', 'This was awesome!'),
  new Feedback('Jane','person2.jpeg','5-star.png','This was more than awesome!'),
  new Feedback('Jamie', 'person3.jpeg', '1-star.png', 'This was propa shet!'),
  new Feedback('Flexicity', 'person4.jpeg', '2-star.png', 'This was shet!')
];

let currentIndex = 0;

document.getElementById('left').addEventListener('click', function() {
  buttonClicked('left');
  console.log('pressed');
});
document.getElementById('right').addEventListener('click', function() {
  buttonClicked('right');
});

function buttonClicked(btn) {
  if (btn === 'left') {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = customerFeedback.length - 1;
    }
  }
  if (btn === 'right') {
    currentIndex++;
    if (currentIndex > customerFeedback.length - 1) {
      currentIndex = 0;
    }
  }
  document.getElementById('customer-image').src =
    'images/' + customerFeedback[currentIndex].image;
  document.getElementById('name').textContent =
    customerFeedback[currentIndex].name;
    document.getElementById('star').src = 'images/' + customerFeedback[currentIndex].stars;
    document.getElementById('text').textContent = customerFeedback[currentIndex].text;

}

function Feedback(name, image, stars, text) {
  this.name = name;
  this.image = image;
  this.stars = stars;
  this.text = text;
}


