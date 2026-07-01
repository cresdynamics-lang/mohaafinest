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
        image: '/images/motorized-curtains-office-nairobi.jpg',
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
        image: '/images/curtain-rods-accessories-eastleigh.jpg',
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

const blogPosts = [
    {
        slug: 'curtain-prices-nairobi-eastleigh-2026',
        title: 'Curtain Prices in Nairobi & Eastleigh 2026: Full Price Guide per Meter',
        excerpt: 'Complete curtain pricing guide for Nairobi and Eastleigh. Compare fabric types, understand KES per meter costs, and get accurate quotes for your project.',
        relatedCollection: '/collections',
        collectionName: 'All Collections',
        content: `
            <h2>Curtain Prices in Nairobi & Eastleigh 2026: Complete Guide</h2>
            
            <p>Understanding curtain prices in Nairobi and Eastleigh is essential for budgeting your window treatment project. At Mohaa Finest Curtains, we believe in transparent pricing so you can make informed decisions. This guide breaks down current 2026 curtain prices per meter across different fabric types and quality tiers.</p>
            
            <h3>Current Curtain Price Ranges (KES per Meter)</h3>
            
            <table>
                <thead>
                    <tr>
                        <th>Fabric Type</th>
                        <th>Basic Tier</th>
                        <th>Standard Tier</th>
                        <th>Premium Tier</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sheer/Voile Curtains</td>
                        <td>KES 1,500 - 2,000</td>
                        <td>KES 2,500 - 3,500</td>
                        <td>KES 4,000 - 6,000</td>
                    </tr>
                    <tr>
                        <td>Blackout Curtains</td>
                        <td>KES 2,000 - 2,500</td>
                        <td>KES 3,000 - 4,500</td>
                        <td>KES 5,000 - 8,000</td>
                    </tr>
                    <tr>
                        <td>Turkish/Chinese Curtains</td>
                        <td>KES 2,500 - 3,000</td>
                        <td>KES 4,000 - 5,500</td>
                        <td>KES 6,000 - 10,000</td>
                    </tr>
                    <tr>
                        <td>Velvet Curtains</td>
                        <td>KES 3,000 - 4,000</td>
                        <td>KES 5,000 - 7,000</td>
                        <td>KES 8,000 - 15,000</td>
                    </tr>
                    <tr>
                        <td>Motorized Curtains</td>
                        <td>KES 8,000 - 12,000</td>
                        <td>KES 15,000 - 25,000</td>
                        <td>KES 30,000 - 50,000</td>
                    </tr>
                </tbody>
            </table>
            
            <h3>What Affects Curtain Prices?</h3>
            
            <p>Several factors influence the final cost of your curtains in Nairobi:</p>
            
            <ul>
                <li><strong>Fabric Quality:</strong> Imported fabrics (Turkish, Chinese) cost more than local alternatives but offer superior durability and aesthetics.</li>
                <li><strong>Lining:</strong> Blackout lining, thermal lining, or interlining adds KES 500-1,500 per meter.</li>
                <li><strong>Size:</strong> Larger windows require more fabric. Standard floor-length curtains need 2-2.5x the window width.</li>
                <li><strong>Heading Style:</strong> Complex pleats (goblet, cartridge) cost more than simple eyelet or pencil pleat styles.</li>
                <li><strong>Installation:</strong> Professional installation typically costs KES 500-1,000 per window including tracks/rods.</li>
            </ul>
            
            <h3>Additional Costs to Consider</h3>
            
            <p>Beyond the fabric price per meter, factor in these additional costs:</p>
            
            <ul>
                <li><strong>Curtain Rods/Tracks:</strong> KES 1,500 - 5,000 per window depending on material and size</li>
                <li><strong>Tiebacks & Accessories:</strong> KES 500 - 2,000 per set</li>
                <li><strong>Measurement Fee:</strong> FREE at Mohaa Finest Curtains (others charge KES 500-1,000)</li>
                <li><strong>Delivery:</strong> KES 500 - 2,000 within Nairobi, higher for other counties</li>
            </ul>
            
            <h3>Why Choose Mohaa Finest Curtains?</h3>
            
            <p>At our Eastleigh showroom, we offer competitive pricing without compromising quality. Our advantages include:</p>
            
            <ul>
                <li>Free measurement and consultation</li>
                <li>Transparent pricing with no hidden fees</li>
                <li>Wide fabric selection from basic to luxury</li>
                <li>Professional installation included in many packages</li>
                <li>WhatsApp quotes for quick decision-making</li>
            </ul>
            
            <h3>Get Your Custom Quote</h3>
            
            <p>Every project is unique. Contact Mohaa Finest Curtains for a personalized quote based on your specific window measurements, fabric preferences, and style requirements. We serve Nairobi, Eastleigh, and all of Kenya with delivery and installation services.</p>
            
            <div class="blog-cta">
                <a href="https://wa.me/254705155727?text=Hi%20Mohaa,%20I%20need%20a%20curtain%20price%20quote" class="btn btn-primary" target="_blank">Get Free Quote on WhatsApp</a>
            </div>
            
            <h3>Frequently Asked Questions</h3>
            
            <div class="blog-faq">
                <p><strong>Q: How much do basic curtains cost in Nairobi?</strong><br>
                A: Basic sheer curtains start from KES 1,500 per meter, while basic blackout curtains start from KES 2,000 per meter.</p>
                
                <p><strong>Q: Do curtain prices include installation?</strong><br>
                A: At Mohaa, we offer packages that include installation. Otherwise, installation costs KES 500-1,000 per window.</p>
                
                <p><strong>Q: How can I reduce my curtain costs?</strong><br>
                A: Choose simpler heading styles (eyelet vs pleated), opt for standard fabrics instead of imported luxury options, and measure accurately to avoid waste.</p>
            </div>
        `,
        category: 'buying-guides',
        image: '/images/curtain-fabric-display-eastleigh.jpg',
        date: '2026-01-15',
        readTime: '8 min read',
        keywords: ['curtain prices Nairobi', 'curtain prices Eastleigh', 'curtain cost per meter Kenya', 'curtain price guide 2026'],
    },
    {
        slug: 'how-to-choose-right-curtains-nairobi',
        title: 'How to Choose the Right Curtains for Your Home in Nairobi',
        excerpt: 'Expert tips on selecting curtains that match your style, budget, and Nairobi\'s climate. Learn about fabric, color, and functionality.',
        relatedCollection: '/collections',
        collectionName: 'All Collections',
        content: `
            <h2>How to Choose the Right Curtains for Your Home in Nairobi</h2>
            
            <p>Choosing the perfect curtains for your Nairobi home involves balancing aesthetics, functionality, and budget. With Nairobi's unique climate and diverse architectural styles, here's a comprehensive guide to help you make the right choice.</p>
            
            <h3>Consider Nairobi's Climate</h3>
            
            <p>Nairobi's weather patterns influence curtain selection:</p>
            
            <ul>
                <li><strong>Warm afternoons:</strong> Light-colored, breathable fabrics help reflect heat</li>
                <li><strong>Cool evenings:</strong> Medium-weight fabrics provide insulation</li>
                <li><strong>Rainy seasons:</strong> Moisture-resistant materials prevent mold and mildew</li>
            </ul>
            
            <h3>Room-by-Room Curtain Guide</h3>
            
            <h4>Living Room</h4>
            <p>Focus on style and light control. Layered curtains (sheer + blackout) offer versatility. Consider Turkish or Chinese fabrics for elegance.</p>
            
            <h4>Bedroom</h4>
            <p>Prioritize blackout capabilities for quality sleep. Velvet or heavy blackout curtains in dark or neutral tones work best.</p>
            
            <h4>Kitchen</h4>
            <p>Choose easy-to-clean, lightweight fabrics. Cafe curtains or short panels are practical. Avoid heavy fabrics that trap cooking odors.</p>
            
            <h4>Home Office</h4>
            <p>Balance natural light with glare reduction. Light-filtering sheers or adjustable blinds are ideal.</p>
            
            <h3>Fabric Selection Guide</h3>
            
            <ul>
                <li><strong>Cotton:</strong> Versatile, easy to clean, affordable. Good for most rooms.</li>
                <li><strong>Linen:</strong> Natural, breathable, elegant. Best for living areas.</li>
                <li><strong>Velvet:</strong> Luxurious, insulating. Perfect for bedrooms.</li>
                <li><strong>Synthetic blends:</strong> Durable, fade-resistant. Great for sunny rooms.</li>
            </ul>
            
            <h3>Color and Pattern Tips</h3>
            
            <p>For Nairobi homes:</p>
            
            <ul>
                <li>Light colors (white, cream, light gray) make small rooms feel larger</li>
                <li>Earth tones blend with Nairobi's natural surroundings</li>
                <li>Bold patterns work as statement pieces in neutral rooms</li>
                <li>Consider your furniture and wall colors when selecting curtain hues</li>
            </ul>
            
            <h3>Measuring for Perfect Fit</h3>
            
            <p>Accurate measurements are crucial:</p>
            
            <ul>
                <li>Measure width at three points (top, middle, bottom) - use the widest</li>
                <li>For fullness, multiply window width by 2-2.5 for standard pleats</li>
                <li>Length should touch the floor or hang 1-2cm above it</li>
                <li>Consider mounting height - higher rods create the illusion of taller ceilings</li>
            </ul>
            
            <h3>Heading Styles Explained</h3>
            
            <ul>
                <li><strong>Eyelet:</strong> Modern, easy to slide, casual look</li>
                <li><strong>Pencil Pleat:</strong> Classic, versatile, good for most fabrics</li>
                <li><strong>Pinch Pleat:</strong> Formal, elegant, requires more fabric</li>
                <li><strong>Goblet Pleat:</strong> Luxurious, dramatic, premium look</li>
            </ul>
            
            <h3>When to Choose Motorized Curtains</h3>
            
            <p>Motorized curtains are worth the investment for:</p>
            
            <ul>
                <li>Hard-to-reach windows</li>
                <li>Smart home integration</li>
                <li>Large or heavy curtains</li>
                <li>Accessibility needs</li>
                <li>Convenience and luxury</li>
            </ul>
            
            <div class="blog-cta">
                <a href="https://wa.me/254705155727?text=Hi%20Mohaa,%20I%20need%20help%20choosing%20curtains" class="btn btn-primary" target="_blank">Get Expert Advice on WhatsApp</a>
            </div>
            
            <h3>Frequently Asked Questions</h3>
            
            <div class="blog-faq">
                <p><strong>Q: What curtain length is best for Nairobi homes?</strong><br>
                A: Floor-length curtains (touching or 1-2cm above the floor) are most elegant and popular in Nairobi homes.</p>
                
                <p><strong>Q: Should I choose lined or unlined curtains?</strong><br>
                A: Lined curtains offer better light control, insulation, and fabric protection. They're worth the extra cost for bedrooms and living rooms.</p>
                
                <p><strong>Q: How do I clean curtains in Nairobi's dusty environment?</strong><br>
                A: Regular vacuuming and professional cleaning every 6-12 months keeps curtains fresh. Some fabrics are machine-washable - check care labels.</p>
            </div>
        `,
        category: 'buying-guides',
        image: '/images/curtain-showroom-eastleigh-nairobi.jpg',
        date: '2026-01-10',
        readTime: '7 min read',
        keywords: ['how to choose curtains Nairobi', 'curtain fabric guide Kenya', 'curtain styles Nairobi', 'curtain tips'],
    },
    {
        slug: 'common-curtain-measurement-mistakes',
        title: 'Common Curtain Measurement Mistakes (And How to Avoid Them)',
        excerpt: 'Avoid costly measurement errors. Learn the proper way to measure windows for curtains and ensure perfect fitting every time.',
        relatedCollection: '/services',
        collectionName: 'Services',
        content: `
            <h2>Common Curtain Measurement Mistakes (And How to Avoid Them)</h2>
            
            <p>Accurate curtain measurement is the foundation of a successful window treatment project. At Mohaa Finest Curtains, we've seen countless measurement errors that lead to ill-fitting curtains and wasted money. Here's how to avoid the most common mistakes.</p>
            
            <h3>Mistake #1: Measuring Only Once</h3>
            
            <p>Windows are rarely perfectly square or level. Always measure at three points for both width and height:</p>
            
            <ul>
                <li><strong>Width:</strong> Top, middle, and bottom of the window frame</li>
                <li><strong>Height:</strong> Left, center, and right sides</li>
            </ul>
            
            <p>Use the widest width and tallest height measurements to ensure full coverage.</p>
            
            <h3>Mistake #2: Ignoring Mounting Position</h3>
            
            <p>Where you install the rod or track dramatically affects curtain length and appearance:</p>
            
            <ul>
                <li><strong>Inside mount:</strong> Within the frame - clean look, less light blockage</li>
                <li><strong>Outside mount:</strong> Above the frame - makes windows look larger, better light control</li>
            </ul>
            
            <p>For outside mounts, install rods 4-6 inches above the window frame for optimal aesthetics.</p>
            
            <h3>Mistake #3: Wrong Fullness Calculation</h3>
            
            <p>Curtains need fullness (extra fabric) to look proper when closed:</p>
            
            <ul>
                <li><strong>Minimum:</strong> 1.5x window width (flat look when closed)</li>
                <li><strong>Standard:</strong> 2x window width (moderate fullness)</li>
                <li><strong>Full:</strong> 2.5x window width (luxurious, gathered look)</li>
                <li><strong>Extra Full:</strong> 3x window width (dramatic, premium appearance)</li>
            </ul>
            
            <h3>Mistake #4: Incorrect Length Determination</h3>
            
            <p>Common length errors include:</p>
            
            <ul>
                <li><strong>Too short:</strong> Curtains hovering above the floor look awkward</li>
                <li><strong>Too long:</strong> Excess fabric puddling on the floor collects dust</li>
                <li><strong>Right approach:</strong> Curtains should touch the floor or hang 1-2cm above it</li>
            </ul>
            
            <h3>Mistake #5: Forgetting Hardware Space</h3>
            
            <p>Account for curtain rods, rings, and hooks in your measurements:</p>
            
            <ul>
                <li>Add 2-3 inches to height for rod/track mounting</li>
                <li>Consider ring height if using decorative rings</li>
                <li>Factor in hook depth for pinch pleat styles</li>
            </ul>
            
            <h3>Mistake #6: Not Considering Obstructions</h3>
            
            <p>Check for obstacles that affect curtain operation:</p>
            
            <ul>
                <li>Furniture placement</li>
                <li>Electrical outlets or switches</li>
                <li>AC units or radiators</li>
                <li>Window cranks or handles</li>
            </ul>
            
            <h3>Mistake #7: Measuring in Wrong Units</h3>
            
            <p>Consistency is key. Stick to one measurement system:</p>
            
            <ul>
                <li>Use centimeters or inches consistently</li>
                <li>Convert accurately if switching systems</li>
                <li>Double-check calculations before ordering</li>
            </ul>
            
            <h3>Professional Measurement Tips</h3>
            
            <p>For complex projects or multiple windows, consider professional measurement:</p>
            
            <ul>
                <li>Mohaa offers FREE measurement in Nairobi</li>
                <li>Professionals spot issues you might miss</li>
                <li>Includes advice on fabric and style selection</li>
                <li>Saves time and prevents costly mistakes</li>
            </ul>
            
            <h3>Measurement Checklist</h3>
            
            <p>Before ordering, verify:</p>
            
            <ul>
                <li>Window width at three points</li>
                <li>Window height at three points</li>
                <li>Mounting position (inside/outside)</li>
                <li>Desired fullness multiplier</li>
                <li>Target length (floor-touching or slightly above)</li>
                <li>Hardware space requirements</li>
                <li>Obstructions and clearances</li>
            </ul>
            
            <div class="blog-cta">
                <a href="https://wa.me/254705155727?text=Hi%20Mohaa,%20I%20need%20free%20curtain%20measurement" class="btn btn-primary" target="_blank">Book Free Measurement</a>
            </div>
            
            <h3>Frequently Asked Questions</h3>
            
            <div class="blog-faq">
                <p><strong>Q: What if my measurements are between standard sizes?</strong><br>
                A: Always round up to the next size. It's better to have slightly longer curtains that can be hemmed than too-short curtains.</p>
                
                <p><strong>Q: Should I measure with or without existing curtains?</strong><br>
                A: Take down old curtains before measuring. Existing hardware may not be in the ideal position for your new curtains.</p>
                
                <p><strong>Q: How accurate do DIY measurements need to be?</strong><br>
                A: Within 1cm is acceptable for most applications. For custom curtains or complex installations, professional measurement is recommended.</p>
            </div>
        `,
        category: 'installation',
        image: '/images/curtain-showroom-entrance-eastleigh.jpg',
        date: '2026-01-05',
        readTime: '6 min read',
        keywords: ['curtain measurement Nairobi', 'how to measure curtains', 'curtain fitting mistakes', 'free curtain measurement Kenya'],
    },
    {
        slug: 'blackout-vs-sheer-curtains-guide',
        title: 'Blackout Curtains vs Sheer Curtains: Which Is Right for You?',
        excerpt: 'Compare blackout and sheer curtains to decide which suits your needs. Learn about light control, privacy, and aesthetics for each type.',
        relatedCollection: '/blackout-curtains-nairobi',
        collectionName: 'Blackout Curtains',
        content: `
            <h2>Blackout Curtains vs Sheer Curtains: Which Is Right for You?</h2>
            
            <p>Choosing between blackout and sheer curtains is one of the most common decisions Nairobi homeowners face. Both serve different purposes and can even work together. Here's a comprehensive comparison to help you decide.</p>
            
            <h3>Blackout Curtains: Complete Light Control</h3>
            
            <p>Blackout curtains are designed to block 100% of incoming light:</p>
            
            <ul>
                <li><strong>Light Blocking:</strong> 95-100% light blockage</li>
                <li><strong>Privacy:</strong> Complete privacy, day and night</li>
                <li><strong>Insulation:</strong> Helps regulate room temperature</li>
                <li><strong>Noise Reduction:</strong> Dampens outside sounds</li>
                <li><strong>Best For:</strong> Bedrooms, home theaters, nurseries</li>
            </ul>
            
            <h3>Sheer Curtains: Light Filtering</h3>
            
            <p>Sheer curtains allow natural light while providing some privacy:</p>
            
            <ul>
                <li><strong>Light Filtering:</strong> Softens and diffuses natural light</li>
                <li><strong>Privacy:</strong> Daytime privacy only (see-through at night)</li>
                <li><strong>Aesthetics:</strong> Light, airy, elegant appearance</li>
                <li><strong>Versatility:</strong> Works alone or layered with other curtains</li>
                <li><strong>Best For:</strong> Living rooms, kitchens, dining areas</li>
            </ul>
            
            <h3>Comparison Table</h3>
            
            <table>
                <thead>
                    <tr>
                        <th>Feature</th>
                        <th>Blackout Curtains</th>
                        <th>Sheer Curtains</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Light Control</td>
                        <td>Complete darkness</td>
                        <td>Soft, diffused light</td>
                    </tr>
                    <tr>
                        <td>Privacy (Day)</td>
                        <td>Complete</td>
                        <td>Partial</td>
                    </tr>
                    <tr>
                        <td>Privacy (Night)</td>
                        <td>Complete</td>
                        <td>None (with interior lights on)</td>
                    </tr>
                    <tr>
                        <td>Insulation</td>
                        <td>Excellent</td>
                        <td>Minimal</td>
                    </tr>
                    <tr>
                        <td>Price Range</td>
                        <td>KES 2,000-8,000/m</td>
                        <td>KES 1,500-6,000/m</td>
                    </tr>
                </tbody>
            </table>
            
            <h3>Room-by-Room Recommendations</h3>
            
            <h4>Bedrooms</h4>
            <p><strong>Recommendation:</strong> Blackout curtains are essential for quality sleep. Consider layering with sheers for daytime flexibility.</p>
            
            <h4>Living Rooms</h4>
            <p><strong>Recommendation:</strong> Sheer curtains or layered combinations. Blackout may be too heavy for casual living spaces.</p>
            
            <h4>Kitchens</h4>
            <p><strong>Recommendation:</strong> Sheer curtains or cafe curtains. Blackout is unnecessary and may feel too heavy.</p>
            
            <h4>Home Offices</h4>
            <p><strong>Recommendation:</strong> Light-filtering sheers or adjustable blinds. Consider blackout if glare is a major issue.</p>
            
            <h4>Nurseries</h4>
            <p><strong>Recommendation:</strong> Blackout curtains are crucial for nap time and establishing sleep routines.</p>
            
            <h3>The Layered Solution</h3>
            
            <p>Why choose when you can have both? Layered curtains offer the best of both worlds:</p>
            
            <ul>
                <li>Sheer curtains for daytime light and privacy</li>
                <li>Blackout curtains behind for night privacy and darkness</li>
                <li>Maximum flexibility for different times of day</li>
                <li>Enhanced insulation and noise reduction</li>
                <li>Luxurious, professional appearance</li>
            </ul>
            
            <h3>Nairobi-Specific Considerations</h3>
            
            <p>For Nairobi homes:</p>
            
            <ul>
                <li><strong>East-facing rooms:</strong> Morning sun - consider blackout for bedrooms</li>
                <li><strong>West-facing rooms:</strong> Afternoon heat - blackout helps with temperature control</li>
                <li><strong>Street-facing windows:</strong> Blackout for privacy in busy areas</li>
                <li><strong>Garden-facing rooms:</strong> Sheers to enjoy views while maintaining privacy</li>
            </ul>
            
            <div class="blog-cta">
                <a href="https://wa.me/254705155727?text=Hi%20Mohaa,%20I%20need%20help%20choosing%20between%20blackout%20and%20sheer%20curtains" class="btn btn-primary" target="_blank">Get Expert Advice</a>
            </div>
            
            <h3>Frequently Asked Questions</h3>
            
            <div class="blog-faq">
                <p><strong>Q: Can I use blackout curtains in living rooms?</strong><br>
                A: Yes, but they may feel heavy. Consider lighter blackout fabrics or layering with sheers for a balanced look.</p>
                
                <p><strong>Q: Do sheer curtains provide any privacy at night?</strong><br>
                A: No. With interior lights on, sheer curtains become see-through. Pair with blackout curtains or blinds for nighttime privacy.</p>
                
                <p><strong>Q: Are blackout curtains hotter in the room?</strong><br>
                A: Actually, they help regulate temperature by blocking heat transfer. They can keep rooms cooler in Nairobi's warm afternoons.</p>
            </div>
        `,
        category: 'blackout',
        image: '/images/blackout-curtains.jpg',
        date: '2025-12-20',
        readTime: '6 min read',
        keywords: ['blackout vs sheer curtains', 'curtain light control Nairobi', 'curtain privacy Kenya', 'layered curtains'],
    },
    {
        slug: 'best-curtain-colors-small-rooms-nairobi',
        title: 'Best Curtain Colors for Small Rooms in Nairobi',
        excerpt: 'Make small Nairobi rooms feel bigger with the right curtain colors. Learn which shades expand spaces and which to avoid.',
        relatedCollection: '/sheer-curtains-kenya',
        collectionName: 'Sheer Curtains',
        content: `
            <h2>Best Curtain Colors for Small Rooms in Nairobi</h2>
            
            <p>Small rooms present unique design challenges, but the right curtain colors can transform cramped spaces into airy, inviting areas. Here's how to use color strategically to make your Nairobi rooms feel larger.</p>
            
            <h3>Colors That Expand Spaces</h3>
            
            <h4>White and Off-White</h4>
            <p>The ultimate space-expanding colors. White curtains reflect light, blend with walls, and create seamless visual flow. Off-white options (cream, ivory) add warmth without sacrificing the spacious effect.</p>
            
            <h4>Light Gray</h4>
            <p>Modern and sophisticated, light gray curtains add depth while maintaining brightness. They pair beautifully with contemporary Nairobi interiors.</p>
            
            <h4>Soft Pastels</h4>
            <p>Light blues, soft greens, and pale pinks bring personality without overwhelming small spaces. These colors work especially well in bedrooms and nurseries.</p>
            
            <h4>Beige and Taupe</h4>
            <p>Warm neutrals that create cozy yet spacious atmospheres. These earth tones connect well with Nairobi's natural surroundings.</p>
            
            <h3>Colors to Avoid in Small Rooms</h3>
            
            <ul>
                <li><strong>Dark, saturated colors:</strong> Navy, charcoal, deep red absorb light and make rooms feel smaller</li>
                <li><strong>Bright, neon colors:</strong> Overwhelming in confined spaces</li>
                <li><strong>Heavy patterns:</strong> Large prints can dominate and shrink visual space</li>
                <li><strong>Contrasting colors:</strong> Curtains that clash with walls create visual barriers</li>
            </ul>
            
            <h3>Pattern Guidelines for Small Rooms</h3>
            
            <p>If you want patterns in small spaces:</p>
            
            <ul>
                <li><strong>Small-scale patterns:</strong> Delicate prints, thin stripes, subtle textures</li>
                <li><strong>Vertical stripes:</strong> Draw the eye upward, creating height illusion</li>
                <li><strong>Monochromatic schemes:</strong> Patterns in similar tones to walls</li>
                <li><strong>Avoid:</strong> Large florals, bold geometric prints, busy patterns</li>
            </ul>
            
            <h3>Room-Specific Color Recommendations</h3>
            
            <h4>Small Bedrooms</h4>
            <p>Soft whites, light grays, or pale blues promote relaxation while expanding space. Layer with blackout liners for functionality.</p>
            
            <h4>Small Living Rooms</h4>
            <p>White, cream, or light gray curtains maintain openness. Add texture through fabric choice rather than bold colors.</p>
            
            <h4>Small Kitchens</h4>
            <p>White or light-colored cafe curtains. Bright, clean colors work well in kitchen environments.</p>
            
            <h4>Small Home Offices</h4>
            <p>Light neutrals for focus. Avoid distracting colors. Consider light-filtering sheers for pleasant workspace lighting.</p>
            
            <h3>Pro Tips for Maximum Space</h3>
            
            <ul>
                <li><strong>Mount high:</strong> Install curtain rods 4-6 inches above the window frame to create height</li>
                <li><strong>Go wide:</strong> Extend rods beyond window frames to make windows appear larger</li>
                <li><strong>Floor-length:</strong> Curtains touching the floor elongate walls</li>
                <li><strong>Match walls:</strong> Curtains similar in color to walls create seamless expansion</li>
                <li><strong>Minimal hardware:</strong> Slim rods and simple rings don't dominate small spaces</li>
            </ul>
            
            <h3>Light and Color Interaction</h3>
            
            <p>Consider how natural light affects curtain color in your space:</p>
            
            <ul>
                <li><strong>North-facing rooms:</strong> Cooler light - warm neutrals balance the chill</li>
                <li><strong>South-facing rooms:</strong> Warm, bright light - cool colors prevent overheating visual effect</li>
                <li><strong>East-facing rooms:</strong> Morning light - any light color works well</li>
                <li><strong>West-facing rooms:</strong> Afternoon sun - light colors reflect heat</li>
            </ul>
            
            <h3>Texture as an Alternative to Color</h3>
            
            <p>In small rooms where you want visual interest without color:</p>
            
            <ul>
                <li>Linen textures add depth</li>
                <li>Subtle weaves create interest</li>
                <li>Embroidery in similar tones adds detail</li>
                <li>Layered sheers provide dimension</li>
            </ul>
            
            <div class="blog-cta">
                <a href="https://wa.me/254705155727?text=Hi%20Mohaa,%20I%20need%20help%20choosing%20curtain%20colors%20for%20my%20small%20room" class="btn btn-primary" target="_blank">Get Color Advice</a>
            </div>
            
            <h3>Frequently Asked Questions</h3>
            
            <div class="blog-faq">
                <p><strong>Q: Can I use dark curtains in a small room?</strong><br>
                A: Yes, if balanced with light walls and plenty of natural light. Use dark curtains as accents rather than dominant features.</p>
                
                <p><strong>Q: Should curtains match wall color exactly?</strong><br>
                A: Similar tones work best. Exact matches can look flat, while slight variations add depth without breaking the expansive effect.</p>
                
                <p><strong>Q: What about patterned curtains in small rooms?</strong><br>
                A: Choose small-scale, subtle patterns. Large, bold patterns overwhelm small spaces. Vertical patterns are particularly effective for creating height.</p>
            </div>
        `,
        category: 'decor-tips',
        image: '/images/sheer-curtains-living-room-nairobi.jpg',
        date: '2025-12-15',
        readTime: '5 min read',
        keywords: ['curtain colors small rooms', 'curtain color guide Nairobi', 'small room curtain tips', 'expanding space with curtains'],
    },
    {
        slug: 'motorized-curtains-kenya-cost-installation',
        title: 'Motorized Curtains in Kenya: Cost, Installation & Is It Worth It?',
        excerpt: 'Explore motorized curtains in Kenya. Learn about costs, installation process, benefits, and whether smart curtains are right for your home.',
        relatedCollection: '/motorized-curtains-kenya',
        collectionName: 'Motorized Curtains',
        content: `
            <h2>Motorized Curtains in Kenya: Cost, Installation & Is It Worth It?</h2>
            
            <p>Motorized curtains represent the future of window treatments, offering convenience, luxury, and smart home integration. As this technology becomes more accessible in Kenya, many Nairobi homeowners are wondering if the investment is worthwhile. Here's everything you need to know.</p>
            
            <h3>What Are Motorized Curtains?</h3>
            
            <p>Motorized curtains use electric motors to open and close via remote control, smartphone app, voice commands, or automation. They eliminate manual operation and can be programmed for specific times or integrated with smart home systems.</p>
            
            <h3>Cost Breakdown in Kenya</h3>
            
            <h4>Motor Systems</h4>
            <ul>
                <li><strong>Basic motors:</strong> KES 8,000 - 15,000 per window</li>
                <li><strong>Mid-range motors:</strong> KES 15,000 - 25,000 per window</li>
                <li><strong>Premium motors:</strong> KES 30,000 - 50,000 per window</li>
            </ul>
            
            <h4>Complete Package Costs</h4>
            <ul>
                <li><strong>Budget setup:</strong> KES 15,000 - 25,000 per window (includes motor, basic fabric, track)</li>
                <li><strong>Standard setup:</strong> KES 25,000 - 40,000 per window (better motor, quality fabric, professional installation)</li>
                <li><strong>Premium setup:</strong> KES 40,000 - 70,000 per window (top-tier motor, luxury fabric, smart home integration)</li>
            </ul>
            
            <h3>Installation Process</h3>
            
            <h4>Step 1: Consultation and Measurement</h4>
            <p>Professional assessment of your windows, electrical requirements, and automation preferences. Mohaa offers free consultation and measurement.</p>
            
            <h4>Step 2: System Selection</h4>
            <p>Choose motor type (hardwired or battery-powered), control method (remote, app, voice), and fabric selection based on your needs and budget.</p>
            
            <h4>Step 3: Electrical Preparation</h4>
            <p>For hardwired systems, electrical work may be required. Battery-powered systems offer easier installation but require periodic battery replacement.</p>
            
            <h4>Step 4: Track and Motor Installation</h4>
            <p>Professional installation of the curtain track and motor system. This typically takes 1-2 hours per window.</p>
            
            <h4>Step 5: Fabric Mounting and Programming</h4>
            <p>Curtains are attached to the motorized track, and the system is programmed for your preferred operation methods and schedules.</p>
            
            <h4>Step 6: Testing and Training</h4>
            <p>Full system testing and user training to ensure you're comfortable operating your new motorized curtains.</p>
            
            <h3>Benefits of Motorized Curtains</h3>
            
            <ul>
                <li><strong>Convenience:</strong> Open and close curtains without leaving your seat</li>
                <li><strong>Accessibility:</strong> Perfect for hard-to-reach windows or those with mobility issues</li>
                <li><strong>Energy Efficiency:</strong> Automated schedules optimize natural light and temperature control</li>
                <li><strong>Security:</strong> Automated operation simulates occupancy when you're away</li>
                <li><strong>Smart Home Integration:</strong> Works with Alexa, Google Home, and home automation systems</li>
                <li><strong>Precise Control:</strong> Set exact opening positions for perfect light control</li>
                <li><strong>Child Safety:</strong> No cords - safer for homes with children and pets</li>
            </ul>
            
            <h3>Control Options</h3>
            
            <ul>
                <li><strong>Remote control:</strong> Simple, reliable handheld remotes</li>
                <li><strong>Smartphone apps:</strong> Control from anywhere via WiFi</li>
                <li><strong>Voice commands:</strong> Integration with Alexa, Google Assistant</li>
                <li><strong>Wall switches:</strong> Traditional-style switches for motorized operation</li>
                <li><strong>Automation:</strong> Scheduled opening/closing based on time of day</li>
                <li><strong>Sensors:</strong> Light and temperature sensors for automatic adjustment</li>
            </ul>
            
            <h3>Is It Worth It for You?</h3>
            
            <h4>Ideal for:</h4>
            <ul>
                <li>Hard-to-reach windows (skylights, high windows)</li>
                <li>Large or heavy curtains</li>
                <li>Smart home enthusiasts</li>
                <li>Those with mobility challenges</li>
                <li>Homeowners seeking luxury and convenience</li>
                <li>Security-conscious individuals</li>
            </ul>
            
            <h4>May not be necessary for:</h4>
            <ul>
                <li>Small, easily accessible windows</li>
                <li>Rental properties (unless landlord approves)</li>
                <li>Those on tight budgets</li>
                <li>Simple, traditional homes</li>
            </ul>
            
            <h3>Maintenance and Longevity</h3>
            
            <ul>
                <li><strong>Motors:</strong> Last 5-10 years with proper use</li>
                <li><strong>Battery systems:</strong> Require battery replacement every 1-2 years</li>
                <li><strong>Hardwired systems:</strong> Minimal maintenance required</li>
                <li><strong>Tracks:</strong> Occasional cleaning to ensure smooth operation</li>
                <li><strong>Fabric:</strong> Same maintenance as standard curtains</li>
            </ul>
            
            <h3>Nairobi-Specific Considerations</h3>
            
            <p>For Nairobi homes:</p>
            
            <ul>
                <li><strong>Power stability:</strong> Consider battery backup or UPS for areas with frequent outages</li>
                <li><strong>Dust:</strong> Regular track cleaning prevents dust buildup affecting motor performance</li>
                <li><strong>Heat:</strong> Motors are designed for Kenyan climate but avoid direct sun exposure on motor units</li>
                <li><strong>Security:</strong> Automated curtain operation is particularly valuable in Nairobi's security-conscious environment</li>
            </ul>
            
            <div class="blog-cta">
                <a href="https://wa.me/254705155727?text=Hi%20Mohaa,%20I%20want%20to%20learn%20about%20motorized%20curtains" class="btn btn-primary" target="_blank">Get Motorized Curtain Quote</a>
            </div>
            
            <h3>Frequently Asked Questions</h3>
            
            <div class="blog-faq">
                <p><strong>Q: Can motorized curtains work with my existing curtains?</strong><br>
                A: In many cases, yes. Your existing curtains can be adapted to motorized tracks, though some modifications may be needed.</p>
                
                <p><strong>Q: What happens during power outages?</strong><br>
                A: Most systems have manual override options. Battery-powered systems continue working, while hardwired systems may need manual operation during outages.</p>
                
                <p><strong>Q: How long does installation take?</strong><br>
                A: Typically 1-2 hours per window for standard installations. Complex setups or electrical work may take longer.</p>
            </div>
        `,
        category: 'installation',
        image: '/images/motorized-curtains-office-nairobi.jpg',
        date: '2025-12-10',
        readTime: '8 min read',
        keywords: ['motorized curtains Kenya', 'smart curtains Nairobi', 'curtain automation cost', 'electric curtains Kenya'],
    },
    {
        slug: 'curtains-offices-commercial-spaces-nairobi',
        title: 'Choosing Curtains for Offices & Commercial Spaces',
        excerpt: 'Professional curtain solutions for Nairobi offices and commercial buildings. Learn about durability, light control, and corporate aesthetics.',
        relatedCollection: '/office-blinds-nairobi',
        collectionName: 'Office Blinds',
        content: `
            <h2>Choosing Curtains for Offices & Commercial Spaces</h2>
            
            <p>Commercial curtain requirements differ significantly from residential needs. Nairobi offices, hotels, restaurants, and retail spaces demand durability, functionality, and professional aesthetics. Here's how to choose the right curtains for your commercial space.</p>
            
            <h3>Key Considerations for Commercial Spaces</h3>
            
            <h4>Durability</h4>
            <p>Commercial curtains face heavy use and must withstand:</p>
            <ul>
                <li>Frequent opening and closing</li>
                <li>Higher dust and dirt exposure</li>
                <li>Potential wear from cleaning</li>
                <li>Longer operating hours than residential</li>
            </ul>
            
            <h4>Light Control</h4>
            <p>Different commercial spaces have varying light requirements:</p>
            <ul>
                <li><strong>Offices:</strong> Glare reduction for computer work, privacy for meetings</li>
                <li><strong>Retail:</strong> Product display lighting, customer comfort</li>
                <li><strong>Restaurants:</strong> Ambiance control, privacy for dining areas</li>
                <li><strong>Hotels:</strong> Guest comfort, blackout for sleeping areas</li>
            </ul>
            
            <h4>Fire Safety</h4>
            <p>Commercial spaces often require fire-retardant fabrics:</p>
            <ul>
                <li>Check local building codes and regulations</li>
                <li>Choose certified fire-retardant materials</li>
                <li>Consider flame-resistant treatments</li>
            </ul>
            
            <h3>Office Curtain Solutions</h3>
            
            <h4>Open Plan Offices</h4>
            <ul>
                <li>Light-filtering sheers to reduce glare while maintaining openness</li>
                <li>Neutral colors for professional appearance</li>
                <li>Durable fabrics that withstand daily use</li>
                <li>Consider motorized options for large banks of windows</li>
            </ul>
            
            <h4>Conference Rooms</h4>
            <ul>
                <li>Blackout curtains for presentations and video conferences</li>
                <li>Acoustic curtains for sound dampening</li>
                <li>Professional colors (navy, gray, charcoal)</li>
                <li>Easy operation for frequent use</li>
            </ul>
            
            <h4>Executive Offices</h4>
            <ul>
                <li>Layered curtains (sheer + blackout) for versatility</li>
                <li>Premium fabrics for luxury appearance</li>
                <li>Custom designs reflecting corporate identity</li>
                <li>Motorized options for convenience</li>
            </ul>
            
            <h3>Hotel Curtain Solutions</h3>
            
            <h4>Guest Rooms</h4>
            <ul>
                <li>Blackout curtains essential for quality sleep</li>
                <li>Durable, easy-to-clean fabrics</li>
                <li>Fire-retardant materials required</li>
                <li>Consistent design across all rooms</li>
                <li>Consider motorized options for luxury hotels</li>
            </ul>
            
            <h4>Lobbies and Common Areas</h4>
            <ul>
                <li>Grand, impressive curtains for first impressions</li>
                <li>Light-filtering for welcoming atmosphere</li>
                <li>High-quality fabrics that withstand heavy traffic</li>
                <li>Custom designs matching hotel branding</li>
            </ul>
            
            <h3>Restaurant Curtain Solutions</h3>
            
            <h4>Dining Areas</h4>
            <ul>
                <li>Light control for ambiance adjustment</li>
                <li>Privacy for intimate dining</li>
                <li>Easy-to-clean fabrics (food spills, grease)</li>
                <li>Colors and patterns matching restaurant theme</li>
            </ul>
            
            <h4>Private Dining/Event Spaces</h4>
            <ul>
                <li>Blackout for audiovisual presentations</li>
                <li>Sound-dampening acoustic curtains</li>
                <li>Versatile lighting control</li>
                <li>Motorized for easy operation during events</li>
            </ul>
            
            <h3>Retail Space Curtain Solutions</h3>
            
            <ul>
                <li>Light control to highlight products</li>
                <li>Privacy for changing rooms and back-of-house</li>
                <li>Durable fabrics for high-traffic areas</li>
                <li>Branding opportunities through custom designs</li>
                <li>Consider motorized for large display windows</li>
            </ul>
            
            <h3>Fabric Recommendations for Commercial Use</h3>
            
            <ul>
                <li><strong>Synthetic blends:</strong> Durable, stain-resistant, easy to clean</li>
                <li><strong>Treated fabrics:</strong> Fire-retardant, antimicrobial treatments</li>
                <li><strong>Heavyweight fabrics:</strong> Better durability for high-use areas</li>
                <li><strong>Dark colors:</strong> Hide stains and wear better than light colors</li>
                <li><strong>Patterns:</strong> Help hide wear and stains</li>
            </ul>
            
            <h3>Installation Considerations</h3>
            
            <ul>
                <li><strong>Commercial-grade hardware:</strong> Heavy-duty tracks and rods</li>
                <li><strong>Professional installation:</strong> Essential for commercial applications</li>
                <li><strong>Accessibility:</strong> Consider operation frequency and ease</li>
                <li><strong>Maintenance access:</strong> Plan for cleaning and repairs</li>
                <li><strong>Building regulations:</strong> Ensure compliance with local codes</li>
            </ul>
            
            <h3>Cost Considerations</h3>
            
            <p>Commercial curtain investments:</p>
            
            <ul>
                <li><strong>Initial cost:</strong> Higher than residential due to durability requirements</li>
                <li><strong>Longevity:</strong> Commercial curtains last 5-10 years with proper care</li>
                <li><strong>Maintenance:</strong> Budget for professional cleaning</li>
                <li><strong>Replacement:</strong> Plan for eventual replacement in capital budgets</li>
            </ul>
            
            <h3>Why Choose Mohaa for Commercial Projects?</h3>
            
            <ul>
                <li>Experience with Nairobi's commercial sector</li>
                <li>Commercial-grade fabric selection</li>
                <li>Professional installation teams</li>
                <li>Bulk pricing for large projects</li>
                <li>Maintenance and support services</li>
                <li>Custom design capabilities</li>
            </ul>
            
            <div class="blog-cta">
                <a href="https://wa.me/254705155727?text=Hi%20Mohaa,%20I%20need%20commercial%20curtain%20solutions" class="btn btn-primary" target="_blank">Get Commercial Quote</a>
            </div>
            
            <h3>Frequently Asked Questions</h3>
            
            <div class="blog-faq">
                <p><strong>Q: Are commercial curtains more expensive than residential?</strong><br>
                A: Yes, due to durability requirements, fire safety certifications, and commercial-grade hardware. However, they last longer and reduce replacement frequency.</p>
                
                <p><strong>Q: How often should commercial curtains be cleaned?</strong><br>
                A: Professional cleaning every 6-12 months is recommended for commercial spaces, with more frequent cleaning for high-traffic areas like restaurants.</p>
                
                <p><strong>Q: Can you match curtains to our corporate branding?</strong><br>
                A: Absolutely. We offer custom fabric printing and color matching to align with your corporate identity and brand guidelines.</p>
            </div>
        `,
        category: 'office',
        image: '/images/luxury-curtains-installation-nairobi.jpg',
        date: '2025-12-05',
        readTime: '7 min read',
        keywords: ['commercial curtains Nairobi', 'office curtains Kenya', 'hotel curtains', 'restaurant curtains'],
    },
    {
        slug: 'hotel-curtain-standards-kenya',
        title: 'Hotel Curtain Standards: What Most People Get Wrong',
        excerpt: 'Understanding hotel-grade curtains for hospitality businesses. Learn about quality standards, durability, and guest comfort requirements.',
        relatedCollection: '/motorized-curtains-kenya',
        collectionName: 'Motorized Curtains',
        content: `
            <h2>Hotel Curtain Standards: What Most People Get Wrong</h2>
            
            <p>Hotel curtains serve critical functions beyond aesthetics - they impact guest satisfaction, energy efficiency, and operational costs. Many Nairobi hotels compromise on curtain quality, leading to poor reviews and higher expenses. Here's what you need to know about proper hotel curtain standards.</p>
            
            <h3>The Blackout Requirement</h3>
            
            <p>Complete darkness is non-negotiable for hotel guest rooms:</p>
            
            <ul>
                <li><strong>99-100% light blockage:</strong> Essential for quality sleep</li>
                <li><strong>No light gaps:</strong> Proper side returns and top coverage</li>
                <li><strong>Consistent performance:</strong> Must work across all room types</li>
                <li><strong>Guest expectation:</strong> Standard in quality hotels worldwide</li>
            </ul>
            
            <h3>Fire Safety Standards</h3>
            
            <p>Hotel curtains must meet strict fire safety regulations:</p>
            
            <ul>
                <li><strong>Fire-retardant certification:</strong> Required by most building codes</li>
                <li><strong>Flame spread ratings:</strong> Must meet specific standards</li>
                <li><strong>Smoke development:</strong> Limited smoke production in fire conditions</li>
                <li><strong>Documentation:</strong> Maintain certificates for regulatory compliance</li>
            </ul>
            
            <h3>Durability and Longevity</h3>
            
            <p>Hotel curtains face unique challenges:</p>
            
            <ul>
                <li><strong>Frequent use:</strong> Multiple guests per week</li>
                <li><strong>Cleaning frequency:</strong> Regular professional cleaning required</li>
                <li><strong>UV exposure:</strong> Sun damage over time</li>
                <li><strong>Wear patterns:</strong> High-touch areas degrade faster</li>
            </ul>
            
            <p>Quality hotel curtains should last 5-7 years with proper maintenance.</p>
            
            <h3>Acoustic Properties</h3>
            
            <p>Sound dampening is increasingly important:</p>
            
            <ul>
                <li><strong>Noise reduction:</strong> Curtains absorb and block sound</li>
                <li><strong>Guest privacy:</strong> Prevents sound transmission between rooms</li>
                <li><strong>Street noise:</strong> Particularly important in urban Nairobi locations</li>
                <li><strong>Thicker fabrics:</strong> Better acoustic performance</li>
            </ul>
            
            <h3>Common Mistakes Hotels Make</h3>
            
            <h4>Mistake #1: Insufficient Blackout</h4>
            <p>Using residential-grade blackout that doesn't provide complete darkness. Guests notice light leaks immediately and complain in reviews.</p>
            
            <h4>Mistake #2: Wrong Fabric Weight</h4>
            <p>Choosing lightweight fabrics to save costs. These don't drape properly, don't block light effectively, and wear out quickly.</p>
            
            <h4>Mistake #3: Ignoring Fire Safety</h4>
            <p>Using non-certified fabrics to reduce costs. This violates building codes and creates serious safety liabilities.</p>
            
            <h4>Mistake #4: Poor Installation</h4>
            <p>Inadequate side returns and top coverage create light gaps. Professional installation is essential for hotel applications.</p>
            
            <h4>Mistake #5: Inconsistent Quality</h4>
            <p>Varying curtain quality across room categories creates inconsistent guest experiences and damages brand reputation.</p>
            
            <h3>Hotel Curtain Specifications</h3>
            
            <h4>Fabric Requirements</h4>
            <ul>
                <li>Minimum 80% blackout rating</li>
                <li>Fire-retardant certification</li>
                <li>Minimum 250g/m² fabric weight</li>
                <li>Stain-resistant treatment</li>
                <li>UV protection for longevity</li>
            </ul>
            
            <h4>Installation Standards</h4>
            <ul>
                <li>Minimum 10cm side returns for light blocking</li>
                <li>Top coverage to prevent light leakage</li>
                <li>Heavy-duty commercial tracks</li>
                <li>Proper mounting for frequent operation</li>
                <li>Smooth operation for guest comfort</li>
            </ul>
            
            <h3>Room Type Considerations</h3>
            
            <h4>Standard Rooms</h4>
            <ul>
                <li>Consistent blackout performance</li>
                <li>Durable, easy-to-clean fabrics</li>
                <li>Neutral, professional appearance</li>
                <li>Cost-effective without compromising quality</li>
            </ul>
            
            <h4>Suites</h4>
            <ul>
                <li>Enhanced aesthetics and luxury</li>
                <li>Premium fabric options</li>
                <li>Layered treatments (sheer + blackout)</li>
                <li>Motorized options for convenience</li>
            </ul>
            
            <h4>Conference Rooms</h4>
            <ul>
                <li>Blackout for presentations</li>
                <li>Acoustic properties for sound control</li>
                <li>Professional appearance</li>
                <li>Easy operation for staff</li>
            </ul>
            
            <h3>Maintenance Protocols</h3>
            
            <ul>
                <li><strong>Regular inspection:</strong> Check for wear, damage, light leaks</li>
                <li><strong>Professional cleaning:</strong> Every 6-12 months</li>
                <li><strong>Prompt repairs:</strong> Address issues immediately</li>
                <li><strong>Replacement planning:</strong> Budget for eventual replacement</li>
                <li><strong>Documentation:</strong> Maintain records of maintenance and certifications</li>
            </ul>
            
            <h3>Cost vs. Quality Analysis</h3>
            
            <p>While quality hotel curtains require higher initial investment:</p>
            
            <ul>
                <li><strong>Longer lifespan:</strong> 5-7 years vs 2-3 years for cheap alternatives</li>
                <li><strong>Better reviews:</strong> Guests notice and comment on curtain quality</li>
                <li><strong>Lower replacement costs:</strong> Fewer replacements over time</li>
                <li><strong>Energy savings:</strong> Better insulation reduces HVAC costs</li>
                <li><strong>Liability reduction:</strong> Proper fire safety certification</li>
            </ul>
            
            <h3>Nairobi Hotel Considerations</h3>
            
            <p>Specific to Nairobi's hospitality market:</p>
            
            <ul>
                <li><strong>Urban noise:</strong> Acoustic curtains particularly valuable</li>
                <li><strong>Climate:</strong> Thermal curtains help with temperature control</li>
                <li><strong>Power stability:</strong> Consider manual backup for motorized systems</li>
                <li><strong>Local regulations:</strong> Ensure compliance with Kenyan building codes</li>
            </ul>
            
            <div class="blog-cta">
                <a href="https://wa.me/254705155727?text=Hi%20Mohaa,%20I%20need%20hotel%20curtain%20solutions" class="btn btn-primary" target="_blank">Get Hotel Curtain Quote</a>
            </div>
            
            <h3>Frequently Asked Questions</h3>
            
            <div class="blog-faq">
                <p><strong>Q: What's the difference between hotel and residential blackout curtains?</strong><br>
                A: Hotel curtains use heavier fabrics, better lining, and professional installation to achieve 99-100% blackout. Residential curtains typically only achieve 80-95% blackout.</p>
                
                <p><strong>Q: How often should hotel curtains be replaced?</strong><br>
                A: Quality hotel curtains last 5-7 years with proper maintenance. Cheaper alternatives may need replacement every 2-3 years.</p>
                
                <p><strong>Q: Are motorized curtains worth it for hotels?</strong><br>
                A: For suites and luxury properties, yes. They enhance guest experience and reduce wear from manual operation. For standard rooms, manual operation is typically sufficient.</p>
            </div>
        `,
        category: 'office',
        image: '/images/hotel-curtain-standards-kenya.jpg',
        date: '2025-11-28',
        readTime: '8 min read',
        keywords: ['hotel curtains Kenya', 'hospitality curtains Nairobi', 'hotel blackout curtains', 'commercial curtain standards'],
    },
    {
        slug: 'where-to-buy-quality-curtains-nairobi',
        title: 'Where to Buy Quality Curtains in Nairobi',
        excerpt: 'Find reliable curtain suppliers across Nairobi. Learn what to look for in terms of quality, service, and pricing for your budget.',
        relatedCollection: '/collections',
        collectionName: 'All Collections',
        content: `
            <h2>Where to Buy Quality Curtains in Nairobi</h2>
            
            <p>Finding quality curtains in Nairobi requires knowing what to look for and where to shop. This guide helps you identify reliable curtain suppliers, evaluate quality, and make informed purchasing decisions for your home or business.</p>
            
            <h3>What Makes a Quality Curtain Supplier?</h3>
            
            <h4>Fabric Selection</h4>
            <p>Quality suppliers offer:</p>
            <ul>
                <li>Wide variety of fabric types and qualities</li>
                <li>Both local and imported options</li>
                <li>Different price tiers to suit various budgets</li>
                <li>Fabric samples for examination</li>
                <li>Clear information about fabric origin and composition</li>
            </ul>
            
            <h4>Professional Services</h4>
            <p>Look for suppliers who provide:</p>
            <ul>
                <li>Free measurement services</li>
                <li>Professional installation</li>
                <li>Custom sizing and tailoring</li>
                <li>Expert advice on fabric and style selection</li>
                <li>After-sales support and warranty</li>
            </ul>
            
            <h4>Reputation and Experience</h4>
            <p>Quality indicators:</p>
            <ul>
                <li>Established business with local presence</li>
                <li>Positive customer reviews and testimonials</li>
                <li>Portfolio of completed projects</li>
                <li>Physical showroom for fabric inspection</li>
                <li>Knowledgeable, helpful staff</li>
            </ul>
            
            <h3>Nairobi Curtain Shopping Areas</h3>
            
            <h4>Eastleigh</h4>
            <p>Nairobi's curtain hub with numerous shops along 1st Avenue and surrounding streets. Known for:</p>
            <ul>
                <li>Wide variety of Turkish and Chinese curtains</li>
                <li>Competitive pricing</li>
                <li>Custom tailoring services</li>
                <li>Quick turnaround times</li>
            </ul>
            
            <h4>Central Business District</h4>
            <p>Several established curtain shops in the CBD offer:</p>
            <ul>
                <li>Premium fabric selections</li>
                <li>Professional installation services</li>
                <li>Commercial and residential solutions</li>
                <li>Higher-end pricing</li>
            </ul>
            
            <h4>Westlands and Karen</h4>
            <p>Upscale areas feature:</p>
            <ul>
                <li>Luxury curtain suppliers</li>
                <li>Designer fabrics and custom work</li>
                <li>High-end motorized solutions</li>
                <li>Premium pricing</li>
            </ul>
            
            <h3>Evaluating Curtain Quality</h3>
            
            <h4>Fabric Inspection</h4>
            <p>When examining curtains:</p>
            <ul>
                <li><strong>Weight:</strong> Heavier fabrics typically indicate better quality</li>
                <li><strong>Weave:</strong> Tight, even weaves suggest durability</li>
                <li><strong>Finish:</strong> Smooth, consistent finishes without flaws</li>
                <li><strong>Lining:</strong> Quality curtains have proper lining</li>
                <li><strong>Hemming:</strong> Clean, professional hems</li>
            </ul>
            
            <h4>Construction Quality</h4>
            <p>Check for:</p>
            <ul>
                <li>Even stitching throughout</li>
                <li>Properly aligned patterns</li>
                <li>Strong, durable thread</li>
                <li>Reinforced stress points</li>
                <li>Quality heading construction</li>
            </ul>
            
            <h3>Price Comparison Guide</h3>
            
            <h4>Budget Range (KES 1,500 - 3,000 per meter)</h4>
            <ul>
                <li>Basic fabrics, often local</li>
                <li>Simple construction</li>
                <li>Limited color and pattern options</li>
                <li>May require separate lining</li>
                <li>Suitable for temporary or low-use applications</li>
            </ul>
            
            <h4>Mid-Range (KES 3,000 - 6,000 per meter)</h4>
            <ul>
                <li>Better fabric quality</li>
                <li>Included lining</li>
                <li>Wider selection</li>
                <li>Professional construction</li>
                <li>Good balance of quality and value</li>
            </ul>
            
            <h4>Premium (KES 6,000 - 15,000+ per meter)</h4>
            <ul>
                <li>Luxury imported fabrics</li>
                <li>Superior construction</li>
                <li>Custom design options</li>
                <li>Premium linings</li>
                <li>Best for long-term investment</li>
            </ul>
            
            <h3>Questions to Ask Suppliers</h3>
            
            <ul>
                <li>What is the fabric composition and origin?</li>
                <li>Is the price inclusive of lining?</li>
                <li>Do you provide free measurement?</li>
                <li>What is included in installation?</li>
                <li>What is your warranty policy?</li>
                <li>Can I see fabric samples?</li>
                <li>What is the typical turnaround time?</li>
                <li>Do you offer after-sales service?</li>
            </ul>
            
            <h3>Red Flags to Avoid</h3>
            
            <ul>
                <li>Suppliers unwilling to show fabric samples</li>
                <li>Vague pricing without clear breakdowns</li>
                <li>No physical address or showroom</li>
                <li>Poor communication or responsiveness</li>
                <li>Unrealistically low prices (quality compromise)</li>
                <li>No warranty or after-sales support</li>
                <li>Pressure tactics for quick decisions</li>
            </ul>
            
            <h3>Why Choose Mohaa Finest Curtains?</h3>
            
            <p>Located in Moyale Mall, Eastleigh, Mohaa offers:</p>
            
            <ul>
                <li><strong>Wide selection:</strong> Turkish, Chinese, and local fabrics across all price ranges</li>
                <li><strong>Free services:</strong> Measurement and consultation at no cost</li>
                <li><strong>Professional installation:</strong> Expert fitting for perfect results</li>
                <li><strong>Transparent pricing:</strong> Clear quotes with no hidden fees</li>
                <li><strong>Quality guarantee:</strong> Satisfaction warranty on all work</li>
                <li><strong>Convenience:</strong> WhatsApp ordering and communication</li>
                <li><strong>Experience:</strong> Serving Nairobi and across Kenya</li>
            </ul>
            
            <h3>Shopping Tips</h3>
            
            <ul>
                <li>Visit multiple suppliers to compare options</li>
                <li>Request fabric samples to take home</li>
                <li>Check how samples look in your actual space</li>
                <li>Get written quotes for accurate comparison</li>
                <li>Ask about current promotions or discounts</li>
                <li>Verify what's included in the price</li>
                <li>Check supplier's reputation online</li>
            </ul>
            
            <div class="blog-cta">
                <a href="https://wa.me/254705155727?text=Hi%20Mohaa,%20I%20want%20to%20visit%20your%20showroom" class="btn btn-primary" target="_blank">Visit Our Showroom</a>
            </div>
            
            <h3>Frequently Asked Questions</h3>
            
            <div class="blog-faq">
                <p><strong>Q: Should I buy ready-made or custom curtains?</strong><br>
                A: Custom curtains are recommended for proper fit and quality. Ready-made options may not fit your windows perfectly and often compromise on fabric quality.</p>
                
                <p><strong>Q: How do I know if a fabric is good quality?</strong><br>
                A: Check fabric weight (heavier is usually better), examine the weave tightness, look for consistent coloring, and ask about fabric composition and origin.</p>
                
                <p><strong>Q: Is it worth paying more for imported fabrics?</strong><br>
                A: For long-term investment, yes. Imported Turkish and Chinese fabrics typically offer superior durability, better aesthetics, and longer lifespan compared to cheaper alternatives.</p>
            </div>
        `,
        category: 'buying-guides',
        image: '/images/curtain-fabric-display-eastleigh.jpg',
        date: '2025-11-20',
        readTime: '7 min read',
        keywords: ['curtain shops Nairobi', 'where to buy curtains Kenya', 'curtain suppliers Eastleigh', 'quality curtains guide'],
    },
    {
        slug: 'curtain-ideas-modern-living-rooms-nairobi',
        title: 'Curtain Ideas for Modern Living Rooms',
        excerpt: 'Transform your living space with contemporary curtain designs. Perfect for Nairobi homes seeking modern aesthetics and elegance.',
        relatedCollection: '/custom-curtains-eastleigh',
        collectionName: 'Custom Curtains',
        content: `
            <h2>Curtain Ideas for Modern Living Rooms</h2>
            
            <p>Modern living rooms demand curtain designs that balance contemporary aesthetics with functionality. Whether you're renovating your Nairobi home or updating your living space, these curtain ideas will help you achieve a stylish, modern look.</p>
            
            <h3>Modern Curtain Styles</h3>
            
            <h4>Minimalist Eyelet Curtains</h4>
            <ul>
                <li>Clean, simple appearance</li>
                <li>Easy to open and close</li>
                <li>Works with contemporary decor</li>
                <li>Available in various fabric weights</li>
                <li>Ideal for modern Nairobi apartments</li>
            </ul>
            
            <h4>Floor-to-Ceiling Panels</h4>
            <ul>
                <li>Dramatic, elegant appearance</li>
                <li>Makes rooms feel larger</li>
                <li>Creates seamless vertical lines</li>
                <li>Perfect for high ceilings</li>
                <li>Popular in modern Nairobi homes</li>
            </ul>
            
            <h4>Layered Treatments</h4>
            <ul>
                <li>Sheer curtains behind blackout panels</li>
                <li>Versatile light control</li>
                <li>Added depth and texture</li>
                <li>Luxurious, sophisticated look</li>
                <li>Functional for day and night</li>
            </ul>
            
            <h3>Color Palettes for Modern Living Rooms</h3>
            
            <h4>Neutral Monochromatic</h4>
            <ul>
                <li>White, cream, gray, beige</li>
                <li>Clean, minimalist aesthetic</li>
                <li>Makes spaces feel larger</li>
                <li>Easy to coordinate with furniture</li>
                <li>Timeless and versatile</li>
            </ul>
            
            <h4>Earth Tones</h4>
            <ul>
                <li>Terracotta, sage, olive, warm gray</li>
                <li>Connects with Nairobi's natural environment</li>
                <li>Warm, inviting atmosphere</li>
                <li>Works with modern organic decor</li>
                <li>Growing trend in 2026</li>
            </ul>
            
            <h4>Bold Accent Colors</h4>
            <ul>
                <li>Navy, charcoal, deep green</li>
                <li>Statement pieces in neutral rooms</li>
                <li>Adds drama and sophistication</li>
                <li>Requires careful color coordination</li>
                <li>Best for larger living spaces</li>
            </ul>
            
            <h3>Pattern and Texture Ideas</h3>
            
            <h4>Geometric Patterns</h4>
            <ul>
                <li>Modern, contemporary appeal</li>
                <li>Works well in minimalist spaces</li>
                <li>Adds visual interest without overwhelming</li>
                <li>Available in subtle and bold options</li>
                <li>Popular in modern Nairobi interiors</li>
            </ul>
            
            <h4>Textured Solids</h4>
            <ul>
                <li>Linen, velvet, woven textures</li>
                <li>Adds depth without patterns</li>
                <li>Sophisticated, luxurious appearance</li>
                <li>Easy to coordinate with decor</li>
                <li>Timeless appeal</li>
            </ul>
            
            <h4>Subtle Stripes</h4>
            <ul>
                <li>Vertical stripes create height illusion</li>
                <li>Horizontal stripes add width</li>
                <li>Classic yet modern</li>
                <li>Works in various room sizes</li>
                <li>Versatile design element</li>
            </ul>
            
            <h3>Hardware and Accessories</h3>
            
            <h4>Sleek Metal Rods</h4>
            <ul>
                <li>Matte black, brushed nickel, chrome</li>
                <li>Minimalist finials or none at all</li>
                <li>Clean, modern appearance</li>
                <li>Durable and stylish</li>
                <li>Perfect for contemporary spaces</li>
            </ul>
            
            <h4>Hidden Tracks</h4>
            <ul>
                <li>Ceiling-mounted for seamless look</li>
                <li>Invisible hardware</li>
                <li>Focus on curtains, not rods</li>
                <li>Ideal for minimalist design</li>
                <li>Popular in modern apartments</li>
            </ul>
            
            <h4>Motorized Options</h4>
            <ul>
                <li>Ultimate modern convenience</li>
                <li>Smart home integration</li>
                <li>Clean appearance without cords</li>
                <li>Luxury feature</li>
                <li>Growing trend in Nairobi</li>
            </ul>
            
            <h3>Room Layout Considerations</h3>
            
            <h4>Small Living Rooms</h4>
            <ul>
                <li>Light colors to expand space</li>
                <li>Minimal patterns</li>
                <li>Mount rods high for height illusion</li>
                <li>Extend rods beyond window width</li>
                <li>Sheer or light-filtering fabrics</li>
            </ul>
            
            <h4>Large Living Rooms</h4>
            <ul>
                <li>Bolder colors and patterns</li>
                <li>Layered treatments for depth</li>
                <li>Floor-to-ceiling panels</li>
                <li>Luxury fabrics like velvet</li>
                <li>Dramatic, statement curtains</li>
            </ul>
            
            <h4>Open-Concept Living</h4>
            <ul>
                <li>Consistent curtain style throughout</li>
                <li>Neutral color palette</li>
                <li>Flow between spaces</li>
                <li>Consider sightlines from different areas</li>
                <li>Unified design approach</li>
            </ul>
            
            <h3>Lighting Integration</h3>
            
            <ul>
                <li><strong>Natural light:</strong> Sheer curtains maximize daylight</li>
                <li><strong>Artificial light:</strong> Consider how curtains interact with room lighting</li>
                <li><strong>Layering:</strong> Combine sheers and blackout for versatility</li>
                <li><strong>Reflection:</strong> Light-colored curtains reflect light, brightening spaces</li>
            </ul>
            
            <h3>2026 Trends in Modern Living Room Curtains</h3>
            
            <ul>
                <li><strong>Sustainable fabrics:</strong> Eco-friendly materials gaining popularity</li>
                <li><strong>Smart curtains:</strong> Motorization and automation</li>
                <li><strong>Bold textures:</strong> Heavy textures in neutral colors</li>
                <li><strong>Minimalist hardware:</strong> Sleek, unobtrusive rods and tracks</li>
                <li><strong>Layered simplicity:</strong> Clean layers without excessive ornamentation</li>
            </ul>
            
            <h3>Common Modern Living Room Mistakes</h3>
            
            <ul>
                <li>Curtains too short (should touch floor)</li>
                <li>Rods mounted too low (install higher)</li>
                <li>Wrong scale for room size</li>
                <li>Ignoring natural light patterns</li>
                <li>Clashing with existing decor</li>
                <li>Over-complicating with too many patterns</li>
            </ul>
            
            <div class="blog-cta">
                <a href="https://wa.me/254705155727?text=Hi%20Mohaa,%20I%20need%20modern%20curtain%20ideas%20for%20my%20living%20room" class="btn btn-primary" target="_blank">Get Design Advice</a>
            </div>
            
            <h3>Frequently Asked Questions</h3>
            
            <div class="blog-faq">
                <p><strong>Q: What curtain length is best for modern living rooms?</strong><br>
                A: Floor-length curtains that just touch the floor or hang 1-2cm above it are the modern standard. Avoid short curtains that break the clean vertical line.</p>
                
                <p><strong>Q: Can I mix patterns in a modern living room?</strong><br>
                A: Yes, but keep it subtle. One patterned element with solid curtains, or small-scale geometric patterns, works best. Avoid mixing multiple bold patterns.</p>
                
                <p><strong>Q: Are motorized curtains worth it for living rooms?</strong><br>
                A: For modern living rooms, especially with large or hard-to-reach windows, motorized curtains are an excellent investment that adds convenience and luxury.</p>
            </div>
        `,
        category: 'decor-tips',
        image: '/images/modern-curtains.jpg',
        date: '2025-11-15',
        readTime: '6 min read',
        keywords: ['modern curtain ideas Nairobi', 'living room curtains Kenya', 'contemporary curtain designs', 'curtain trends 2026'],
    },
];

