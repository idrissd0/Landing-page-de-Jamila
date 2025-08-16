// Simple animation for elements when they come into view
document.addEventListener('DOMContentLoaded', function() {
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .detail-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state
    const features = document.querySelectorAll('.feature-card');
    const details = document.querySelectorAll('.detail-item');
    
    features.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
    });
    
    details.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(' + (item.classList.contains('reverse') ? '50px' : '-50px') + ')';
        item.style.transition = 'all 0.6s ease-out';
    });

    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on load
    animateOnScroll();
});