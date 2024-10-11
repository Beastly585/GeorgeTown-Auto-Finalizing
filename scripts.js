// Toggle navigation menu for mobile view


    const menuToggle = document.querySelector('.hamburger');
    const navBar = document.querySelector('.nav-bar');

    menuToggle.addEventListener('click', (navBar) => 
        navBar.classList.addClass('active');
        console.log('Hamburger menu clicked'); // Log message to console
    );



 
<script>
    window.onload = function() {
        // Reset the form fields when the page loads
        document.getElementById("form").reset();
    };
</script>



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