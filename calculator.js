function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const oper = document.getElementById("operator").value;
  const resultBox = document.getElementById("resultBox");

  if (isNaN(num1) || isNaN(num2)) {
    resultBox.textContent = "Result: Please enter valid numbers.";
    return;
  }

  let result;

  switch (oper) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
      break;
    case "//":
      result = num2 !== 0 ? Math.floor(num1 / num2) : "Cannot divide by zero";
      break;
    case "%":
      result = num2 !== 0 ? num1 % num2 : "Cannot divide by zero";
      break;
    case "**":
      result = num1 ** num2;
      break;
    default:
      result = "Invalid operation.";
  }

  resultBox.textContent = "Result: " + result;
}
