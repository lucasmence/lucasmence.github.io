const urlParams = new URLSearchParams(window.location.search);
const currentLang = urlParams.get('lang') === 'br' ? 'br' : 'en';
document.documentElement.lang = currentLang;
document.getElementById(`lang-${currentLang}`).style.color = 'var(--accent)';
document.getElementById(`lang-${currentLang}`).style.fontWeight = 'bold';

const TRANSLATIONS = {
  en: {
    starshipHint: '> Use arrows to \nmove and shoot <',
    whoami_txt: 
    `<div class="term-name">Lucas Vinicius</div>`+
    `<div class="term-subtitle">Software Developer · 12+ years of experience</div>`+
    `<div class="term-bio">I work with <span class="k">devops</span>, <span class="k">web</span>, <span class="k">mobile</span> and <span class="k">gamedev</span>. `+
    `Currently building products with <span class="k">React / Node.js</span> and games in <span class="k">C++</span>.</div>`,
    skills: 
    `LANGUAGES       JavaScript/TypeScript, C++, PHP, Python, Bash\n`+
    `FRONTEND        React, HTML/CSS\n`+
    `BACKEND         Node.js, Express, REST/GraphQL APIs\n`+
    `MOBILE          React Native\n`+
    `GAMEDEV         C++, Unity, engine architecture\n`+
    `DEVOPS          Docker, CI/CD, Linux, Jenkins, Proxmox\n`+
    `OTHERS          Neovim, git`,
    proj_boltcraft: 
    `<div class="term-subtitle"># Boltcraft <span class="proj-year">(2022)</span></div>`+
    `My first released game, a 2D top-down dungeon crawler. I learned a lot from it and also made many mistakes along the way (SFML and C++). Available on Steam.\n\n`+
    `<a class="ascii-btn" href="https://store.steampowered.com/agecheck/app/2005930/" target="_blank" rel="noopener">Get Boltcraft on Steam!</a>`,
    proj_boltcraftii: 
    `<div class="term-subtitle"># Boltcraft II <span class="proj-year">(2024)</span></div>`+
    `Project where I studied procedural map generation, talent trees, and weapon systems (SFML and C++). Free on itch.io.\n\n`+
    `<a class="ascii-btn" href="https://lucasmence.itch.io/boltcraft-ii-redux-edition" target="_blank" rel="noopener">Get Boltcraft II on itch.io!</a>`,
    proj_protocolundeath: 
    `<div class="term-subtitle"># Protocol Undeath <span class="proj-year">(2025)</span></div>`+
    `Post-apocalyptic survival game against zombies (SFML and C++). Free on itch.io.\n\n`+
    `<a class="ascii-btn" href="https://lucasmence.itch.io/protocol-undeath" target="_blank" rel="noopener">Get Protocol Undeath on itch.io!</a>`,
    proj_wizardryduels: 
    `<div class="term-subtitle"># Wizardry Duels <span class="proj-year">(2025)</span></div>`+
    `1v1 multiplayer game that uses SFMLs own UDP sockets for online gameplay (SFML and C++). Free on itch.io.\n\n`+
    `<a class="ascii-btn" href="https://lucasmence.itch.io/wizardry-duels" target="_blank" rel="noopener">Get Wizardry Duels on itch.io!</a>`,
    proj_realmeditor: 
    `<div class="term-subtitle"># Realm Editor <span class="proj-year">(2021)</span></div>`+
    `My own custom map editor for my games (SFML and C++).\n\n`+
    `<a class="ascii-btn" href="https://github.com/lucasmence/realm-editor" target="_blank" rel="noopener">GitHub</a>`,
    proj_notacerta: 
    `<div class="term-subtitle"># NotaCerta <span class="proj-year">(2024)</span></div>`+
    `[EXTERNAL PROJECT] Online application for issuing invoices (React and Node.js).\n\n`+
    `<a class="ascii-btn" href="https://notacerta.com.br/" target="_blank" rel="noopener">NotaCerta website</a>`,
    proj_bestzap: 
    `<div class="term-subtitle"># Bestzap <span class="proj-year">(2023)</span></div>`+
    `[EXTERNAL PROJECT] Messaging application that uses a WhatsApp library for management and automation (React and Node.js).\n\n`+
    `<a class="ascii-btn" href="https://bestzap.com.br/" target="_blank" rel="noopener">Bestzap website</a>`,
    proj_revisor: 
    `<div class="term-subtitle"># Revisor <span class="proj-year">(2026)</span></div>`+
    `AI-powered, 100% local web application for transcribing videos and YouTube links using OpenAI Whisper.\n\n`+
    `Features AI correction via Ollama, video clipping, email delivery (Brevo), and export to TXT/SRT/CSV. Python, Flask, FFmpeg.\n\n`+
    `<a class="ascii-btn" href="https://github.com/lucasmence/revisor" target="_blank" rel="noopener">GitHub</a>`,
    neofetch: [
      'lucas@mence.dev',
      '------------',
      'OS: Webbrowser',
      'Shell: artificial',
      'Uptime: years, maybe',
      'Stack: React, Node.js, C++',
      'Current Focus: web + gamedev',
    ],
    help: `Available commands:\n`+
    `  ls [-la] [path]    list files and directories\n`+
    `  cd <path>          change directory (.. ~ / supported)\n`+
    `  pwd                print working directory\n`+
    `  cat <file>         display file content\n`+
    `  mkdir <name>       create directory\n`+
    `  touch <name>       create an empty file\n`+
    `  rm [-r] <name>     remove file (or directory with -r)\n`+
    `  tree               show directory tree structure\n`+
    `  ps                 list running "processes"\n`+
    `  whoami             who am i\n`+
    `  neofetch           system information\n`+
    `  echo <text>        print text\n`+
    `  date               show current date and time\n`+
    `  history            show command history\n`+
    `  social             show social & contact links\n`+
    `  career             quick-access buttons (resume & project list)\n`+
    `  starship           launch a spaceship shooter mini-game (ESC to quit)\n`+
  `  reset              reposition layout windows on screen\n`+
    `  clear              clear screen\n`+
    `  help               show this message`,
    errNotFound: 'file or directory not found', 
    errNotDir: 'not a directory', 
    errMissingOp: 'missing operand', 
    errInvalidPath: 'invalid path', 
    errExists: 'already exists', 
    errNotDirR: 'directory not empty (use -r)', 
    resetMsg: 'windows layout restored.', 
    cmdNotFound: 'command not found. Type "help" to see the list.', 
    starshipHud1: 'SCORE', 
    starshipHud2: 'LIVES', 
    starshipHud3: '[ESC] QUIT', 
    starshipQuit: 'Starship — you bailed out. Score:', 
    starshipOver: 'Starship — game over. Final score:',
    btnResume: 'Resume',
    btnProjects: 'Projects',
  },

  br: {
    starshipHint: '> Use as setas para \nmover e atirar <',
    whoami_txt: `<div class="term-name">Lucas Vinicius</div>`+
    `<div class="term-subtitle">Desenvolvedor de Software · 12+ anos de experiência</div>`+
    `<div class="term-bio">Trabalho com <span class="k">devops</span>, <span class="k">web</span>, <span class="k">mobile</span> e <span class="k">gamedev</span>. `+
    `Atualmente criando produtos com <span class="k">React / Node.js</span> e jogos em <span class="k">C++</span>.</div>`,
    skills: 
    `LINGUAGENS      JavaScript/TypeScript, C++, PHP, Python, Bash\n`+
    `FRONTEND        React, HTML/CSS\n`+
    `BACKEND         Node.js, Express, APIs REST/GraphQL\n`+
    `MOBILE          React Native\n`+
    `GAMEDEV         C++, Unity, arquitetura de engines\n`+
    `DEVOPS          Docker, CI/CD, Linux, Jenkins, Proxmox\n`+
    `OUTROS          Neovim, git`,
    proj_boltcraft: 
    `<div class="term-subtitle"># Boltcraft <span class="proj-year">(2022)</span></div>`+
    `Meu primeiro jogo lançado, um dungeon crawler 2D top-down. Aprendi muito com ele e também cometi muitos erros pelo caminho (SFML e C++). Disponível na Steam.\n\n`+
    `<a class="ascii-btn" href="https://store.steampowered.com/agecheck/app/2005930/" target="_blank" rel="noopener">Obtenha Boltcraft na Steam!</a>`,
    proj_boltcraftii: 
    `<div class="term-subtitle"># Boltcraft II <span class="proj-year">(2024)</span></div>`+
    `Projeto onde estudei geração procedural de mapas, árvores de talentos e sistemas de armas (SFML e C++). Gratuito no itch.io.\n\n`+
    `<a class="ascii-btn" href="https://lucasmence.itch.io/boltcraft-ii-redux-edition" target="_blank" rel="noopener">Obtenha Boltcraft II no itch.io!</a>`,
    proj_protocolundeath: 
    `<div class="term-subtitle"># Protocol Undeath <span class="proj-year">(2025)</span></div>`+
    `Jogo de sobrevivência pós-apocalíptico contra zumbis (SFML e C++). Gratuito no itch.io.\n\n`+
    `<a class="ascii-btn" href="https://lucasmence.itch.io/protocol-undeath" target="_blank" rel="noopener">Obtenha Protocol Undeath no itch.io!</a>`,
    proj_wizardryduels: 
    `<div class="term-subtitle"># Wizardry Duels <span class="proj-year">(2025)</span></div>`+
    `Jogo multiplayer 1v1 que usa os próprios sockets UDP da SFML para jogabilidade online (SFML e C++). Gratuito no itch.io.\n\n`+
    `<a class="ascii-btn" href="https://lucasmence.itch.io/wizardry-duels" target="_blank" rel="noopener">Obtenha Wizardry Duels no itch.io!</a>`,
    proj_realmeditor: 
    `<div class="term-subtitle"># Realm Editor <span class="proj-year">(2021)</span></div>`+
    `Meu próprio editor de mapas personalizado para meus jogos (SFML e C++).\n\n`+
    `<a class="ascii-btn" href="https://github.com/lucasmence/realm-editor" target="_blank" rel="noopener">GitHub</a>`,
    proj_notacerta: 
    `<div class="term-subtitle"># NotaCerta <span class="proj-year">(2024)</span></div>`+
    `[PROJETO EXTERNO] Aplicativo online para emissão de notas fiscais (React e Node.js).\n\n`+
    `<a class="ascii-btn" href="https://notacerta.com.br/" target="_blank" rel="noopener">Site do NotaCerta</a>`,
    proj_bestzap: 
    `<div class="term-subtitle"># Bestzap <span class="proj-year">(2023)</span></div>`+
    `[PROJETO EXTERNO] Aplicativo de mensagens que usa uma biblioteca WhatsApp para gerenciamento e automação (React e Node.js).\n\n`+
    `<a class="ascii-btn" href="https://bestzap.com.br/" target="_blank" rel="noopener">Site do Bestzap</a>`,
    proj_revisor: 
    `<div class="term-subtitle"># Revisor <span class="proj-year">(2026)</span></div>`+
    `Aplicação web 100% local com IA para transcrever vídeos e links do YouTube usando OpenAI Whisper.\n\n`+
    `Recursos: correção via Ollama, clipe de vídeo, entrega por email (Brevo) e exportação para TXT/SRT/CSV. Python, Flask, FFmpeg.\n\n`+
    `<a class="ascii-btn" href="https://github.com/lucasmence/revisor" target="_blank" rel="noopener">GitHub</a>`,
    neofetch: [
      'lucas@mence.dev',
      '------------',
      'OS: Navegador',
      'Shell: artificial',
      'Uptime: anos, talvez',
      'Stack: React, Node.js, C++',
      'Foco Atual: web + gamedev',
    ],
    help: `Comandos disponíveis:\n`+
    `   ls [-la] [caminho]    listar arquivos e diretórios\n`+
    `   cd <caminho>         mudar diretório (suporta .. ~ /)\n`+
    `   pwd                  exibir diretório atual\n`+
    `   cat <arquivo>        exibir conteúdo do arquivo\n`+
    `   mkdir <nome>         criar diretório\n`+
    `   touch <nome>         criar um arquivo vazio\n`+
    `   rm [-r] <nome>       remover arquivo (ou diretório com -r)\n`+
    `   tree                 mostrar estrutura de árvore de diretórios\n`+
    `   ps                   listar "processos" em execução\n`+
    `   whoami               quem sou eu\n`+
    `   neofetch             informações do sistema\n`+
    `   echo <texto>         imprimir texto\n`+
    `   date                 mostrar data e hora atuais\n`+
    `   history              mostrar histórico de comandos\n`+
    `   social               mostrar links de redes sociais e contato\n`+
    `   career               botões de acesso rápido (currículo e lista de projetos)\n`+
    `   starship             iniciar minijogo de nave espacial (ESC para sair)\n`+   `  reset                reposicionar janelas de layout na tela\n`+
    `   clear                limpar tela\n`+
    `   help                 mostrar esta mensagem`,
    errNotFound: 'arquivo ou diretório não encontrado', 
    errNotDir: 'não é um diretório', 
    errMissingOp: 'operando ausente', 
    errInvalidPath: 'caminho inválido', 
    errExists: 'já existe', 
    errNotDirR: 'diretório não vazio (use -r)', 
    resetMsg: 'layout das janelas restaurado.', 
    cmdNotFound: 'comando não encontrado. Digite "help" para ver a lista.', 
    starshipHud1: 'PONTUAÇÃO', 
    starshipHud2: 'VIDAS', 
    starshipHud3: '[ESC] SAIR', 
    starshipQuit: 'Starship — você desistiu. Pontuação:', 
    starshipOver: 'Starship — fim de jogo. Pontuação final:',
    btnResume: 'Currículo',
    btnProjects: 'Projetos',
  },
};

