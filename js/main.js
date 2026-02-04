// Mobile Menu Toggle
function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.getElementById('nav');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const dropdowns = document.querySelectorAll('.dropdown-menu');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    // Close nav if clicked outside
    if (!nav.contains(event.target) && !menuBtn.contains(event.target)) {
        nav.classList.remove('active');
        // Also close all dropdowns when closing nav
        dropdowns.forEach(d => d.classList.remove('show'));
    }

    // Handle Dropdown Toggles (specifically for mobile/click interaction)
    if (event.target.classList.contains('dropdown-toggle')) {
        event.preventDefault(); // Stop link navigation
        const submenu = event.target.nextElementSibling;
        if (submenu && submenu.classList.contains('dropdown-menu')) {
            // Toggle this one
            submenu.classList.toggle('show');
            
            // Close other open dropdowns (if we had siblings, useful for future)
            dropdowns.forEach(d => {
                if (d !== submenu && d.classList.contains('show')) {
                    d.classList.remove('show');
                }
            });
        }
    } else {
        // If clicking anywhere else in nav, maybe close dropdowns? 
        // For now, let's keep them open if clicking inside the dropdown itself
        if (!event.target.closest('.dropdown')) {
             dropdowns.forEach(d => d.classList.remove('show'));
        }
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);

        // Simple validation
        if (!data.name || !data.email || !data.phone || !data.message) {
            alert('Please fill in all required fields.');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Phone validation (Indian format)
        const phoneRegex = /^[6-9]\d{9}$/;
        const cleanPhone = data.phone.replace(/[\s-]/g, '');
        if (!phoneRegex.test(cleanPhone)) {
            alert('Please enter a valid 10-digit phone number.');
            return;
        }

        // Show success message (in real implementation, this would send to a server)
        alert('Thank you for your message! We will contact you soon.');
        this.reset();
    });
}

// Add active class to current nav item
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to cards
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .blog-card, .award-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
});
