// Toggle navigation menu for mobile view

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navBar = document.querySelector('.nav-bar');

    menuToggle.addEventListener('click', function() {
        navBar.classList.toggle('active'); // Toggle the 'active' class
        console.log('Hamburger menu clicked'); // Log message to console
    });
});



let currentIndex = 0;

const testimonials = document.querySelectorAll('.testimonial');

function showNextTestimonial() {
    testimonials[currentIndex].classList.remove('active'); // Hide current
    currentIndex = (currentIndex + 1) % testimonials.length; // Increment index
    testimonials[currentIndex].classList.add('active'); // Show next
}

// Show the first testimonial
testimonials[currentIndex].classList.add('active');

// Rotate testimonials every 3 seconds
setInterval(showNextTestimonial, 6000);

document.querySelector('.menu-toggle').addEventListener('click', function() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
});