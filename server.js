const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as template engine
const expressLayouts = require('express-ejs-layouts');

app.use(expressLayouts);
app.set('layout', 'layout'); // Defaults to views/layout.ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Mohaa Finest Curtains - Eastleigh\'s Trusted Curtain Experts',
        description: 'Mohaa Finest Curtains offers premium curtains, free home measurement & professional installation across Nairobi and Kenya. Visit us at Moyale Mall, Eastleigh or WhatsApp today.',
        currentPage: 'home',
        phone: '0705155727',
        phoneIntl: '+254705155727'
    });
});

app.get('/services', (req, res) => {
    res.render('services', {
        title: 'Curtain Services in Nairobi | Free Measurement, Installation & Custom Curtains',
        description: 'Mohaa Finest Curtains offers curtain sales, free home measurement, professional installation, custom designs and wholesale services across Nairobi and Kenya. Book your free consultation today.',
        currentPage: 'services',
        phone: '0705155727',
        phoneIntl: '+254705155727'
    });
});

app.get('/gallery', (req, res) => {
    res.render('gallery', {
        title: 'Curtain Installation Gallery | Our Work Across Nairobi & Kenya — Mohaa Finest Curtains',
        description: 'See real curtain installations by Mohaa Finest Curtains — homes, offices and commercial spaces across Nairobi and Kenya. Browse our work and get inspired for your own space.',
        currentPage: 'gallery',
        phone: '0705155727',
        phoneIntl: '+254705155727'
    });
});

app.get('/how-it-works', (req, res) => {
    res.render('how-it-works', {
        title: 'How It Works | Our 4-Step Curtain Process — Measure, Design, Install in Nairobi,',
        description: 'See how Mohaa Finest Curtains works — contact us, get a free home measurement, choose your design, and we handle professional installation. Simple, transparent, and hassle-free across Kenya.',
        currentPage: 'how-it-works',
        phone: '0705155727',
        phoneIntl: '+254705155727'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Mohaa Finest Curtains | Curtain Experts in Eastleigh, Nairobi',//added city and role and business name
        description: 'Mohaa Finest Curtains is Eastleigh\'s trusted curtain specialist. Premium curtains, free measurement & professional installation across Nairobi and Kenya.',//introduced location, services anddepth, whats shown on google searches results
        currentPage: 'about',
        phone: '0705155727',
        phoneIntl: '+254705155727'
    });
});

app.get('/blog', (req, res) => {
    res.render('blog', {
        title: 'Curtain Tips & Ideas for Nairobi Homes | Mohaa Finest Curtains Blog',
        description: 'Expert curtain tips, styling ideas and care guides for Nairobi homes and offices — from Mohaa Finest Curtains, Eastleighs trusted curtain specialists.',
        currentPage: 'blog',
        phone: '0705155727',
        phoneIntl: '+254705155727'
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact - Mohaa Finest Curtains',
        description: 'Get in touch with us. Located at Moyale Mall, Eastleigh. WhatsApp, call, or visit us today.',
        currentPage: 'contact',
        phone: '0705155727',
        phoneIntl: '+254705155727'
    });
});

app.get('/collections', (req, res) => {
    res.render('collections', {
        title: 'Curtain Collections | Blackout, Sheer, Velvet & Custom Curtains — Nairobi',
        description: 'Browse Mohaa\'s curtain collections — blackout, sheer, velvet, thermal & custom designs. Available in Eastleigh Nairobi with free measurement and installation across Kenya.',
        currentPage: 'collections',
        phone: '0705155727',
        phoneIntl: '+254705155727'
    });
});

// API endpoint for contact form (future feature)
app.post('/api/contact', (req, res) => {
    const { name, phone, message, service } = req.body;

    // For now, just log the contact (in production, you'd save to database or send email)
    console.log('New contact inquiry:', {
        name,
        phone,
        message,
        service,
        timestamp: new Date()
    });

    // Redirect to WhatsApp with pre-filled message
    const whatsappMessage = `Hi Mohaa Finest Curtains, I need help with ${service}. Name: ${name}, Phone: ${phone}, Message: ${message}`;
    const whatsappUrl = `https://wa.me/254700000000?text=${encodeURIComponent(whatsappMessage)}`;

    res.json({
        success: true,
        whatsappUrl: whatsappUrl,
        message: 'Redirecting to WhatsApp...'
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).render('404', {
        title: 'Page Not Found - Mohaa Finest Curtains',
        currentPage: '',
        phone: '0705155727',
        phoneIntl: '+254705155727'
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('500', {
        title: 'Server Error - Mohaa Finest Curtains',
        currentPage: '',
        error: process.env.NODE_ENV === 'development' ? err : {},
        phone: '0705155727',
        phoneIntl: '+254705155727'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Mohaa Finest Curtains website running on http://localhost:${PORT}`);
    console.log(`📱 Mobile-first design with conversion focus`);
    console.log(`💬 WhatsApp integration ready`);
});

module.exports = app;
