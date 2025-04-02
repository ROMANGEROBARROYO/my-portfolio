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
    transition: background 0.3s;
`;
document.body.appendChild(toggleDarkMode);

toggleDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleDarkMode.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Mobile Navigation Toggle
const nav = document.querySelector('nav ul');
const menuToggle = document.createElement('button');
menuToggle.innerHTML = '☰';
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
    transition: background 0.3s;
    z-index: 1001;
`;
document.body.appendChild(menuToggle);

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
    nav.classList.contains('show') ? nav.style.display = 'flex' : nav.style.display = 'none';
});

// Responsive Menu Handling
const handleResize = () => {
    if (window.innerWidth <= 768) {
        menuToggle.style.display = 'block';
        nav.classList.remove('show'); // Ensures menu is hidden on resize
        nav.style.display = 'none';
    } else {
        menuToggle.style.display = 'none';
        nav.classList.add('show'); // Makes sure menu is visible on larger screens
        nav.style.display = 'flex';
    }
};

// Initial check and event listener for window resize
window.addEventListener('resize', handleResize);
handleResize();
