const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

// Function to handle scroll-based active state
const handleScroll = () => {
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
};

// Listen to scroll events with some debounce/throttle for performance
let timeout;
window.addEventListener('scroll', () => {
  clearTimeout(timeout);
  timeout = setTimeout(handleScroll, 50);
});

// Initialize active state on page load
handleScroll();



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

// Add event listener for each tab
tabLinks.forEach((link, index) => {
  link.addEventListener('click', () => {
    // Remove active class from all tabs and contents
    tabLinks.forEach(item => item.classList.remove('active-Link'));
    tabContents.forEach(content => content.classList.remove('active-tab'));

    // Add active class to clicked tab and its content
    link.classList.add('active-Link');
    tabContents[index].classList.add('active-tab');
  });
});

// Set default active tab on page load
document.addEventListener('DOMContentLoaded', () => {
  tabLinks[0].classList.add('active-Link');
  tabContents[0].classList.add('active-tab');
});

// Get the button element
const backToTopBtn = document.getElementById('backToTop');

// Show the button when the user scrolls down
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 200) { // Show button after scrolling 200px
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

// Scroll to the top when the button is clicked
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scroll to the top
  });
});
