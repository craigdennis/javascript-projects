let currentIndex = 0;
const customerFeedback = [
  new Feedback('Corona-verus', 'person1.jpeg', '4-star.png', 'This was awesome!'),
  new Feedback('Bob','person2.jpeg','5-star.png','This was more than awesome!'),
  new Feedback('Emma', 'person3.jpeg', '1-star.png', 'This was propa shet!'),
  new Feedback('Flex-dem-Guns', 'person4.jpeg', '2-star.png', 'This was shet!')
];

insertData(customerFeedback, 0);


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
  insertData(customerFeedback, currentIndex);

}

function Feedback(name, image, stars, text) {
  this.name = name;
  this.image = image;
  this.stars = stars;
  this.text = text;
}

function insertData(feedback, index) {
  document.getElementById('customer-image').src ='images/' + feedback[index].image;
  document.getElementById('name').textContent = feedback[index].name;
  document.getElementById('star').src = 'images/' + feedback[index].stars;
  document.getElementById('text').textContent = feedback[index].text;
}


