const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const PORT = process.env.PORT || 4000;
const SITE_URL = 'https://www.mohaafinestcurtains.co.ke';
const BUSINESS = {
    name: 'Mohaa Finest Curtains',
    phone: '0705155727',
    phoneIntl: '+254705155727',
    phoneE164: '+254705155727',
    whatsapp: '254705155727',
    address: 'Moyale Mall, Shop S26, 1st Avenue, 4th Street, Eastleigh, Nairobi, Kenya',
    shortAddress: 'Moyale Mall, Eastleigh, Nairobi',
    city: 'Nairobi',
    country: 'Kenya',
    latitude: -1.2767,
    longitude: 36.8219,
    hours: ['Mo-Sa 08:00-20:00', 'Su 10:00-18:00'],
};

const products = [
    {
        slug: 'blackout-curtains-nairobi',
        name: 'Blackout Curtains',
        title: 'Blackout Curtains Nairobi | Bedroom Curtains - Mohaa',
        description:
            'Buy blackout curtains in Nairobi from Mohaa Finest Curtains. Free measurement, custom fitting and installation from Eastleigh. WhatsApp for a quote.',
        keywords: ['blackout curtains Nairobi', 'bedroom curtains Kenya', 'privacy curtains Eastleigh'],
        image: '/images/blackout-curtains.jpg',
    },
    {
        slug: 'sheer-curtains-kenya',
        name: 'Sheer Curtains',
        title: 'Sheer Curtains Kenya | Voile Curtains Nairobi - Mohaa',
        description:
            'Shop sheer curtains and voile curtains in Kenya. Mohaa offers custom sizing, free measurement and professional installation in Nairobi.',
        keywords: ['sheer curtains Kenya', 'voile curtains Nairobi', 'day curtains Eastleigh'],
        image: '/images/sheer-curtains.jpg',
    },
    {
        slug: 'custom-curtains-eastleigh',
        name: 'Custom Curtains',
        title: 'Custom Curtains Eastleigh | Tailor-Made Curtains - Mohaa',
        description:
            'Order custom curtains in Eastleigh, Nairobi. Choose fabric, size and style with free measurement and expert installation by Mohaa.',
        keywords: ['custom curtains Eastleigh', 'tailor-made curtains Nairobi', 'made to measure curtains Kenya'],
        image: '/images/curtain-showroom-eastleigh-nairobi.jpg',
    },
    {
        slug: 'motorized-curtains-kenya',
        name: 'Motorized Curtains',
        title: 'Motorized Curtains Kenya | Smart Curtains Nairobi - Mohaa',
        description:
            'Upgrade to motorized curtains in Kenya with remote-control smart curtain systems, measurement and installation by Mohaa in Nairobi.',
        keywords: ['motorized curtains Kenya', 'smart curtains Nairobi', 'remote control curtains Kenya'],
        image: '/images/IMG_6793.JPG.jpeg',
    },
    {
        slug: 'velvet-curtains-nairobi',
        name: 'Velvet Curtains',
        title: 'Velvet Curtains Nairobi | Luxury Curtains Kenya - Mohaa',
        description:
            'Find luxury velvet curtains in Nairobi for homes, hotels and offices. Visit Mohaa in Eastleigh or WhatsApp for custom curtain pricing.',
        keywords: ['velvet curtains Nairobi', 'luxury curtains Kenya', 'hotel curtains Nairobi'],
        image: '/images/turkish-curtains.jpg',
    },
    {
        slug: 'curtain-rods-rails-nairobi',
        name: 'Curtain Rods, Rails and Accessories',
        title: 'Curtain Rods Nairobi | Rails & Accessories - Mohaa',
        description:
            'Buy curtain rods, rails, hooks and accessories in Nairobi with professional fitting from Mohaa Finest Curtains in Eastleigh.',
        keywords: ['curtain rods Nairobi', 'curtain rails Kenya', 'curtain accessories Eastleigh'],
        image: '/images/IMG_6794.JPG.jpeg',
    },
];

const faq = [
    {
        question: 'How much do curtains cost in Kenya?',
        answer:
            'Curtain prices in Kenya depend on fabric, size, lining, tracks and installation. Mohaa gives a clear quote after free measurement, with affordable options from everyday fabrics to premium luxury finishes.',
    },
    {
        question: 'Where can I buy curtains in Nairobi?',
        answer:
            'You can buy curtains at Mohaa Finest Curtains in Moyale Mall, Eastleigh, Nairobi. The team supplies sheer, blackout, velvet, custom and motorized curtains with WhatsApp ordering.',
    },
    {
        question: 'Do you offer free curtain measurement in Nairobi?',
        answer:
            'Yes. Mohaa Finest Curtains offers free curtain measurement for customers in Nairobi and can arrange measurement, delivery and installation across Kenya.',
    },
    {
        question: 'Can you install curtains after purchase?',
        answer:
            'Yes. Mohaa provides professional curtain installation, including rods, rails, tracks, hooks and motorized curtain systems for homes, offices and hotels.',
    },
];

