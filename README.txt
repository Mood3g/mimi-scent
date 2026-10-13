VELOURA PERFUME WEBSITE — QUICK START
=====================================

This is a simple static four-page website made with HTML, CSS and JavaScript.
No PHP, React, database, build tools or installation are required.

FILES
-----
index.html      Home page
about.html      About page
products.html   Product catalogue with category filters
contact.html    Contact details and WhatsApp contact
style.css       Shared responsive styling
script.js       Shared functionality, products and seller settings
images/         Optional folder for your own downloaded product images

HOW TO OPEN
-----------
1. Extract the ZIP file.
2. Open the veloura-perfume-website folder.
3. Double-click index.html to preview it in your browser.
4. For editing, open the folder in VS Code or another code editor.

IMPORTANT: CONFIGURE THE SELLER'S DETAILS
-----------------------------------------
Open script.js and find SITE_CONFIG near the top.

whatsappNumber: "2348012345678"
Replace this with the seller's real WhatsApp number in international format:
- Nigeria example: 2348012345678
- Do not include a + sign, spaces, or the first 0 of the local number.

email: "hello@example.com"
Replace with the seller's real business email.

location: "Nigeria"
Replace with the seller's city or delivery/service area.

instagramUrl
Optional setting for the Instagram profile. Add your profile URL if you want to use it.

PRODUCTS AND PRICES
-------------------
In script.js, find the PRODUCTS array. Edit each product's:
- name
- notes
- category (fresh, floral, or warm)
- price (number only, in naira)
- label
- image URL
- description

The current names, prices and product images are demo content. Replace them with the seller's actual products and prices before publishing. The images are loaded from Unsplash and therefore require an internet connection. You can also use your own images and update each product image path, for example:
images/amber-veil.jpg

WHATSAPP ORDERING
-----------------
Every product has an "Order on WhatsApp" link. Clicking it opens WhatsApp with a prepared message containing the product name and displayed price. The seller and customer can then confirm availability, delivery and payment in chat.

If the WhatsApp number is still the example number, links open WhatsApp with the message but will not direct to the correct seller. Set the real number before launch.

HOSTING
-------
You can publish these static files on GitHub Pages, Netlify, or any regular web host that serves HTML/CSS/JS. No backend is required for this version.

DESIGN NOTES
------------
The site uses Google Fonts and remote Unsplash product images. An internet connection is needed for those assets. Replace the sample brand name "Veloura Scent Studio" with the actual business name in the HTML files and SITE_CONFIG in script.js.
