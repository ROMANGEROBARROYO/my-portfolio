// Smooth Scrolling
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Dark Mode Toggle
const toggleDarkMode = document.createElement('button');
toggleDarkMode.textContent = '🌙 Dark Mode';
toggleDarkMode.style.cssText = 'position:fixed; top:20px; right:20px; padding:10px; border:none; background:#333; color:#fff; cursor:pointer; border-radius:5px;';
document.body.appendChild(toggleDarkMode);

toggleDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleDarkMode.textContent = '☀️ Light Mode';
    } else {
        toggleDarkMode.textContent = '🌙 Dark Mode';
    }
});

// Mobile Navigation Toggle
const nav = document.querySelector('nav ul');
const menuToggle = document.createElement('button');
menuToggle.textContent = '☰';
menuToggle.style.cssText = 'position:fixed; top:20px; left:20px; padding:10px; border:none; background:#333; color:#fff; cursor:pointer; border-radius:5px; display:none;';
document.body.appendChild(menuToggle);

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
});

// Responsive Menu Handling
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        menuToggle.style.display = 'block';
        nav.style.display = 'none';
    } else {
        menuToggle.style.display = 'none';
        nav.style.display = 'flex';
    }
});

window.dispatchEvent(new Event('resize'));
