feather.replace();

let operation = "", currentValue = "", oldValue = "", result = "";
let output = document.querySelector(".output");

function numberClick(value) {
  let numberClicked = value;
  displayOutput(numberClicked);
}

function displayOutput(numberClicked) {
  if (result || result === 0) {
    output.innerHTML = result;
    operation = "", currentValue = result.toString(), oldValue = "", result = "";
  } else {
    if (currentValue.includes(".") && numberClicked === ".") return;
    if (currentValue === "0" && numberClicked != ".") return removeZero(numberClicked);
    currentValue = numberClicked;
    output.innerHTML += currentValue;
    currentValue = output.innerHTML;
  }
}

function removeZero(numberClicked) {
  output.innerHTML = numberClicked;
  currentValue = output.innerHTML;
}

function operatorClick(value) {
  let operatorClicked = value;
  calc(operatorClicked);
}

function clearOutput() {
  output.innerHTML = "";
}

function clearVariables() {
  clearOutput();
  operation = "", currentValue = "", oldValue = "", result = "";
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
        result = Number((oldValue * 10) + Number(currentValue * 10))/10;
        break;
      case "-":
        result = Number((oldValue * 10) - Number(currentValue * 10))/10;
        break;
      case "/":
        result = Number((oldValue * 10) / Number(currentValue * 10));
        break;
      case "*":
        result = Number((oldValue * 10) * Number(currentValue * 10))/100;
        break;
    }
    displayOutput(result);
  } else {
    oldValue = currentValue;
    clearOutput();
    operation = operatorClicked;
  }
}
