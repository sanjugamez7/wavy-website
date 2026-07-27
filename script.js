const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.14 });
document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));

const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', (event) => {
  glow.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
});

const modal = document.querySelector('#download-modal');
const openDownload = () => {
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  modal.querySelector('.modal-close').focus();
};
const closeDownload = () => {
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
};
document.querySelectorAll('.download-trigger').forEach((button) => button.addEventListener('click', openDownload));
document.querySelectorAll('[data-close-download]').forEach((button) => button.addEventListener('click', closeDownload));
window.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeDownload(); });
