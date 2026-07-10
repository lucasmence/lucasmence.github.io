const urlParams = new URLSearchParams(window.location.search);
const currentLang = urlParams.get('lang') === 'br' ? 'br' : 'en';
document.documentElement.lang = currentLang;
document.getElementById(`lang-${currentLang}`).style.color = 'var(--accent)';
document.getElementById(`lang-${currentLang}`).style.fontWeight = 'bold';

const TRANSLATIONS = {
  en: {
    title: 'lucas@mence.dev:~/resume$',
    back: 'back to ~',
    backUrl: '../',
    pageTitle: '~/resume$ cat resume.pdf',
    windowLabel: '~/resume',
    cmdEcho: 'cat resume.pdf',
    download: '\u2193 Download PDF',
    downloadName: 'LucasVinicius-PublicResume-2026',
    pdfPath: 'assets/LucasVinicius-PublicResume-2026.pdf'
  },
  br: {
    title: 'lucas@mence.dev:~/curriculo$',
    back: 'voltar para ~',
    backUrl: '../?lang=br',
    pageTitle: '~/curriculo$ cat curriculo.pdf',
    windowLabel: '~/curriculo',
    cmdEcho: 'cat curriculo.pdf',
    download: '\u2193 Baixar PDF',
    downloadName: 'LucasVinicius-Curriculo-2026',
    pdfPath: 'assets/br/LucasVinicius-Curriculo-2026.pdf'
  }
};
const t = TRANSLATIONS[currentLang];

document.title = t.title;
document.getElementById('txt-back').textContent = t.back;
document.getElementById('txt-page-title').textContent = t.pageTitle;
document.getElementById('txt-window-label').textContent = t.windowLabel;
document.getElementById('txt-cmd-echo').textContent = t.cmdEcho;
document.getElementById('txt-download').textContent = t.download;
document.getElementById('year-start').textContent = 2013;
document.getElementById('year-current').textContent = new Date().getFullYear();
document.getElementById('back-link').href = t.backUrl;

document.getElementById('pdf-frame').src = t.pdfPath;
const btnDownload = document.getElementById('btn-download');
btnDownload.href = t.pdfPath;
btnDownload.setAttribute('download', t.downloadName);

(function animateResume(){
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const win = document.querySelector('.resume-wrap');
  const btn = document.querySelector('.download-row');
  [win, btn].forEach((el, i) => {
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px) scale(0.97)';
    el.style.animationDelay = `${i * 120}ms`;
  });
  if (win) {
    void win.offsetHeight;
    [win, btn].forEach(el => {
      if (!el) return;
      el.classList.add('emerge');
      el.addEventListener('animationend', () => {
        el.style.opacity = '';
        el.style.transform = '';
        el.style.animationDelay = '';
      }, { once: true });
    });
  }
})();

function pad(n){ return n.toString().padStart(2, '0'); }
function tickClock(){ const d = new Date(); document.getElementById('clock').textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`; }
tickClock();
setInterval(tickClock, 1000);


