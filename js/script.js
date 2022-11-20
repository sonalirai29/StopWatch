//when page is onload

function select(id) {
  return document.getElementById(id);
}

window.onload = function () {
  var seconds = 00,
    tens = 00,
    appendTens = select("tens"),
    appendSeconds = select("seconds"),
    buttonStart = select("button-start"),
    buttonStop = select("button-stop"),
    buttonReset = select("button-reset"),
    Interval;

  // Start button click Handler
  buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  // Stop button click Handler 
  buttonStop.onclick = function () {
    clearInterval(Interval); // Clear timer
  };

  // Resset button Handler
  buttonReset.onclick = function () {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  };

  //Timer start
  function startTimer() {
    tens++;

    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    } else if (tens > 9) {
      appendTens.innerHTML = tens;
    }

    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  }
};
