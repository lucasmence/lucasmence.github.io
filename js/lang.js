(function () {
  var params = new URLSearchParams(window.location.search);
  var lang = params.get("lang") || "en";

  if (lang === "en") return; // default, nothing to swap

  var translations = {
    br: {
      // index.html
      "meta-title": "Lucas Vinícius",
      "meta-description": "Engenheiro de Software com mais de 12 anos de experiência em web, desktop, DevOps e desenvolvimento de jogos.",
      "page-title": "Lucas Vinícius",
      "description": "Desenvolvedor de Software com mais de 12 anos de experiência.\nTrabalhei com devops, web, mobile e gamedev.\nAtualmente trabalho com React/Node.js e C++ gamedev.",
      "btn-resume": "Currículo",
      "btn-projects": "Projetos",

      // projects/index.html
      "projects-title": "Projetos",
      "projects-meta-title": "Lucas Vinícius - Projetos",
      "proj-boltcraft-desc": "Projeto onde estudei geração procedural de mapas, árvores de talentos e sistemas de armas (SFML e C++). Gratuito no itch.io.",
      "proj-protocol-desc": "Jogo de sobrevivência pós-apocalíptico contra zumbis (SFML e C++). Gratuito no itch.io.",
      "proj-wizardry-desc": "Jogo multiplayer 1v1 que usa os próprios sockets UDP da SFML para jogabilidade online (SFML e C++).<br/>Gratuito no itch.io.",
      "proj-boltcraft-classic-desc": "Meu primeiro jogo lançado, um dungeon crawler 2D top-down. Aprendi muito com ele e também cometi muitos erros pelo caminho (SFML e C++). Disponível na Steam.",
      "proj-realm-desc": "Meu próprio editor de mapas personalizado para meus jogos (SFML e C++). Em breve no GitHub.",
      "proj-notacerta-desc": "Aplicação online para emissão de notas fiscais (React e Node.js).",
      "proj-bestzap-desc": "Aplicativo de mensagens que usa uma biblioteca WhatsApp para gerenciamento e automação (React e Node.js).",
      "references-title": "Referências",

      // resume/index.html
      "resume-title": "Currículo",
      "resume-meta-title": "Lucas Vinícius - Currículo",
      "resume-pdf": "assets/br/LucasVinicius-Curriculo-2026.pdf"
    }
  };

  var t = translations[lang];
  if (!t) return;

  // Set html lang attribute
  document.documentElement.lang = lang;

  // Swap text content for elements with data-i18n
  var els = document.querySelectorAll("[data-i18n]");
  for (var i = 0; i < els.length; i++) {
    var key = els[i].getAttribute("data-i18n");
    if (t[key] !== undefined) {
      els[i].innerHTML = t[key].replace(/\n/g, "<br>");
    }
  }

  // Swap src/data attributes for elements with data-i18n-src
  var srcEls = document.querySelectorAll("[data-i18n-src]");
  for (var j = 0; j < srcEls.length; j++) {
    var srcKey = srcEls[j].getAttribute("data-i18n-src");
    if (t[srcKey] !== undefined) {
      if (srcEls[j].hasAttribute("data")) {
        srcEls[j].setAttribute("data", t[srcKey]);
      } else {
        srcEls[j].setAttribute("src", t[srcKey]);
      }
    }
  }

  // Swap meta tags
  var titleEl = document.querySelector("title");
  if (titleEl && t["page-title"]) {
    titleEl.textContent = t["page-title"];
  }

  var ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle && t["projects-meta-title"]) {
    ogTitle.setAttribute("content", t["projects-meta-title"]);
  }

  var ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc && t["meta-description"]) {
    ogDesc.setAttribute("content", t["meta-description"]);
  }

  // Rewrite internal links to preserve ?lang=br
  var links = document.querySelectorAll("a[href]");
  for (var k = 0; k < links.length; k++) {
    var href = links[k].getAttribute("href");
    // Only rewrite relative links (not http/https/mailto)
    if (href && !href.match(/^(https?:\/\/|mailto:)/)) {
      var separator = href.indexOf("?") === -1 ? "?" : "&";
      links[k].setAttribute("href", href + separator + "lang=" + lang);
    }
  }
})();
