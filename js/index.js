const currentLang = setupLang();

const AUTHOR_NAME = 'LUCAS VINICIUS';

const AVATAR_IMG_SRC = 'https://github.com/lucasmence.png';
const AVATAR_IMG_HTML = `<img class="avatar-img" src="${AVATAR_IMG_SRC}" width="200" height="200" alt="mence.dev" onerror="handleAvatarLoadError()">`;

const TRANSLATIONS = {
  en: {
    starshipHint: '> Use arrows to \nmove and shoot <',
    whoami_txt: 
    `${AVATAR_IMG_HTML}`+
    `<div class="ascii-name">${asciiNameBox(AUTHOR_NAME)}</div>`+
    `${careerButtonsHTML('Resume', 'Projects')}`+
    `<div>Software Developer · 12+ years of experience</div>`+
    `<div class="term-bio">I work with <span class="k">devops</span>, <span class="k">web</span>, <span class="k">mobile</span> and <span class="k">gamedev</span>. `+
    `Currently building products with <span class="k">React / Node.js</span> and games in <span class="k">C++</span>.</div>`+
    `${socialButtonsHTML()}`,
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
    `<a class="ascii-btn" href="https://store.steampowered.com/agecheck/app/2005930/" target="_blank" rel="noopener">${asciiBox('S', 'Get Boltcraft on Steam!')}</a>`,
    proj_boltcraftii: 
    `<div class="term-subtitle"># Boltcraft II <span class="proj-year">(2024)</span></div>`+
    `Project where I studied procedural map generation, talent trees, and weapon systems (SFML and C++). Free on itch.io.\n\n`+
    `<a class="ascii-btn" href="https://lucasmence.itch.io/boltcraft-ii-redux-edition" target="_blank" rel="noopener">${asciiBox('i', 'Get Boltcraft II on itch.io!')}</a>`,
    proj_protocolundeath: 
    `<div class="term-subtitle"># Protocol Undeath <span class="proj-year">(2025)</span></div>`+
    `Post-apocalyptic survival game against zombies (SFML and C++). Free on itch.io.\n\n`+
    `<a class="ascii-btn" href="https://lucasmence.itch.io/protocol-undeath" target="_blank" rel="noopener">${asciiBox('i', 'Get Protocol Undeath on itch.io!')}</a>`,
    proj_wizardryduels: 
    `<div class="term-subtitle"># Wizardry Duels <span class="proj-year">(2025)</span></div>`+
    `1v1 multiplayer game that uses SFMLs own UDP sockets for online gameplay (SFML and C++). Free on itch.io.\n\n`+
    `<a class="ascii-btn" href="https://lucasmence.itch.io/wizardry-duels" target="_blank" rel="noopener">${asciiBox('i', 'Get Wizardry Duels on itch.io!')}</a>`,
    proj_realmeditor: 
    `<div class="term-subtitle"># Realm Editor <span class="proj-year">(2021)</span></div>`+
    `My own custom map editor for my games (SFML and C++).\n\n`+
    `<a class="ascii-btn" href="https://github.com/lucasmence/realm-editor" target="_blank" rel="noopener">${asciiBox('<>', 'GitHub')}</a>`,
    proj_notacerta: 
    `<div class="term-subtitle"># NotaCerta <span class="proj-year">(2024)</span></div>`+
    `[EXTERNAL PROJECT] Online application for issuing invoices (React and Node.js).\n\n`+
    `<a class="ascii-btn" href="https://notacerta.com.br/" target="_blank" rel="noopener">${asciiBox('www', 'NotaCerta website')}</a>`,
    proj_bestzap: 
    `<div class="term-subtitle"># Bestzap <span class="proj-year">(2023)</span></div>`+
    `[EXTERNAL PROJECT] Messaging application that uses a WhatsApp library for management and automation (React and Node.js).\n\n`+
    `<a class="ascii-btn" href="https://bestzap.com.br/" target="_blank" rel="noopener">${asciiBox('www', 'Bestzap website')}</a>`,
    proj_revisor: 
    `<div class="term-subtitle"># Revisor <span class="proj-year">(2026)</span></div>`+
    `AI-powered, 100% local web application for transcribing videos and YouTube links using OpenAI Whisper.\n\n`+
    `Features AI correction via Ollama, video clipping, email delivery (Brevo), and export to TXT/SRT/CSV. Python, Flask, FFmpeg.\n\n`+
    `<a class="ascii-btn" href="https://github.com/lucasmence/revisor" target="_blank" rel="noopener">${asciiBox('<>', 'GitHub')}</a>`,
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
    `  git                show git status of the working tree\n`+
    `  starship           launch a spaceship shooter mini-game (ESC to quit)\n`+
    `  clear              clear screen\n`+
    `  help               show this message`,
    errNotFound: 'file or directory not found', 
    errNotDir: 'not a directory', 
    errMissingOp: 'missing operand', 
    errInvalidPath: 'invalid path', 
    errExists: 'already exists', 
    errNotDirR: 'directory not empty (use -r)', 
    cmdNotFound: 'command not found. Type "help" to see the list.', 
    starshipHud1: 'SCORE', 
    starshipHud2: 'LIVES', 
    starshipHud3: '[ESC] QUIT', 
    starshipQuit: 'Starship — you bailed out. Score:', 
    starshipOver: 'Starship — game over. Final score:',
  },

  br: {
    starshipHint: '> Use as setas para \nmover e atirar <',
    whoami_txt: `${AVATAR_IMG_HTML}`+
    `<div class="ascii-name">${asciiNameBox(AUTHOR_NAME)}</div>`+
    `${careerButtonsHTML('Currículo', 'Projetos')}`+
    `<div>Desenvolvedor de Software · 12+ anos de experiência</div>`+
    `<div class="term-bio">Trabalho com <span class="k">devops</span>, <span class="k">web</span>, <span class="k">mobile</span> e <span class="k">gamedev</span>. `+
    `Atualmente criando produtos com <span class="k">React / Node.js</span> e jogos em <span class="k">C++</span>.</div>`+
    `${socialButtonsHTML()}`,
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
    `<a class="ascii-btn" href="https://store.steampowered.com/agecheck/app/2005930/" target="_blank" rel="noopener">${asciiBox('S', 'Obtenha Boltcraft na Steam!')}</a>`,
    proj_boltcraftii: 
    `<div class="term-subtitle"># Boltcraft II <span class="proj-year">(2024)</span></div>`+
    `Projeto onde estudei geração procedural de mapas, árvores de talentos e sistemas de armas (SFML e C++). Gratuito no itch.io.\n\n`+
    `<a class="ascii-btn" href="https://lucasmence.itch.io/boltcraft-ii-redux-edition" target="_blank" rel="noopener">${asciiBox('i', 'Obtenha Boltcraft II no itch.io!')}</a>`,
    proj_protocolundeath: 
    `<div class="term-subtitle"># Protocol Undeath <span class="proj-year">(2025)</span></div>`+
    `Jogo de sobrevivência pós-apocalíptico contra zumbis (SFML e C++). Gratuito no itch.io.\n\n`+
    `<a class="ascii-btn" href="https://lucasmence.itch.io/protocol-undeath" target="_blank" rel="noopener">${asciiBox('i', 'Obtenha Protocol Undeath no itch.io!')}</a>`,
    proj_wizardryduels: 
    `<div class="term-subtitle"># Wizardry Duels <span class="proj-year">(2025)</span></div>`+
    `Jogo multiplayer 1v1 que usa os próprios sockets UDP da SFML para jogabilidade online (SFML e C++). Gratuito no itch.io.\n\n`+
    `<a class="ascii-btn" href="https://lucasmence.itch.io/wizardry-duels" target="_blank" rel="noopener">${asciiBox('i', 'Obtenha Wizardry Duels no itch.io!')}</a>`,
    proj_realmeditor: 
    `<div class="term-subtitle"># Realm Editor <span class="proj-year">(2021)</span></div>`+
    `Meu próprio editor de mapas personalizado para meus jogos (SFML e C++).\n\n`+
    `<a class="ascii-btn" href="https://github.com/lucasmence/realm-editor" target="_blank" rel="noopener">${asciiBox('<>', 'GitHub')}</a>`,
    proj_notacerta: 
    `<div class="term-subtitle"># NotaCerta <span class="proj-year">(2024)</span></div>`+
    `[PROJETO EXTERNO] Aplicativo online para emissão de notas fiscais (React e Node.js).\n\n`+
    `<a class="ascii-btn" href="https://notacerta.com.br/" target="_blank" rel="noopener">${asciiBox('www', 'Site do NotaCerta')}</a>`,
    proj_bestzap: 
    `<div class="term-subtitle"># Bestzap <span class="proj-year">(2023)</span></div>`+
    `[PROJETO EXTERNO] Aplicativo de mensagens que usa uma biblioteca WhatsApp para gerenciamento e automação (React e Node.js).\n\n`+
    `<a class="ascii-btn" href="https://bestzap.com.br/" target="_blank" rel="noopener">${asciiBox('www', 'Site do Bestzap')}</a>`,
    proj_revisor: 
    `<div class="term-subtitle"># Revisor <span class="proj-year">(2026)</span></div>`+
    `Aplicação web 100% local com IA para transcrever vídeos e links do YouTube usando OpenAI Whisper.\n\n`+
    `Recursos: correção via Ollama, clipe de vídeo, entrega por email (Brevo) e exportação para TXT/SRT/CSV. Python, Flask, FFmpeg.\n\n`+
    `<a class="ascii-btn" href="https://github.com/lucasmence/revisor" target="_blank" rel="noopener">${asciiBox('<>', 'GitHub')}</a>`,
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
    `   git                  mostrar o status do git (árvore de trabalho)\n`+
    `   starship             iniciar minijogo de nave espacial (ESC para sair)\n`+
    `   clear                limpar tela\n`+
    `   help                 mostrar esta mensagem`,
    errNotFound: 'arquivo ou diretório não encontrado', 
    errNotDir: 'não é um diretório', 
    errMissingOp: 'operando ausente', 
    errInvalidPath: 'caminho inválido', 
    errExists: 'já existe', 
    errNotDirR: 'diretório não vazio (use -r)', 
    cmdNotFound: 'comando não encontrado. Digite "help" para ver a lista.', 
    starshipHud1: 'PONTUAÇÃO', 
    starshipHud2: 'VIDAS', 
    starshipHud3: '[ESC] SAIR', 
    starshipQuit: 'Starship — você desistiu. Pontuação:', 
    starshipOver: 'Starship — fim de jogo. Pontuação final:',
  },
};

