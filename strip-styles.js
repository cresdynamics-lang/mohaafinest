const fs = require('fs');
const path = require('path');

const viewsDir = path.join(__dirname, 'views');
const filesToProcess = [
    'services.ejs',
    'how-it-works.ejs',
    'about.ejs',
    'contact.ejs',
    'blog.ejs',
    'collections.ejs',
    'gallery.ejs'
];

filesToProcess.forEach(file => {
    const filePath = path.join(viewsDir, file);
    if (!fs.existsSync(filePath)) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove all <style>...</style> blocks
    content = content.replace(/<style>[\s\S]*?<\/style>/gi, '');
    
    // Add glass-card to various grid items
    const elementsToGlass = [
        'value-card', 'team-member', 'commitment-card',
        'contact-info', 'contact-form-container', 'faq-item',
        'blog-card', 'service-detail'
    ];
    elementsToGlass.forEach(cls => {
        const regex = new RegExp(`class="${cls}"`, 'g');
        content = content.replace(regex, `class="${cls} glass-card"`);
        
        const regex2 = new RegExp(`class="${cls} ([^"]+)"`, 'g');
        content = content.replace(regex2, `class="${cls} glass-card $1"`);
    });

    // Replace specific grids with bento-grid
    const gridsToBento = [
        'values-grid', 'team-grid', 'commitment-grid',
        'contact-grid', 'faq-grid', 'blog-grid'
    ];
    gridsToBento.forEach(cls => {
        const regex = new RegExp(`class="${cls}"`, 'g');
        content = content.replace(regex, `class="${cls} bento-grid"`);
    });

    // Z-Pattern section replacements
    const zSections = ['services-detailed', 'steps-container'];
    zSections.forEach(cls => {
        const regex = new RegExp(`class="${cls}"`, 'g');
        content = content.replace(regex, `class="${cls} z-pattern-section"`);
    });

    // Z-Pattern row replacements
    const zRows = ['story-content', 'showroom-content', 'service-content', 'step-card'];
    zRows.forEach(cls => {
        const regex = new RegExp(`class="${cls}"`, 'g');
        content = content.replace(regex, `class="${cls} z-pattern-row"`);
    });

    // Z-Pattern text replacements
    const zTexts = ['story-text', 'showroom-text', 'service-text', 'step-content'];
    zTexts.forEach(cls => {
        const regex = new RegExp(`class="${cls}"`, 'g');
        content = content.replace(regex, `class="${cls} z-pattern-text"`);
    });

    // Z-Pattern img replacements
    const zImgs = ['story-image', 'showroom-image', 'service-image', 'step-image'];
    zImgs.forEach(cls => {
        const regex = new RegExp(`class="${cls}"`, 'g');
        content = content.replace(regex, `class="${cls} z-pattern-img"`);
    });
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Refactored styles and classes in ${file}`);
});
