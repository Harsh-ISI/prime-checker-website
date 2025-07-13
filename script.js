const output = document.getElementById('output');
const userInput = document.getElementById('userInput');

function addToOutput(text) {
    const p = document.createElement('p');
    p.textContent = text;
    output.appendChild(p);
    output.scrollTop = output.scrollHeight;
}

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    
    return true;
}

function checkPrime() {
    const input = userInput.value.trim();
    const number = parseInt(input);
    
    if (isNaN(number)) {
        addToOutput(`>> "${input}" is not a valid number.`);
    } else {
        if (isPrime(number)) {
            addToOutput(`>> ${number} is a prime number.`);
        } else {
            addToOutput(`>> ${number} is NOT a prime number.`);
        }
    }
    
    userInput.value = '';
    userInput.focus();
}

// Allow pressing Enter to check
userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkPrime();
    }
});

// Initial message
addToOutput("Welcome to Prime Number Checker!");
addToOutput("Enter a number to check if it's prime.");