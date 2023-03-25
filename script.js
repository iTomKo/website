const counterElement = document.getElementById("counter");

function startCountUp(targetNumber) {
  let currentNumber = 0;

  const interval = setInterval(() => {
    currentNumber++;

    if (currentNumber >= targetNumber) {
      clearInterval(interval);
    }

    const counterText = currentNumber < 10 ? `0${currentNumber}` : currentNumber;
    counterElement.innerText = counterText;
  }, 100);
}


startCountUp(8);
