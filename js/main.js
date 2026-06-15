/* ═══════════════════════════════════════════
   EL CABO TACO – main.js
═══════════════════════════════════════════ */

// ── Language System ──────────────────────────
let currentLang = localStorage.getItem('cabo-lang') || 'es';

function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = translations[lang]?.[key];
    if (text !== undefined) {
      // Support \n for line breaks in info cards
      el.innerHTML = text.replace(/\n/g, '<br>');
    }
  });

  // Update html lang attribute
  document.documentElement.lang = lang === 'es' ? 'es' : 'en';

  // Toggle body class for lang button display
  document.body.classList.toggle('lang-en', lang === 'en');

  // Update page title
  if (lang === 'en') {
    document.title = 'El Cabo Taco – Cevicheria & Seafood | Puerto Peñasco';
  } else {
    document.title = 'El Cabo Taco – Cevichería & Seafood | Puerto Peñasco';
  }

  currentLang = lang;
  localStorage.setItem('cabo-lang', lang);
}

document.getElementById('langToggle').addEventListener('click', () => {
  applyTranslations(currentLang === 'es' ? 'en' : 'es');
});

// Apply on load
applyTranslations(currentLang);


// ── Mobile Nav ───────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close on nav link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// Close on outside click
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  }
});


// ── Sticky Nav ───────────────────────────────
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });


// ── Scroll Reveal ────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

function addRevealClasses() {
  // About
  const aboutPhoto = document.querySelector('.about-photo-stack');
  const aboutText  = document.querySelector('.about-text');
  if (aboutPhoto) { aboutPhoto.classList.add('reveal-left'); revealObserver.observe(aboutPhoto); }
  if (aboutText)  { aboutText.classList.add('reveal-right'); revealObserver.observe(aboutText); }

  // Sections headings
  document.querySelectorAll('.eyebrow, h2, .section-sub').forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });

  // Dish cards – staggered
  document.querySelectorAll('.dish-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.08}s`;
    card.classList.add('reveal');
    revealObserver.observe(card);
  });

  // Info cards
  document.querySelectorAll('.info-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.1}s`;
    card.classList.add('reveal');
    revealObserver.observe(card);
  });

  // Gallery items
  document.querySelectorAll('.gallery-item').forEach((item, i) => {
    item.style.transitionDelay = `${i * 0.07}s`;
    item.classList.add('reveal');
    revealObserver.observe(item);
  });

  // Menu cards
  document.querySelectorAll('.menu-page-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.12}s`;
    card.classList.add('reveal');
    revealObserver.observe(card);
  });
}

addRevealClasses();


// ── Lightbox ─────────────────────────────────
const lightbox    = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

window.openLightbox = function(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt || '';
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeLightbox = function() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
  // Delay clearing src to avoid flicker
  setTimeout(() => { lightboxImg.src = ''; }, 300);
};

// Close with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

// Prevent close when clicking on image itself
lightboxImg.addEventListener('click', (e) => e.stopPropagation());


// ── Menu Language Tabs ────────────────────────
document.querySelectorAll('.menu-tab').forEach(tab => {
  tab.addEventListener('click', function() {
    document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
    this.classList.add('active');

    const target = this.getAttribute('data-menu');
    document.getElementById('menuEs').classList.toggle('hidden', target !== 'es');
    document.getElementById('menuEn').classList.toggle('hidden', target !== 'en');
  });
});


// ── Dishes Slider Dots ────────────────────────
(function setupSliderDots() {
  const slider = document.querySelector('.dishes-slider');
  const dotsContainer = document.getElementById('sliderDots');
  if (!slider || !dotsContainer) return;

  const cards = slider.querySelectorAll('.dish-card');
  const totalDots = cards.length;

  cards.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Platillo ${i + 1}`);
    dot.addEventListener('click', () => {
      cards[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    });
    dotsContainer.appendChild(dot);
  });

  // Update active dot on scroll
  const dots = dotsContainer.querySelectorAll('.slider-dot');

  slider.addEventListener('scroll', () => {
    const sliderLeft = slider.scrollLeft;
    const cardWidth  = cards[0]?.offsetWidth + 24 || 324; // card + gap
    const activeIdx  = Math.round(sliderLeft / cardWidth);

    dots.forEach((d, i) => d.classList.toggle('active', i === activeIdx));
  }, { passive: true });
})();


// ── Back to Top ───────────────────────────────
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 500);
}, { passive: true });

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// ── Active nav link on scroll ─────────────────
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navAnchors.forEach(a => {
        a.classList.toggle('active-nav', a.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { threshold: 0.35 });

sections.forEach(s => sectionObserver.observe(s));


// ── Touch-friendly dish slider drag ──────────
(function setupSliderDrag() {
  const slider = document.querySelector('.dishes-slider');
  if (!slider) return;

  let isDown = false, startX, scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.style.cursor = 'grabbing';
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => { isDown = false; slider.style.cursor = ''; });
  slider.addEventListener('mouseup',    () => { isDown = false; slider.style.cursor = ''; });
  slider.addEventListener('mousemove',  (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    slider.scrollLeft = scrollLeft - (x - startX) * 1.3;
  });
})();


// ── Accessibility: trap focus in lightbox ─────
lightbox.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    e.preventDefault();
    document.querySelector('.lightbox-close')?.focus();
  }
});

console.log('🦞 El Cabo Taco – Cevichería & Seafood | Puerto Peñasco, Sonora 🌊');
