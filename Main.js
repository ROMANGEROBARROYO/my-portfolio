document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll("nav ul li a");
  
  navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 50,
          behavior: "smooth"
        });
      }
    });
  });

  // Contact Form Validation
  const form = document.querySelector(".contact-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    
    if (!name || !email || !subject || !message) {
      alert("Please fill in all required fields.");
      return;
    }
    
    alert("Message sent successfully!");
    form.reset();
  });

  // Portfolio Hover Effect
  const portfolioItems = document.querySelectorAll(".portfolio-item");
  portfolioItems.forEach(item => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)";
      this.style.transition = "transform 0.3s ease";
    });
    item.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  });

  // Dark Mode Toggle
  const toggleButton = document.createElement("button");
  toggleButton.textContent = "🌙 Toggle Dark Mode";
  toggleButton.style.position = "fixed";
  toggleButton.style.top = "10px";
  toggleButton.style.right = "10px";
  toggleButton.style.padding = "10px 15px";
  toggleButton.style.backgroundColor = "#444";
  toggleButton.style.color = "#fff";
  toggleButton.style.border = "none";
  toggleButton.style.cursor = "pointer";
  toggleButton.style.borderRadius = "5px";
  toggleButton.style.fontSize = "1em";

  document.body.appendChild(toggleButton);

  toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    toggleButton.textContent = document.body.classList.contains("dark-mode") ? "☀️ Toggle Light Mode" : "🌙 Toggle Dark Mode";
  });

  // Dark Mode CSS
  const darkModeStyles = document.createElement("style");
  darkModeStyles.innerHTML = `
    .dark-mode {
      background-color: #181818;
      color: #eee;
    }
    .dark-mode header {
      background-color: #0d0d0d;
    }
    .dark-mode footer {
      background-color: #0d0d0d;
    }
    .dark-mode .portfolio-item {
      background-color: #262626;
      border-color: #444;
      color: #fff;
    }
    .dark-mode input, .dark-mode textarea {
      background-color: #333;
      color: #fff;
      border: 1px solid #555;
    }
    .dark-mode button {
      background-color: #666;
      color: #fff;
    }
  `;
  document.head.appendChild(darkModeStyles);
});
