// Mohaa Finest Curtains - JavaScript Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }

    // Hero carousel functionality
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;

    function showSlide(index) {
        carouselSlides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % carouselSlides.length;
        showSlide(currentSlide);
    }

    // Auto-advance carousel every 5 seconds
    if (carouselSlides.length > 1) {
        setInterval(nextSlide, 5000);
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add fade-in animation to sections on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe all main sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // WhatsApp button click tracking (for analytics if needed)
    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
        link.addEventListener('click', function() {
            // Could add analytics tracking here
            console.log('WhatsApp link clicked:', this.href);
        });
    });

    // WhatsApp Popup Functionality
    const whatsappPopup = document.getElementById('whatsapp-popup');
    const popupClose = document.querySelector('.popup-close');
    let popupShown = false;

    // Show popup after 5 seconds
    setTimeout(function() {
        if (whatsappPopup && !popupShown && !sessionStorage.getItem('whatsappPopupShown')) {
            whatsappPopup.style.display = 'block';
            popupShown = true;
            sessionStorage.setItem('whatsappPopupShown', 'true');
        }
    }, 5000); // 5 seconds

    // Close popup when clicking the X
    if (popupClose) {
        popupClose.addEventListener('click', function() {
            whatsappPopup.style.display = 'none';
        });
    }

    // Close popup when clicking outside the content
    if (whatsappPopup) {
        whatsappPopup.addEventListener('click', function(e) {
            if (e.target === whatsappPopup) {
                whatsappPopup.style.display = 'none';
            }
        });
    }

    // Close popup when clicking WhatsApp button (to avoid double popup)
    document.querySelectorAll('.whatsapp-popup-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            whatsappPopup.style.display = 'none';
        });
    });

    // Form validation for any forms (if added later)
    function validatePhoneNumber(phone) {
        const phoneRegex = /^(\+254|254|0)[17]\d{8}$/;
        return phoneRegex.test(phone);
    }

    // Lazy loading for images (performance optimization)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Collections Page Pagination
    const productsGrid = document.querySelector('.products-grid');
    const productCards = document.querySelectorAll('.product-card');
    
    if (productsGrid && productCards.length > 0) {
        let currentVisible = 10; // Show 10 cards initially (2 rows of 5)
        const cardsPerLoad = 5; // Load 5 more cards each time (1 full row)
        
        // Hide all cards initially except the first 10
        productCards.forEach((card, index) => {
            if (index >= currentVisible) {
                card.style.display = 'none';
            }
        });
        
        // Create Load More button
        const loadMoreBtn = document.createElement('button');
        loadMoreBtn.textContent = 'Load More';
        loadMoreBtn.className = 'load-more-btn';
        loadMoreBtn.style.cssText = `
            display: inline-block;
            margin: 0 0 30px 30px;
            padding: 12px 30px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 25px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
            vertical-align: top;
        `;
        
        // Add hover effects
        loadMoreBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
        });
        
        loadMoreBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
        });
        
        // Create a container for the button positioned to the right of the grid
        const buttonContainer = document.createElement('div');
        buttonContainer.style.cssText = `
            display: flex;
            justify-content: flex-end;
            margin-bottom: 20px;
            padding-right: 0;
        `;
        
        // Add button to the container
        buttonContainer.appendChild(loadMoreBtn);
        
        // Insert the button container after the collections header but before the products grid
        const collectionsHeader = document.querySelector('.collections-header');
        if (collectionsHeader) {
            collectionsHeader.parentNode.insertBefore(buttonContainer, productsGrid);
        } else {
            // Fallback: insert before products grid
            productsGrid.parentNode.insertBefore(buttonContainer, productsGrid);
        }
        
        // Load More functionality
        loadMoreBtn.addEventListener('click', function() {
            const nextVisible = Math.min(currentVisible + cardsPerLoad, productCards.length);
            
            // Show next 4 cards with fade-in animation
            for (let i = currentVisible; i < nextVisible; i++) {
                const card = productCards[i];
                card.style.display = 'block';
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                
                // Animate cards in
                setTimeout(() => {
                    card.style.transition = 'all 0.5s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, (i - currentVisible) * 100);
            }
            
            currentVisible = nextVisible;
            
            // Hide button if all cards are visible
            if (currentVisible >= productCards.length) {
                loadMoreBtn.style.display = 'none';
            }
        });
        
        // Hide button initially if all cards are already visible
        if (currentVisible >= productCards.length) {
            loadMoreBtn.style.display = 'none';
        }
    }
});


// Animated counters for about page stats
// This function creates smooth counting animation from 0 to target value
function animateCounter(element, target, format = 'number', duration = 2000) {
    const start = 0;    // Start counting from 0
    const increment = target / (duration / 16);    // Calculate increment for 60fps animation
    let current = start;  // Current counter value
    
    // Create timer that runs every 16ms (60fps)
    const timer = setInterval(() => {
        current += increment;     // Add increment to current value
        if (current >= target) {       // Stop when reaching target
            current = target;           // Set to exact target
            clearInterval(timer);       // Stop timer
        }
        
        // Apply format based on parameter
        switch(format) {   // Use format parameter instead of checking content
            case 'plus':    // For "500+", "3+" etc.
                element.textContent = Math.floor(current) + '+';      // Add + symbol after counting
                break;
            case 'slash':     // For "24/7"
                element.textContent = Math.floor(current) + '/7';    // Add /7 after counting
                break;
            default:                                            // For regular numbers
                element.textContent = Math.floor(current);           // Just show the number
                break;
        }
    }, 16);                                              // Run every 16ms for smooth animation
}

// Initialize counters when page loads
// This function checks if we're on about page and starts animations
document.addEventListener('DOMContentLoaded', function() {
    // Check if current page is about page (multiple URL formats)
    if (window.location.pathname === '/about' || window.location.pathname.includes('about')) {
        
        // Define target values AND formats for each stat counter
        // The order must match the HTML order in about.ejs
        const stats = [
            { selector: '.stat-number', targets: [500, 3, 1000, 24], formats: ['plus', 'plus', 'plus', 'slash'] }
        ];
        
        // Find all stat number elements
        const statElements = document.querySelectorAll('.stat-number');
        
        // Start animation for each stat with staggered timing
        statElements.forEach((element, index) => {
            setTimeout(() => {
                animateCounter(element, stats[0].targets[index], stats[0].formats[index]);    // Pass both target and format
            }, index * 200);                                   // Start each 200ms apart (staggered effect)
        });
    }
});