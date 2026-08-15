function setupLang() {
  const urlParams = new URLSearchParams(window.location.search);
  const currentLang = urlParams.get('lang') === 'br' ? 'br' : 'en';
  document.documentElement.lang = currentLang;
  return currentLang;
}

function asciiBox(icon, label, width) {
  const inner = `[${icon}] ${label}`;
  const w = Math.max(width || 0, inner.length) + 2;
  const padL = Math.max(0, Math.floor((w - inner.length) / 2));
  const padR = Math.max(0, w - inner.length - padL);
  return '+' + '-'.repeat(w) + '+\n' +
         '|' + ' '.repeat(padL) + inner + ' '.repeat(padR) + '|\n' +
         '+' + '-'.repeat(w) + '+';
}

function escapeHTML(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function animateIn(elements, opts = {}) {
  if (prefersReducedMotion()) return;
  const { cls = 'emerge', dy = 16, stagger = 0 } = opts;
  const els = (Array.isArray(elements) ? elements : [elements]).filter(Boolean);
  if (!els.length) return;
  els.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = `translateY(${dy}px) scale(0.97)`;
    el.style.animationDelay = `${i * stagger}ms`;
  });
  void els[0].offsetHeight;
  els.forEach(el => {
    el.classList.add(cls);
    el.addEventListener('animationend', () => {
      el.style.opacity = '';
      el.style.transform = '';
      el.style.animationDelay = '';
    }, { once: true });
  });
}
