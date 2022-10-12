const base = document.querySelector("#base");
const height = document.querySelector("#height");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#output");

checkButton.addEventListener("click", clickHandler);

function clickHandler() {
  console.log(base.value, height.value);
  const hypo = Math.sqrt(
    Math.pow(~~base.value, 2) + Math.pow(~~height.value, 2)
  );
  showMessage("The length of the hypotenuse is " + hypo);
}

function showMessage(msg) {
  message.style.display = "block";
  message.style.color = "green";
  message.innerText = msg;
}
