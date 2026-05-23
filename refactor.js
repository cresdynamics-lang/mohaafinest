const fs = require('fs');
const path = require('path');

const viewsDir = path.join(__dirname, 'views');
const filesToProcess = [
    'collections.ejs',
    'services.ejs',
    'how-it-works.ejs',
    'gallery.ejs',
    'about.ejs',
    'blog.ejs',
    'contact.ejs',
    '404.ejs',
    '500.ejs'
];

filesToProcess.forEach(file => {
    const filePath = path.join(viewsDir, file);
    if (!fs.existsSync(filePath)) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Extract everything between <main> and </main>
    const mainMatch = content.match(/<main>([\s\S]*?)<\/main>/i);
    
    if (mainMatch && mainMatch[1]) {
        let innerContent = mainMatch[1].trim();
        
        // Modernize grids
        innerContent = innerContent.replace(/class="products-grid"/g, 'class="bento-grid"');
        innerContent = innerContent.replace(/class="gallery-grid"/g, 'class="masonry-gallery"');
        
        fs.writeFileSync(filePath, innerContent, 'utf8');
        console.log(`Refactored ${file}`);
    } else {
        console.log(`No <main> tag found in ${file}`);
    }
});
