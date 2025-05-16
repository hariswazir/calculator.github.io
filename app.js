// ========================== Testing of our calculator app edge cases =========
let display = document.querySelector(".display");
let buttons = document.querySelectorAll(".btn");

let firstNum = "";
let secondNum = "";
let operator = "";
let result = "";
buttons.forEach((btn) => {
  let value = btn.textContent;
  btn.addEventListener("click", function () {
    if (result == "Error") {
      clearDisplay();
    }
    console.log("the value of clicked btn is: ", value);
    switch (value) {
      case "C":
        clearDisplay();
        break;
      case "=":
        calculate();
        break;
      case "+":
      case "-":
      case "/":
      case "x":
        operatorExec(value);
        break;
      default:
        handleNum(value);
    }
    updateDisplay();
  });
});

function clearDisplay() {
  firstNum = "";
  secondNum = "";
  result = "";
  operator = "";
}

function operatorExec(op) {
  // Test 2: here first we checked that if result has already value than before adding new operator into
  // operator variable first we will replace firstNum value to result and other values to empty so that we can work
  // for multile values i.e (firstNum = 2) +  (opertor = +)  (secondNum = 3) (result = 5 ) and again when I press any operator
  // than  (firstNum = result) +  (opertor = replace)  (secondNum = "") (result = "" )

  if (result !== "") {
    firstNum = result;
    result = "";
    secondNum = "";
  }
  operator = op;
}

function calculate() {
  // Test 3: here we will check if we a user press "=", than
  // if there's no firstNum or secondNum than generate a popup modal box to show the user that you missed a value
  if (firstNum == "" || secondNum == "") {
    if (firstNum == "") {
      alert("Please enter teh 1st num");
    } else {
      alert("Please enter the 2nd num");
    }
  }
  // data coming from input element is always in string
  // data accessing from element texts i.e button value = "23Owais" is in string
  let num1 = parseFloat(firstNum); // convert data type from string to number for calculation
  let num2 = parseFloat(secondNum); // convert data type from string to number for calculation
  console.log("the current operator is", operator);
  console.log("the second num is: ", secondNum);

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "x":
      console.log("the value is executed");
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        result = "Error";
      } else {
        result = num1 / num2;
      }
      break;
  }
}

function handleNum(num) {
  if (operator == "") {
    firstNum += num;
  } else {
    secondNum += num;
  }
}

function updateDisplay() {
  // Test 1: here we will add teh display value by checking on each if condition
  //  so that we can keep track of each number and display that easch nubmer

  // display.value = result;
  if (result !== "") {
    display.value = result;
  } else if (firstNum !== "") {
    display.value = firstNum;
    if (operator !== "") {
      display.value = display.value + operator;
      if (secondNum !== "") {
        display.value = display.value + secondNum;
      }
    }
  } else {
    display.value = "0";
  }
}
