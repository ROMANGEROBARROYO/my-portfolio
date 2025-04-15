// Handle tab switching in "About Me"
let tabLinks = document.querySelectorAll(".tab-Links");
let tabContents = document.querySelectorAll(".tab-contents");

function opentab(tabName) {
  tabLinks.forEach(link => {
    link.classList.remove("active-Links");
  });

  tabContents.forEach(content => {
    content.classList.remove("active-tab");
  });

  document.querySelector(`#${tabName}`).classList.add("active-tab");
  event.currentTarget.classList.add("active-Links");
}

// DARK MODE TOGGLE
const darkToggle = document.getElementById("darkModeToggle");
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Optional: Change button text or icon
  if (document.body.classList.contains("dark-mode")) {
    darkToggle.textContent = "☀️ Light Mode";
  } else {
    darkToggle.textContent = "🌙 Dark Mode";
  }
});
