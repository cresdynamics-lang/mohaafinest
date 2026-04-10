// Product Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Product data
    const products = {
        'turkish-curtains': {
            title: 'Turkish Curtains',
            image: '/images/curtain-showroom-eastleigh-nairobi.jpg',
            description: 'Premium Turkish curtains with elegant finishes for modern homes and hotels. These luxurious curtains feature high-quality fabrics with intricate patterns and superior craftsmanship.',     
            whatsapp: 'Hi%20Mohaa%20Finest%20Curtains,%20I%20want%20to%20get%20a%20quote%20for%20Turkish%20Curtains'
        },
        'chinese-curtains': {
            title: 'Chinese Curtains',
            image: '/images/sheer-curtains-living-room-nairobi.jpg',
            description: 'Affordable, stylish Chinese curtains available in many colors and designs. Perfect for budget-conscious homeowners who don\'t want to compromise on style.',
            whatsapp: 'Hi%20Mohaa%20Finest%20Curtains,%20I%20want%20to%20get%20a%20quote%20for%20Chinese%20Curtains'
        },
        'sheer-curtains': {
            title: 'Sheer Curtains',
            image: '/images/luxury-curtains-installation-nairobi.jpg',
            description: 'Light, elegant sheer curtains that allow natural light while adding beauty to your space. Perfect for living rooms and bedrooms.',
            whatsapp: 'Hi%20Mohaa%20Finest%20Curtains,%20I%20want%20to%20get%20a%20quote%20for%20Sheer%20Curtains'
        },
        'curtain-rods': {
            title: 'Curtain Rods & Accessories',
            image: '/images/IMG_7137.JPG.jpeg',
            description: 'Strong rods, rails, hooks and accessories for perfect curtain installation. Complete range of hardware for all curtain types.',
            whatsapp: 'Hi%20Mohaa%20Finest%20Curtains,%20I%20want%20to%20get%20a%20quote%20for%20Curtain%20Rods%20%26%20Accessories'
        },
        'motorized-curtains': {
            title: 'Motorized Curtains',
            image: '/images/IMG_6801.JPG.jpeg',
            description: 'Smart curtains with remote control operation. Ideal for offices, hotels, and luxury homes seeking automation.',
            whatsapp: 'Hi%20Mohaa%20Finest%20Curtains,%20I%20want%20to%20get%20a%20quote%20for%20Motorized%20Curtains'
        },
    };

    // Create modal HTML
    function createModal() {
        const modalHTML = `
            <div id="productModal" class="product-modal">
                <div class="modal-overlay" onclick="closeProductModal()"></div>
                <div class="modal-content">
                    <button class="modal-close" onclick="closeProductModal()">&times;</button>
                    <div class="modal-body">
                        <div class="modal-image">
                            <img id="modalImage" src="" alt="">
                        </div>
                        <div class="modal-info">
                            <h2 id="modalTitle"></h2>
                            <p id="modalDescription"></p>
                            <div class="modal-cta">
                                <a href="#" id="modalWhatsapp" class="btn btn-primary" target="_blank">
                                    Get Quote
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    // Open modal function
    window.openProductModal = function(productId) {
        const product = products[productId];
        if (!product) return;

        // Update modal content
        document.getElementById('modalImage').src = product.image;
        document.getElementById('modalImage').alt = product.title;
        document.getElementById('modalDescription').textContent = product.description;
        

        // Update WhatsApp link
        const whatsappLink = document.getElementById('modalWhatsapp');
        whatsappLink.href = `https://wa.me/${document.querySelector('meta[property="business:contact_data:phone_number"]').content}?text=${product.whatsapp}`;
        
        // Show modal
        document.getElementById('productModal').style.display = 'flex';
        document.body.style.overflow = 'hidden';
    };

    // Close modal function
    window.closeProductModal = function() {
        document.getElementById('productModal').style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    // Initialize modal
    createModal();

    // Add click handlers to product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        const image = card.querySelector('.product-image img');
        const title = card.querySelector('h3').textContent;
        
        // Make product image clickable
        if (image) {
            image.style.cursor = 'pointer';
            image.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Map title to product ID
                const productId = title.toLowerCase().replace(/\s+/g, '-').replace('&', '').replace(',', '');
                openProductModal(productId);
            });
        }
    });

    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeProductModal();
        }
    });
});
