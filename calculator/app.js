let btns = document.querySelectorAll(".btn");
let operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const ac = document.querySelector(".ac");
const ce = document.querySelector(".ce");

const display = document.querySelector(".display");
const aboveDisplay = document.querySelector(".above");

let equation = "";
let isResultDisplayed = false;

// Function to handle button click animations
const animateButton = (button) => {
  button.classList.add("active");
  setTimeout(() => {
    button.classList.remove("active");
  }, 200);
};

// Function to update displays
const updateDisplays = () => {
  aboveDisplay.value = equation;
  display.value = equation === "" ? "0" : equation;
};

// Load previous calculation from session storage
window.addEventListener("load", () => {
  const historyEquation = sessionStorage.getItem("calculatorHistoryEquation");
  const historyResult = sessionStorage.getItem("calculatorHistoryResult");
  if (historyEquation && historyResult) {
    aboveDisplay.value = historyEquation;
    display.value = historyResult;
    equation = historyResult;
    isResultDisplayed = true;
  }
});

// Digits and decimal point adding function
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    animateButton(btn);

    // If a result is already displayed, a new number starts a new calculation
    if (isResultDisplayed) {
      equation = "";
      isResultDisplayed = false;
    }

    // Prevent multiple decimal points in a number
    if (btn.dataset.key === "." && equation.includes(".")) {
      // Check if there is an operator in the equation
      const lastOperatorIndex = Math.max(
        equation.lastIndexOf("+"),
        equation.lastIndexOf("-"),
        equation.lastIndexOf("*"),
        equation.lastIndexOf("/"),
        equation.lastIndexOf("%")
      );

      // If there's an operator and the part after it contains a decimal, don't add another
      if (
        lastOperatorIndex !== -1 &&
        equation.substring(lastOperatorIndex + 1).includes(".")
      ) {
        return;
      }
    }

    equation += btn.dataset.key;
    updateDisplays();
  });
});

// Operator function
operators.forEach((op) => {
  op.addEventListener("click", () => {
    animateButton(op);

    // If a result is displayed, continue the calculation with the result
    if (isResultDisplayed) {
      isResultDisplayed = false;
    }

    // Get the last character of the current equation
    const lastChar = equation.slice(-1);
    const isLastCharOperator = ["+", "-", "*", "/", "%"].includes(lastChar);

    // If the last character is an operator, replace it with the new one
    if (isLastCharOperator) {
      equation = equation.slice(0, -1) + op.dataset.key;
    } else {
      equation += op.dataset.key;
    }

    updateDisplays();
  });
});

// Equal to function
equal.addEventListener("click", () => {
  animateButton(equal);

  // Prevent evaluation on an empty or incomplete equation
  if (
    equation.length === 0 ||
    ["+", "-", "*", "/", "%"].includes(equation.slice(-1))
  ) {
    return;
  }

  try {
    const result = eval(equation.replace("÷", "/").replace("×", "*"));
    aboveDisplay.value = equation + " =";
    display.value = result;

    // Save history to session storage
    sessionStorage.setItem("calculatorHistoryEquation", equation);
    sessionStorage.setItem("calculatorHistoryResult", result);

    // Set the equation to the result for further calculations
    equation = String(result);
    isResultDisplayed = true;
  } catch (e) {
    display.value = "Error";
    equation = "";
    isResultDisplayed = false;
    sessionStorage.clear();
  }
});

// All Clear function
ac.addEventListener("click", () => {
  animateButton(ac);
  aboveDisplay.value = "";
  display.value = "0";
  equation = "";
  isResultDisplayed = false;
  sessionStorage.clear();
});

// Clear One-by-one function
ce.addEventListener("click", () => {
  animateButton(ce);
  if (equation.length > 0) {
    equation = equation.slice(0, -1);
    updateDisplays();
  }
  isResultDisplayed = false;
});
