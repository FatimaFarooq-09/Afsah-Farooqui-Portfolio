// Select the header
const header = document.querySelector('.header');

// Function to add/remove class on scroll
window.addEventListener('scroll', function () {
  if (window.scrollY > 10) {
    // If the user has scrolled more than 50px, add the "scrolled" class
    header.classList.add('scrolled');
  } else {
    // Remove the "scrolled" class when back at the top
    header.classList.remove('scrolled');
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let dropdownToggles = document.querySelectorAll('.dropdown > a');

  dropdownToggles.forEach(function (toggle) {
    let isActive = false;

    toggle.addEventListener('click', function (e) {
      let parentDropdown = this.parentElement;

      // If it has a submenu (ul), we toggle it on first click and navigate on second click
      if (parentDropdown.querySelector('ul')) {
        e.preventDefault(); // Prevent navigation on the first click

        if (!isActive) {
          parentDropdown.classList.toggle('active'); // Show submenu
          isActive = true;
        } else {
          // If already active, navigate on the second click
          window.location.href = this.getAttribute('href');
        }
      }
    });
  });
});


// Select the mobile toggle button and navigation menu
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const body = document.querySelector('body');
const navMenu = document.querySelector('.navmenu');

// Toggle mobile navigation
mobileNavToggle.addEventListener('click', function () {
  body.classList.toggle('mobile-nav-active');
  this.classList.toggle('bi-x'); // Change the icon to 'X' when the menu is open
});

/**
   * Toggle mobile nav dropdowns
   */
document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
  navmenu.addEventListener('click', function (e) {
    e.preventDefault();
    this.parentNode.classList.toggle('active');
    this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
    e.stopImmediatePropagation();
  });
});

/**
   * Scroll top button
   */
let scrollTop = document.querySelector('.scroll-top');

function toggleScrollTop() {
  if (scrollTop) {
    window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
  }
}
scrollTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('load', toggleScrollTop);
document.addEventListener('scroll', toggleScrollTop);

document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed("#typed", {
    strings: ["App Developer", "Mern Stack Developer", "Graphic Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
  });
});


new PureCounter();

// Function to animate progress bars
function animateProgressBars() {
  const progressBars = document.querySelectorAll('.progress-bar');

  progressBars.forEach(bar => {
    const value = bar.getAttribute('aria-valuenow'); // Get the percentage value from aria-valuenow
    bar.style.width = value + '%'; // Set the width of the progress bar based on its value
  });
}

// Check when the section comes into view
function onScroll() {
  const expertiseSection = document.getElementById('expertise');
  const rect = expertiseSection.getBoundingClientRect();

  // Check if the expertise section is in view
  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    animateProgressBars(); // Trigger the animation
    window.removeEventListener('scroll', onScroll); // Remove the scroll listener after the animation is triggered
  }
}

window.addEventListener('scroll', onScroll); // Attach the scroll event listener

function slider1() {
  // Hide all elements with the class "slider"
  let sliders = document.getElementsByClassName("slider-1");
  for (let i = 0; i < sliders.length; i++) {
    sliders[i].style.display = 'none';
  }

  // Show all elements with the class "another-class"
  let anotherClassElements = document.getElementsByClassName("slider-2");
  for (let j = 0; j < anotherClassElements.length; j++) {
    anotherClassElements[j].style.display = 'flex'; // or 'flex' if you prefer
  }
}

function slider2() {
  // Hide all elements with the class "slider"
  let sliders = document.getElementsByClassName("slider-1");
  for (let i = 0; i < sliders.length; i++) {
    sliders[i].style.display = 'flex';
  }

  // Show all elements with the class "another-class"
  let anotherClassElements = document.getElementsByClassName("slider-2");
  for (let j = 0; j < anotherClassElements.length; j++) {
    anotherClassElements[j].style.display = 'none'; // or 'flex' if you prefer
  }
}