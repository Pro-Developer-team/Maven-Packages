// maven-example.js

// Function to display a greeting message
function displayGreeting() {
    const greeting = "Hello, Maven World!";
    console.log(greeting);
    alert(greeting); // Display an alert with the greeting
}

// Function to add two numbers
function addNumbers(a, b) {
    return a + b;
}

// Function to display the result of adding two numbers
function displaySum() {
    const num1 = 5;
    const num2 = 10;
    const sum = addNumbers(num1, num2);
    console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
}

// Execute the functions
displayGreeting();
displaySum();
