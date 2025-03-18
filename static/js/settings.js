// Apply gradient background
function applyGradientBackground() {
    const color1 = document.getElementById('bgColorPicker1').value;
    const color2 = document.getElementById('bgColorPicker2').value;
    document.body.style.background = `linear-gradient(45deg, ${color1}, ${color2})`;
    localStorage.setItem('gradientBackground', JSON.stringify({ color1, color2 })); // Save to localStorage
}

// Load saved gradient background
function loadGradientBackground() {
    const savedGradient = localStorage.getItem('gradientBackground');
    if (savedGradient) {
        const { color1, color2 } = JSON.parse(savedGradient);
        document.body.style.background = `linear-gradient(45deg, ${color1}, ${color2})`;
    }
}

// Apply dark/light mode
function applyTheme() {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
}

// Load saved theme
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const themeToggle = document.getElementById('themeToggle');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.checked = true;
    } else {
        document.body.classList.remove('dark-mode');
        themeToggle.checked = false;
    }
}

// Export workflow as CSV
function exportWorkflow(format) {
    fetch('/get_tasks')
        .then(response => response.json())
        .then(data => {
            if (format === 'csv') {
                exportAsCSV(data);
            }
        })
        .catch(error => console.error("Error exporting workflow:", error));
}

// Export as CSV
function exportAsCSV(tasks) {
    const csvContent = "data:text/csv;charset=utf-8," +
        tasks.map(task => Object.values(task).join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "workflow.csv");
    document.body.appendChild(link);
    link.click();
}

// Add event listener to the theme toggle
document.getElementById('themeToggle').addEventListener('change', applyTheme);

// Call these functions on page load
document.addEventListener('DOMContentLoaded', function () {
    loadGradientBackground();
    loadTheme();
});
