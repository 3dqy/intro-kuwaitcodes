function toggleDarkMode() {
    const body = document.body;
    const lightLogo = document.getElementById('lightLogo');
    const darkLogo = document.getElementById('darkLogo');

    // Toggle dark mode by adding/removing a dark-mode class to the body
    body.classList.toggle('dark-mode');

    // Save the user's preference to local storage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);

    // Toggle between light and dark mode logos based on the updated dark mode state
    lightLogo.style.display = isDarkMode ? 'none' : 'inline';
    darkLogo.style.display = isDarkMode ? 'inline' : 'none';
}

// Check if the user has a dark mode preference and apply it
document.addEventListener('DOMContentLoaded', () => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
        toggleDarkMode();
    } 
});


