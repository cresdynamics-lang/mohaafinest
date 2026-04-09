// Gallery Modal functionality
// This function creates a popup modal to display images in full size when clicked
function createImageModal(imageSrc, imageAlt) {
    // Create the main modal overlay element that covers the entire screen
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    
    // Set the HTML structure for the modal
    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close">&times;</span>
            <img src="${imageSrc}" alt="${imageAlt}">
            <h3>${imageAlt}</h3>
        </div>
    `;
    
    // Create a style element to add CSS for the modal
    // This ensures the modal looks good without modifying the main CSS file
    const style = document.createElement('style');
    style.textContent = `
        .image-modal {
            position: fixed;           /* Fixed positioning to cover entire viewport */
            top: 0;                    /* Start from top of screen */
            left: 0;                   /* Start from left of screen */
            width: 100%;               /* Full width of screen */
            height: 100%;              /* Full height of screen */
            background: rgba(0,0,0,0.9); /* Dark semi-transparent background */
            z-index: 3000;             /* High z-index to appear on top of everything */
            display: flex;             /* Flexbox for centering */
            align-items: center;       /* Vertical centering */
            justify-content: center;   /* Horizontal centering */
        }
        .modal-content {
            position: relative;        /* Relative positioning for close button */
            max-width: 95%;            /* Increased from 90% to 95% for larger images */
            max-height: 95%;           /* Increased from 90% to 95% for larger images */
            background: white;         /* White background for the modal content */
            border-radius: 12px;       /* Rounded corners */
            overflow: hidden;          /* Hide any content that overflows */
            box-shadow: 0 10px 30px rgba(0,0,0,0.3); /* Add shadow for depth */
        }
        .modal-content img {
            width: 100%;               /* Image takes full width of modal */
            height: auto;              /* Maintain aspect ratio */
            max-height: 85vh;          /* Increased from 70vh to 85vh for larger display */
            object-fit: contain;       /* Show entire image without cropping */
            display: block;            /* Block display to remove any inline spacing */
        }
        .modal-content h3 {
            margin: 0;                /* Remove default margin */
            padding: 15px;            /* Add padding around the title */
            background: white;         /* White background for title area */
            color: #333;               /* Dark text color */
            font-size: 18px;           /* Reasonable font size */
        }
        .modal-close {
            position: absolute;        /* Absolute positioning relative to modal-content */
            top: 15px;                 /* 15px from top */
            right: 20px;               /* 20px from right */
            font-size: 30px;           /* Large size for easy clicking */
            cursor: pointer;           /* Pointer cursor on hover */
            color: white;              /* White text color */
            background: rgba(0,0,0,0.7); /* Darker background for better visibility */
            border-radius: 50%;        /* Circular shape */
            width: 40px;               /* Fixed width */
            height: 40px;              /* Fixed height */
            display: flex;             /* Flexbox for centering the × symbol */
            align-items: center;       /* Vertical centering */
            justify-content: center;   /* Horizontal centering */
            z-index: 10;               /* Ensure it's above the image */
            transition: all 0.3s ease; /* Smooth transition for hover effects */
        }
        .modal-close:hover {
            background: rgba(0,0,0,0.9); /* Darker on hover */
            transform: scale(1.1);     /* Slightly larger on hover */
        }
    `;
    
    // Add the styles to the document's head
    // This makes the styles active immediately
    document.head.appendChild(style);
    
    // When clicked, remove both the modal and its styles
    modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.remove();    // Remove modal from DOM
        style.remove();    // Remove styles from DOM
    });
    
    // This allows users to close the modal by clicking outside the image
    modal.addEventListener('click', (e) => {
        // Only close if clicking directly on the modal background (not the content)
        if (e.target === modal) {
            modal.remove();    // Remove modal from DOM
            style.remove();    // Remove styles from DOM
        }
    });
    
    // Add keyboard event listener to close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modal.remove();    // Remove modal from DOM
            style.remove();    // Remove styles from DOM
        }
    });
    
    return modal;  // Return the created modal element
}

// Initialize gallery clicks
document.addEventListener('DOMContentLoaded', function() {
    // Find all elements with the class 'gallery-item'
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Loop through each gallery item found
    galleryItems.forEach(item => {
        // Change the cursor to pointer when hovering over gallery items
        item.style.cursor = 'pointer';
        
        // Add a click event listener to each gallery item
        item.addEventListener('click', function(e) {
            // This stops any default actions like following links or form submissions
            e.preventDefault();
            
            // Find the image element within this gallery item
            const img = this.querySelector('img');
            
            // Create a modal with the clicked image's source and alt text
            const modal = createImageModal(img.src, img.alt);
            
            // Add the created modal to the document body
            document.body.appendChild(modal);
        });
    });
});