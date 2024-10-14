var time = 60;
var score = 0;
var hitVal = 0;
//* ====================
//* CREATING BUBBLES FUNCTION
//* ====================


function makeBubbles() {

  var bubbles = "";

  for (let i = 1; i <= 70; i++) {
    var randomNum = Math.floor(Math.random() * 10);
    bubbles += `<div class="bubble">
            ${randomNum}
            </div>`;
  }

  document.querySelector("#pannel-bottom").innerHTML = bubbles;
};

//* ================
//* RUN TIMER FUNCTION
//* ================


function runTimer() {
  var runTime = setInterval(function () {
    if (time > 0) {
      time--;
      document.querySelector("#timeRun").textContent = time;
    } else {
      clearInterval(runTime);
      document.querySelector("#pannel-bottom").innerHTML = (`<h2> GAME OVER</h2> <h3> Your Score is ${score}</h3>`);
    }
  }, 1000);

};

//* ===============
//* RUN HIT 
//* ===============

function runHit() {
  hitVal = Math.floor(Math.random() * 10);

  document.querySelector("#hitvalue").textContent = hitVal;
}

//* ===============
//* RUN SCORE
//* ===============

function runScore() {
  score += 10;

  document.querySelector("#scorevalue").textContent = score;
}


//* =======================
//* EVENT BUBBLING ON PANNEL-BOTTOM
//* =======================

document.querySelector("#pannel-bottom").addEventListener("click", function (details) {
  var clickBubble = Number(details.target.textContent);

  if (clickBubble === hitVal) {
    runScore();
    runHit();
    makeBubbles();
  }
});


//* ================
//* CALL THE FUNCTIONS
//* ================

runTimer();
makeBubbles();
runHit();
//runScore();
