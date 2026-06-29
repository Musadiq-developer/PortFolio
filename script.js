// Active Link Highlight tracking
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) {
            a.classList.add('active');
        }
    });
});

// High Performance Scroll Reveal Engine
const revealOptions = {
    threshold: 0.15, // Trigger when 15% of element visible
    rootMargin: "0px 0px -50px 0px" // Slight offset for better visual feel
};

const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Un-observe once animated to optimize system thread
            observer.unobserve(entry.target);
        }
    });
}, revealOptions);

// Attach observer to targets
document.querySelectorAll('.scroll-reveal').forEach(element => {
    scrollObserver.observe(element);
});
