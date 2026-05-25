// Smooth scrolling logic (if needed for older browsers or extra customization)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple console log to confirm script is working
console.log("Welcome to Bill Nattawut's Portfolio! 🚀");

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const themeText = document.getElementById('theme-text');
const body = document.body;

// Function to update theme text
const updateThemeText = (theme) => {
    themeText.textContent = theme === 'light' ? 'Light' : 'Dark';
};

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    updateThemeText(savedTheme);
}

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
        updateThemeText('dark');
    } else {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        updateThemeText('light');
    }
});

