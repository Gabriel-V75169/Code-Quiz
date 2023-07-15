var questions = document.getElementsByClassName("question");
var timerEl = document.getElementById('timer');
var correctAnswer = document.querySelector("#correct-answer")
var timeLeft = 80; 
var initial = document.getElementById('highscore')

function timer() {
  
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.textContent = "Time: "+timeLeft;
        timeLeft--;
      } else {
        timerEl.textContent = 'Game Over';
        clearInterval(timeInterval);
      }
    }, 1000);  
} 





   
timer();
function savingTime(){
    localStorage.setItem('timeleft', JSON.stringify(timeLeft));
};
savingTime();



