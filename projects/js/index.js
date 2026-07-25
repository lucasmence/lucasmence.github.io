const urlParams = new URLSearchParams(window.location.search);
const currentLang = urlParams.get('lang') === 'br' ? 'br' : 'en';
document.documentElement.lang = currentLang;
document.getElementById(`lang-${currentLang}`).style.color = 'var(--accent)';
document.getElementById(`lang-${currentLang}`).style.fontWeight = 'bold';

const TRANSLATIONS = {
  en: {
    title: 'lucas@mence.dev:~/projects$',
    back: 'back to ~',
    backUrl: '../',
    pageTitle: '~/projects$ ls -la',
    myProjects: 'My Projects',
    workedOn: "Projects I've worked on",
    references: 'References'
  },
  br: {
    title: 'lucas@mence.dev:~/projetos$',
    back: 'voltar para ~',
    backUrl: '../?lang=br',
    pageTitle: '~/projetos$ ls -la',
    myProjects: 'Meus Projetos',
    workedOn: 'Projetos em que trabalhei',
    references: 'Referências'
  }
};
const t = TRANSLATIONS[currentLang];
document.title = t.title;
document.getElementById('txt-back').textContent = t.back;
document.getElementById('txt-page-title').textContent = t.pageTitle;
document.getElementById('txt-my-projects').textContent = t.myProjects;
document.getElementById('txt-worked-on').textContent = t.workedOn;
document.getElementById('txt-references').textContent = t.references;
document.getElementById('year-start').textContent = 2013;
document.getElementById('year-current').textContent = new Date().getFullYear();
document.getElementById('back-link').href = t.backUrl;

const GAMES = [
  { name: 'Revisor', year: '2026', slug: 'revisor', href: 'https://github.com/lucasmence/revisor', img: '../img/projects/revisor.png',
    desc: { en: 'AI-powered, 100% local web app for transcribing videos and YouTube links using OpenAI Whisper (Python, Flask, FFmpeg).', br: 'App web 100% local com IA para transcrever vídeos e links do YouTube usando OpenAI Whisper (Python, Flask, FFmpeg).' } },
  { name: 'Boltcraft (Classic)', year: '2022', slug: 'boltcraft-classic', href: 'https://store.steampowered.com/app/2005930/Boltcraft/', img: '../img/projects/gifs/boltcraft-classic.gif',
    desc: { en: 'My first released game, a 2D top-down dungeon crawler. I learned a lot from it and also made many mistakes along the way (SFML and C++). Available on Steam.', br: 'Meu primeiro jogo lançado, um dungeon crawler 2D top-down. Aprendi muito com ele e também cometi vários erros pelo caminho (SFML e C++). Disponível na Steam.' } },
  { name: 'Boltcraft II', year: '2024', slug: 'boltcraft-ii', href: 'https://lucasmence.itch.io/boltcraft-ii-redux-edition', img: '../img/projects/gifs/boltcraft-ii.gif',
    desc: { en: 'Project where I studied procedural map generation, talent trees, and weapon systems (SFML and C++). Free on itch.io.', br: 'Projeto onde estudei geração procedural de mapas, árvores de talentos e sistemas de armas (SFML e C++). Grátis na itch.io.' } },
  { name: 'Protocol Undeath', year: '2025', slug: 'protocol-undeath', href: 'https://lucasmence.itch.io/protocol-undeath', img: '../img/projects/gifs/protocol-undeath.gif',
    desc: { en: 'Post-apocalyptic survival game against zombies (SFML and C++). Free on itch.io.', br: 'Jogo de sobrevivência pós-apocalíptico contra zumbis (SFML e C++). Grátis na itch.io.' } },
  { name: 'Wizardry Duels', year: '2025', slug: 'wizardry-duels', href: 'https://lucasmence.itch.io/wizardry-duels', img: '../img/projects/gifs/wizardry-duels-1.gif',
    desc: { en: "1v1 multiplayer game that uses SFML's own UDP sockets for online gameplay (SFML and C++). Free on itch.io.", br: 'Jogo multiplayer 1v1 que usa os próprios sockets UDP da SFML para jogo online (SFML e C++). Grátis na itch.io.' } },
  { name: 'Realm Editor', year: '2021', slug: 'realm-editor', href: 'https://github.com/lucasmence/realm-editor', img: '../img/projects/gifs/realm-editor.gif',
    desc: { en: 'My own custom map editor for my games (SFML and C++).', br: 'Meu próprio editor de mapas personalizado para meus jogos (SFML e C++).' } }
];

const WORK = [
  { name: 'BestZap', year: '2023', slug: 'bestzap', href: 'https://bestzap.com.br/', img: '../img/projects/bestzap.png',
    desc: { en: 'Messaging application that uses a WhatsApp library for management and automation (React and Node.js).', br: 'Aplicação de mensagens que usa uma biblioteca do WhatsApp para gestão e automação (React e Node.js).' } },
  { name: 'NotaCerta', year: '2024', slug: 'notacerta', href: 'https://notacerta.com.br/', img: '../img/projects/notacerta.png',
    desc: { en: 'Online application for issuing invoices (React and Node.js).', br: 'Aplicação online para emissão de notas fiscais (React e Node.js).' } }
];

const REFERENCES = [
  { label: 'Tyron', href: 'https://tm.tyron.at/' },
  { label: 'CSFelix', href: 'https://csfelix.github.io/' },
  { label: 'Lukas Dürrenberger', href: 'https://duerrenberger.dev/' },
  { label: 'Tynan Sylvester', href: 'https://tynansylvester.com/' },
  { label: 'DaFluffyPotato', href: 'https://dafluffypotato.com/' },
  { label: 'QualquerRafa', href: 'https://qualquerrafa.github.io/' },
  { label: 'Slikey', href: 'https://slikey.de/' },
  { label: 'Thorlon', href: 'https://thorlon.com/' },
  { label: 'OneLoneCoder', href: 'https://onelonecoder.com/' },
  { label: 'ktar.dev', href: 'https://ktar.dev/' },
  { label: 'Sindre Sorhus', href: 'https://sindresorhus.com/' }
];

function renderProjectWindow(p){
  return `<a class="proj-window" href="${p.href}" target="_blank" rel="noopener">
    <div class="proj-titlebar">
      <span class="dot r"></span><span class="dot y"></span><span class="dot g"></span>
      <span class="proj-titlebar-label">~/${p.slug} <span class="proj-year">(${p.year})</span></span>
    </div>
    <div class="proj-media">
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      <div class="proj-overlay">
        <div class="proj-overlay-title">${p.name}</div>
        <div class="proj-overlay-desc">${p.desc[currentLang]}</div>
      </div>
    </div>
  </a>`;
}

document.getElementById('grid-games').innerHTML = GAMES.map(renderProjectWindow).join('');
document.getElementById('grid-work').innerHTML = WORK.map(renderProjectWindow).join('');
document.getElementById('references-row').innerHTML = `<div class="ascii-btn-row">${REFERENCES.map(r => `<a class="ascii-btn" href="${r.href}" target="_blank" rel="noopener">${r.label}</a>`).join('')}</div>`;

(function animateCards(){
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const cards = document.querySelectorAll('.proj-window');
  const btns = document.querySelectorAll('#references-row .ascii-btn');
  const all = [...cards, ...btns];
  all.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(12px) scale(0.97)';
    el.style.animationDelay = `${i * 50}ms`;
  });
  if (all.length) {
    void all[0].offsetHeight;
    all.forEach(el => {
      el.classList.add('emerge-fast');
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


