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

    // Draw lines connecting features to the product image
    const canvas = document.getElementById('linesCanvas');
        const ctx = canvas.getContext('2d');

        // Center of the product image
        const centerX = 400;
        const centerY = 300;

        // Feature circle centers
        const featurePositions = [
            { x: 400, y: 100 },  // Feature 1
            { x: 600, y: 200 },  // Feature 2
            { x: 600, y: 450 },  // Feature 3
            { x: 400, y: 550 },  // Feature 4
            { x: 200, y: 450 },  // Feature 5
            { x: 200, y: 200 }   // Feature 6
        ];

        // Set canvas size
        function drawLines() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = '#7f8c8d';
            ctx.lineWidth = 2;

            featurePositions.forEach(pos => {
                ctx.beginPath();
                ctx.moveTo(centerX, centerY);
                ctx.lineTo(pos.x, pos.y);
                ctx.stroke();

                // Draw arrowhead
                const angle = Math.atan2(pos.y - centerY, pos.x - centerX);
                ctx.beginPath();
                ctx.moveTo(pos.x, pos.y);
                ctx.lineTo(
                    pos.x - 15 * Math.cos(angle - Math.PI / 6),
                    pos.y - 15 * Math.sin(angle - Math.PI / 6)
                );
                ctx.moveTo(pos.x, pos.y);
                ctx.lineTo(
                    pos.x - 15 * Math.cos(angle + Math.PI / 6),
                    pos.y - 15 * Math.sin(angle + Math.PI / 6)
                );
                ctx.stroke();
            });
        }

        drawLines();

        // Redraw lines on window resize
        window.addEventListener('resize', drawLines);
});