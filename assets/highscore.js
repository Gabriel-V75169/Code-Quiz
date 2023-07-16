
var time = localStorage.getItem('timeleft');
saveButton = document.getElementById('saveButton');


localStorage.setItem("timeleft", JSON.stringify(time));

function saveHighscores() { 
    var inputInitial = document.querySelector("#high").value;
    
    
    localStorage.setItem('initialSave', JSON.stringify(inputInitial));
   

    var highscore = {
        initial: inputInitial,
        time: time,
    };
    localStorage.setItem("highscore", JSON.stringify(highscore));

    inputInitial.push(highscore)

    localStorage.setItem("key", json.stringify(highscore));
    
}


function renderMessage() {
    var lastscore = JSON.parse(localStorage.getItem("highscore"));
    if (lastscore !== null) {
      document.querySelector("#scores").textContent = lastscore.initial + 
      " score is, " + time
    }
  }

    