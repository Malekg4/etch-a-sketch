document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("grid");
    const button = document.getElementById("gridButton");

    // Function to create a grid of squares
    function createGrid(numSquares) {
        grid.innerHTML = ''; // Clear existing squares
        const squareSize = Math.floor(480 / numSquares); // Calculate size for each square

        for (let i = 0; i < numSquares * numSquares; i++) {
            const div = document.createElement("div");
            div.classList.add('square');

            div.style.width = `${squareSize}px`; // Set width for squares
            div.style.height = `${squareSize}px`; // Set height for squares

            div.addEventListener("mouseenter", () => {
                div.style.backgroundColor = "blue"; // Change color on hover
            });
            
            div.addEventListener("mouseleave", () => {
                div.style.backgroundColor = ""; // Change color on hover
            });

            grid.appendChild(div); // Append square to the grid
        }
    }

    // Initial grid setup
    createGrid(16); // Start with a 16x16 grid

    // Add event listener to the button to change grid size
    button.addEventListener("click", () => {
        const numSquares = prompt("Enter the number of squares per side (1-100):");
        const num = parseInt(numSquares);

        if (num >= 1 && num <= 100) {
            createGrid(num); // Create a new grid with the specified size
        } else {
            alert("Please enter a valid number between 1 and 100.");
        }
    });
});
