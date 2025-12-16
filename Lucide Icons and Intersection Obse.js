// Lucide Icons and Intersection Observer Setup

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons (must be done after the DOM is loaded)
    // The Lucide CDN is loaded in index.html, this line executes the replacement.
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // 2. Intersection Observer for Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the item is visible
    });

    // Target all elements with the 'animate-on-scroll' class
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });
});