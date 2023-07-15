var questions = document.getElementsByClassName("question");

var timerEl = document.getElementById('timer');
var correctAnswer = document.querySelector("#correct-answer")
var timeLeft = 120; 
var initial = document.getElementById('highscore')

function timer() {
  
    var timeInterval = setInterval(function () {
      if (timeLeft >= 0) {
        timerEl.textContent = "Time: "+timeLeft;
        timeLeft--;
      } else {
        window.location.href = 'endScreen.html';
        clearInterval(timeInterval);
      }
    }, 1000);  
} 

var container = document.querySelector(".container");

window.addEventListener('click', ({ target }) => {
    
    if (target.matches(".answers-1")) { 
      document.getElementById("Q1").style.display = "none";
      
      document.getElementById("Q2").style.display = "block";  
    }
  });

  var container = document.querySelector(".container");

window.addEventListener('click', ({ target }) => {
    
    if (target.matches('.answers-2')) { 
      document.getElementById("Q2").style.display = "none";
      
      document.getElementById("Q3").style.display = "block";  
    }
  });

  var container = document.querySelector(".container");

window.addEventListener('click', ({ target }) => {
    
    if (target.matches('.answers-3')) { 
      document.getElementById("Q3").style.display = "none";
      
      document.getElementById("Q4").style.display = "block";  
    }
  });

  var container = document.querySelector(".container");

window.addEventListener('click', ({ target }) => {
    
    if (target.matches('.answers-4')) { 
      document.getElementById("Q4").style.display = "none";
      
      document.getElementById("Q5").style.display = "block";  
    }
  });
  
  window.addEventListener('click', ({ target }) => {
    
    if (target.matches('.answers-5')) { 
      document.getElementById("Q5").style.display = "none";
      
      document.getElementById("Q5").style.display = "block";  

      window.location.href = 'endScreen.html';
    }
  });
      
 




   
timer();
function savingTime(){
    localStorage.setItem('timeleft', JSON.stringify(timeLeft));
};
savingTime()



