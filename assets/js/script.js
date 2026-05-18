/* ==============================
   NAVBAR — efecto scroll
============================== */
(function () {
  const nav = document.querySelector('.navbar-custom');
  if (!nav) return;

  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 50);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ==============================
   NAVBAR — menú hamburger
============================== */
(function () {
  const hamburger = document.getElementById('hamburger');
  const menuContainer = document.getElementById('menuContainer');
  if (!hamburger || !menuContainer) return;

  hamburger.addEventListener('click', () => {
    const isOpen = menuContainer.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  menuContainer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuContainer.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
})();

/* ==============================
   CAROUSEL — Play / Pause
============================== */
(function () {
  const carouselEl = document.getElementById('heroCarousel');
  const btn = document.getElementById('carouselPlayPause');
  if (!carouselEl || !btn) return;

  const icon = document.getElementById('playPauseIcon');
  let playing = true;

  btn.addEventListener('click', () => {
    const carousel = bootstrap.Carousel.getOrCreateInstance(carouselEl);
    if (playing) {
      carousel.pause();
      icon.textContent = '▶';
      btn.setAttribute('aria-label', 'Reproducir presentación');
      btn.title = 'Reproducir';
    } else {
      carousel.cycle();
      icon.textContent = '⏸';
      btn.setAttribute('aria-label', 'Pausar presentación');
      btn.title = 'Pausar';
    }
    playing = !playing;
  });
})();

/* ==============================
   AÑO DINÁMICO EN FOOTER
============================== */
document.querySelectorAll('#year').forEach(el => {
  el.textContent = new Date().getFullYear();
});
