// Select the input box element where the result or user input is displayed
let input = document.getElementById("inputBox");

// Select all button elements on the page
let buttons = document.querySelectorAll('button');

// Initialize an empty string to store the user input or computation string
let string = "";

// Convert the NodeList of buttons into an array for easier manipulation
let arr = Array.from(buttons);

// Loop through each button and add a click event listener
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        // Check if the clicked button's text is '=' (equals button)
        if (e.target.innerHTML == '=') {
            // Use eval() to compute the result of the input string
            string = eval(string);
            // Display the computed result in the input box
            input.value = string;
        }
        // Check if the clicked button's text is 'AC' (All Clear button)
        else if (e.target.innerHTML == 'AC') {
            // Clear the input string
            string = "";
            // Display the cleared string (empty) in the input box
            input.value = string;
        }
        // Check if the clicked button's text is 'DEL' (Delete button)
        else if (e.target.innerHTML == 'DEL') {
            // Remove the last character from the input string
            string = string.substring(0, string.length - 1);
            // Display the updated string in the input box
            input.value = string;
        }
        // For any other button (e.g., numbers or operators)
        else {
            // Append the button's text (number/operator) to the input string
            string += e.target.innerHTML;
            // Update the input box to show the current string
            input.value = string;
        }
    });
});
