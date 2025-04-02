// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Dark Mode Toggle
const toggleDarkMode = document.createElement('button');
toggleDarkMode.textContent = '🌙 Dark Mode';
toggleDarkMode.setAttribute('aria-label', 'Toggle dark mode');
toggleDarkMode.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 12px 20px;
    border: none;
    background: #333;
    color: #fff;
    cursor: pointer;
    border-radius: 8px;
    font-size: 1.2em;
    transition: background 0.3s, color 0.3s, transform 0.4s, box-shadow 0.4s;
    z-index: 1000; /* Make sure it appears on top */
`;
document.body.appendChild(toggleDarkMode);

// Set initial theme based on local storage or default to light mode
if(localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
    toggleDarkMode.textContent = '☀️ Light Mode';
    toggleDarkMode.style.color = '#fff';
}

toggleDarkMode.addEventListener('click', () => {
    // Toggle dark mode class on body
    const isDarkMode = document.body.classList.toggle('dark-mode');
    toggleDarkMode.textContent = isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode';
    toggleDarkMode.style.color = isDarkMode ? '#fff' : '#000';

    // Save theme preference in local storage
    localStorage.setItem('dark-mode', isDarkMode);

    // Add some transition effects for the button and page
    toggleDarkMode.style.transform = 'scale(1.05)';
    toggleDarkMode.style.boxShadow = isDarkMode ? '0 4px 8px rgba(255, 255, 255, 0.3)' : '0 4px 8px rgba(0, 0, 0, 0.3)';
    document.body.style.transition = 'background-color 0.4s, color 0.4s'; // smooth transition for colors
});


// Mobile Navigation Toggle
const nav = document.querySelector('nav ul');
const menuToggle = document.createElement('button');
menuToggle.innerHTML = '☰';
menuToggle.setAttribute('aria-label', 'Toggle mobile menu');
menuToggle.style.cssText = `
    position: fixed;
    top: 20px;
    left: 20px;
    padding: 12px 20px;
    border: none;
    background: #333;
    color: #fff;
    cursor: pointer;
    border-radius: 8px;
    font-size: 1.5em;
    transition: background 0.3s, transform 0.3s, box-shadow 0.4s;
    z-index: 1001;
`;

document.body.appendChild(menuToggle);

// Toggle mobile menu visibility and apply animations
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
    menuToggle.style.transform = 'scale(1.1)';
    setTimeout(() => { menuToggle.style.transform = 'scale(1)'; }, 300); // Reset scale after animation
    
    // Add fade-in and sliding animation for the menu
    nav.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    nav.style.opacity = nav.classList.contains('show') ? '1' : '0';
    nav.style.transform = nav.classList.contains('show') ? 'translateY(0)' : 'translateY(-20px)';
});

// Handle screen resizing for responsive menu behavior
const handleResize = () => {
    if (window.innerWidth <= 768) {
        menuToggle.style.display = 'block'; // Show menu toggle button
        nav.classList.remove('show'); // Initially hide menu
        nav.style.opacity = '0'; // Ensure the menu is hidden
        nav.style.transform = 'translateY(-20px)'; // Slide menu out
    } else {
        menuToggle.style.display = 'none'; // Hide menu toggle button for desktop view
        nav.classList.add('show'); // Show menu by default on larger screens
        nav.style.opacity = '1'; // Make sure the menu is fully visible
        nav.style.transform = 'translateY(0)'; // Reset sliding effect
    }
};

// Initial check and window resize listener for responsiveness
window.addEventListener('resize', handleResize);
handleResize(); // Run on initial load to apply the correct menu state
