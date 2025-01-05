const display = document.getElementById("display");

/* Append Numbers to the Display */
function appendNumber(number) {
    if (display.innerText === "0") {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

/* Append Operators to the Display */
function appendOperator(operator) {
    const lastChar = display.innerText.slice(-1);
    if (!"+-*/%".includes(lastChar)) {
        display.innerText += operator;
    }
}

/* Clear the Display */
function clearDisplay() {
    display.innerText = "0";
}

/* Delete Last Character */
function deleteLast() {
    display.innerText = display.innerText.slice(0, -1) || "0";
}

/* Calculate the Result */
function calculateResult() {
    try {
        display.innerText = eval(display.innerText.replace("÷", "/").replace("×", "*"));
    } catch {
        display.innerText = "Error";
    }
}
