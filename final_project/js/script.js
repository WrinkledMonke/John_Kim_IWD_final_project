const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('#site-menu');
const availabilityButton = document.querySelector('#availability-button');
const availabilityMessage = document.querySelector('#availability-message');

function toggleMenu() {
  const isOpen = navList.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
}

function showAvailability() {
  availabilityMessage.textContent = 'I am currently open to discussing web design, tutoring, and academic project opportunities.';
  availabilityMessage.style.backgroundColor = '#263247';
}

if (navToggle && navList) {
  navToggle.addEventListener('click', toggleMenu);
}

if (availabilityButton && availabilityMessage) {
  availabilityButton.addEventListener('click', showAvailability);
}
