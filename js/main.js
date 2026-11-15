/* Shared navigation and interactive behavior for The Moffats */
(function () {
  'use strict';

  const PHONE = '0784 751 253';
  const WA = '254784751253';
  const EMAIL = 'edjacradesigns@gmail.com';
  const pages = [
    ['index.html', 'Home'], ['about.html', 'About Us'],
    ['services.html', 'Services & Jobs'], ['process.html', 'How It Works'],
    ['contact.html', 'Contact Us']
  ];
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  const phoneIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.3c1.8 3.4 4.7 6.3 8.1 8.1l2.7-2.7c.3-.3.8-.4 1.2-.3 1.3.4 2.7.6 4.1.6.7 0 1.3.6 1.3 1.3v4c0 .7-.6 1.3-1.3 1.3C13.3 23 1 10.7 1 2.3c0-.7.6-1.3 1.3-1.3h4c.7 0 1.3.6 1.3 1.3 0 1.4.2 2.8.6 4.1.1.4 0 .9-.3 1.2L6.6 10.3z"/></svg>';
  const emailIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6.8A2.8 2.8 0 0 1 5.8 4h12.4A2.8 2.8 0 0 1 21 6.8v10.4A2.8 2.8 0 0 1 18.2 20H5.8A2.8 2.8 0 0 1 3 17.2V6.8zm2.2-.3 6.8 5.2 6.8-5.2H5.2z"/></svg>';
  const locationIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.7c-.3 0-.5-.1-.7-.3l-6.6-6.5A7.5 7.5 0 1 1 19.3 14.9l-6.6 6.5c-.2.2-.4.3-.7.3zm0-15.8a5.3 5.3 0 0 0-5.3 5.3c0 4.6 5.3 9.5 5.3 9.5s5.3-4.9 5.3-9.5A5.3 5.3 0 0 0 12 5.9z"/></svg>';

  const header = document.getElementById('site-header');
  if (header) {
    const nav = pages.map(([url, label]) => `<li><a href="${url}" class="nav-link ${url === currentPage ? 'active' : ''}">${label}</a></li>`).join('');
    const mobileNav = pages.map(([url, label]) => `<li><a href="${url}" class="${url === currentPage ? 'active' : ''}">${label}</a></li>`).join('');
    header.innerHTML = `
      <div class="topbar"><div class="wrap">
        <div class="topbar-badge"><span class="pulse-dot"></span><span>Recruiting across the Gulf • Visit visas • VIP security</span></div>
        <div class="topbar-contact"><a href="tel:+254784751253"><span class="icon-wrap">${phoneIcon}</span><span>${PHONE}</span></a><a href="mailto:${EMAIL}"><span class="icon-wrap">${emailIcon}</span><span>${EMAIL}</span></a><span class="location-wrap"><span class="icon-wrap">${locationIcon}</span>Nairobi, Kenya</span></div>
      </div></div>
      <header class="nav" id="main-nav"><div class="wrap">
        <a href="index.html" class="logo-link" aria-label="The Moffats home"><img src="images/moffats-logo.png" alt="The Moffats Logo" class="logo-img"></a>
        <ul class="nav-menu">${nav}</ul><div class="nav-actions"><a class="btn btn-gold btn-sm" href="contact.html">Apply Now</a><button class="burger" id="burger-btn" type="button" aria-label="Toggle navigation menu" aria-expanded="false"><span></span><span></span><span></span></button></div>
      </div></header>
      <div class="mobile-overlay" id="mobile-overlay"></div><nav class="mobile-drawer" id="mobile-drawer" aria-hidden="true"><div>
        <div class="mobile-drawer-header"><img src="images/moffats-logo.png" alt="The Moffats" style="height:48px;width:auto"><button class="mobile-drawer-close" id="mobile-close-btn" type="button" aria-label="Close menu">&times;</button></div>
        <ul class="mobile-nav-links">${mobileNav}</ul></div><div class="mobile-drawer-footer"><a class="btn btn-gold" href="contact.html">Apply for Jobs Abroad</a><a class="btn btn-green" href="https://wa.me/${WA}?text=Hello%20The%20Moffats%2C%20I%20am%20ready%20to%20apply." target="_blank" rel="noopener">WhatsApp: ${PHONE}</a></div></nav>`;
    const mainNav = document.getElementById('main-nav');
    const burger = document.getElementById('burger-btn');
    const drawer = document.getElementById('mobile-drawer');
    const overlay = document.getElementById('mobile-overlay');
    const close = document.getElementById('mobile-close-btn');
    const closeMenu = () => {
      burger?.classList.remove('open'); burger?.setAttribute('aria-expanded', 'false');
      drawer?.classList.remove('open'); drawer?.setAttribute('aria-hidden', 'true');
      overlay?.classList.remove('active'); document.body.style.overflow = '';
    };
    burger?.addEventListener('click', () => {
      const opening = !drawer.classList.contains('open');
      drawer.classList.toggle('open', opening); burger.classList.toggle('open', opening);
      burger.setAttribute('aria-expanded', String(opening)); drawer.setAttribute('aria-hidden', String(!opening));
      overlay.classList.toggle('active', opening); document.body.style.overflow = opening ? 'hidden' : '';
    });
    close?.addEventListener('click', closeMenu); overlay?.addEventListener('click', closeMenu);
    window.addEventListener('scroll', () => mainNav?.classList.toggle('scrolled', window.scrollY > 20), { passive: true });
    document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  }

  const footer = document.getElementById('site-footer');
  if (footer) {
    footer.innerHTML = `<footer><div class="wrap"><div class="fgrid">
      <div><a class="flogo" href="index.html"><img src="images/moffats-logo.png" alt="The Moffats"></a><p class="footer-desc">The Moffats connects candidates with employers and provides recruitment, travel, and support services.</p></div>
      <div><h4>Quick Links</h4><ul>${pages.map(([url, label]) => `<li><a href="${url}">${label}</a></li>`).join('')}<li><a href="privacy-policy.html">Privacy Policy</a></li><li><a href="terms-and-conditions.html">Terms &amp; Conditions</a></li></ul></div>
      <div><h4>Services</h4><ul><li><a href="services.html">Overseas Recruitment</a></li><li><a href="services.html">Visit Visa Support</a></li><li><a href="services.html">Travel Services</a></li><li><a href="services.html">Executive Services</a></li></ul></div>
      <div><h4>Nairobi Office</h4><ul><li><span class="inline-icon">${locationIcon}</span> Nairobi, Kenya</li><li><a href="tel:+254784751253"><span class="inline-icon">${phoneIcon}</span> ${PHONE}</a></li><li><a href="tel:+254740682321">0740 682 321</a></li><li><a href="mailto:${EMAIL}"><span class="inline-icon">${emailIcon}</span> ${EMAIL}</a></li><li><a href="https://wa.me/${WA}" target="_blank" rel="noopener">WhatsApp Helpline</a></li></ul></div>
      </div><div class="footer-bottom"><div>&copy; ${new Date().getFullYear()} The Moffats Recruitment &amp; Travel Agency. All rights reserved.</div><div>Powered by <a href="https://www.velocetechcompany.com" target="_blank" rel="noopener">Veloce Tech Company</a></div></div></div></footer>
      <div class="floating-tools"><button class="back-to-top" id="back-to-top-btn" type="button" aria-label="Back to top"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"></polyline></svg></button><a class="wa-btn" href="https://wa.me/${WA}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><span class="wa-btn-pulse"></span><span>WhatsApp</span></a></div>
      <div class="lightbox-modal" id="site-lightbox" role="dialog" aria-modal="true" aria-label="Image preview"><div class="lightbox-box"><button class="lightbox-close" id="lightbox-close-btn" type="button" aria-label="Close preview">&times;</button><img src="" alt="" class="lightbox-img" id="lightbox-img"><div class="lightbox-caption" id="lightbox-caption"></div><div style="margin-top:1.25rem"><a class="btn btn-gold btn-sm" id="lightbox-apply-link" href="contact.html">Apply for this vacancy</a></div></div></div>`;
    const topButton = document.getElementById('back-to-top-btn');
    window.addEventListener('scroll', () => topButton?.classList.toggle('visible', window.scrollY > 350), { passive: true });
    topButton?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // Homepage background slider.
  const track = document.getElementById('hero-slider-track');
  if (track) {
    const slides = [...track.querySelectorAll('.hero-slide')];
    const nav = document.getElementById('hero-slider-nav');
    const caption = document.getElementById('hero-slide-caption');
    const captions = ['✈️ Direct flights from Nairobi to Doha & Muscat','🏙️ Verified placements with trusted employers','📄 Safe, documented processing and legal work visas','🤝 Dedicated care from application to arrival'];
    if (slides.length) {
      let current = 0;
      if (nav) nav.innerHTML = slides.map((_, i) => `<button type="button" aria-label="Slide ${i + 1}" class="${i === 0 ? 'active' : ''}"></button>`).join('');
      const buttons = nav ? [...nav.querySelectorAll('button')] : [];
      const show = index => {
        current = index; slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
        buttons.forEach((button, i) => button.classList.toggle('active', i === index));
        if (caption && captions[index]) caption.textContent = captions[index];
      };
      buttons.forEach((button, i) => button.addEventListener('click', () => { show(i); restart(); }));
      let timer = setInterval(() => show((current + 1) % slides.length), 6500);
      function restart() { clearInterval(timer); timer = setInterval(() => show((current + 1) % slides.length), 6500); }
      show(0);
    }
  }

  // Accessible image lightbox.
  const lightbox = document.getElementById('site-lightbox');
  const lightboxImage = document.getElementById('lightbox-img');
  const closeLightbox = () => { lightbox?.classList.remove('active'); document.body.style.overflow = ''; };
  document.querySelectorAll('[data-lightbox], .flyer-item, .jobs img').forEach(item => item.addEventListener('click', () => {
    const image = item.matches('img') ? item : item.querySelector('img');
    if (!image || !lightbox || !lightboxImage) return;
    const title = item.getAttribute('data-title') || image.alt || 'Official recruitment announcement';
    lightboxImage.src = image.src; lightboxImage.alt = image.alt || title;
    const caption = document.getElementById('lightbox-caption'); if (caption) caption.textContent = title;
    const apply = document.getElementById('lightbox-apply-link');
    if (apply) { apply.href = `https://wa.me/${WA}?text=${encodeURIComponent(`Hello The Moffats, I am inquiring about: ${title}`)}`; apply.target = '_blank'; apply.rel = 'noopener'; apply.textContent = 'Apply via WhatsApp'; }
    lightbox.classList.add('active'); document.body.style.overflow = 'hidden';
  }));
  document.getElementById('lightbox-close-btn')?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', event => { if (event.target === lightbox) closeLightbox(); });

  // One handler supports both inline onclick attributes and dynamically inserted questions.
  function toggleFaq(button) {
    const item = button?.closest('.faq-item'); if (!item) return;
    const isOpen = item.classList.contains('open');
    const list = item.closest('.faq-list');
    list?.querySelectorAll('.faq-item.open').forEach(openItem => {
      if (openItem !== item) { openItem.classList.remove('open'); openItem.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false'); openItem.querySelector('.faq-answer')?.style.removeProperty('max-height'); }
    });
    item.classList.toggle('open', !isOpen);
    button.setAttribute('aria-expanded', String(!isOpen));
    const answer = item.querySelector('.faq-answer');
    if (answer) answer.style.maxHeight = isOpen ? '' : `${answer.scrollHeight + 40}px`;
    // Inline handlers run before the listener below; mark this click to prevent a second toggle.
    button.dataset.faqHandledInline = 'true';
  }
  window.toggleFaq = toggleFaq;
  document.querySelectorAll('.faq-question').forEach(button => button.addEventListener('click', event => {
    if (button.dataset.faqHandledInline === 'true') { delete button.dataset.faqHandledInline; return; }
    event.preventDefault(); toggleFaq(button);
  }));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeLightbox(); document.querySelectorAll('.mobile-drawer.open').forEach(drawer => { drawer.classList.remove('open'); drawer.setAttribute('aria-hidden', 'true'); document.querySelector('.burger')?.setAttribute('aria-expanded', 'false'); document.querySelector('.mobile-overlay')?.classList.remove('active'); document.body.style.overflow = ''; }); } });

  // Services/job category filtering.
  const filterButtons = [...document.querySelectorAll('.filter-tabs .tab-btn')];
  const cards = [...document.querySelectorAll('.job-card[data-category]')];
  filterButtons.forEach(button => button.addEventListener('click', () => {
    filterButtons.forEach(item => item.classList.toggle('active', item === button));
    const filter = button.dataset.filter || 'all';
    cards.forEach(card => { const categories = (card.dataset.category || '').split(/\s+/); card.style.display = filter === 'all' || categories.includes(filter) ? '' : 'none'; });
  }));

  // Optional WhatsApp shortcut on the contact page.
  const form = document.querySelector('form[action*="formsubmit.co"]');
  const submit = form?.querySelector('button[type="submit"]');
  if (form && submit && !document.getElementById('wa-quick-send')) {
    const button = document.createElement('button'); button.type = 'button'; button.id = 'wa-quick-send'; button.className = 'btn btn-gold'; button.style.cssText = 'width:100%;justify-content:center'; button.textContent = 'WhatsApp Direct Application';
    const wrapper = document.createElement('div'); wrapper.style.marginTop = '.5rem'; wrapper.append(button); submit.insertAdjacentElement('afterend', wrapper);
    button.addEventListener('click', () => {
      const value = id => document.getElementById(id)?.value.trim() || '';
      const text = ['Hello The Moffats, I would like to apply for an overseas placement.', value('n') && `Name: ${value('n')}`, value('p') && `Phone: ${value('p')}`, `Role: ${value('j')}`, `Preferred country: ${value('c')}`, value('m') && `Note: ${value('m')}`].filter(Boolean).join('\n');
      window.open(`https://wa.me/${WA}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    });
  }
})();
