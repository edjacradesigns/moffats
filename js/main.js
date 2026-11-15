/* ==========================================================================
   THE MOFFATS – Core Interactive Engine
   Header, Footer, Ken Burns Slider, Lightbox, FAQs, Filter & Floating Tools
   ========================================================================== */

(function () {
  'use strict';

  // Agency Contact Details
  const PHONE = '0740682321';
  const PHONE_INTL = '+254740682321';
  const WA_NUM = '254740682321';
  const EMAIL = 'edjacradesigns@gmail.com';
  const OFFICE_LOC = 'Nairobi, Kenya';

  // Navigation Pages
  const pages = [
    ['index.html', 'Home'],
    ['about.html', 'About Us'],
    ['services.html', 'Services & Jobs'],
    ['process.html', 'How It Works'],
    ['contact.html', 'Contact Us']
  ];

  // Current page detection
  const curPage = location.pathname.split('/').pop() || 'index.html';

  // Social Media SVG Icons
  const icons = {
    tiktok: '<path d="M16.6 2h-3.2v13.2a2.9 2.9 0 1 1-2-2.8V9.1a6.1 6.1 0 1 0 5.2 6V8.6a7.4 7.4 0 0 0 4.3 1.4V6.8a4.3 4.3 0 0 1-4.3-4.8z"/>',
    x: '<path d="M18.2 2h3.3l-7.2 8.2L22.8 22h-6.6l-5.2-6.8L5 22H1.7l7.7-8.8L1.2 2H8l4.7 6.2L18.2 2zm-1.2 18h1.8L7 3.9H5.1L17 20z"/>',
    facebook: '<path d="M13.5 22v-8.2h2.8l.5-3.3h-3.3V8.4c0-.9.4-1.7 1.8-1.7h1.6V3.8S15.6 3.5 14.3 3.5c-2.7 0-4.3 1.6-4.3 4.5v2.5H7.2v3.3H10V22h3.5z"/>',
    linkedin: '<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.8h4V21H3zM9.5 9.8h3.8v1.6h.1c.5-1 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6V21h-4v-5c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-4z"/>',
    instagram: '<path d="M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2zm5.2-9.6a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2zM12 2.2c-3.2 0-3.6 0-4.8.1-3.3.1-4.9 1.7-5 5-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.8c.1 3.3 1.7 4.9 5 5 1.2.1 1.6.1 4.8.1s3.5 0 4.8-.1c3.3-.1 4.9-1.7 5-5 .1-1.2.1-1.6.1-4.8s0-3.5-.1-4.8c-.1-3.3-1.7-4.9-5-5-1.3-.1-1.6-.1-4.8-.1zm0 1.8c3.1 0 3.5 0 4.7.1 2.4.1 3.5 1.2 3.6 3.6.1 1.2.1 1.6.1 4.7s0 3.5-.1 4.7c-.1 2.4-1.2 3.5-3.6 3.6-1.2.1-1.6.1-4.7.1s-3.5 0-4.7-.1c-2.4-.1-3.5-1.2-3.6-3.6C3.6 15.5 3.6 15.1 3.6 12s0-3.5.1-4.7C3.8 4.9 4.9 3.8 7.3 3.7c1.2-.1 1.6-.1 4.7-.1z"/>'
  };

  const socials = [
    ['TikTok', 'tiktok', 'https://www.velocetechcompany.com'],
    ['X', 'x', 'https://www.schoolproke.com'],
    ['Facebook', 'facebook', 'https://www.schoolproke.com'],
    ['LinkedIn', 'linkedin', 'https://www.schoolproke.com'],
    ['Instagram', 'instagram', 'https://www.schoolproke.com']
  ];

  /* --------------------------------------------------------------------------
     1. RENDER SHARED HEADER
     -------------------------------------------------------------------------- */
  const headerElem = document.getElementById('site-header');
  if (headerElem) {
    const navItemsHtml = pages
      .map(([url, title]) => `<li><a href="${url}" class="nav-link ${url === curPage ? 'active' : ''}">${title}</a></li>`)
      .join('');

    const mobileNavLinksHtml = pages
      .map(([url, title]) => `<li><a href="${url}" class="${url === curPage ? 'active' : ''}">${title}</a></li>`)
      .join('');

    headerElem.innerHTML = `
      <div class="topbar">
        <div class="wrap">
          <div class="topbar-badge">
            <span class="pulse-dot"></span>
            <span>Now Recruiting: Qatar &amp; Oman 2026/2027 Intakes • Verified Employer Contracts</span>
          </div>
          <div class="topbar-contact">
            <a href="tel:${PHONE_INTL}" aria-label="Call Office">📞 <span>${PHONE}</span></a>
            <a href="mailto:${EMAIL}" aria-label="Email Office">✉️ <span>${EMAIL}</span></a>
            <span style="color:var(--gold-400)">📍 ${OFFICE_LOC}</span>
          </div>
        </div>
      </div>
      <header class="nav" id="main-nav">
        <div class="wrap">
          <a href="index.html" class="logo-link" aria-label="The Moffats Home">
            <img src="images/moffats-logo.png" alt="The Moffats Logo" class="logo-img">
          </a>
          <ul class="nav-menu">
            ${navItemsHtml}
          </ul>
          <div class="nav-actions">
            <a class="btn btn-gold btn-sm" href="contact.html">Apply Now</a>
            <button class="burger" id="burger-btn" aria-label="Toggle navigation menu" aria-expanded="false">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <!-- Mobile Navigation Drawer -->
      <div class="mobile-overlay" id="mobile-overlay"></div>
      <div class="mobile-drawer" id="mobile-drawer" aria-hidden="true">
        <div>
          <div class="mobile-drawer-header">
            <img src="images/moffats-logo.png" alt="The Moffats" style="height:48px; width:auto;">
            <button class="mobile-drawer-close" id="mobile-close-btn" aria-label="Close menu">&times;</button>
          </div>
          <ul class="mobile-nav-links">
            ${mobileNavLinksHtml}
          </ul>
        </div>
        <div class="mobile-drawer-footer">
          <a class="btn btn-gold" href="contact.html">Apply for Jobs Abroad</a>
          <a class="btn btn-green" href="https://wa.me/${WA_NUM}?text=Hello%20The%20Moffats%2C%20I%20am%20ready%20to%20apply%20for%20a%20job%20abroad." target="_blank" rel="noopener">
            💬 Chat on WhatsApp
          </a>
          <div style="font-size:0.85rem; color:var(--mute); text-align:center; margin-top:0.5rem;">
            📞 Call: <a href="tel:${PHONE_INTL}" style="font-weight:700; color:var(--green-900);">${PHONE}</a>
          </div>
        </div>
      </div>
    `;

    // Sticky nav scroll styling
    const mainNav = document.getElementById('main-nav');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        mainNav.classList.add('scrolled');
      } else {
        mainNav.classList.remove('scrolled');
      }
    }, { passive: true });

    // Mobile Drawer interactions
    const burger = document.getElementById('burger-btn');
    const drawer = document.getElementById('mobile-drawer');
    const overlay = document.getElementById('mobile-overlay');
    const closeBtn = document.getElementById('mobile-close-btn');

    function openMobileMenu() {
      burger.classList.add('open');
      burger.setAttribute('aria-expanded', 'true');
      drawer.classList.add('open');
      drawer.setAttribute('aria-hidden', 'false');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      drawer.classList.remove('open');
      drawer.setAttribute('aria-hidden', 'true');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (burger) burger.addEventListener('click', () => {
      if (drawer.classList.contains('open')) closeMobileMenu();
      else openMobileMenu();
    });

    if (closeBtn) closeBtn.addEventListener('click', closeMobileMenu);
    if (overlay) overlay.addEventListener('click', closeMobileMenu);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer && drawer.classList.contains('open')) {
        closeMobileMenu();
      }
    });
  }

  /* --------------------------------------------------------------------------
     2. RENDER SHARED FOOTER
     -------------------------------------------------------------------------- */
  const footerElem = document.getElementById('site-footer');
  if (footerElem) {
    const socialLinksHtml = socials
      .map(([name, key, url]) => `
        <a href="${url}" target="_blank" rel="noopener" aria-label="${name}">
          <svg viewBox="0 0 24 24">${icons[key]}</svg>
        </a>
      `)
      .join('');

    footerElem.innerHTML = `
      <footer>
        <div class="wrap">
          <div class="fgrid">
            <div>
              <a class="flogo" href="index.html" aria-label="The Moffats">
                <img src="images/moffats-logo.png" alt="The Moffats">
              </a>
              <p class="footer-desc">
                Nairobi’s premier recruitment &amp; travel agency connecting qualified Kenyan workers with trusted employers in Qatar, Oman and the Gulf. Full assistance from passport and visa to touchdown.
              </p>
              <div class="social">
                ${socialLinksHtml}
              </div>
            </div>

            <div>
              <h4>Quick Links</h4>
              <ul>
                ${pages.map(([url, title]) => `<li><a href="${url}">${title}</a></li>`).join('')}
                <li><a href="privacy-policy.html">Privacy Policy</a></li>
                <li><a href="terms-and-conditions.html">Terms &amp; Conditions</a></li>
              </ul>
            </div>

            <div>
              <h4>Popular Openings</h4>
              <ul>
                <li><a href="services.html">Housemaids &amp; Caregivers</a></li>
                <li><a href="services.html">Nannies &amp; Babysitters</a></li>
                <li><a href="services.html">Warehouse &amp; Logistics Helpers</a></li>
                <li><a href="services.html">House-to-House Cleaners</a></li>
                <li><a href="services.html">Drivers &amp; Delivery Riders</a></li>
                <li><a href="services.html">Technicians &amp; Barbers</a></li>
              </ul>
            </div>

            <div>
              <h4>Nairobi Office</h4>
              <ul>
                <li>📍 Nairobi, Kenya</li>
                <li><a href="tel:${PHONE_INTL}">📞 ${PHONE}</a></li>
                <li><a href="mailto:${EMAIL}">✉️ ${EMAIL}</a></li>
                <li>
                  <a href="https://wa.me/${WA_NUM}?text=Hello%20The%20Moffats%2C%20I%20have%20an%20inquiry." target="_blank" rel="noopener" style="color:var(--gold-300); font-weight:700;">
                    💬 Direct WhatsApp Helpline
                  </a>
                </li>
                <li style="margin-top:1rem; font-size:0.85rem; color:#8ea79a;">
                  🕒 Mon – Fri: 8:00 AM – 5:30 PM<br>
                  Sat: 9:00 AM – 2:00 PM
                </li>
              </ul>
            </div>
          </div>

          <div class="footer-bottom">
            <div>&copy; ${new Date().getFullYear()} The Moffats Recruitment Agency. All rights reserved.</div>
            <div>Powered by <a href="https://www.velocetechcompany.com" target="_blank" rel="noopener">Veloce Tech Company</a></div>
          </div>
        </div>
      </footer>

      <!-- Floating Action Widgets -->
      <div class="floating-tools">
        <button class="back-to-top" id="back-to-top-btn" aria-label="Back to top">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>

        <a class="wa-btn" href="https://wa.me/${WA_NUM}?text=Hello%20The%20Moffats%2C%20I%20would%20like%20to%20apply%20for%20a%20job%20abroad." target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp">
          <span class="wa-btn-pulse"></span>
          <svg viewBox="0 0 24 24">
            <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-2.9-.4-4.1-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1-1.5-.7-2.4-1.3-3.4-2.9-.3-.5.3-.5.8-1.5.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.8.8-1 1.7-.7 2.7.4 1.2 1.1 2.2 2.1 3.2 1.8 1.8 3.1 2.3 4.2 2.7.8.2 1.5.2 2 .1.6-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.5-.3z"/>
          </svg>
          <span>Chat on WhatsApp</span>
        </a>
      </div>

      <!-- Shared Lightbox Modal for Posters -->
      <div class="lightbox-modal" id="site-lightbox" role="dialog" aria-modal="true" aria-label="Image preview">
        <div class="lightbox-box">
          <button class="lightbox-close" id="lightbox-close-btn" aria-label="Close preview">&times;</button>
          <img src="" alt="" class="lightbox-img" id="lightbox-img">
          <div class="lightbox-caption" id="lightbox-caption"></div>
          <div style="margin-top:1.25rem;">
            <a class="btn btn-gold btn-sm" id="lightbox-apply-link" href="contact.html">Apply for This Vacancy</a>
          </div>
        </div>
      </div>
    `;

    // Back to top behavior
    const backToTopBtn = document.getElementById('back-to-top-btn');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  /* --------------------------------------------------------------------------
     3. KEN BURNS ROTATING BACKGROUND SLIDER (Homepage Hero)
     -------------------------------------------------------------------------- */
  const heroSliderTrack = document.getElementById('hero-slider-track');
  if (heroSliderTrack) {
    const slides = heroSliderTrack.querySelectorAll('.hero-slide');
    const navContainer = document.getElementById('hero-slider-nav');
    const captionElem = document.getElementById('hero-slide-caption');

    const captions = [
      '✈️ Direct Departure Flights from Nairobi to Doha & Muscat',
      '🏙️ Verified Placements with Top Employers in Qatar & Oman',
      '📄 Safe, Documented Processing & Legal Work Visas',
      '🤝 Dedicated Care: From Nairobi Application to Touchdown'
    ];

    let currentSlide = 0;
    let slideInterval = null;
    const slideDuration = 6500;

    // Build indicator dots if container exists
    if (navContainer && slides.length > 0) {
      navContainer.innerHTML = slides.map((_, idx) => `
        <button type="button" class="${idx === 0 ? 'active' : ''}" data-slide="${idx}" aria-label="Slide ${idx + 1}"></button>
      `).join('');

      const buttons = navContainer.querySelectorAll('button');
      buttons.forEach((btn, idx) => {
        btn.addEventListener('click', () => {
          goToSlide(idx);
          resetInterval();
        });
      });
    }

    function updateCaption(idx) {
      if (captionElem && captions[idx]) {
        captionElem.innerHTML = captions[idx];
      }
    }

    function goToSlide(idx) {
      if (!slides[idx]) return;
      slides.forEach((s) => s.classList.remove('active'));
      slides[idx].classList.add('active');
      currentSlide = idx;

      if (navContainer) {
        const buttons = navContainer.querySelectorAll('button');
        buttons.forEach((b, i) => b.classList.toggle('active', i === idx));
      }

      updateCaption(idx);
    }

    function nextSlide() {
      const next = (currentSlide + 1) % slides.length;
      goToSlide(next);
    }

    function resetInterval() {
      if (slideInterval) clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, slideDuration);
    }

    // Initialize first slide and start timer
    goToSlide(0);
    resetInterval();
  }

  /* --------------------------------------------------------------------------
     4. LIGHTBOX PREVIEW CONTROLLER
     -------------------------------------------------------------------------- */
  const lightbox = document.getElementById('site-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close-btn');
  const lightboxApply = document.getElementById('lightbox-apply-link');

  function openLightbox(src, alt, caption) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || 'Official recruitment announcement';
    if (lightboxCaption) lightboxCaption.textContent = caption || alt || 'Official Recruitment Notice';
    if (lightboxApply) {
      const encodedMsg = encodeURIComponent(`Hello The Moffats, I am inquiring about the vacancy: ${alt || 'Advertised Role'}`);
      lightboxApply.href = `https://wa.me/${WA_NUM}?text=${encodedMsg}`;
      lightboxApply.textContent = 'Apply via WhatsApp';
      lightboxApply.target = '_blank';
      lightboxApply.rel = 'noopener';
    }
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });

  // Attach lightbox to all flyer elements and job flyer images
  document.querySelectorAll('[data-lightbox], .flyer-item, .jobs img').forEach((item) => {
    item.addEventListener('click', function () {
      const img = this.tagName === 'IMG' ? this : this.querySelector('img');
      if (img) {
        const title = this.getAttribute('data-title') || img.alt || 'Official Qatar Opening';
        openLightbox(img.src, img.alt, title);
      }
    });
  });

  /* --------------------------------------------------------------------------
     5. FAQ ACCORDION CONTROLLER
     -------------------------------------------------------------------------- */
  document.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      if (!item) return;
      const isOpen = item.classList.contains('open');
      const answer = item.querySelector('.faq-answer');

      // Close all other open items in the same container
      const parent = item.parentElement;
      if (parent) {
        parent.querySelectorAll('.faq-item.open').forEach((openItem) => {
          if (openItem !== item) {
            openItem.classList.remove('open');
            const ans = openItem.querySelector('.faq-answer');
            if (ans) ans.style.maxHeight = null;
            const qBtn = openItem.querySelector('.faq-question');
            if (qBtn) qBtn.setAttribute('aria-expanded', 'false');
          }
        });
      }

      if (isOpen) {
        item.classList.remove('open');
        button.setAttribute('aria-expanded', 'false');
        if (answer) answer.style.maxHeight = null;
      } else {
        item.classList.add('open');
        button.setAttribute('aria-expanded', 'true');
        if (answer) answer.style.maxHeight = answer.scrollHeight + 30 + 'px';
      }
    });
  });

  /* --------------------------------------------------------------------------
     6. JOB CATEGORY FILTER CONTROLLER
     -------------------------------------------------------------------------- */
  const filterButtons = document.querySelectorAll('.filter-tabs .tab-btn');
  const filterCards = document.querySelectorAll('.job-card[data-category]');

  if (filterButtons.length > 0 && filterCards.length > 0) {
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter') || 'all';

        filterCards.forEach((card) => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
            card.style.animation = 'fadeIn 0.3s ease-out';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  /* --------------------------------------------------------------------------
     7. CONTACT FORM WHATSAPP QUICK ACTION
     -------------------------------------------------------------------------- */
  const contactForm = document.querySelector('form[action*="formsubmit.co"]');
  if (contactForm) {
    // Add WhatsApp instant submit button if not already present
    const sendBtn = contactForm.querySelector('button[type="submit"]');
    if (sendBtn && !document.getElementById('wa-quick-send')) {
      const waActionDiv = document.createElement('div');
      waActionDiv.style.marginTop = '0.5rem';
      waActionDiv.innerHTML = `
        <button type="button" id="wa-quick-send" class="btn btn-gold" style="width:100%; justify-content:center;">
          💬 Or Apply Directly via WhatsApp
        </button>
      `;
      sendBtn.insertAdjacentElement('afterend', waActionDiv);

      const waQuickBtn = document.getElementById('wa-quick-send');
      if (waQuickBtn) {
        waQuickBtn.addEventListener('click', () => {
          const nameInput = document.getElementById('n');
          const phoneInput = document.getElementById('p');
          const roleSelect = document.getElementById('j');
          const countrySelect = document.getElementById('c');
          const msgInput = document.getElementById('m');

          const name = nameInput ? nameInput.value.trim() : '';
          const phone = phoneInput ? phoneInput.value.trim() : '';
          const role = roleSelect ? roleSelect.value : 'General Inquiry';
          const country = countrySelect ? countrySelect.value : 'Qatar / Oman';
          const msg = msgInput ? msgInput.value.trim() : '';

          let waText = `Hello The Moffats, I would like to apply for an overseas placement.\n`;
          if (name) waText += `• Name: ${name}\n`;
          if (phone) waText += `• Phone: ${phone}\n`;
          waText += `• Role: ${role}\n`;
          waText += `• Preferred Country: ${country}\n`;
          if (msg) waText += `• Note: ${msg}\n`;

          const waUrl = `https://wa.me/${WA_NUM}?text=${encodeURIComponent(waText)}`;
          window.open(waUrl, '_blank', 'noopener');
        });
      }
    }
  }

})();
