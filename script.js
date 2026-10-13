/*
  VELOURA WEBSITE SETTINGS
  1. Replace whatsappNumber with the seller's WhatsApp number in international format.
     Nigeria example: 2348012345678 (no +, spaces, or leading 0).
  2. Update email, location, social links and product details below.
*/
const SITE_CONFIG = {
  businessName: "Veloura Scent Studio",
  whatsappNumber: "2348012345678", // CHANGE THIS to the seller's real WhatsApp number
  email: "hello@example.com",       // CHANGE THIS to the seller's business email
  location: "Nigeria",              // CHANGE THIS to the seller's city/service area
  instagramUrl: "",                 // Optional: paste the Instagram profile URL
  currency: "NGN"
};

const PRODUCTS = [
  { id: "amber-veil", name: "Amber Veil", notes: "Amber · Vanilla · Sandalwood", category: "warm", price: 28500, label: "BESTSELLER", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=85", description: "Warm, smooth and quietly captivating." },
  { id: "petal-noir", name: "Petal Noir", notes: "Rose · Peony · Musk", category: "floral", price: 32000, label: "A SOFT ROMANCE", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=85", description: "A graceful floral with a modern finish." },
  { id: "citrus-muse", name: "Citrus Muse", notes: "Bergamot · Citrus · White tea", category: "fresh", price: 24500, label: "FRESH & BRIGHT", image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=85", description: "Fresh, uplifting and effortlessly clean." },
  { id: "oud-afterglow", name: "Oud Afterglow", notes: "Oud · Spice · Dark woods", category: "warm", price: 38000, label: "BOLD CHARACTER", image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=900&q=85", description: "Deep woods and spice with a memorable trail." },
  { id: "bloom-theory", name: "Bloom Theory", notes: "Jasmine · Orange blossom · Musk", category: "floral", price: 27000, label: "EVERYDAY FAVOURITE", image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=900&q=85", description: "A luminous bouquet with a soft, clean finish." },
  { id: "blue-hour", name: "Blue Hour", notes: "Marine notes · Lavender · Cedar", category: "fresh", price: 30000, label: "COOL & REFINED", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=85", description: "Crisp, calm and polished from day to night." }
];

function formatPrice(price) {
  return new Intl.NumberFormat("en-NG", { style: "currency", currency: SITE_CONFIG.currency, maximumFractionDigits: 0 }).format(price);
}

function whatsappUrl(message) {
  const number = (SITE_CONFIG.whatsappNumber || "").replace(/\D/g, "");
  const text = encodeURIComponent(message);
  if (!number || number === "2348012345678") {
    return `https://wa.me/?text=${text}`;
  }
  return `https://wa.me/${number}?text=${text}`;
}

function orderMessage(product) {
  return `Hello ${SITE_CONFIG.businessName}! I'm interested in ordering ${product.name} (${formatPrice(product.price)}). Please let me know if it's available and how I can complete my order.`;
}

function productCard(product) {
  return `
    <article class="product-card" data-category="${product.category}">
      <a class="product-image-link" href="#" aria-label="Enquire about ${product.name}" data-order-id="${product.id}">
        <div class="product-image-wrap"><img src="${product.image}" alt="${product.name} perfume" loading="lazy"><span class="product-label">${product.label}</span><span class="product-arrow">↗</span></div>
      </a>
      <div class="product-info"><div><h3>${product.name}</h3><p>${product.notes}</p></div><strong class="product-price">${formatPrice(product.price)}</strong></div>
      <p class="product-description">${product.description}</p>
      <a class="order-button" href="${whatsappUrl(orderMessage(product))}" target="_blank" rel="noopener noreferrer">Order on WhatsApp <span>↗</span></a>
    </article>`;
}

function bindWhatsAppLinks() {
  document.querySelectorAll(".whatsapp-link").forEach(link => {
    const message = link.dataset.message || `Hello ${SITE_CONFIG.businessName}! I'd like to make an enquiry.`;
    link.href = whatsappUrl(message);
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
}

function renderProducts() {
  const featured = document.getElementById("featured-products");
  const all = document.getElementById("all-products");
  if (featured) featured.innerHTML = PRODUCTS.slice(0, 3).map(productCard).join("");
  if (all) {
    all.innerHTML = PRODUCTS.map(productCard).join("");
    updateProductCount("all");
    document.querySelectorAll(".filter-btn").forEach(button => {
      button.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(item => item.classList.toggle("active", item === button));
        const filter = button.dataset.filter;
        document.querySelectorAll("#all-products .product-card").forEach(card => {
          card.hidden = filter !== "all" && card.dataset.category !== filter;
        });
        updateProductCount(filter);
      });
    });
  }
}

function updateProductCount(filter) {
  const count = document.getElementById("product-count");
  if (!count) return;
  const visible = [...document.querySelectorAll("#all-products .product-card")].filter(card => !card.hidden).length;
  count.textContent = `${visible} ${visible === 1 ? "fragrance" : "fragrances"}${filter !== "all" ? " selected" : " in our collection"}`;
}

function setupNavigation() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  }));
}

function setupContactDetails() {
  const emailText = document.getElementById("contact-email-text");
  const emailLink = document.getElementById("email-link");
  const locationText = document.getElementById("business-location-text");
  if (emailText && SITE_CONFIG.email && SITE_CONFIG.email !== "hello@example.com") emailText.textContent = SITE_CONFIG.email;
  if (emailLink && SITE_CONFIG.email) {
    emailLink.href = `mailto:${SITE_CONFIG.email}`;
    emailLink.textContent = "Send us an email →";
  }
  if (locationText && SITE_CONFIG.location && SITE_CONFIG.location !== "Nigeria") locationText.textContent = SITE_CONFIG.location;
}

document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  renderProducts();
  bindWhatsAppLinks();
  setupContactDetails();
  document.querySelectorAll(".current-year").forEach(node => node.textContent = new Date().getFullYear());
});