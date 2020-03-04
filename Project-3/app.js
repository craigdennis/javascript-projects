const quotes = ['You are the shuckiest shuck faced shuck in the world! ― James Dashner, The Maze Runner',
 'I\'m unpredictable, I never know where I\'m going until I get there, I\'m so random, I\'m always growing, learning, changing, I\'m never the same person twice. But one thing you can be sure of about me; is I will always do exactly what I want to do ― C. JoyBell C.',
 'That proves you are unusual," returned the Scarecrow; "and I am convinced that the only people worthy of consideration in this world are the unusual ones. For the common folks are like the leaves of a tree, and live and die unnoticed. ― L. Frank Baum, The Land of Oz',
 'But that was life: Nobody got a guided tour to their own theme park. You had to hop on the rides as they presented themselves, never knowing whether you would like the one you were in line for...or if the bastard was going to make you throw up your corn dog and your cotton candy all over the place. ― J.R. Ward, Crave',
 'Her name badge read: Hello! My name is DIE, DEMIGOD SCUM!” ― Rick Riordan, The Son of Neptune'
  ];

  function randomQuote () {
    let randomNumber = Math.floor(Math.random() * 4);
    document.getElementById('quote').textContent = quotes[randomNumber];
  }

  randomQuote();


  

  document.querySelector('button').addEventListener('click', function() {
   randomQuote();
  });