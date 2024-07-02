'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}





/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Collect form data
  const formData = new FormData(this);

  // Send the form data using Fetch API
  fetch(this.action, {
    method: this.method,
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      this.reset(); // Reset the form fields
      document.getElementById('contact-form').style.display = 'none'; // Hide the contact form
      document.getElementById('thank-you-message').style.display = 'block'; // Show thank you message
    } else {
      // Handle errors here, e.g., display an error message
      alert('There was a problem with your submission. Please try again.');
    }
  }).catch(error => {
    console.error('Form submission error:', error);
    // Handle errors here, e.g., display an error message
    alert('There was a problem with your submission. Please try again.');
  });
});


