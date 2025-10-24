document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  document.querySelectorAll('[data-scroll-target]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetSelector = btn.getAttribute('data-scroll-target');
      const target = document.querySelector(targetSelector);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const form = document.getElementById('lead-magnet-form');
  const messageEl = form?.querySelector('.form-message');

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();

    if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      if (messageEl) {
        messageEl.textContent = 'Revisá el email e intentá de nuevo.';
        messageEl.classList.add('error');
      }
      return;
    }

    if (messageEl) {
      messageEl.classList.remove('error');
      messageEl.textContent = 'Listo. Te envié el Playbook y te espero en la llamada.';
    }

    const params = new URLSearchParams({ name, email });
    window.setTimeout(() => {
      window.location.href = `gracias.html?${params.toString()}`;
    }, 800);
  });
});
