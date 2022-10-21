const base = document.querySelector("#base");
const height = document.querySelector("#height");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#output");

checkButton.addEventListener("click", clickHandler);

function clickHandler() {
  if (~~base.value > 0 && ~~height.value > 0) {
    const hypo = Math.sqrt(
      Math.pow(~~base.value, 2) + Math.pow(~~height.value, 2)
    );
    showMessage("The length of the hypotenuse is " + hypo.toFixed(2));
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
