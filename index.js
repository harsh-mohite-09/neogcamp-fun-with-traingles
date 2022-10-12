const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#check-button");
const output = document.querySelector("#output");

const correctAnswers = [
  "90°",
  "right angled",
  "one right angle",
  "12, 16, 20",
  "Equilateral triangle",
  "85°",
  "30°",
  "a + b + c",
  "no",
  "45°",
];

submitBtn.addEventListener("click", clickHandler);

function clickHandler() {
  var score = 0;
  var index = 0;
  const formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
      index = index + 1;
    } else {
      index = index + 1;
    }
  }
  if (score >= 6) {
    messagePass("Your Score is: " + score + "/10. You Passed!");
  } else {
    messageFail("Your Score is: " + score + "/10. You Failed!");
  }
}

function messagePass(text) {
  output.style.color = "green";
  output.innerText = text;
}

function messageFail(text) {
  output.style.color = "red";
  output.innerText = text;
}
