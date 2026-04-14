const numbersContainer = document.getElementById('numbers-container');
const generateBtn = document.getElementById('generate-btn');

const colors = [
    'oklch(0.6 0.2 30)', // Red-ish
    'oklch(0.7 0.2 100)', // Orange-ish
    'oklch(0.8 0.2 150)', // Yellow-ish
    'oklch(0.7 0.2 200)', // Green-ish
    'oklch(0.6 0.2 250)', // Blue-ish
    'oklch(0.6 0.2 300)', // Purple-ish
];

function generateNumbers() {
    numbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
    
    sortedNumbers.forEach((number, index) => {
        const circle = document.createElement('div');
        circle.classList.add('number-circle');
        circle.textContent = number;
        circle.style.backgroundColor = colors[index % colors.length];
        circle.style.animationDelay = `${index * 100}ms`;
        numbersContainer.appendChild(circle);
    });
}

generateBtn.addEventListener('click', () => {
    // Add a little shake animation to the container
    numbersContainer.style.animation = 'shake 0.5s';
    setTimeout(() => {
        generateNumbers();
        numbersContainer.style.animation = '';
    }, 500);
});

// Keyframe for shake animation needs to be in CSS, but this is a simple example
const styleSheet = document.createElement("style")
styleSheet.type = "text/css"
styleSheet.innerText = `
@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
}
`;
document.head.appendChild(styleSheet);


// Generate numbers on initial load
generateNumbers();
