let variables = {};

console.log("Hello welcome to SIMPLE P");
console.log("----------------------------------------------------");
console.log("This language I made is a personalized version of Python with fun syntax. How exciting!");
console.log();
console.log("To print you type this: P<Hello World!>");
console.log();
console.log("To do math do this: m< >m  (put nothing in between)");
console.log();
console.log("To declare a variable you type this: ! H = 4 !");
console.log();
console.log("The For loop is the same as Python: for i in range(4):");
console.log();
console.log("To import something, it is the same as Python.");
console.log("Example: import pandas as pd");
console.log("----------------------------------------------------");

function execute(line) {
    line = line.trim();

    // Print Command
    if (line.startsWith("P<") && line.endsWith(">")) {
        const message = line.slice(2, -1);
        console.log(message);
    }

    // Math Command
    else if (line.startsWith("m<") && line.endsWith(">m")) {
        let num1 = parseInt(prompt("Enter num one: "));
        let sign = prompt("Which math operator do you choose? (+, -, *, /, %)");
        let num2 = parseInt(prompt("Enter num two: "));

        if (sign === "+") {
            console.log(num1 + num2);
        } else if (sign === "-") {
            console.log(num1 - num2);
        } else if (sign === "*") {
            console.log(num1 * num2);
        } else if (sign === "/") {
            console.log(num1 / num2);
        } else if (sign === "%") {
            console.log(num1 % num2);
        } else {
            console.log("Invalid math operator.");
        }
    }

    // Variable Declaration
    else if (line.startsWith("!") && line.endsWith("!")) {
        const assignment = line.slice(1, -1).split("=");
        if (assignment.length === 2) {
            const varName = assignment[0].trim();
            const value = assignment[1].trim();
            variables[varName] = value;
            console.log(`Variable ${varName} set to ${value}`);
        } else {
            console.log("Invalid variable assignment.");
        }
    }

    // Output Variable
    else if (variables.hasOwnProperty(line)) {
        console.log(variables[line]);
    }

    // Unknown Command
    else {
        console.log(`Unknown command: ${line}`);
    }
}

// Run loop
while (true) {
    const line = prompt("Enter SIMPLE P command (or type 'ex' to quit):");
    if (line === "ex") break;
    execute(line);
}
