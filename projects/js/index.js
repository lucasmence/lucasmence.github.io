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
  { name: 'Boltcraft II', slug: 'boltcraft-ii', href: 'https://lucasmence.itch.io/boltcraft-ii-redux-edition', img: '../img/projects/gifs/boltcraft-ii.gif',
    desc: { en: 'Project where I studied procedural map generation, talent trees, and weapon systems (SFML and C++). Free on itch.io.', br: 'Projeto onde estudei geração procedural de mapas, árvores de talentos e sistemas de armas (SFML e C++). Grátis na itch.io.' } },
  { name: 'Protocol Undeath', slug: 'protocol-undeath', href: 'https://lucasmence.itch.io/protocol-undeath', img: '../img/projects/gifs/protocol-undeath.gif',
    desc: { en: 'Post-apocalyptic survival game against zombies (SFML and C++). Free on itch.io.', br: 'Jogo de sobrevivência pós-apocalíptico contra zumbis (SFML e C++). Grátis na itch.io.' } },
  { name: 'Wizardry Duels', slug: 'wizardry-duels', href: 'https://lucasmence.itch.io/wizardry-duels', img: '../img/projects/gifs/wizardry-duels-1.gif',
    desc: { en: "1v1 multiplayer game that uses SFML's own UDP sockets for online gameplay (SFML and C++). Free on itch.io.", br: 'Jogo multiplayer 1v1 que usa os próprios sockets UDP da SFML para jogo online (SFML e C++). Grátis na itch.io.' } },
  { name: 'Boltcraft (Classic)', slug: 'boltcraft-classic', href: 'https://store.steampowered.com/app/2005930/Boltcraft/', img: '../img/projects/gifs/boltcraft-classic.gif',
    desc: { en: 'My first released game, a 2D top-down dungeon crawler. I learned a lot from it and also made many mistakes along the way (SFML and C++). Available on Steam.', br: 'Meu primeiro jogo lançado, um dungeon crawler 2D top-down. Aprendi muito com ele e também cometi vários erros pelo caminho (SFML e C++). Disponível na Steam.' } },
  { name: 'Spellthief', slug: 'spellthief', href: 'https://lucasmence.itch.io/spellthief', img: '../img/projects/gifs/spellthief.gif',
    desc: { en: 'Experimental project where I play with the Spell Steal mechanic, inspired by Rubick from DotA (SFML and C++). Free on itch.io.', br: 'Projeto experimental onde brinco com a mecânica de Roubo de Feitiço, inspirada no Rubick de DotA (SFML e C++). Grátis na itch.io.' } },
  { name: 'Realm Editor', slug: 'realm-editor', href: 'https://github.com/lucasmence/realm-editor', img: '../img/projects/gifs/realm-editor.gif',
    desc: { en: 'My own custom map editor for my games (SFML and C++).', br: 'Meu próprio editor de mapas personalizado para meus jogos (SFML e C++).' } },
  { name: 'Python Image Processing', slug: 'python-image-processing', href: 'https://github.com/lucasmence/ProcessamentoDigitalDeImagem', img: '../img/projects/gifs/python-image-processing.gif',
    desc: { en: 'Study involving several image processing algorithms (Python and Matplotlib). GitHub.', br: 'Estudo envolvendo vários algoritmos de processamento de imagens (Python e Matplotlib). GitHub.' } },
  { name: 'Photoreader', slug: 'photoreader', href: 'https://github.com/lucasmence/pitchula', img: '../img/projects/gifs/photoreader.gif',
    desc: { en: 'Automation test where an image containing text is provided and spoken audio is returned (Python, OpenCV, and Tesseract OCR). GitHub.', br: 'Teste de automação onde uma imagem contendo texto é fornecida e um áudio falado é retornado (Python, OpenCV e Tesseract OCR). GitHub.' } },
  { name: 'WebBrowser Plugin', slug: 'webbrowser-plugin', href: 'https://github.com/lucasmence/chrome-firefox-example-plugin', img: '../img/projects/gifs/webbrowser-plugin.gif',
    desc: { en: 'Experiment focused on creating a browser plugin for potential automation tasks (JavaScript). GitHub.', br: 'Experimento focado em criar um plugin de navegador para possíveis tarefas de automação (JavaScript). GitHub.' } },
  { name: 'Kubuntu Autoinstaller', slug: 'kubuntu-autoinstaller', href: 'https://github.com/lucasmence/helper', img: '../img/projects/gifs/kubuntu-autoinstaller.gif',
    desc: { en: 'Application installer for the Kubuntu 24.04 LTS distribution, using a modular approach (Shell Script). GitHub.', br: 'Instalador de aplicativos para a distribuição Kubuntu 24.04 LTS, usando uma abordagem modular (Shell Script). GitHub.' } },
  { name: 'SFML TCP Chat', slug: 'sfml-tcp-chat', href: 'https://github.com/lucasmence/sfml-tcp-chat', img: '../img/projects/gifs/sfml-tcp-chat.gif',
    desc: { en: 'Test project created to study the basics of socket connections (SFML and C++). GitHub.', br: 'Projeto de teste criado para estudar o básico de conexões via socket (SFML e C++). GitHub.' } }
];

const WORK = [
  { name: 'NotaCerta', slug: 'notacerta', href: 'https://notacerta.com.br/', img: '../img/projects/notacerta.png',
    desc: { en: 'Online application for issuing invoices (React and Node.js).', br: 'Aplicação online para emissão de notas fiscais (React e Node.js).' } },
  { name: 'BestZap', slug: 'bestzap', href: 'https://bestzap.com.br/', img: '../img/projects/bestzap.png',
    desc: { en: 'Messaging application that uses a WhatsApp library for management and automation (React and Node.js).', br: 'Aplicação de mensagens que usa uma biblioteca do WhatsApp para gestão e automação (React e Node.js).' } }
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
      <span class="proj-titlebar-label">~/${p.slug}</span>
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


