const currentLang = setupLang();

const TRANSLATIONS = {
  en: {
    title: 'lucas@mence.dev:~/resume$',
    back: 'back to ~',
    backUrl: '../',
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
document.getElementById('back-link').href = t.backUrl;

const pdfViewer = document.getElementById('pdf-viewer');
const PDFJS_CDN_BASE = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/';

function showPdfFallback(){
  pdfViewer.innerHTML =
    `<div class="pdf-fallback">${escapeHTML(t.pdfError)}<br>` +
    `<a class="ascii-btn" href="${escapeHTML(t.pdfPath)}" target="_blank" rel="noopener">` +
    `${asciiBox('↓', t.download)}</a></div>`;
}

function renderPdf(){
  if (!pdfViewer) return;
  if (typeof pdfjsLib === 'undefined'){ showPdfFallback(); return; }
  pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_CDN_BASE + 'pdf.worker.min.js';
  pdfViewer.innerHTML = `<div class="pdf-loading">${escapeHTML(t.pdfLoading)}</div>`;
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

animateIn([document.querySelector('.back-link'), document.querySelector('.download-row'), document.querySelector('.pdf-viewer')], { stagger: 120 });
