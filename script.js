document.addEventListener("DOMContentLoaded", () => {
    // 1. Mobile Menu Toggle functionality
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Close mobile menu when a menu link is clicked
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    // 2. Simple Contact Form Handling
    const contactForm = document.getElementById("contactForm");
    const formStatus = document.getElementById("formStatus");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name && email && message) {
            formStatus.style.color = "#10b981"; // Green color
            formStatus.textContent = `Shukriya ${name}! Aapka paigam bhej diya gaya hai.`;
            contactForm.reset();
        } else {
            formStatus.style.color = "#ef4444"; // Red color
            formStatus.textContent = "Baraye meharbani tamam fields ko fill karen.";
        }
    });
});