const pageMeta = {
    home: {
        title: 'Curtains Nairobi | Custom Curtains Kenya - Mohaa',
        description:
            'Mohaa Finest Curtains sells custom curtains in Nairobi with free measurement, WhatsApp quotes and professional installation from Moyale Mall Eastleigh.',
        path: '/',
        image: '/images/curtain-showroom-eastleigh-nairobi.jpg',
        keywords: ['curtains Nairobi', 'curtains Kenya', 'custom curtains Nairobi', 'curtains Eastleigh'],
    },
    collections: {
        title: 'Curtains Kenya | Blackout, Sheer & Custom - Mohaa',
        description:
            'Browse blackout, sheer, velvet, Turkish, Chinese, motorized and custom curtains in Kenya. Free measurement and installation from Eastleigh.',
        path: '/collections',
        image: '/images/curtain-showroom-eastleigh-nairobi.jpg',
        keywords: ['curtains Kenya', 'blackout curtains Nairobi', 'sheer curtains Kenya', 'motorized curtains Kenya'],
    },
    services: {
        title: 'Curtain Installation Nairobi | Free Measure - Mohaa',
        description:
            'Book curtain installation in Nairobi with free measurement, custom curtain design, rods, rails and accessories. WhatsApp Mohaa for a quote.',
        path: '/services',
        image: '/images/luxury-curtains-installation-nairobi.jpg',
        keywords: ['curtain installation Nairobi', 'free curtain measurement Nairobi', 'custom curtains Nairobi'],
    },
    gallery: {
        title: 'Curtain Designs Nairobi | Installation Gallery - Mohaa',
        description:
            'See curtain designs and real installations by Mohaa Finest Curtains for Nairobi homes, offices, hotels and apartments. WhatsApp for similar work.',
        path: '/gallery',
        image: '/images/luxury-curtains-installation-nairobi.jpg',
        keywords: ['curtain designs Nairobi', 'curtain installation gallery Kenya', 'modern curtains Nairobi'],
    },
    howItWorks: {
        title: 'Free Curtain Measurement Nairobi | How It Works - Mohaa',
        description:
            'Learn how Mohaa measures, quotes, custom makes and installs curtains in Nairobi and across Kenya. Start with a free WhatsApp consultation.',
        path: '/how-it-works',
        image: '/images/IMG_6795.JPG.jpeg',
        keywords: ['free curtain measurement Nairobi', 'how to order curtains Kenya', 'curtain quote Nairobi'],
    },
    about: {
        title: 'Curtain Shop Eastleigh Nairobi | About Mohaa',
        description:
            'Mohaa Finest Curtains is a trusted curtain shop in Eastleigh Nairobi for custom curtains, free measurement, rods, rails and installation.',
        path: '/about',
        image: '/images/curtain-showroom-entrance-eastleigh.jpg',
        keywords: ['curtain shop Eastleigh', 'curtain shop Nairobi', 'Mohaa Finest Curtains'],
    },
    blog: {
        title: 'Curtain Tips Kenya | Nairobi Curtain Ideas - Mohaa',
        description:
            'Read curtain tips for Kenya: prices, fabric choices, measuring guides, blackout vs sheer curtains and interior ideas for Nairobi homes.',
        path: '/blog',
        image: '/images/curtain-fabric-display-eastleigh.jpg',
        keywords: ['curtain tips Kenya', 'curtain prices Kenya', 'how to choose curtains Nairobi'],
    },
    contact: {
        title: 'Contact Curtain Shop Nairobi | WhatsApp Mohaa',
        description:
            'Contact Mohaa Finest Curtains at Moyale Mall, Eastleigh Nairobi. WhatsApp for free curtain measurement, prices, custom orders and installation.',
        path: '/contact',
        image: '/images/curtain-showroom-entrance-eastleigh.jpg',
        keywords: ['contact curtain shop Nairobi', 'curtains Eastleigh', 'Mohaa curtains phone'],
    },
};

function absoluteUrl(pathname = '/') {
    return `${SITE_URL}${pathname}`;
}

function localBusinessSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'HomeGoodsStore',
        '@id': `${SITE_URL}/#localbusiness`,
        name: BUSINESS.name,
        url: SITE_URL,
        image: absoluteUrl('/images/logo.jpeg'),
        telephone: BUSINESS.phoneE164,
        priceRange: 'KES 1,500+',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Moyale Mall, Shop S26, 1st Avenue, 4th Street, Eastleigh',
            addressLocality: 'Nairobi',
            addressCountry: 'KE',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: BUSINESS.latitude,
            longitude: BUSINESS.longitude,
        },
        openingHours: BUSINESS.hours,
        areaServed: ['Eastleigh', 'Nairobi', 'Westlands', 'Karen', 'Kilimani', 'Lavington', 'Kileleshwa', 'Parklands', 'South B', 'South C', 'Kasarani', 'Ruaka', 'Syokimau', 'Thika', 'Kiambu', 'Mombasa', 'Kenya'],
        sameAs: [`https://wa.me/${BUSINESS.whatsapp}`],
    };
}

function breadcrumbSchema(items) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: absoluteUrl(item.path),
        })),
    };
}

function faqSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        })),
    };
}

