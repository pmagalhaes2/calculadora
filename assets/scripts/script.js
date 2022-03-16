feather.replace();

let operation = "", currentValue = "", oldValue = "", result = "";
let output = document.querySelector(".output");

function numberClick(value) {
  if ((result == "" && currentValue == "") || (operation != "" && currentValue == "")) {
    clearOutput();
  }
  let numberClicked = value;
  displayOutput(numberClicked);
}

function displayOutput(numberClicked) {
  if (result || result === 0) {
    output.innerHTML = result;
    currentValue = "", oldValue = result.toString(), result = "";
  } else {
      if (currentValue.includes(".") && numberClicked === ".") return;
      if (currentValue === "0" && numberClicked != ".") return removeZero(numberClicked);
      currentValue = numberClicked;
      if(output.textContent.length < 9) output.innerHTML += currentValue;
      currentValue = output.innerHTML;
  }
}

function removeZero(numberClicked) {
  output.innerHTML = numberClicked;
  currentValue = output.innerHTML;
}

function operatorClick(value) {
  if (value != "=") {
    calc(operation);
    operation = value;
  } else {
    let operatorClicked = value;
    calc(operatorClicked);
  }
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
  if (operatorClicked === "=" && currentValue != "" || operation && currentValue != "") {
    switch (operation) {
      case "+":
        result = Number((oldValue * 10) + Number(currentValue * 10))/10;
        break;
      case "-":
        result = Number((oldValue * 10) - Number(currentValue * 10))/10;
        break;
      case "/":
        result = Number((oldValue * 10) / Number(currentValue * 10)).toString();
        if(result.length >= 8) {
          result.includes(".") ? result = Number(result).toFixed(8) : result = Number(result);
        } else {
          result = Number(result);
        }
        break;
      case "*":
        result = Number((oldValue * 10) * Number(currentValue * 10))/100;
        break;
    }
    displayOutput(result);
  } else {
      if (currentValue === "") return;
    oldValue = currentValue;
    currentValue = "";
    operation = operatorClicked;
  }
}
