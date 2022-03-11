feather.replace();

let operation = "", currentValue = "", oldValue = "", result = "";
let output = document.querySelector(".output");

function numberClick(value) {
  let numberClicked = value;
  displayOutput(numberClicked);
}

function displayOutput(numberClicked) {
  removeZero();
  if (result || result === 0) {
    output.innerHTML = result;
    operation = "", currentValue = result.toString(), oldValue = "", result = "";
  } else {
    if (currentValue.includes(".") && numberClicked === ".") return;
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

function clearVariables(){
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