function productSchema(product) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        image: absoluteUrl(product.image),
        description: product.description,
        brand: {
            '@type': 'Brand',
            name: BUSINESS.name,
        },
        category: 'Curtains and window treatments',
        offers: {
            '@type': 'Offer',
            priceCurrency: 'KES',
            availability: 'https://schema.org/InStock',
            url: absoluteUrl(`/${product.slug}`),
            seller: {
                '@id': `${SITE_URL}/#localbusiness`,
            },
        },
    };
}

function renderPage(res, view, currentPage, extra = {}) {
    const meta = { ...pageMeta[currentPage], ...(extra.meta || {}) };
    const schemas = [
        localBusinessSchema(),
        breadcrumbSchema(extra.breadcrumbs || [{ name: 'Home', path: '/' }, { name: meta.title.split('|')[0].trim(), path: meta.path }]),
        ...(extra.schemas || []),
    ];

    res.render(view, {
        ...BUSINESS,
        business: BUSINESS,
        siteUrl: SITE_URL,
        title: meta.title,
        description: meta.description,
        canonical: absoluteUrl(meta.path),
        ogImage: absoluteUrl(meta.image || '/images/logo.jpeg'),
        keywords: meta.keywords || [],
        schemas,
        currentPage,
        products,
        faqs: faq,
        phone: BUSINESS.phone,
        phoneIntl: BUSINESS.phoneIntl,
        whatsappNumber: BUSINESS.whatsapp,
    });
}

app.use(expressLayouts);
app.set('layout', 'layout');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public'), {
    maxAge: '30d',
    etag: true,
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => renderPage(res, 'index', 'home', {
    schemas: [faqSchema()],
    breadcrumbs: [{ name: 'Home', path: '/' }],
}));

app.get('/services', (req, res) => renderPage(res, 'services', 'services', {
    schemas: [faqSchema()],
}));

app.get('/gallery', (req, res) => renderPage(res, 'gallery', 'gallery'));
app.get('/how-it-works', (req, res) => renderPage(res, 'how-it-works', 'howItWorks', { schemas: [faqSchema()] }));
app.get('/about', (req, res) => renderPage(res, 'about', 'about'));
app.get('/blog', (req, res) => renderPage(res, 'blog', 'blog'));
app.get('/contact', (req, res) => renderPage(res, 'contact', 'contact', { schemas: [faqSchema()] }));
app.get('/collections', (req, res) => renderPage(res, 'collections', 'collections', {
    schemas: [faqSchema(), ...products.map(productSchema)],
}));

products.forEach((product) => {
    app.get(`/${product.slug}`, (req, res) => renderPage(res, 'collections', 'collections', {
        meta: {
            title: product.title,
            description: product.description,
            path: `/${product.slug}`,
            image: product.image,
            keywords: product.keywords,
        },
        schemas: [productSchema(product), faqSchema()],
        breadcrumbs: [
            { name: 'Home', path: '/' },
            { name: 'Collections', path: '/collections' },
            { name: product.name, path: `/${product.slug}` },
        ],
    }));
});

app.get('/curtains-nairobi', (req, res) => res.redirect(301, '/collections'));
app.get('/curtains-eastleigh', (req, res) => res.redirect(301, '/custom-curtains-eastleigh'));
app.get('/curtain-installation-nairobi', (req, res) => res.redirect(301, '/services#installation'));
app.get('/custom-curtains-nairobi', (req, res) => res.redirect(301, '/custom-curtains-eastleigh'));

app.post('/api/contact', (req, res) => {
    const { name, phone, message, service } = req.body;
    const whatsappMessage = `Hi Mohaa Finest Curtains, I need help with ${service}. Name: ${name}, Phone: ${phone}, Message: ${message}`;

    res.json({
        success: true,
        whatsappUrl: `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`,
        message: 'Redirecting to WhatsApp...',
    });
});

app.use((req, res) => {
    res.status(404).render('404', {
        ...BUSINESS,
        title: 'Page Not Found | Mohaa Finest Curtains',
        description: 'The page you requested was not found. Browse Mohaa Finest Curtains or WhatsApp us for curtain help in Nairobi and Kenya.',
        canonical: absoluteUrl('/404'),
        ogImage: absoluteUrl('/images/logo.jpeg'),
        keywords: [],
        schemas: [localBusinessSchema()],
        currentPage: '',
        phone: BUSINESS.phone,
        phoneIntl: BUSINESS.phoneIntl,
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('500', {
        ...BUSINESS,
        title: 'Server Error | Mohaa Finest Curtains',
        description: 'A server error occurred. Please WhatsApp Mohaa Finest Curtains for immediate curtain support.',
        canonical: absoluteUrl('/500'),
        ogImage: absoluteUrl('/images/logo.jpeg'),
        keywords: [],
        schemas: [localBusinessSchema()],
        currentPage: '',
        error: process.env.NODE_ENV === 'development' ? err : {},
        phone: BUSINESS.phone,
        phoneIntl: BUSINESS.phoneIntl,
    });
});

app.listen(PORT, () => {
    console.log(`Mohaa Finest Curtains website running on http://localhost:${PORT}`);
});

module.exports = app;
