feather.replace();

let operation = "",
  currentValue = "",
  oldValue = "",
  result = "";
let output = document.querySelector(".output");
let operators = document.querySelectorAll(".operator");
let numbers = document.querySelectorAll(".number");

function numberClick(value) {
  let numberClicked = value;
  displayOutput(numberClicked);
}

function displayOutput(numberClicked) {
  removeZero();
  if (result) {
    output.innerHTML = result;
    (operation = ""), (currentValue = ""), (oldValue = ""), (result = "");
  } else {
    currentValue = numberClicked;
    output.innerHTML += currentValue;
    currentValue = output.innerHTML;
  }
}

function removeZero() {
  let value = output.innerHTML;
  if (value == "0") {
    value = "";
    output.innerHTML = value;
  }
}

function operatorClick(value) {
  let operatorClicked = value;
  calc(operatorClicked);
}

function clearOutput() {
  output.innerHTML = "";
}

function cancelEntry() {
  if (output.textContent) {
    let entry = output.innerHTML;
    output.innerHTML = entry.substring(0, entry.length - 1);
    currentValue = output.innerHTML;
  }
}

function calc(operatorClicked) {
  if (operatorClicked === "=") {
    switch (operation) {
      case "+":
        result = parseFloat(oldValue) + parseFloat(currentValue);
        break;
      case "-":
         result = parseFloat(oldValue) - parseFloat(currentValue);
        break;
      case "/":
        result = parseFloat(oldValue) / parseFloat(currentValue);
        break;
      case "*":
        result = parseFloat(oldValue) * parseFloat(currentValue);
        break;
    }
    displayOutput(result);
  } else {
    oldValue = currentValue;
    clearOutput();
    operation = operatorClicked;
  }
}