const t = TRANSLATIONS[currentLang];

const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;

function dir(children){ return { type:'dir', children: children || {} }; }
function file(content){ return { type:'file', content: content }; }
const FS = dir({
  home: dir({
    lucas: dir({
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
    cwd: HOME.slice(), history: [], historyPos: -1, outputEl, changes: new Map(),
    print(text, cls){ const div = document.createElement('div'); div.className = 'line ' + (cls || 'out'); div.textContent = text; outputEl.appendChild(div); },
    printHTML(html, cls){ const div = document.createElement('div'); div.className = 'line ' + (cls || 'out'); div.innerHTML = html; outputEl.appendChild(div); },
    updatePrompt(){ if(promptPathEl) promptPathEl.textContent = pathString(ctx.cwd); }
  };

  function promptGroupHTML(){
    return `<span class="prompt">lucas@mence.dev</span><span class="sym">:</span><span class="path">${pathString(ctx.cwd)}</span><span class="sym">$</span>`;
  }
  function printCmdEcho(raw){ if(!promptPathEl) return; const div = document.createElement('div'); div.className = 'line cmd'; div.innerHTML = `<span class="cmd-prompt-group">${promptGroupHTML()}</span> ${escapeHTML(raw)}`; outputEl.appendChild(div); }
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
    const cAccent = (styles.getPropertyValue('--accent') || '#8ae234').trim();
    const cDim = (styles.getPropertyValue('--fg-dim') || '#cccccc').trim();
    const cRed = (styles.getPropertyValue('--red') || '#ef2929').trim();
    const cBg = (styles.getPropertyValue('--bg-crt') || '#000000').trim();

    const ship = { x: canvas.width / 2 - 9, y: canvas.height - 26, w: 18, h: 14, speed: 4.2, history: [] };
    let bullets = [], enemies = [], score = 0, lives = 3;
    let lastEnemySpawn = 0, lastShot = 0, animId = null, ended = false;
    const keys = {};

    function spawnEnemy() { 
      const colors = ['#ef2929', '#34e2e2', '#fce94f', '#ad7fa8']; 
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
      case 'echo': ctx.print(args.join(' ')); break; 
      case 'date': ctx.print(new Date().toString()); break; 
      case 'whoami': ctx.printHTML(t.whoami_txt); break; 
      case 'history': ctx.history.forEach((h,i)=> ctx.print(`  ${i+1}  ${h}`)); break; 
      case 'git': cmd_git(ctx, args); break;
      case 'starship': cmd_starship(); break;

      case 'clear': outputEl.innerHTML=''; break; 
      default: ctx.print(`${command}: ${t.cmdNotFound}`, 'err');
    }
  }

  function runCommand(raw){
    printCmdEcho(raw);
    execCommand(raw);
  }

  function typeCommand(raw, delay = 300) {
    return new Promise((resolve) => {
      printCmdEcho(raw);
      scrollBottom();
      setTimeout(() => {
        execCommand(raw);
        scrollBottom();
        resolve();
      }, delay);
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
function gitTrack(ctx, path, status){
  const prev = ctx.changes.get(path);
  if(prev === status) return;
  if(prev === 'A' && status === 'D'){ ctx.changes.delete(path); return; }
  if(prev === 'D' && status === 'A'){ ctx.changes.delete(path); return; }
  ctx.changes.set(path, status);
}
function cmd_mkdir(ctx, args){ if(!args[0]){ ctx.print(`mkdir: ${t.errMissingOp}`, 'err'); return; } args.forEach(a=>{ const target = resolveSegments(ctx.cwd, a); const name = target.pop(); const parent = getNode(target); if(!parent || parent.type !== 'dir'){ ctx.print(`mkdir: '${a}': ${t.errInvalidPath}`, 'err'); return; } if(parent.children[name]){ ctx.print(`mkdir: '${a}': ${t.errExists}`, 'err'); return; } parent.children[name] = dir({}); gitTrack(ctx, pathString([...target, name]), 'A'); }); }
function cmd_touch(ctx, args){ if(!args[0]){ ctx.print(`touch: ${t.errMissingOp}`, 'err'); return; } args.forEach(a=>{ const target = resolveSegments(ctx.cwd, a); const name = target.pop(); const parent = getNode(target); if(!parent || parent.type !== 'dir'){ ctx.print(`touch: '${a}': ${t.errInvalidPath}`, 'err'); return; } if(!parent.children[name]){ parent.children[name] = file(''); gitTrack(ctx, pathString([...target, name]), 'A'); } }); }
function cmd_rm(ctx, args){ const r = args.includes('-r') || args.includes('-rf'); const ts = args.filter(a=>!a.startsWith('-')); if(!ts[0]){ ctx.print(`rm: ${t.errMissingOp}`, 'err'); return; } ts.forEach(a=>{ const target = resolveSegments(ctx.cwd, a); const name = target.pop(); const parent = getNode(target); if(!parent || !parent.children[name]){ ctx.print(`rm: '${a}': ${t.errNotFound}`, 'err'); return; } if(parent.children[name].type === 'dir' && !r && Object.keys(parent.children[name].children).length){ ctx.print(`rm: '${a}': ${t.errNotDirR}`, 'err'); return; } delete parent.children[name]; gitTrack(ctx, pathString([...target, name]), 'D'); }); }
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
function gitBranchName(cwd){
  const p = pathString(cwd);
  if(p === '~') return 'main';
  if(p === '~/projects') return 'dev';
  const leaf = (cwd[cwd.length-1] || '').toLowerCase().replace(/[^a-z0-9-]/g, '') || 'dev';
  return 'feat/' + leaf;
}
function cmd_git(ctx, args){
  const sub = (args[0] || 'status').toLowerCase();
  if(sub === 'status' || sub === 'st'){
    ctx.print(`On branch ${gitBranchName(ctx.cwd)}`);
    const added = [], deleted = [];
    ctx.changes.forEach((status, path) => { (status === 'A' ? added : deleted).push(path); });
    if(added.length === 0 && deleted.length === 0){
      ctx.print('');
      ctx.print('nothing to commit, working tree clean');
      return;
    }
    if(deleted.length){
      ctx.print('');
      ctx.print('Changes not staged for commit:');
      ctx.print('  (use "git add <file>..." to update what will be committed)');
      ctx.print('  (use "git restore <file>..." to discard changes in working directory)');
      ctx.print('');
      deleted.sort().forEach(path => ctx.print(`\tdeleted:    ${path}`, 'err'));
    }
    if(added.length){
      ctx.print('');
      ctx.print('Untracked files:');
      ctx.print('  (use "git add <file>..." to include in what will be committed)');
      ctx.print('');
      added.sort().forEach(path => ctx.print(`\t${path}`, 'accent'));
    }
    return;
  }
  if(sub === 'log'){
    ctx.print(`commit 7f3a9c2 (HEAD -> ${gitBranchName(ctx.cwd)})`);
    ctx.print('Author: Lucas Vinicius <mence.dev@proton.me>');
    ctx.print('Date:   ' + new Date().toDateString());
    ctx.print('');
    ctx.print('    feat: add git command to terminal');
    return;
  }
  if(sub === 'init'){
    ctx.print(`Initialized empty Git repository in ${pathString(ctx.cwd)}/.git/`);
    return;
  }
  if(sub === 'help' || sub === '-h'){
    ctx.print('usage: git <command>');
    ctx.print('');
    ctx.print('available commands:');
    ctx.print('  status   show working tree status');
    ctx.print('  log      show commit history');
    ctx.print('  init     create an empty Git repository');
    return;
  }
  ctx.print(`git: '${sub}' is not a git command. See 'git help'.`, 'err');
}

function asciiNameBox(name){
  const w = name.length + 6;
  const border = '#' + '#'.repeat(w) + '#';
  const mid    = '#' + '   ' + name + '   #';
  return border + '\n' + mid + '\n' + border;
}

function socialButtonsHTML(){
  const links = [
    { icon: '@', label: 'Email', href: 'mailto:mence.dev@proton.me' },
    { icon: '<>', label: 'GitHub', href: 'https://github.com/lucasmence' },
    { icon: 'in', label: 'Linkedin', href: 'https://www.linkedin.com/in/lucasmsv96/' },
    { icon: '::', label: 'Linktr.ee', href: 'https://linktr.ee/lucasmence' }
  ];
  const width = Math.max(...links.map(l => l.icon.length + 3 + l.label.length));
  return `<div class="ascii-btn-row">${links.map(l => `<a class="ascii-btn" href="${l.href}" target="_blank" rel="noopener">${asciiBox(l.icon, l.label, width)}</a>`).join('')}</div>`;
}
function careerButtonsHTML(resumeLabel, projectsLabel){
  const links = [
    { icon: 'CV', label: resumeLabel, href: 'resume/' + (currentLang === 'br' ? '?lang=br' : '')},
    { icon: '~/', label: projectsLabel, href: 'projects/' + (currentLang === 'br' ? '?lang=br' : '') }
  ];
  const width = Math.max(...links.map(l => l.icon.length + 3 + l.label.length));
  return `<div class="ascii-btn-row">${links.map(l => `<a class="ascii-btn" href="${l.href}">${asciiBox(l.icon, l.label, width)}</a>`).join('')}</div>`;
}

const shellTerm = createShell(document.getElementById('win-term'));

if(shellTerm.typeCommand && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  if(shellTerm.inputEl) shellTerm.inputEl.disabled = true;
  (async () => {
    await shellTerm.typeCommand('whoami');
    if(shellTerm.inputEl) { shellTerm.inputEl.disabled = false; if(!isCoarsePointer) shellTerm.inputEl.focus(); }
  })().catch(() => { if(shellTerm.inputEl) shellTerm.inputEl.disabled = false; });
} else {
  shellTerm.runCommand('whoami');
  if(shellTerm.inputEl && !isCoarsePointer) shellTerm.inputEl.focus();
}

window.addEventListener('load', () => animateIn(document.getElementById('win-term')));

