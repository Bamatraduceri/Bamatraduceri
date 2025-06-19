document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    
    // Add icon element if it doesn't exist
    if (!themeToggle.querySelector('i')) {
        const icon = document.createElement('i');
        themeToggle.appendChild(icon);
    }
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme preference, otherwise use device preference
    const getPreferredTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        // Default: light theme
        return 'light';
    };
    
    // Set theme and update icon
    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateThemeIcon(theme);
    };
    
    // Update icon based on theme
    const updateThemeIcon = (theme) => {
        if (theme === 'light') {
            themeIcon.className = 'icon-moon-o';
        } else {
            themeIcon.className = 'icon-sun-o';
        }
    };
    
    // Initialize theme
    setTheme(getPreferredTheme());
    
    // Toggle theme
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });
}); 