const inputSelector = document.getElementById("input");

input.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    getInput();
  }
});

document.getElementById('btn').addEventListener('click', function() {
  getInput();
});

function getInput() {
    if (inputSelector.value === "") {
        document.querySelector('h3').textContent = "Please enter a message";
        setTimeout(function(){
            document.getElementById("message").innerHTML = 'Last Message Delivered';
        }, 3000);
    } else {
        const input = inputSelector.value;
        document.querySelector('h3').textContent = input;
        inputSelector.value = "";
    }
 
}