const t = TRANSLATIONS[currentLang];

function pad(n){ return n.toString().padStart(2,'0'); }
function tickClock(){
  const d = new Date();
  document.getElementById('clock').textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}
tickClock(); setInterval(tickClock, 1000);
document.getElementById('year-current').textContent = new Date().getFullYear();
document.getElementById('year-start').textContent = 2013;

function dir(children){ return { type:'dir', children: children || {} }; }
function file(content){ return { type:'file', content: content }; }
const FS = dir({
  home: dir({
    lucas: dir({
      'me.jpg': file('[image] use "display me.jpg" to view'),
      'skills.txt': file(t.skills),
      'contact.txt': file(`email:    mence.dev@proton.me\ngithub:   github.com/lucasmence\nlinkedin: lucasmsv96\nsite:     mence.dev`),
      projects: dir({
        'boltcraft.md': file(t.proj_boltcraft),
        'boltcraft-ii.md': file(t.proj_boltcraftii),
        'protocol-undeath.md': file(t.proj_protocolundeath),
        'wizardry-duels.md': file(t.proj_wizardryduels),
        'realm-editor.md': file(t.proj_realmeditor),
        'nota-certa.md': file(t.proj_notacerta),
        'bestzap.md': file(t.proj_bestzap), 
        'revisor.md': file(t.proj_revisor), 
      })
    })
  })
});
const HOME = ['home','lucas'];