const pageMeta = {
    home: {
        title: 'Curtains Nairobi | Custom Curtains Kenya | Curtain Prices - Mohaa',
        description:
            'Mohaa Finest Curtains sells custom curtains in Nairobi with free measurement, curtain prices per meter, WhatsApp quotes and professional installation from Moyale Mall Eastleigh. Free curtain measurement Kenya.',
        path: '/',
        image: '/images/curtain-showroom-eastleigh-nairobi.jpg',
        keywords: ['curtains Nairobi', 'curtains Kenya', 'custom curtains Nairobi', 'curtains Eastleigh', 'curtain prices', 'free curtain measurement Kenya'],
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
        title: 'Curtain Installation Nairobi | Free Measure | Curtain Prices KES - Mohaa',
        description:
            'Book curtain installation in Nairobi with free measurement, curtain prices KES 1,500-50,000 per meter, custom curtain design, rods, rails and accessories. WhatsApp Mohaa for a quote.',
        path: '/services',
        image: '/images/luxury-curtains-installation-nairobi.jpg',
        keywords: ['curtain installation Nairobi', 'free curtain measurement Nairobi', 'custom curtains Nairobi', 'curtain prices KES', 'curtain cost per meter Kenya'],
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
        image: '/images/free-curtain-measurement-nairobi.jpg',
        keywords: ['free curtain measurement Nairobi', 'how to order curtains Kenya', 'curtain quote Nairobi'],
    },
    about: {
        title: 'Curtain Shop Eastleigh Nairobi | Trusted Since - About Mohaa',
        description:
            'Mohaa Finest Curtains is a trusted curtain shop in Eastleigh Nairobi for custom curtains, free measurement, rods, rails and installation. Serving Nairobi and Kenya with quality curtains.',
        path: '/about',
        image: '/images/curtain-showroom-entrance-eastleigh.jpg',
        keywords: ['curtain shop Eastleigh', 'curtain shop Nairobi', 'Mohaa Finest Curtains', 'trusted curtain dealer Kenya'],
    },
    blog: {
        title: 'Curtain Tips Kenya | Curtain Prices | Nairobi Curtain Ideas - Mohaa',
        description:
            'Read curtain tips for Kenya: curtain prices per meter, fabric choices, measuring guides, blackout vs sheer curtains, how much curtains cost and interior ideas for Nairobi homes.',
        path: '/blog',
        image: '/images/curtain-fabric-display-eastleigh.jpg',
        keywords: ['curtain tips Kenya', 'curtain prices Kenya', 'how to choose curtains Nairobi', 'how much do curtains cost', 'curtain measurement guide'],
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
        ...extra,
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
    blogPosts,
}));

