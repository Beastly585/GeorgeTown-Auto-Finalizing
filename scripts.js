// Toggle navigation menu for mobile view
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Optional: Smooth scroll for anchor links (if added in the future)
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
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
setInterval(showNextTestimonial, 3000);

