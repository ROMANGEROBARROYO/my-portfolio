// 🌙 Dark Mode Toggle Functionality
const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;
const darkModeIcon = document.getElementById('darkModeIcon');

// Load from localStorage
if (localStorage.getItem('dark-mode') === 'enabled') {
  body.classList.add('dark-mode');
  darkModeIcon.textContent = '☀️'; // Change icon to sun for light mode
}

// Event listener for the button click
toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Toggle icon
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('dark-mode', 'enabled');
    darkModeIcon.textContent = '☀️'; // Change icon to sun for light mode
  } else {
    localStorage.setItem('dark-mode', 'disabled');
    darkModeIcon.textContent = '🌙'; // Change icon to moon for dark mode
  }
});



// Script to add the 'active' class to the current section in the navigation menu
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    
    if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(currentSection)) {
      link.classList.add('active');
    }
  });
});



// JavaScript for basic form validation
document.querySelector(".contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.querySelector("input[name='name']").value;
    const email = document.querySelector("input[name='email']").value;
    const message = document.querySelector("textarea[name='message']").value;

    if (name && email && message) {
        alert("Thank you for reaching out! Your message has been sent.");
        // Implement actual form submission logic here
    } else {
        alert("Please fill out all fields before submitting.");
    }
});


const tabLinks = document.querySelectorAll('.tab-Links');
const tabContents = document.querySelectorAll('.tab-contents');

tabLinks.forEach((link, index) => {
  link.addEventListener('click', () => {
    tabLinks.forEach(item => item.classList.remove('active-Link'));
    tabContents.forEach(content => content.classList.remove('active-tab'));

    link.classList.add('active-Link');
    tabContents[index].classList.add('active-tab');
  });
});
