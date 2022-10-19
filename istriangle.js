const angleOne = document.querySelector("#angle-1");
const angleTwo = document.querySelector("#angle-2");
const angleThree = document.querySelector("#angle-3");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#output");

checkButton.addEventListener("click", clickHandler);

function clickHandler() {
  if (~~angleOne.value > 0 && ~~angleTwo.value > 0 && ~~angleThree.value > 0) {
    if (~~angleOne.value + ~~angleTwo.value + ~~angleThree.value === 180) {
      showMessageTrue("YaY! The angles form a traingle! 🥳");
    } else {
      showMessageFalse("Oh! The angles don't form a traingle.");
    }
  } else {
    showMessageFalse("Please enter only positive numbers!");
  }
}

function showMessageTrue(msg) {
  message.style.display = "block";
  message.style.color = "green";
  message.innerText = msg;
}

function showMessageFalse(msg) {
  message.style.display = "block";
  message.style.color = "red";
  message.innerText = msg;
}
