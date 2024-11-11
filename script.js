// Append value to the display
function appendToDisplay(value) {
    const display = document.getElementById('calc-display');
    display.textContent += value;
}

// Clear the display
function clearDisplay() {
    document.getElementById('calc-display').textContent = '';
}

// Delete the last character from the display
function deleteLast() {
    const display = document.getElementById('calc-display');
    display.textContent = display.textContent.slice(0, -1);
}

// Calculate the result and display it
function calculateResult() {
    const display = document.getElementById('calc-display');
    try {
        // Using a safer evaluation method
        const result = Function('"use strict";return (' + display.textContent + ')')();
        display.textContent = result;
    } catch (error) {
        display.textContent = 'Error';
        // Optionally, you can alert or log the error
        // alert('Invalid expression');
        console.error('Invalid expression:', error);
    }
}