function resolveSegments(base, input){
  let segs = base.slice();
  if(input.startsWith('~')){ segs = HOME.slice(); input = input.slice(1); if(input.startsWith('/')) input = input.slice(1); }
  else if(input.startsWith('/')){ segs = []; input = input.slice(1); }
  if(input === '') return segs;
  input.split('/').forEach(part=>{ if(part === '' || part === '.') return; if(part === '..'){ if(segs.length) segs.pop(); } else segs.push(part); });
  return segs;
}
function getNode(segs){
  let node = FS; for(const s of segs){ if(node.type !== 'dir' || !node.children[s]) return null; node = node.children[s]; } return node;
}
function pathString(segs){
  if(segs.length >= HOME.length && HOME.every((h,i)=>segs[i]===h)){ const rest = segs.slice(HOME.length).join('/'); return '~' + (rest ? '/' + rest : ''); }
  return '/' + segs.join('/');
}
function escapeHTML(s){ return s.replace(/[&<>]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[c])); }

const AVATAR_IMG_SRC = 'https://github.com/lucasmence.png';
const AVATAR_IMG_HTML = `<img class="avatar-img" src="${AVATAR_IMG_SRC}" width="200" height="200" alt="mence.dev" onerror="handleAvatarLoadError()">`;
function handleAvatarLoadError(){
  const img = document.querySelector('.avatar-img');
  if(img) img.outerHTML = `<div class="avatar-missing">me.jpg not found</div>`;
}

