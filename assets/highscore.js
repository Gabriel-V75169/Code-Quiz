
var initial = document.getElementById('highscore');
var timeleft = localStorage.getItem('timeleft');
saveButton = document.getElementById('saveButton');

saveButton.addEventListener("click", function(event) {
    event.preventDefault();
    var highscore = {
        initial: initial.value,
        time: timeleft
    };
    
},);

function saveHighscores() {
    localStorage.setItem("highscore", JSON.stringify(highscore));
    renderMessage();
}
function renderMessage() {
    var lastscore = JSON.parse(localStorage.getItem("highscore"));
    if (lastscore !== null) {
      document.querySelector(".scores").textContent = lastscore.initial + 
      " received a/an " + timeLeft
    }
  }

saveHighscores()
