// ==========================================
// THEME TOGGLE (DARK MODE)
// ==========================================

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Save theme preference to localStorage
    const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});

// ==========================================
// SCROLL ANIMATIONS (Intersection Observer)
// ==========================================

// Options for the Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

// Callback function for when elements come into view
const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add a small delay before triggering animation
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);
            
            // Stop observing this element once animated
            observer.unobserve(entry.target);
        }
    });
};

// Create the Intersection Observer
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observe all elements with fade-in class
const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach(el => observer.observe(el));

// ==========================================
// SMOOTH SCROLL (Optional enhancement)
// ==========================================

// Add smooth scrolling to all links (if you add anchor links later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// ==========================================
// OPTIONAL: Add year dynamically to footer
// ==========================================

const footer = document.querySelector('.footer p');
if (footer) {
    const currentYear = new Date().getFullYear();
    footer.innerHTML = `&copy; ${currentYear} • A personal commitment to intentional living`;
}