function createShell(rootEl){
  const screenEl = rootEl.querySelector('.term-screen');
  const outputEl = screenEl.querySelector('.output');
  const inputEl = screenEl.querySelector('.cmdline');
  const promptPathEl = screenEl.querySelector('.prompt-path');

  const ctx = {
    cwd: HOME.slice(), history: [], historyPos: -1, outputEl,
    print(text, cls){ const div = document.createElement('div'); div.className = 'line ' + (cls || 'out'); div.textContent = text; outputEl.appendChild(div); },
    printHTML(html, cls){ const div = document.createElement('div'); div.className = 'line ' + (cls || 'out'); div.innerHTML = html; outputEl.appendChild(div); },
    updatePrompt(){ if(promptPathEl) promptPathEl.textContent = pathString(ctx.cwd); }
  };

  function printCmdEcho(raw){ if(!promptPathEl) return; const div = document.createElement('div'); div.className = 'line cmd'; div.innerHTML = `<span class="cmd-prompt-group"><span class="prompt">lucas@mence.dev</span><span class="sym">:</span><span class="path">${pathString(ctx.cwd)}</span><span class="sym">$</span></span> ${escapeHTML(raw)}`; outputEl.appendChild(div); }
  function scrollBottom(){ screenEl.scrollTop = screenEl.scrollHeight; }

  function cmd_starship(){
    const backgroundText = t.starshipHint;
    const inputline = screenEl.querySelector('.inputline');
    scrollBottom();
    const rect = screenEl.getBoundingClientRect();
    const canvas = document.createElement('canvas');
    canvas.className = 'starship-canvas';
    canvas.width = Math.max(240, Math.floor(rect.width - 4));
    canvas.height = Math.max(180, Math.floor(rect.height - 4));
    outputEl.style.display = 'none';
    if(inputline) inputline.style.display = 'none';
    screenEl.appendChild(canvas);
    if(inputEl) inputEl.blur();

    const g = canvas.getContext('2d');
    const styles = getComputedStyle(document.body);
    const cAccent = (styles.getPropertyValue('--accent') || '#5ee87d').trim();
    const cDim = (styles.getPropertyValue('--fg-dim') || '#a6a28c').trim();
    const cRed = (styles.getPropertyValue('--red') || '#f92672').trim();
    const cBg = (styles.getPropertyValue('--bg-crt') || '#0d1410').trim();

    const ship = { x: canvas.width / 2 - 9, y: canvas.height - 26, w: 18, h: 14, speed: 4.2, history: [] };
    let bullets = [], enemies = [], score = 0, lives = 3;
    let lastEnemySpawn = 0, lastShot = 0, animId = null, ended = false;
    const keys = {};

    function spawnEnemy() { 
      const colors = ['#f92672', '#66d9ef', '#e6db74', '#8f0bb8ff']; 
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      
      enemies.push({ 
        x: Math.random() * (canvas.width - 16), 
        y: -16, 
        w: 16, 
        h: 14, 
        speed: 1 + Math.random() * (1.6 + (score * 0.05)),
        history: [],
        color: randomColor 
      }); 
    }

    function onKeyDown(e){
      const k = e.key.toLowerCase();
      if(['arrowleft','arrowright','arrowup','escape'].includes(k)) e.preventDefault();
      keys[k] = true;
      if(k === 'escape') endGame(`${t.starshipQuit} ${score}`);
    }
    function onKeyUp(e){ keys[e.key.toLowerCase()] = false; }
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    function endGame(message){
      if(ended) return; ended = true;
      if(animId) cancelAnimationFrame(animId);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      canvas.remove();
      outputEl.style.display = '';
      if(inputline) inputline.style.display = '';
      ctx.print(message, 'accent');
      if(inputEl) inputEl.focus();
      scrollBottom();
    }

    function drawTrail(entity, color, history, size) {
      history.forEach((pos, index) => {
        g.globalAlpha = (index + 1) / history.length * 0.4;
        g.fillStyle = color;
        g.fillRect(pos.x, pos.y, entity.w, entity.h);
      });
      g.globalAlpha = 1.0;
    }

    function draw(){
      g.fillStyle = cBg; g.fillRect(0, 0, canvas.width, canvas.height);
      
      g.fillStyle = 'rgba(255, 255, 255, 0.4)'; 
      g.font = 'bold 20px monospace'; 
      g.textAlign = 'center';
      g.textBaseline = 'middle';
      
      const lines = backgroundText.split('\n'); 
      const lineHeight = 35;
      
      lines.forEach((line, index) => {
          g.fillText(line, canvas.width / 2, (canvas.height * 0.4) + (index * lineHeight));
      });
      drawTrail(ship, cAccent, ship.history);
      g.fillStyle = cAccent;
      g.beginPath();
      g.moveTo(ship.x + ship.w / 2, ship.y);
      g.lineTo(ship.x, ship.y + ship.h);
      g.lineTo(ship.x + ship.w, ship.y + ship.h);
      g.closePath(); g.fill();
      g.fillStyle = '#ffffff';
      bullets.forEach(b => {
        drawTrail(b, '#ffffff', b.history);
        g.fillStyle = '#ffffff';
        g.fillRect(b.x, b.y, b.w, b.h);
      });
      g.fillStyle = cRed;
      enemies.forEach(en => {
        en.history.forEach((pos, index) => {
        g.globalAlpha = (index + 1) / en.history.length * 0.4;
        g.fillStyle = en.color;
        g.fillRect(pos.x, pos.y, en.w, en.h);
      });
  
  g.globalAlpha = 1.0;
  g.fillStyle = en.color;
  g.fillRect(en.x, en.y, en.w, en.h);
});
      g.fillStyle = cDim; g.font = '11px monospace'; g.textAlign = 'left';
      g.fillText(`${t.starshipHud1} ${score}   ${t.starshipHud2} ${lives}`, 4, 12);
      g.textAlign = 'right';
      g.fillText(t.starshipHud3, canvas.width - 4, 12);
    }

    function loop(ts){
      if(ended) return;
      if(keys['arrowleft']) ship.x -= ship.speed;
      if(keys['arrowright']) ship.x += ship.speed;
      ship.x = Math.max(0, Math.min(canvas.width - ship.w, ship.x));
      if(keys['arrowup'] && (!lastShot || ts - lastShot > 500)){ bullets.push({ x: ship.x + ship.w / 2 - 1, y: ship.y, w: 2, h: 8, speed: 6, history: [] }); lastShot = ts; }
      const spawnRate = Math.max(50, 1500 - (score * 50));
      if(!lastEnemySpawn || ts - lastEnemySpawn > spawnRate){ 
          spawnEnemy(); 
          lastEnemySpawn = ts; 
      }

      ship.history.push({x: ship.x, y: ship.y});
        if(ship.history.length > 20) ship.history.shift();

      bullets.forEach(b => { 
        b.history.push({x: b.x, y: b.y});
          if(b.history.length > 10) b.history.shift();
        b.y -= b.speed
      }); 
      bullets = bullets.filter(b => b.y > -10);
      enemies.forEach(en => {
        en.history.push({x: en.x, y: en.y});
          if(en.history.length > 30) en.history.shift();
        en.y += en.speed
      });

      for(let i = enemies.length - 1; i >= 0; i--){
        const en = enemies[i];
        for(let j = bullets.length - 1; j >= 0; j--){
          const b = bullets[j];
          if(b.x < en.x + en.w && b.x + b.w > en.x && b.y < en.y + en.h && b.y + b.h > en.y){ enemies.splice(i, 1); bullets.splice(j, 1); score += 1; break; }
        }
      }
      for(let i = enemies.length - 1; i >= 0; i--){
        const en = enemies[i];
        if(en.x < ship.x + ship.w && en.x + en.w > ship.x && en.y < ship.y + ship.h && en.y + en.h > ship.y){ enemies.splice(i, 1); lives--; }
        else if(en.y > canvas.height){ enemies.splice(i, 1); }
      }

      draw();
      if(lives <= 0){ endGame(`${t.starshipOver} ${score}`); return; }
      animId = requestAnimationFrame(loop);
    }

    animId = requestAnimationFrame(loop);
}

  function execCommand(raw) {
    const trimmed = raw.trim(); if(trimmed !== ''){ ctx.history.push(trimmed); } ctx.historyPos = ctx.history.length; if(trimmed === ''){ return; }
    const parts = trimmed.match(/(?:[^\s"]+|"[^"]*")+/g) || []; const command = parts[0]; const args = parts.slice(1).map(a=> a.replace(/^"|"$/g,''));
    switch(command){
      case 'help': ctx.print(t.help); break; 
      case 'ls': cmd_ls(ctx, args); break; 
      case 'cd': cmd_cd(ctx, args); break; 
      case 'pwd': ctx.print(pathString(ctx.cwd)); break; 
      case 'cat': cmd_cat(ctx, args); break; 
      case 'mkdir': cmd_mkdir(ctx, args); break; 
      case 'touch': cmd_touch(ctx, args); break; 
      case 'rm': cmd_rm(ctx, args); break; 
      case 'tree': cmd_tree(ctx, args); break; 
      case 'ps': cmd_ps(ctx); break; 
      case 'neofetch': cmd_neofetch(ctx); break; 
      case 'display': cmd_display(ctx, args); break; 
      case 'echo': ctx.print(args.join(' ')); break; 
      case 'date': ctx.print(new Date().toString()); break; 
      case 'whoami': ctx.printHTML(t.whoami_txt); break; 
      case 'history': ctx.history.forEach((h,i)=> ctx.print(`  ${i+1}  ${h}`)); break; 
      case 'career': cmd_projects_panel(ctx, runCommand); break;
      case 'social': cmd_social(ctx); break;
      case 'starship': cmd_starship(); break;

      case 'reset': resetLayout(); ctx.print(t.resetMsg, 'accent'); break; 
      case 'clear': outputEl.innerHTML=''; break; 
      default: ctx.print(`${command}: ${t.cmdNotFound}`, 'err');
    }
  }

  function runCommand(raw){
    printCmdEcho(raw);
    execCommand(raw);
  }

  function typeCommand(raw, speed = 28) {
    return new Promise((resolve) => {
      const div = document.createElement('div');
      div.className = 'line cmd';
      div.innerHTML = `<span class="cmd-prompt-group"><span class="prompt">lucas@mence.dev</span><span class="sym">:</span><span class="path">${pathString(ctx.cwd)}</span><span class="sym">$</span></span> `;
      outputEl.appendChild(div);

      const cursor = document.createElement('span');
      cursor.className = 'cursor-blink';
      div.appendChild(cursor);
      scrollBottom();

      let i = 0;
      function typeNext() {
        if (i < raw.length) {
          const ch = document.createTextNode(raw[i]);
          div.insertBefore(ch, cursor);
          i++;
          scrollBottom();
          const jitter = Math.random() * 16 - 8;
          setTimeout(typeNext, speed + jitter);
        } else {
          cursor.remove();
          scrollBottom();
          setTimeout(() => {
            try { execCommand(raw); } catch(e) { /* silent */ }
            scrollBottom();
            resolve();
          }, 150 + Math.random() * 100);
        }
      }
      setTimeout(typeNext, 60 + Math.random() * 60);
    });
  }

  if(inputEl) {
    inputEl.addEventListener('keydown', (e)=>{
      if(e.key === 'Enter'){ const val = inputEl.value; inputEl.value = ''; runCommand(val); scrollBottom(); }
      else if(e.key === 'ArrowUp'){ e.preventDefault(); if(ctx.historyPos > 0){ ctx.historyPos--; inputEl.value = ctx.history[ctx.historyPos] || ''; } }
      else if(e.key === 'ArrowDown'){ e.preventDefault(); if(ctx.historyPos < ctx.history.length-1){ ctx.historyPos++; inputEl.value = ctx.history[ctx.historyPos] || ''; } else { ctx.historyPos = ctx.history.length; inputEl.value=''; } }
      else if(e.ctrlKey && e.key === 'l'){ e.preventDefault(); outputEl.innerHTML=''; scrollBottom(); }
    });
  }
  screenEl.addEventListener('click', ()=> { if(inputEl) inputEl.focus(); });

  ctx.updatePrompt();
  return { runCommand, typeCommand, print: ctx.print, printHTML: ctx.printHTML, inputEl };
}

function cmd_ls(ctx, args){
  const flags = args.filter(a=>a.startsWith('-')).join(''); const targets = args.filter(a=>!a.startsWith('-'));
  const targetPath = targets[0] ? resolveSegments(ctx.cwd, targets[0]) : ctx.cwd; const node = getNode(targetPath);
  if(!node){ ctx.print(`ls: '${targets[0]}': ${t.errNotFound}`, 'err'); return; }
  if(node.type === 'file'){ ctx.print(targets[0]); return; }
  const names = Object.keys(node.children);
  if(names.length === 0){ if(flags.includes('l')) ctx.print('total 0'); return; }
  if(flags.includes('l')){
    names.sort().forEach(n=>{ const c = node.children[n]; const isDir = c.type === 'dir'; const perm = isDir ? 'drwxr-xr-x' : '-rw-r--r--'; const size = isDir ? Object.keys(c.children).length*32 : (c.content||'').length; ctx.print(`${perm}  1 lucas lucas ${String(size).padStart(5)}  ${n}${isDir?'/':''}`); });
  } else {
    ctx.printHTML(names.sort().map(n=>{ const c = node.children[n]; const isDir = c.type === 'dir'; return `<span style="color:${isDir?'var(--accent)':'var(--fg-dim)'}">${escapeHTML(n)}${isDir?'/':''}</span>`; }).join('   '));
  }
}
function cmd_cd(ctx, args){ if(!args[0] || args[0] === '~'){ ctx.cwd = HOME.slice(); ctx.updatePrompt(); return; } const target = resolveSegments(ctx.cwd, args[0]); const node = getNode(target); if(!node){ ctx.print(`cd: ${args[0]}: ${t.errNotFound}`, 'err'); return; } if(node.type !== 'dir'){ ctx.print(`cd: ${args[0]}: ${t.errNotDir}`, 'err'); return; } ctx.cwd = target; ctx.updatePrompt(); }
function cmd_cat(ctx, args){
  if(!args[0]){ ctx.print(`cat: ${t.errMissingOp}`, 'err'); return; }
  args.forEach(a=>{
    const target = resolveSegments(ctx.cwd, a); const node = getNode(target);
    if(!node){ ctx.print(`cat: ${a}: ${t.errNotFound}`, 'err'); return; }
    if(node.type === 'dir'){ ctx.print(`cat: ${a}: ${t.errNotDir}`, 'err'); return; }
    ctx.printHTML(node.content);
  });
}
function cmd_mkdir(ctx, args){ if(!args[0]){ ctx.print(`mkdir: ${t.errMissingOp}`, 'err'); return; } args.forEach(a=>{ const target = resolveSegments(ctx.cwd, a); const name = target.pop(); const parent = getNode(target); if(!parent || parent.type !== 'dir'){ ctx.print(`mkdir: '${a}': ${t.errInvalidPath}`, 'err'); return; } if(parent.children[name]){ ctx.print(`mkdir: '${a}': ${t.errExists}`, 'err'); return; } parent.children[name] = dir({}); }); }
function cmd_touch(ctx, args){ if(!args[0]){ ctx.print(`touch: ${t.errMissingOp}`, 'err'); return; } args.forEach(a=>{ const target = resolveSegments(ctx.cwd, a); const name = target.pop(); const parent = getNode(target); if(!parent || parent.type !== 'dir'){ ctx.print(`touch: '${a}': ${t.errInvalidPath}`, 'err'); return; } if(!parent.children[name]) parent.children[name] = file(''); }); }
function cmd_rm(ctx, args){ const r = args.includes('-r') || args.includes('-rf'); const ts = args.filter(a=>!a.startsWith('-')); if(!ts[0]){ ctx.print(`rm: ${t.errMissingOp}`, 'err'); return; } ts.forEach(a=>{ const target = resolveSegments(ctx.cwd, a); const name = target.pop(); const parent = getNode(target); if(!parent || !parent.children[name]){ ctx.print(`rm: '${a}': ${t.errNotFound}`, 'err'); return; } if(parent.children[name].type === 'dir' && !r && Object.keys(parent.children[name].children).length){ ctx.print(`rm: '${a}': ${t.errNotDirR}`, 'err'); return; } delete parent.children[name]; }); }
function cmd_tree(ctx, args){
  const start = args[0] ? resolveSegments(ctx.cwd, args[0]) : ctx.cwd; const node = getNode(start); if(!node || node.type !== 'dir'){ ctx.print(`tree: ${t.errNotFound}`, 'err'); return; } ctx.print(pathString(start));
  function walk(n, prefix){ const names = Object.keys(n.children).sort(); names.forEach((name, idx)=>{ const isLast = idx === names.length - 1; const c = n.children[name]; const isDir = c.type === 'dir'; ctx.print(prefix + (isLast?'└── ':'├── ') + name + (isDir?'/':'')); if(isDir) walk(c, prefix + (isLast?'    ':'│   ')); }); } walk(node, '');
}
function cmd_ps(ctx){ ctx.print('  PID  CMD'); [['1','/sbin/init'],['42','dev-server --watch'],['108','node api-server.js'],['777','gamedev ideas --brew --infinite']].forEach(([pid,cmdName])=> ctx.print(`  ${pid.padStart(4)}  ${cmdName}`)); }
function cmd_neofetch(ctx){ 
  const art = [
  '       ,___          .-;\' ',
  '       `"-.`\\_...._/`.`   ',
  '    ,      \\        /     ',
  ' .-\' \',    / ()   ()\\     ',
  '`\'._   \\  /()    .  (|    ',
  '    > .\' ;,     -\'-  /    ',
  '   / <   |;,     __.;     ',
  '   \'-\'.\'-.|  , \\    , \\   ',
  '      `>.\'|;, \\_)    \\_)   ',
  '       `-;     ,    /       ',
  '          \\    /   <       ',
  '           \'. <`\'-,_)     ',
  '        jgs \'._)           '
  ]; 
  const info = t.neofetch; for(let i=0;i<Math.max(art.length,info.length);i++){ ctx.printHTML(`<span style="color:var(--accent-soft)">${(art[i]||'').padEnd(19)}</span>  ${escapeHTML(info[i]||'')}`); } }
function cmd_display(ctx, args){
  if(!args[0]){ ctx.print(`display: ${t.errMissingOp}`, 'err'); return; }
  if(args[0] === 'me.jpg' || args[0] === 'avatar.jpg' || args[0] === 'avatar.png' || args[0] === 'avatar'){ ctx.printHTML(AVATAR_IMG_HTML); }
  else { ctx.print(`display: ${args[0]}: ${t.errNotFound}`, 'err'); }
}

function asciiButtonLabel(label, width){
  const chWidth = Math.max(width || 0, label.length) + 2;
  return `<span class="ascii-btn-label" style="min-width:${chWidth}ch">${escapeHTML(label)}</span>`;
}

function cmd_social(ctx){
  const links = [
    { label: 'Email', href: 'mailto:mence.dev@proton.me' },
    { label: 'GitHub', href: 'https://github.com/lucasmence' },
    { label: 'Linkedin', href: 'https://www.linkedin.com/in/lucasmsv96/' },
    { label: 'Linktr.ee', href: 'https://linktr.ee/lucasmence' }
  ];
  const width = Math.max(...links.map(l => l.label.length));
  const html = `<div class="ascii-btn-row">${links.map(l => `<a class="ascii-btn" href="${l.href}" target="_blank" rel="noopener">${asciiButtonLabel(l.label, width)}</a>`).join('')}</div>`;
  ctx.printHTML(html);
}
function cmd_projects_panel(ctx, runCommand){
  const links = [
    { label: `${t.btnResume}`, href: 'resume/' + (currentLang === 'br' ? '?lang=br' : '')},
    { label: `${t.btnProjects}`, href: 'projects/' + (currentLang === 'br' ? '?lang=br' : '') }
  ];
  const width = Math.max(...links.map(l => l.label.length));
  const html = `<div class="ascii-btn-row">${links.map(l => `<a class="ascii-btn" href="${l.href}" target="_blank" rel="noopener">${asciiButtonLabel(l.label, width)}</a>`).join('')}</div>`;
  ctx.printHTML(html);
}

const shellTerm = createShell(document.getElementById('win-term'));

if(shellTerm.typeCommand && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  if(shellTerm.inputEl) shellTerm.inputEl.disabled = true;
  (async () => {
    await shellTerm.typeCommand('display me.jpg');
    await shellTerm.typeCommand('whoami');
    await shellTerm.typeCommand('social');
    await shellTerm.typeCommand('career');
    if(shellTerm.inputEl) { shellTerm.inputEl.disabled = false; shellTerm.inputEl.focus(); }
  })().catch(() => { if(shellTerm.inputEl) shellTerm.inputEl.disabled = false; });
} else {
  shellTerm.runCommand('display me.jpg');
  shellTerm.runCommand('whoami');
  shellTerm.runCommand('social');
  shellTerm.runCommand('career');
  if(shellTerm.inputEl) shellTerm.inputEl.focus();
}

function closeWindow(id) {
  const win = document.getElementById(id);
  if(win) { win.classList.add('closed'); removeMinIcon(id); }
}

function updateTransformOrigin(win, targetRect) {
  const winRect = win.getBoundingClientRect();
  const originX = targetRect.left + (targetRect.width / 2) - winRect.left;
  const originY = targetRect.top + (targetRect.height / 2) - winRect.top;
  win.style.transformOrigin = `${originX}px ${originY}px`;
}

function minimizeWindow(id) {
  if(!desktopMode) return;
  const win = document.getElementById(id);
  if(win) {
    win.classList.remove('maximized');
    createMinIcon(id, win.dataset.title || 'window');
    const btn = document.getElementById(`min-item-${id}`);
    if(btn) { updateTransformOrigin(win, btn.getBoundingClientRect()); }
    requestAnimationFrame(() => { win.classList.add('minimized'); });
  }
}

function maximizeWindow(id) {
  if(!desktopMode) return;
  const win = document.getElementById(id);
  if(win) {
    win.style.transformOrigin = 'center center';
    win.classList.toggle('maximized');
    if (win.classList.contains('term-wrap')) { handleTermResize(win, win.offsetWidth, win.offsetHeight); }
  }
}

function createMinIcon(id, title) {
  if (document.getElementById(`min-item-${id}`)) return;
  const container = document.getElementById('minimized-bar');
  const btn = document.createElement('button');
  btn.className = 'min-task-item';
  btn.id = `min-item-${id}`;
  btn.innerHTML = `<span class="dot-status"></span><span>${title}</span>`;
  btn.onclick = () => restoreWindow(id);
  container.appendChild(btn);
}

function removeMinIcon(id) {
  const btn = document.getElementById(`min-item-${id}`);
  if (btn) btn.remove();
}

function restoreWindow(id) {
  const win = document.getElementById(id);
  const btn = document.getElementById(`min-item-${id}`);
  if (win && btn) {
    updateTransformOrigin(win, btn.getBoundingClientRect());
    win.classList.remove('minimized');
    removeMinIcon(id);
    bringToFront(win);
    if(win.classList.contains('term-wrap')) {
      handleTermResize(win, win.offsetWidth, win.offsetHeight);
      const cmdline = win.querySelector('.cmdline');
      if(cmdline) cmdline.focus();
    }
  }
}

const desktop = document.getElementById('desktop');
const winTerm = document.getElementById('win-term');
let zTop = 10; let desktopMode = false; let deskHeight = 0;

function bringToFront(win){ win.style.zIndex = ++zTop; }
function growDesktopFor(bottomEdge){ const needed = bottomEdge + 40; if(needed > deskHeight){ deskHeight = needed; desktop.style.height = deskHeight + 'px'; } }

function makeDraggable(win, handle){
  let dragging = false, pointerId = null, startX = 0, startY = 0, origLeft = 0, origTop = 0;
  handle.addEventListener('pointerdown', (e)=>{
    if(!desktopMode || win.classList.contains('maximized') || e.target.closest('.window-controls')) return;
    dragging = true; pointerId = e.pointerId; handle.setPointerCapture(pointerId);
    startX = e.clientX; startY = e.clientY;
    origLeft = parseFloat(win.style.left) || 0; origTop = parseFloat(win.style.top) || 0;
    win.classList.add('dragging'); bringToFront(win);
  });
  handle.addEventListener('pointermove', (e)=>{
    if(!dragging) return;
    let newLeft = origLeft + (e.clientX - startX), newTop = origTop + (e.clientY - startY);
    const maxLeft = Math.max(desktop.getBoundingClientRect().width - win.offsetWidth, 0);
    newLeft = Math.min(Math.max(newLeft, 0), maxLeft); newTop = Math.max(newTop, 0);
    win.style.left = newLeft + 'px'; win.style.top = newTop + 'px';
    growDesktopFor(newTop + win.offsetHeight);
  });
  const stop = () => { if(dragging){ dragging = false; win.classList.remove('dragging'); try{handle.releasePointerCapture(pointerId)}catch(c){} } };
  handle.addEventListener('pointerup', stop); handle.addEventListener('pointercancel', stop);
}

function setupOmniResize(win, minW, minH, onResize) {
  const resizers = win.querySelectorAll('.resizer');
  resizers.forEach(resizer => {
    let resizing = false, pointerId = null;
    let startX = 0, startY = 0, origW = 0, origH = 0, origLeft = 0, origTop = 0;
    
    resizer.addEventListener('pointerdown', (e) => {
      if(!desktopMode || win.classList.contains('maximized')) return;
      e.preventDefault(); e.stopPropagation();
      resizing = true; pointerId = e.pointerId; resizer.setPointerCapture(pointerId);
      startX = e.clientX; startY = e.clientY;
      origW = win.offsetWidth; origH = win.offsetHeight;
      origLeft = parseFloat(win.style.left) || 0; origTop = parseFloat(win.style.top) || 0;
      bringToFront(win);
    });

    resizer.addEventListener('pointermove', (e) => {
      if(!resizing) return;
      const dx = e.clientX - startX; const dy = e.clientY - startY;
      let newW = origW, newH = origH, newLeft = origLeft, newTop = origTop;
      const type = resizer.className.split(' ')[1];

      if (type.includes('r')) { newW = Math.max(origW + dx, minW); } 
      else if (type.includes('l')) { const possibleW = origW - dx; if (possibleW >= minW) { newW = possibleW; newLeft = origLeft + dx; } }
      if (type.includes('b')) { newH = Math.max(origH + dy, minH); } 
      else if (type.includes('t')) { const possibleH = origH - dy; if (possibleH >= minH) { newH = possibleH; newTop = origTop + dy; } }

      const deskW = desktop.getBoundingClientRect().width;
      if(newLeft < 0) { newW += newLeft; newLeft = 0; }
      if(newLeft + newW > deskW) { newW = deskW - newLeft; }
      if(newTop < 0) { newH += newTop; newTop = 0; }

      if(newW >= minW) { win.style.width = newW + 'px'; win.style.left = newLeft + 'px'; }
      if(newH >= minH) { win.style.height = newH + 'px'; win.style.top = newTop + 'px'; }
      
      growDesktopFor(parseFloat(win.style.top) + win.offsetHeight);
      if(onResize) onResize(win.offsetWidth, win.offsetHeight);
    });

    const stop = () => { if(resizing){ resizing = false; try{resizer.releasePointerCapture(pointerId)}catch(c){} } };
    resizer.addEventListener('pointerup', stop); resizer.addEventListener('pointercancel', stop);
  });
}

function handleTermResize(win, w, h){
  const inner = win.querySelector('.term-screen');
  const titlebarH = win.querySelector('.term-titlebar').offsetHeight;
  inner.style.height = Math.max(h - titlebarH, 120) + 'px';
}

function computeDefaultLayout(){
  const deskRect = desktop.getBoundingClientRect();
  const termW = Math.min(920, deskRect.width - 20);

  [winTerm].forEach(w=> w.classList.remove('closed', 'minimized', 'maximized'));
  document.getElementById('minimized-bar').innerHTML = '';

  const termLeft = (deskRect.width - termW) / 2;
  winTerm.style.width = termW + 'px'; winTerm.style.left = termLeft + 'px'; winTerm.style.top = '0px';

  const footerEl = document.querySelector('footer');
  const reserved = (footerEl ? footerEl.offsetHeight : 0) + 30;
  const available = window.innerHeight - deskRect.top - reserved;
  const termTotalH = Math.max(350, Math.min(600, available));
  winTerm.style.height = termTotalH + 'px';
  handleTermResize(winTerm, termW, termTotalH);

  deskHeight = parseFloat(winTerm.style.top) + termTotalH;
  desktop.style.height = deskHeight + 'px';
}

function applyLayoutMode(){
  if(window.innerWidth > 700) { desktopMode = true; computeDefaultLayout(); bringToFront(winTerm); }
  else {
    desktopMode = false;
    winTerm.classList.remove('closed', 'minimized', 'maximized'); winTerm.style.cssText = '';
    document.querySelectorAll('.term-screen').forEach(s => s.style.height = ''); desktop.style.height = '';
    document.getElementById('minimized-bar').innerHTML = '';
  }
}

function resetLayout(){ if(desktopMode) { computeDefaultLayout(); zTop = 10; bringToFront(winTerm); } }

makeDraggable(winTerm, winTerm.querySelector('.term-titlebar'));
setupOmniResize(winTerm, 420, 260, (w,h)=>handleTermResize(winTerm,w,h));

window.addEventListener('load', ()=>{
  applyLayoutMode();
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const wins = [winTerm];
    wins.forEach((win, i) => {
      win.style.opacity = '0';
      win.style.transform = 'translateY(16px) scale(0.97)';
      win.style.animationDelay = `${i * 120}ms`;
    });
    void wins[0].offsetHeight;
    wins.forEach(win => win.classList.add('emerge'));
    wins.forEach(win => {
      win.addEventListener('animationend', () => {
        win.style.opacity = '';
        win.style.transform = '';
        win.style.animationDelay = '';
      }, { once: true });
    });
  }
});
let resizeT; window.addEventListener('resize', ()=>{ clearTimeout(resizeT); resizeT = setTimeout(applyLayoutMode, 200); });

