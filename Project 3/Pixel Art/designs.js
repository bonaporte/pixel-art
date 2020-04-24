
// Create Grid Function
function makeGrid(gridHeight, gridWidth) {
    // Creating Canvas
    const canvas = document.getElementById('pixelCanvas');
    // Clean Canvas
    canvas.innerHTML = '';
    
    // Create Loop to Generate Grid
    for (let i = 0; i < gridHeight; i++) {
        let row = canvas.insertRow(i);
        // Create Loop to create celss
        for (let j = 0; j < gridWidth; j++) {
            let cell = row.insertCell(j);
            // Click Event to the Cells
            cell.addEventListener('click', function(event) {
                // Change Background Color
                event.target.style.backgroundColor = document.getElementById('colorPicker').value;
            });
        }
    }
}

// Submit Button Event
document.getElementById('sizePicker').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get Height
    const getHeight = document.getElementById('inputHeight').value;
    
    // Get Width
    const getWidth = document.getElementById('inputWidth').value;

    // Making Grid with the Height and Width Submitted Value
    makeGrid(getHeight, getWidth);
});