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
    padding: 10px 15px;
    border: none;
    background: #333;
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1em;
    transition: background 0.3s, color 0.3s, transform 0.4s;
`;
document.body.appendChild(toggleDarkMode);

toggleDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleDarkMode.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
    toggleDarkMode.style.color = document.body.classList.contains('dark-mode') ? '#fff' : '#000';
    toggleDarkMode.style.transform = 'scale(1.05)';
    // Smooth transition for background and text colors
    document.body.style.transition = 'background-color 0.4s, color 0.4s';
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
    padding: 10px 15px;
    border: none;
    background: #333;
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1.2em;
    transition: background 0.3s, transform 0.4s;
    z-index: 1001;
`;
document.body.appendChild(menuToggle);

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
    menuToggle.style.transform = 'scale(1.05)';
    setTimeout(() => { menuToggle.style.transform = 'scale(1)'; }, 300); // Reset scale after animation
    // Add fade-in animation to the menu for a smoother transition
    nav.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    nav.style.opacity = nav.classList.contains('show') ? '1' : '0';
    nav.style.transform = nav.classList.contains('show') ? 'translateY(0)' : 'translateY(-20px)';
});

// Responsive Menu Handling with CSS Class Toggling
const handleResize = () => {
    if (window.innerWidth <= 768) {
        menuToggle.style.display = 'block';
        nav.classList.remove('show');
        nav.style.opacity = '0';
        nav.style.transform = 'translateY(-20px)';
    } else {
        menuToggle.style.display = 'none';
        nav.classList.add('show');
        nav.style.opacity = '1';
        nav.style.transform = 'translateY(0)';
    }
};

// Initial check and event listener for window resize
window.addEventListener('resize', handleResize);
handleResize();