app.get('/services', (req, res) => renderPage(res, 'services', 'services', {
    schemas: [faqSchema()],
}));

app.get('/gallery', (req, res) => renderPage(res, 'gallery', 'gallery'));
app.get('/how-it-works', (req, res) => renderPage(res, 'how-it-works', 'howItWorks', { schemas: [faqSchema()] }));
app.get('/about', (req, res) => renderPage(res, 'about', 'about'));
app.get('/blog', (req, res) => renderPage(res, 'blog', 'blog', {
    blogPosts,
    req,
}));

// Individual blog post routes
blogPosts.forEach((post) => {
    app.get(`/blog/${post.slug}`, (req, res) => {
        const blogPostSchema = {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            image: absoluteUrl(post.image),
            datePublished: post.date,
            author: {
                '@type': 'Organization',
                name: BUSINESS.name,
            },
            publisher: {
                '@type': 'Organization',
                name: BUSINESS.name,
                logo: {
                    '@type': 'ImageObject',
                    url: absoluteUrl('/images/logo.jpeg'),
                },
            },
            description: post.excerpt,
            mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
        };

        renderPage(res, 'blog-post', 'blog', {
            meta: {
                title: `${post.title} | Mohaa Finest Curtains`,
                description: post.excerpt,
                path: `/blog/${post.slug}`,
                image: post.image,
                keywords: post.keywords,
            },
            schemas: [blogPostSchema, faqSchema()],
            breadcrumbs: [
                { name: 'Home', path: '/' },
                { name: 'Blog', path: '/blog' },
                { name: post.title, path: `/blog/${post.slug}` },
            ],
            post,
            blogPosts,
        });
    });
});
app.get('/contact', (req, res) => renderPage(res, 'contact', 'contact', { schemas: [faqSchema()] }));
app.get('/collections', (req, res) => renderPage(res, 'collections', 'collections', {
    schemas: [faqSchema(), ...products.map(productSchema)],
    blogPosts,
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
