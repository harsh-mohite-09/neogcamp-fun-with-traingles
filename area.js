const sideOne = document.querySelector("#side-1");
const sideTwo = document.querySelector("#side-2");
const sideThree = document.querySelector("#side-3");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#output");

checkButton.addEventListener("click", clickHandler);

function clickHandler() {
  const a = ~~sideOne.value;
  const b = ~~sideTwo.value;
  const c = ~~sideThree.value;
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  showMessage("The area of the triangle is " + area);
}

function showMessage(msg) {
  message.style.display = "block";
  message.style.color = "green";
  message.innerText = msg;
}
