// Select DOM Elements
const navbarLinks = document.querySelectorAll('.nav-link');
const navToggleBtn = document.querySelector('.btn');
const contactForm = document.querySelector('form');
const statsSection = document.querySelector('.stats-section');

// Smooth Scrolling for Navigation Links
navbarLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

//Hamburger
// Responsive Navbar Toggle (hamburger menu)
const toggleMenu = () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('show-menu'); // Add or remove the `show-menu` class
  };
  // Add event listener to the hamburger button
  const hamburgerBtn = document.querySelector('.hamburger');
  hamburgerBtn.addEventListener('click', toggleMenu);
  

// Form Validation
contactForm.addEventListener('submit', event => {
  event.preventDefault(); // Prevent form submission

  const name = contactForm.querySelector('input[name="name"]');
  const message = contactForm.querySelector('textarea[name="message"]');

  if (name.value.trim() === '' || message.value.trim() === '') {
    alert('Please fill out all fields!');
  } else {
    alert(`Thank you, ${name.value}! Your message has been sent.`);
    contactForm.reset(); // Clear the form after submission
  }
});



