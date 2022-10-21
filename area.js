const sideOne = document.querySelector("#side-1");
const sideTwo = document.querySelector("#side-2");
const sideThree = document.querySelector("#side-3");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#output");

checkButton.addEventListener("click", clickHandler);

function clickHandler() {
  if (~~sideOne.value > 0 && ~~sideTwo.value > 0 && ~~sideThree.value) {
    const a = ~~sideOne.value;
    const b = ~~sideTwo.value;
    const c = ~~sideThree.value;
    const s = (a + b + c) / 2;
    const n = s * (s - a) * (s - b) * (s - c);
    if (n > 0) {
      const area = Math.sqrt(n);
      showMessage("The area of the triangle is " + area.toFixed(2));
    } else {
      showMessageFalse("Given side lengths can never form a triangle!");
    }
  } else {
    showMessageFalse("Please enter only positive numbers!");
  }
}

function showMessage(msg) {
  message.style.display = "block";
  message.style.color = "green";
  message.innerText = msg;
}

function showMessageFalse(msg) {
  message.style.display = "block";
  message.style.color = "red";
  message.innerText = msg;
}
