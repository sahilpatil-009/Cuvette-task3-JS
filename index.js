let output = document.getElementById("out");
let headtxt = document.getElementById("headtext");

function addToDisplay(x) {
  let originalVal = output.value || ""; // Ensure it's not undefined
  let lastChar = originalVal.slice(-1); // Get the last character in the current value
  ResetStyle();
  if (x == "+" || x == "-" || x == "x" || x == "/" || x == ".") {
    // Check if the last character is already an operator
    if (
      lastChar == "+" ||
      lastChar == "-" ||
      lastChar == "x" ||
      lastChar == "/" ||
      lastChar == "."
    ) {
      // Replace the last operator with the new one
      let updatedValue = originalVal.slice(0, -1) + x;
      output.value = updatedValue;
    } else {
      // Append the new operator if the last character is not an operator
      output.value += x;
    }
  } else {
    // Append the number or non-operator character
    let leng = output.value.length;
    console.log(leng);
    if (output.value[0] == 0 && leng == 1 && x !== ".") {
      console.log(originalVal);
      output.value = "";
      output.value = x;
    } else {
      output.value += x;
    }
  }
}

function deleteLastDigit() {
  let value = output.value;
  if (value.length > 1) {
    let newVal = value.substring(0, value.length - 1);
    output.value = newVal;
  } else {
    output.value = "0";
    ResetStyle();
  }
}

function deleteCal() {
  output.value = "0";
  ResetStyle();
}

function ResetStyle() {
  output.style.backgroundColor = "#181F32";
  headtxt.style.color = "white";
}

function Evaluate() {
  if (output.value.length > 1) {
    let value = output.value;
    let originalVal = value.replace("x", "*");
    console.log(originalVal);
    let lastChar = originalVal.slice(-1);
    let result = null;

    if (lastChar == "+" || lastChar == "-") {
      let updatedValue = originalVal + "0";
      result = eval(updatedValue);
    } else if (lastChar == "/" || lastChar == "x") {
      let updatedValue = originalVal + "1";
      result = eval(updatedValue.replace("x", "*"));
    } else {
      result = Math.round(eval(originalVal));
    }
    deleteCal();
    addToDisplay(result);
    ResetStyle();
  }
}
