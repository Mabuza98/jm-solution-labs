// ===============================
// JM Solution Labs - main.js
// ===============================

// ✅ Toggle mobile menu (☰ button)
function toggleMenu() {
    const nav = document.getElementById('navMenu');
    if (nav) {
        nav.classList.toggle('active');
    }
}

// ✅ Handle form submissions (Contact Page)
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // stop page reload
            alert('✅ Thank you! Your message has been sent successfully.');
            form.reset(); // clear the form
        });
    }

    // ✅ Close menu when a link is clicked (for mobile)
    const navLinks = document.querySelectorAll('#navMenu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const nav = document.getElementById('navMenu');
            if (nav && nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        });
    });
});