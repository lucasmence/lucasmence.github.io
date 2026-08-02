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
    cmdEcho: 'cat resume.pdf',
    download: 'Download PDF',
    downloadName: 'LucasVinicius-PublicResume-2026',
    pdfPath: 'assets/LucasVinicius-PublicResume-2026.pdf',
    pdfLoading: 'loading resume.pdf ...',
    pdfError: 'PDF preview unavailable — use the button below.'
  },
  br: {
    title: 'lucas@mence.dev:~/curriculo$',
    back: 'voltar para ~',
    backUrl: '../?lang=br',
    pageTitle: '~/curriculo$ cat curriculo.pdf',
    cmdEcho: 'cat curriculo.pdf',
    download: 'Baixar PDF',
    downloadName: 'LucasVinicius-Curriculo-2026',
    pdfPath: 'assets/br/LucasVinicius-Curriculo-2026.pdf',
    pdfLoading: 'carregando curriculo.pdf ...',
    pdfError: 'Pré-visualização indisponível — use o botão abaixo.'
  }
};
const t = TRANSLATIONS[currentLang];

document.title = t.title;
document.getElementById('txt-back').textContent = t.back;
document.getElementById('txt-page-title').textContent = t.pageTitle;
document.getElementById('txt-cmd-echo').textContent = t.cmdEcho;
document.getElementById('year-start').textContent = 2013;
document.getElementById('year-current').textContent = new Date().getFullYear();
document.getElementById('back-link').href = t.backUrl;

function asciiBox(icon, label, width){
  const inner = `[${icon}] ${label}`;
  const w = Math.max(width || 0, inner.length) + 2;
  const padL = Math.max(0, Math.floor((w - inner.length) / 2));
  const padR = Math.max(0, w - inner.length - padL);
  return '+' + '-'.repeat(w) + '+\n' +
         '|' + ' '.repeat(padL) + inner + ' '.repeat(padR) + '|\n' +
         '+' + '-'.repeat(w) + '+';
}
// --- PDF rendering (PDF.js) -------------------------------------------------
// Native <iframe>/<object>/<embed> PDF embeds are unreliable on iOS Safari
// (blank frame, first-page-only, or forced download). PDF.js renders every page
// to a <canvas>, which works identically on iOS, Android and desktop.
const pdfViewer = document.getElementById('pdf-viewer');
const PDFJS_CDN_BASE = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/';

function escapeHtml(s){ return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

function showPdfFallback(){
  pdfViewer.innerHTML =
    `<div class="pdf-fallback">${escapeHtml(t.pdfError)}<br>` +
    `<a class="ascii-btn" href="${escapeHtml(t.pdfPath)}" target="_blank" rel="noopener">` +
    `${asciiBox('↓', t.download)}</a></div>`;
}

function renderPdf(){
  if (!pdfViewer) return;
  if (typeof pdfjsLib === 'undefined'){ showPdfFallback(); return; }
  pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_CDN_BASE + 'pdf.worker.min.js';
  pdfViewer.innerHTML = `<div class="pdf-loading">${escapeHtml(t.pdfLoading)}</div>`;
  const dpr = window.devicePixelRatio || 1;

  pdfjsLib.getDocument({ url: t.pdfPath }).promise.then(async (doc) => {
    pdfViewer.innerHTML = '';
    const avail = Math.max(1, pdfViewer.clientWidth - 28);
    for (let i = 1; i <= doc.numPages; i++){
      const page = await doc.getPage(i);
      const base = page.getViewport({ scale: 1 });
      const scale = (avail / base.width) * dpr;
      const viewport = page.getViewport({ scale });
      const canvas = document.createElement('canvas');
      // Intrinsic (device-pixel) size; display size is driven by CSS
      // (.pdf-viewer canvas { width:100%; height:auto }) so the aspect ratio
      // is always preserved on any screen / orientation change.
      canvas.width = Math.floor(viewport.width);
      canvas.height = Math.floor(viewport.height);
      canvas.setAttribute('aria-label', `Resume page ${i}`);
      const ctx = canvas.getContext('2d');
      await page.render({ canvasContext: ctx, viewport }).promise;
      pdfViewer.appendChild(canvas);
    }
    doc.destroy();
  }).catch(() => { showPdfFallback(); });
}
renderPdf();

const btnDownload = document.getElementById('btn-download');
btnDownload.href = t.pdfPath;
btnDownload.setAttribute('download', t.downloadName);
btnDownload.innerHTML = asciiBox('↓', t.download);

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


