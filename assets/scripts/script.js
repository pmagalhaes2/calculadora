feather.replace();

let operation = "", currentValue = "", oldValue = "", result = "", tempResult = "";
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
    currentValue = "", oldValue = result.toString(), result = "", tempResult = "";
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
  operation = "", currentValue = "", oldValue = "", result = "", tempResult = "";
}

function cancelEntry() {
  if (output.textContent) {
    let entry = output.innerHTML;
    output.innerHTML = entry.substring(0, entry.length - 1);
    currentValue = output.innerHTML;
  }
}

function checkResult(tempResult) {
  tempResult.length > 10 ? result = Number(tempResult).toExponential(5) : result = Number(tempResult);
}

function calc(operatorClicked) {
  if (operatorClicked === "=" && currentValue != "" || operation && currentValue != "") {
    switch (operation) {
      case "+":
        tempResult = Number(((oldValue * 10) + Number(currentValue * 10))/10).toString();
        break;
      case "-":
        tempResult = Number(((oldValue * 10) - Number(currentValue * 10))/10).toString();
        break;
      case "/":
        tempResult = Number((oldValue * 10) / Number(currentValue * 10)).toString();
        tempResult.length >= 8 && tempResult.includes(".") ? tempResult = Number(tempResult).toFixed(8) : tempResult = Number(tempResult);
        tempResult = tempResult.toString();
        break;
      case "*":
        tempResult = Number(((oldValue * 10) * Number(currentValue * 10))/100).toString();
        break;
    }
    checkResult(tempResult);
    displayOutput(result);
  } else {
      if (currentValue === "") return;
    oldValue = currentValue;
    currentValue = "";
    operation = operatorClicked;
  }
}
