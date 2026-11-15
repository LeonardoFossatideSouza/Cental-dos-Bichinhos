/* Central dos Bichos — protótipo navegável (sem servidor; dados simulados). */
(function () {
  "use strict";

  /* ---------- Ícones (traço 2px, cor herdada) ---------- */
  var I = {
    alerta: '<path d="M12 3 2.5 20h19L12 3z"/><path d="M12 10v4"/><path d="M12 17.5v.01"/>',
    busca: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m20 20-4.8-4.8"/>',
    calendario: '<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M8 3v4M16 3v4"/>',
    coracao: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
    seta: '<path d="m9 6 6 6-6 6"/>',
    voltar: '<path d="M19 12H5"/><path d="m11 6-6 6 6 6"/>',
    telefone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
    pino: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    gps: '<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>',
    camera: '<path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13.5" r="3.5"/>',
    check: '<path d="m5 12 5 5L20 7"/>',
    pata: '<g fill="currentColor" stroke="none"><ellipse cx="12" cy="16" rx="4.5" ry="3.8"/><circle cx="6" cy="10.5" r="2"/><circle cx="9.5" cy="6.5" r="2"/><circle cx="14.5" cy="6.5" r="2"/><circle cx="18" cy="10.5" r="2"/></g>',
    escudo: '<path d="M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6l-7-3z"/>',
    enviar: '<path d="M21 3 3 10.5l7 3 3 7L21 3z"/><path d="m10 13.5 4.5-4.5"/>',
    ia: '<path d="M11 3l1.8 4.7 4.7 1.8-4.7 1.8L11 16l-1.8-4.7L4.5 9.5l4.7-1.8z"/><path d="M18.5 14.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z"/>',
    cadeado: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    copiar: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',
    relogio: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.01"/>',
    mensagem: '<path d="M4 18.5V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H8l-4 3.5z"/>',
    fechar: '<path d="M6 6l12 12M18 6 6 18"/>',
    mais: '<path d="M12 5v14M5 12h14"/>',
    editar: '<path d="M4 20h4L19 9l-4-4L4 16v4z"/><path d="m13.5 6.5 4 4"/>',
    casa: '<path d="M4 11 12 4l8 7"/><path d="M6 10v10h12V10"/>',
    grafico: '<path d="M4 20V4"/><path d="M4 20h16"/><rect x="7" y="11" width="3" height="6"/><rect x="12" y="7" width="3" height="10"/><rect x="17" y="13" width="3" height="4"/>',
    usuarios: '<circle cx="9" cy="8" r="3.5"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M21 20c0-2.8-1.6-5-4-5.7"/>',
    sair: '<path d="M14 4h5v16h-5"/><path d="M10 8l-4 4 4 4M6 12h10"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>'
  };
  function svg(nome) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (I[nome] || "") + "</svg>";
  }
  function icones(raiz) {
    (raiz || document).querySelectorAll("i[data-i]").forEach(function (el) {
      var s = document.createElement("span");
      s.className = "ico " + (el.className || "");
      s.innerHTML = svg(el.getAttribute("data-i"));
      el.replaceWith(s);
    });
  }

  /* ---------- Partes repetidas das telas ---------- */
  function partes() {
    document.querySelectorAll("[data-faixa]").forEach(function (el) {
      el.className = "faixa";
      el.innerHTML = '<i data-i="escudo"></i> Prefeitura Municipal de São Sebastião do Paraíso · <b>Protótipo de demonstração, não é canal oficial</b>';
    });
    document.querySelectorAll("[data-cab]").forEach(function (el) {
      var a = document.createElement("a");
      a.className = "cab"; a.href = el.getAttribute("data-cab") || "inicio.html";
      a.innerHTML = '<span class="simbolo"><i data-i="pata"></i></span><span class="nome">Central dos Bichos</span>';
      el.replaceWith(a);
    });
    document.querySelectorAll("[data-etapa]").forEach(function (el) {
      var p = +el.getAttribute("data-passo") || 0, t = +el.getAttribute("data-total") || 6;
      var mostrarBarra = el.hasAttribute("data-passo");
      el.className = "etapa";
      el.innerHTML = '<div class="linha"><a class="voltar" href="' + (el.getAttribute("data-voltar") || "inicio.html") + '" aria-label="Voltar"><i data-i="voltar"></i></a>' +
        '<span class="titulo">' + (el.getAttribute("data-titulo") || "Novo registro") + "</span>" +
        '<span class="passo">' + (el.getAttribute("data-rotulo") || (mostrarBarra ? "Etapa " + p + " de " + t : "")) + "</span></div>" +
        (mostrarBarra ? '<div class="progresso" role="progressbar" aria-valuemin="0" aria-valuemax="' + t + '" aria-valuenow="' + p + '"><span style="width:' + (100 * p / t) + '%"></span></div>' : "");
    });
    var MENU = [["fila", "fila.html", "alerta", "Fila de ocorrências"], ["mapa", "mapa.html", "pino", "Mapa da situação"], ["recomendacoes", "recomendacoes.html", "ia", "Alertas e recomendações"], ["indicadores", "indicadores.html", "grafico", "Indicadores"],
      ["telefone", "registrar-telefone.html", "telefone", "Registro de atendimento"], ["castracao", "castracao.html", "calendario", "Castração"], ["adocao", "adocao.html", "coracao", "Adoção e lar temporário"]];
    document.querySelectorAll("[data-menu]").forEach(function (el) {
      var atual = el.getAttribute("data-menu");
      el.className = "menu";
      el.setAttribute("aria-label", "Menu do painel");
      // No celular e no tablet, só a barra aparece; o botão "Menu" abre os itens (ver estilo.css).
      el.innerHTML = '<div class="menu-barra"><a class="marca" href="fila.html"><span class="simbolo"><i data-i="pata"></i></span><span><span class="nome">Central dos Bichos</span><span class="legenda">Painel da Secretaria</span></span></a>' +
        '<button type="button" class="menu-botao" aria-expanded="false" aria-controls="menu-itens"><span class="quando-fechado"><i data-i="menu"></i></span><span class="quando-aberto"><i data-i="fechar"></i></span>Menu</button></div>' +
        '<div class="menu-itens" id="menu-itens">' +
        MENU.map(function (m) { return '<a class="item" href="' + m[1] + '"' + (m[0] === atual ? ' aria-current="page"' : "") + '><i data-i="' + m[2] + '"></i>' + m[3] + "</a>"; }).join("") +
        '<a class="item" href="entrar.html"><i data-i="sair"></i>Sair</a></div><p class="rodape">Secretaria Municipal de Meio Ambiente</p>';
      var botao = el.querySelector(".menu-botao");
      botao.addEventListener("click", function () {
        var aberto = el.classList.toggle("aberto");
        botao.setAttribute("aria-expanded", aberto ? "true" : "false");
      });
    });
    document.querySelectorAll("[data-topo]").forEach(function (el) {
      el.className = "topo";
      el.innerHTML = '<h2>' + el.getAttribute("data-topo") + '</h2><div class="usuario"><span class="avatar" title="Atendente (perfil fictício)">AT</span><span class="usuario-texto"><span class="forte apoio" style="display:block">Atendente (perfil fictício)</span><span class="legenda">Secretaria de Meio Ambiente</span></span></div>';
    });
    // Tabelas: guarda o nome da coluna em cada célula, para o celular mostrar a linha como cartão.
    document.querySelectorAll(".tabela table").forEach(function (t) {
      var rotulos = Array.prototype.map.call(t.querySelectorAll("thead th"), function (th) { return th.textContent.trim(); });
      t.querySelectorAll("tbody tr").forEach(function (tr) {
        Array.prototype.forEach.call(tr.children, function (td, i) { if (rotulos[i]) td.setAttribute("data-rotulo", rotulos[i]); });
      });
    });
  }

  /* ---------- Opções (chips) ---------- */
  function chips() {
    document.addEventListener("click", function (ev) {
      var c = ev.target.closest(".chip");
      if (!c) return;
      var grupo = c.closest(".chips");
      if (grupo && grupo.hasAttribute("data-unico")) {
        grupo.querySelectorAll(".chip").forEach(function (o) { o.setAttribute("aria-pressed", "false"); });
        c.setAttribute("aria-pressed", "true");
      } else {
        c.setAttribute("aria-pressed", c.getAttribute("aria-pressed") === "true" ? "false" : "true");
      }
      document.dispatchEvent(new CustomEvent("cb:opcoes"));
    });
    document.querySelectorAll(".chip").forEach(function (c) { if (!c.hasAttribute("aria-pressed")) c.setAttribute("aria-pressed", "false"); if (c.tagName === "BUTTON") c.type = "button"; });
  }
  function marcar(grupoId, valores) {
    var g = document.getElementById(grupoId);
    if (!g) return;
    g.querySelectorAll(".chip").forEach(function (c) { c.setAttribute("aria-pressed", valores.indexOf(c.textContent.trim()) >= 0 ? "true" : "false"); });
  }

  /* ---------- Linhas clicáveis e links "data-ir" ---------- */
  function navegacao() {
    document.addEventListener("click", function (ev) {
      var tr = ev.target.closest("tr[data-href]");
      if (tr) location.href = tr.getAttribute("data-href");
      var b = ev.target.closest("[data-ir]");
      if (b) { ev.preventDefault(); location.href = b.getAttribute("data-ir"); }
    });
  }

  /* ---------- IA simulada: lê o relato e sugere o preenchimento ---------- */
  function sugerir(t) {
    t = (t || "").toLowerCase();
    var r = { situacao: [], animal: [], qtd: ["1"], condicoes: [], prioridade: "Baixa", motivos: [] };
    var tem = function (re) { return re.test(t); };
    if (tem(/gat[oa]|felin/)) r.animal.push("Gato");
    if (tem(/cachorr|c[ãa]o\b|c[ãa]es|cadel/)) r.animal.push("Cão");
    if (tem(/cavalo|égua|egua|boi|vaca|burro/)) r.animal.push("Cavalo ou boi");
    if (!r.animal.length) r.animal.push("Outro");
    if (tem(/atac|mord|agressiv|brav/)) { r.situacao.push("Agressivo"); r.prioridade = "Crítica"; r.motivos.push("animal agressivo ou atacando"); }
    if (tem(/machuc|ferid|sangr|doent|manc|atropel/)) { r.situacao.push("Ferido ou doente"); r.condicoes.push("Ferido"); r.motivos.push("ferimento ou doença"); }
    if (tem(/pres[oa]\b|amarrad|acorrent|preso/)) { r.situacao.push("Preso ou em risco"); r.condicoes.push("Preso"); r.motivos.push("animal preso"); }
    if (tem(/maltrat|bate|batend|sem (água|agua|comida)|espanc/)) { r.situacao.push("Maus-tratos"); r.motivos.push("possíveis maus-tratos"); }
    if (tem(/rodovia|avenida|tr[âa]nsito|pista|estrada/)) {
      if (r.animal.indexOf("Cavalo ou boi") >= 0) r.situacao.push("Grande porte na via");
      r.condicoes.push("No trânsito"); r.motivos.push("risco no trânsito");
    }
    if (tem(/magr|desnutr|fome|ossos/)) { r.condicoes.push("Magro"); r.motivos.push("magreza"); }
    if (tem(/filhote|ninhada/)) { r.condicoes.push("Com filhotes"); r.qtd = ["4 ou mais"]; }
    else if (tem(/\b(dois|duas|tr[êe]s|2|3)\b/)) r.qtd = ["2 a 3"];
    else if (tem(/v[áa]rios|muitos|\b[4-9]\b/)) r.qtd = ["4 ou mais"];
    if (!r.situacao.length) r.situacao.push("Abandonado");
    if (r.prioridade !== "Crítica") {
      if (tem(/sangr|atropel|n[ãa]o consegue andar/) || r.condicoes.indexOf("Preso") >= 0 || r.condicoes.indexOf("No trânsito") >= 0 || (r.condicoes.indexOf("Ferido") >= 0 && r.condicoes.indexOf("Magro") >= 0)) r.prioridade = "Alta";
      else if (r.condicoes.length || r.situacao.indexOf("Maus-tratos") >= 0) r.prioridade = "Média";
    }
    return r;
  }
  var CLASSE_TAG = { "Crítica": "tag-critica", "Alta": "tag-alta", "Média": "tag-media", "Baixa": "tag-baixa" };
  function telaRelato() {
    var f = document.getElementById("form-relato");
    if (!f) return;
    var ta = f.querySelector("textarea"), cont = document.getElementById("contador");
    try { var salvo = sessionStorage.getItem("cb-relato"); if (salvo) ta.value = salvo; } catch (e) {}
    var at = function () { if (cont) cont.textContent = ta.value.length + " / 500"; };
    ta.addEventListener("input", at); at();
    f.addEventListener("submit", function (ev) {
      ev.preventDefault();
      try { sessionStorage.setItem("cb-relato", ta.value); } catch (e) {}
      location.href = f.getAttribute("action");
    });
  }
  function telaConfira() {
    var alvo = document.getElementById("relato-citado");
    if (!alvo) return;
    var texto = "";
    try { texto = sessionStorage.getItem("cb-relato") || ""; } catch (e) {}
    if (!texto) texto = alvo.getAttribute("data-exemplo");
    alvo.textContent = "“" + texto + "”";
    var s = sugerir(texto);
    marcar("op-situacao", s.situacao); marcar("op-animal", s.animal); marcar("op-qtd", s.qtd); marcar("op-condicoes", s.condicoes);
    var tag = document.getElementById("prioridade-sugerida");
    if (tag) { tag.textContent = s.prioridade; tag.className = "tag " + CLASSE_TAG[s.prioridade]; }
    var mot = document.getElementById("motivos");
    if (mot) mot.textContent = s.motivos.length ? "Motivos: " + s.motivos.join(", ") + "." : "Nenhum sinal de urgência encontrado no relato.";
    atualizarMausTratos();
  }
  function atualizarMausTratos() {
    var box = document.getElementById("orientacao-maus-tratos");
    if (!box) return;
    var ativo = Array.prototype.some.call(document.querySelectorAll(".chip[aria-pressed='true']"), function (c) { return c.textContent.trim() === "Maus-tratos"; });
    box.classList.toggle("oculto", !ativo);
  }

  /* ---------- Mapas (Leaflet; se não carregar, mostra aviso) ---------- */
  var CENTRO = [-20.917, -46.984];
  function base(el, zoom) {
    var m = L.map(el, { scrollWheelZoom: false }).setView(CENTRO, zoom);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">colaboradores do OpenStreetMap</a>', maxZoom: 19
    }).addTo(m);
    return m;
  }
  function falha(el) { el.innerHTML = '<div class="mapa-falha">Mapa indisponível sem internet. No sistema real, o mapa aparece aqui.</div>'; }
  function aleatorio(semente) { return function () { semente = (semente * 9301 + 49297) % 233280; return semente / 233280; }; }
  window.CB_mapaCidadao = function (id) {
    var el = document.getElementById(id); if (!el) return;
    if (!window.L) return falha(el);
    var m = base(el, 15);
    var pin = L.marker(CENTRO, { draggable: true, title: "Local do animal" }).addTo(m);
    m.on("click", function (e) { pin.setLatLng(e.latlng); });
    var gps = document.getElementById("usar-gps");
    if (gps) gps.addEventListener("click", function () {
      var aviso = document.getElementById("gps-aviso");
      if (!navigator.geolocation) { if (aviso) aviso.textContent = "Seu aparelho não informou a localização."; return; }
      navigator.geolocation.getCurrentPosition(function (p) { var ll = [p.coords.latitude, p.coords.longitude]; pin.setLatLng(ll); m.setView(ll, 17); if (aviso) aviso.textContent = "Localização encontrada. Ajuste o ponto se precisar."; },
        function () { if (aviso) aviso.textContent = "Não foi possível usar a localização. Marque o ponto no mapa."; });
    });
  };

  /* =====================================================================
     Situação por área (D-32, D-33). Dois sinais:
     - AGORA: casos em aberto (críticos, alta prioridade, prazo vencido) → vermelho;
     - ÚLTIMOS 30 DIAS: casos novos e gatilhos de prevenção → amarelo;
     - sem urgência e poucos casos novos → verde.
     Dados e limites ilustrativos. Bairros "A" a "H" provisórios.
     ===================================================================== */
  var BASE_AREAS = [
    { id: "A", nome: "Bairro A", c: [-20.913, -46.989], raio: 600, total: 52, mesAnterior: 47, abandono: 30, ferido: 8, maus: 4, agress: 4, filhotes: 7, grande: 0, reinc: 5, abertos: 12, criticas: 0, altas: 4, atrasados: 3 },
    { id: "B", nome: "Bairro B", c: [-20.924, -46.976], raio: 520, total: 41, mesAnterior: 38, abandono: 12, ferido: 9, maus: 12, agress: 3, filhotes: 3, grande: 0, reinc: 2, abertos: 9, criticas: 1, altas: 2, atrasados: 0 },
    { id: "C", nome: "Bairro C", c: [-20.904, -46.979], raio: 480, total: 37, mesAnterior: 40, abandono: 8, ferido: 10, maus: 6, agress: 9, filhotes: 2, grande: 0, reinc: 1, abertos: 5, criticas: 0, altas: 1, atrasados: 0 },
    { id: "D", nome: "Bairro D", c: [-20.929, -46.994], raio: 500, total: 33, mesAnterior: 30, abandono: 14, ferido: 6, maus: 5, agress: 2, filhotes: 9, grande: 2, reinc: 1, abertos: 4, criticas: 0, altas: 0, atrasados: 0 },
    { id: "E", nome: "Bairro E", c: [-20.915, -46.966], raio: 520, total: 29, mesAnterior: 22, abandono: 9, ferido: 5, maus: 4, agress: 1, filhotes: 1, grande: 8, reinc: 0, abertos: 5, criticas: 0, altas: 3, atrasados: 0 },
    { id: "F", nome: "Bairro F", c: [-20.902, -46.996], raio: 460, total: 24, mesAnterior: 26, abandono: 10, ferido: 6, maus: 3, agress: 1, filhotes: 2, grande: 4, reinc: 1, abertos: 2, criticas: 0, altas: 0, atrasados: 0 },
    { id: "G", nome: "Bairro G", c: [-20.935, -46.982], raio: 440, total: 18, mesAnterior: 19, abandono: 7, ferido: 5, maus: 2, agress: 1, filhotes: 1, grande: 2, reinc: 0, abertos: 1, criticas: 0, altas: 0, atrasados: 0 },
    { id: "H", nome: "Bairro H", c: [-20.918, -47.004], raio: 420, total: 14, mesAnterior: 15, abandono: 6, ferido: 4, maus: 2, agress: 0, filhotes: 0, grande: 2, reinc: 0, abertos: 1, criticas: 0, altas: 0, atrasados: 0 }
  ];
  var LIMITES = { criticas: 1, altas: 3, atrasados: 1, total: 25, abandono: 20, maus: 10, agress: 6, filhotes: 6, grande: 5, reinc: 3 };
  var NIVEL = {
    vermelho: { cor: "#B3261E", rotulo: "Vermelho · agir agora", curto: "agir agora", classe: "n-vermelho" },
    amarelo: { cor: "#D9A400", rotulo: "Amarelo · prevenção", curto: "prevenção", classe: "n-amarelo" },
    verde: { cor: "#2E6B25", rotulo: "Verde · sob controle", curto: "sob controle", classe: "n-verde" }
  };
  var CHAVE = "cb-situacao-v1";
  function clonar(o) { return JSON.parse(JSON.stringify(o)); }
  function novoEstado() { return { areas: clonar(BASE_AREAS), recs: {}, sel: "A", dias: 0 }; }
  var EST = (function () { try { var s = JSON.parse(sessionStorage.getItem(CHAVE)); if (s && s.areas) return s; } catch (e) {} return novoEstado(); })();
  function salvar() { try { sessionStorage.setItem(CHAVE, JSON.stringify(EST)); } catch (e) {} }
  function area(id) { return EST.areas.filter(function (a) { return a.id === id; })[0] || EST.areas[0]; }
  function urgente(a) { return a.criticas >= LIMITES.criticas || a.altas >= LIMITES.altas || a.atrasados >= LIMITES.atrasados; }
  function recorrente(a) { return a.total >= LIMITES.total || a.abandono >= LIMITES.abandono || a.maus >= LIMITES.maus || a.agress >= LIMITES.agress || a.filhotes >= LIMITES.filhotes || a.grande >= LIMITES.grande || a.reinc >= LIMITES.reinc; }
  function nivelArea(a) { return urgente(a) ? "vermelho" : recorrente(a) ? "amarelo" : "verde"; }
  function plural(n, um, varios) { return n + " " + (n === 1 ? um : varios); }
  function motivo(a) {
    if (urgente(a)) {
      var p = [];
      if (a.criticas) p.push(plural(a.criticas, "caso crítico", "casos críticos"));
      if (a.altas >= LIMITES.altas) p.push(plural(a.altas, "caso de prioridade alta", "casos de prioridade alta"));
      if (a.atrasados) p.push(plural(a.atrasados, "caso com prazo vencido", "casos com prazo vencido"));
      return "Urgência em aberto agora: " + p.join(", ") + ".";
    }
    if (recorrente(a)) return "Nada urgente em aberto, mas os casos continuam surgindo (" + a.total + " novos em 30 dias). Pede prevenção.";
    return "Sem urgências em aberto e com poucos casos novos (" + a.total + " em 30 dias).";
  }

  // Regras de recomendação: gatilho, ações e efeito esperado (fator aplicado na simulação de 60 dias).
  var REGRAS = [
    { key: "maus", grave: true, campo: "maus", fator: 0.5, teste: function (a) { return a.maus >= LIMITES.maus; }, titulo: "Indícios de maus-tratos recorrentes",
      motivo: function (a) { return a.maus + " registros de maus-tratos em 30 dias (limite: " + LIMITES.maus + ")."; },
      acoes: ["Fiscalização da Secretaria nos endereços com mais de um registro", "Comunicar à Polícia Civil e ao Ministério Público quando houver indício de crime", "Campanha de conscientização sobre guarda responsável: escolas, igrejas, rádio e redes da prefeitura"],
      botoes: [["Ver ocorrências da área", "fila.html"]] },
    { key: "agress", grave: true, campo: "agress", fator: 0.45, teste: function (a) { return a.agress >= LIMITES.agress; }, titulo: "Animais oferecendo risco a pessoas",
      motivo: function (a) { return a.agress + " registros de animais agressivos em 30 dias (limite: " + LIMITES.agress + ")."; },
      acoes: ["Ação conjunta com a Vigilância em Saúde (zoonoses)", "Avaliar o recolhimento dos animais agressivos", "Orientar escolas e moradores sobre como agir e quem acionar"],
      botoes: [["Ver ocorrências da área", "fila.html"]] },
    { key: "abandono", campo: "abandono", fator: 0.3, teste: function (a) { return a.abandono >= LIMITES.abandono; }, titulo: "Muitos animais dóceis soltos na rua",
      motivo: function (a) { return a.abandono + " animais abandonados, sem sinal de agressividade, em 30 dias (limite: " + LIMITES.abandono + ")."; },
      acoes: ["Mutirão de recolhimento com triagem veterinária", "Campanha de castração concentrada no bairro", "Feira de adoção na região"],
      botoes: [["Criar campanha de castração", "castracao-campanha.html"], ["Ver animais para adoção", "adocao.html"]] },
    { key: "filhotes", campo: "filhotes", fator: 0.3, teste: function (a) { return a.filhotes >= LIMITES.filhotes; }, titulo: "Muitas ninhadas",
      motivo: function (a) { return a.filhotes + " registros com filhotes em 30 dias (limite: " + LIMITES.filhotes + ")."; },
      acoes: ["Castração prioritária de fêmeas na área", "Busca ativa de fêmeas não castradas", "Lares temporários para os filhotes"],
      botoes: [["Criar campanha de castração", "castracao-campanha.html"]] },
    { key: "grande", campo: "grande", fator: 0.4, teste: function (a) { return a.grande >= LIMITES.grande; }, titulo: "Animais de grande porte soltos na via",
      motivo: function (a) { return a.grande + " registros de cavalos ou bois na via em 30 dias (limite: " + LIMITES.grande + ")."; },
      acoes: ["Ação com o setor de Posturas e o Trânsito", "Identificar e notificar os proprietários", "Sinalização nos pontos de maior risco"],
      botoes: [["Ver ocorrências da área", "fila.html"]] },
    { key: "reinc", campo: "reinc", fator: 0.2, teste: function (a) { return a.reinc >= LIMITES.reinc; }, titulo: "Pontos de abandono recorrente",
      motivo: function (a) { return a.reinc + " locais com 3 ou mais registros no mesmo ponto (limite: " + LIMITES.reinc + ")."; },
      acoes: ["Placas educativas nos pontos", "Ronda da Guarda Municipal", "Pedido formal de análise de câmeras, quando houver base"],
      botoes: [["Ver no mapa", "mapa.html"]] }
  ];
  function recomendacoes(a) {
    var r = [];
    if (urgente(a)) r.push({ key: "urgente", operacional: true, grave: true, titulo: "Casos urgentes em aberto", motivo: motivo(a).replace("Urgência em aberto agora: ", ""),
      acoes: ["Atender primeiro os casos críticos e os de prazo vencido", "Remanejar equipes, se necessário"], botoes: [["Abrir a fila", "fila.html"]] });
    REGRAS.forEach(function (g) {
      var est = EST.recs[a.id + ":" + g.key];
      if (g.teste(a) || (est && est.estado !== "sugerida")) r.push({ key: g.key, grave: g.grave, titulo: g.titulo, motivo: g.motivo(a), acoes: g.acoes, botoes: g.botoes });
    });
    if (!r.length) r.push({ key: "ok", operacional: true, titulo: "Situação sob controle", motivo: "Nenhum critério de alerta atingido.", acoes: ["Manter a rotina de atendimento e acompanhar a tendência"], botoes: [] });
    return r;
  }
  var ROT_EST = { sugerida: ["Sugerida", "p-cinza"], aceita: ["Aceita", "p-azul"], execucao: ["Em execução", "p-amarelo"], concluida: ["Concluída", "p-verde"], recusada: ["Recusada", "p-vermelho"] };
  function htmlRec(a, x) {
    var id = a.id + ":" + x.key, reg = EST.recs[id], st = x.operacional ? null : (reg && reg.estado) || "sugerida";
    function btn(acao, rot, principal) { return '<button type="button" class="btn ' + (principal ? "btn-principal" : "btn-secundario") + ' btn-auto btn-p" data-rec="' + acao + '" data-area="' + a.id + '" data-key="' + x.key + '">' + rot + "</button>"; }
    var h = '<div class="rec ' + (x.grave ? "rec-grave" : "") + '"><div class="linha entre"><span class="forte">' + x.titulo + "</span>" + (st ? '<span class="pill ' + ROT_EST[st][1] + '">' + ROT_EST[st][0] + "</span>" : "") + "</div>" +
      '<span class="apoio sub">' + x.motivo + "</span><ul>" + x.acoes.map(function (t) { return "<li>" + t + "</li>"; }).join("") + "</ul>";
    if (st === "aceita" || st === "execucao") h += '<span class="legenda">Responsável: Secretaria de Meio Ambiente · prazo: 30 dias</span>';
    if (st === "recusada") h += '<span class="legenda">Motivo registrado: ' + (reg.motivo || "sem motivo informado") + "</span>";
    if (reg && reg.efeito) {
      var pct = Math.round(100 * (reg.efeito.depois - reg.efeito.antes) / reg.efeito.antes);
      h += '<div class="efeito"><b>Efeito medido em 60 dias:</b> ' + reg.efeito.antes + " casos novos por mês antes → " + reg.efeito.depois + " depois (" + pct + "%)</div>";
    } else if (st === "concluida") h += '<span class="legenda">O efeito é medido comparando os casos novos de antes com os de 60 dias depois.</span>';
    var bts = [];
    if (!x.operacional) {
      if (st === "sugerida") bts.push(btn("aceitar", "Aceitar", true), btn("recusar", "Recusar"));
      if (st === "aceita") bts.push(btn("executar", "Iniciar execução", true));
      if (st === "execucao") bts.push(btn("concluir", "Concluir ação", true));
      if (st === "recusada") bts.push(btn("reabrir", "Reabrir"));
    }
    if (st !== "concluida" && st !== "recusada") x.botoes.forEach(function (b) { bts.push('<a class="btn btn-secundario btn-auto btn-p" href="' + b[1] + '">' + b[0] + "</a>"); });
    if (bts.length) h += '<div class="linha">' + bts.join("") + "</div>";
    return h + "</div>";
  }
  function htmlRecs(a) { return recomendacoes(a).map(function (x) { return htmlRec(a, x); }).join(""); }
  function htmlSinais(a) {
    var d = a.total - a.mesAnterior;
    return '<div class="sinais"><div class="sinal"><span class="legenda">Agora</span><b>' + plural(a.abertos, "caso em aberto", "casos em aberto") + "</b>" +
      '<span class="apoio">' + a.criticas + " críticos · " + a.altas + " de alta prioridade · " + a.atrasados + " atrasados</span></div>" +
      '<div class="sinal"><span class="legenda">Últimos 30 dias</span><b>' + plural(a.total, "caso novo", "casos novos") + "</b>" +
      '<span class="apoio">' + (d > 0 ? "▲ " + d + " a mais" : d < 0 ? "▼ " + (-d) + " a menos" : "igual") + " que no período anterior</span></div></div>";
  }
  function htmlSimulacao(a) {
    return '<div class="sim"><span class="forte">Simulação para a demonstração</span><span class="legenda">Mostra como a cor muda quando a equipe age.</span><div class="linha">' +
      (a && a.abertos ? '<button type="button" class="btn btn-secundario btn-auto btn-p" data-sim="atender" data-area="' + a.id + '">Equipe atendeu os casos em aberto</button>' : "") +
      '<button type="button" class="btn btn-secundario btn-auto btn-p" data-sim="tempo">Avançar 60 dias</button><button type="button" class="link" data-sim="reset" style="font-size:14px">Restaurar dados</button></div>' +
      (EST.dias ? '<span class="legenda">Tempo simulado: +' + EST.dias + " dias</span>" : "") + "</div>";
  }
  function htmlSituacao(a) {
    var n = NIVEL[nivelArea(a)];
    var itens = [["Abandonados", a.abandono], ["Feridos ou doentes", a.ferido], ["Maus-tratos", a.maus], ["Agressivos / risco a pessoas", a.agress], ["Com filhotes", a.filhotes], ["Grande porte na via", a.grande]];
    var max = Math.max.apply(null, itens.map(function (i) { return i[1]; })) || 1;
    return '<div class="linha entre"><h2>' + a.nome + '</h2><span class="nivel ' + n.classe + '">' + n.rotulo + "</span></div>" +
      '<p class="apoio">' + motivo(a) + "</p>" + htmlSinais(a) +
      '<span class="forte" style="margin-top:6px">O que está acontecendo (30 dias)</span><div class="barras">' +
      itens.map(function (i) { return '<div class="barra barra-sit"><span>' + i[0] + '</span><div class="trilho"><div class="valor" style="width:' + Math.round(100 * i[1] / max) + '%;background:var(--marrom)"></div></div><b>' + i[1] + "</b></div>"; }).join("") +
      '</div><span class="forte" style="margin-top:6px">Recomendações do sistema</span>' + htmlRecs(a) + htmlSimulacao(a) +
      '<span class="legenda">Sugestões geradas por regras definidas pela Secretaria. Quem decide e aciona é sempre a equipe.</span>';
  }
  function simular(tipo, id) {
    if (tipo === "reset") { var sel = EST.sel; EST = novoEstado(); EST.sel = sel; return; }
    if (tipo === "atender") { var a = area(id); a.abertos = 0; a.criticas = 0; a.altas = 0; a.atrasados = 0; return; }
    if (tipo === "tempo") {
      EST.dias += 60;
      EST.areas.forEach(function (a) {
        var antes = a.total, reduz = 0, medidas = [];
        REGRAS.forEach(function (g) {
          var r = EST.recs[a.id + ":" + g.key];
          if (r && r.estado === "concluida" && !r.efeito) { var novo = Math.round(a[g.campo] * g.fator); reduz += a[g.campo] - novo; a[g.campo] = novo; medidas.push(r); }
        });
        a.mesAnterior = antes;
        if (reduz) { a.total = Math.max(0, antes - reduz); medidas.forEach(function (r) { r.efeito = { antes: antes, depois: a.total }; }); }
      });
    }
  }
  var mapaApi = null;
  function atualizarTudo() {
    var s = document.getElementById("situacao"); if (s) { s.innerHTML = htmlSituacao(area(EST.sel)); }
    if (document.getElementById("recomendacoes")) CB_renderRecomendacoes("recomendacoes");
    if (mapaApi) mapaApi.atualizar();
  }
  function acoesSituacao() {
    document.addEventListener("click", function (ev) {
      var b = ev.target.closest("[data-rec]");
      if (b) {
        var id = b.getAttribute("data-area") + ":" + b.getAttribute("data-key"), r = EST.recs[id] || (EST.recs[id] = { estado: "sugerida" }), ac = b.getAttribute("data-rec");
        if (ac === "aceitar") r.estado = "aceita";
        if (ac === "executar") r.estado = "execucao";
        if (ac === "concluir") r.estado = "concluida";
        if (ac === "recusar") { var m = window.prompt("Motivo da recusa (fica registrado):", ""); if (m === null) return; r.estado = "recusada"; r.motivo = m || "sem motivo informado"; }
        if (ac === "reabrir") { r.estado = "sugerida"; delete r.motivo; }
        salvar(); atualizarTudo(); return;
      }
      var s = ev.target.closest("[data-sim]");
      if (s) { simular(s.getAttribute("data-sim"), s.getAttribute("data-area")); salvar(); atualizarTudo(); return; }
      var v = ev.target.closest("[data-ver-area]");
      if (v) { EST.sel = v.getAttribute("data-ver-area"); salvar(); }
    });
  }
  window.CB_renderRecomendacoes = function (id) {
    var el = document.getElementById(id); if (!el) return;
    var ordem = { vermelho: 0, amarelo: 1, verde: 2 };
    el.innerHTML = '<section class="cartao" style="padding:16px 20px">' + htmlSimulacao(null) + "</section>" +
      EST.areas.slice().sort(function (x, y) { return ordem[nivelArea(x)] - ordem[nivelArea(y)] || y.total - x.total; }).map(function (a) {
        var n = NIVEL[nivelArea(a)];
        return '<section class="cartao area-card" style="border-left:6px solid ' + n.cor + '"><div class="linha entre"><h2>' + a.nome + '</h2><span class="nivel ' + n.classe + '">' + n.rotulo + "</span></div>" +
          '<p class="apoio">' + motivo(a) + "</p>" + htmlSinais(a) + htmlRecs(a) +
          '<div class="linha">' + (a.abertos ? '<button type="button" class="btn btn-secundario btn-auto btn-p" data-sim="atender" data-area="' + a.id + '">Simular: equipe atendeu os casos em aberto</button>' : "") +
          '<a class="link" href="mapa.html" data-ver-area="' + a.id + '" style="font-size:14px">Ver no mapa</a></div></section>';
      }).join("");
    var cont = { vermelho: 0, amarelo: 0, verde: 0 }; EST.areas.forEach(function (a) { cont[nivelArea(a)]++; });
    ["vermelho", "amarelo", "verde"].forEach(function (k) { var c = document.getElementById("cont-" + k); if (c) c.textContent = cont[k]; });
  };

  function pontosDaArea(a) {
    var r = aleatorio(a.id.charCodeAt(0) * 97 + a.total), pts = [], n = Math.round(a.total / 2), aberto = a.total ? Math.min(1, a.abertos / a.total) : 0;
    for (var i = 0; i < n; i++) {
      var ang = r() * Math.PI * 2, dist = Math.sqrt(r()) * a.raio / 111000;
      var x = r(), pr = a.agress >= LIMITES.agress && x < 0.25 ? "Crítica" : x < 0.4 ? "Alta" : x < 0.75 ? "Média" : "Baixa";
      var y = r(), and = y < aberto * 0.6 ? "Aguardando" : y < aberto ? "Em atendimento" : "Concluído";
      pts.push({ lat: a.c[0] + Math.sin(ang) * dist, lng: a.c[1] + Math.cos(ang) * dist / Math.cos(a.c[0] * Math.PI / 180), prioridade: pr, andamento: and, area: a.nome });
    }
    return pts;
  }
  var COR_PONTO = {
    prioridade: function (p) { return p.prioridade === "Crítica" || p.prioridade === "Alta" ? "vermelho" : p.prioridade === "Média" ? "amarelo" : "verde"; },
    andamento: function (p) { return p.andamento === "Aguardando" ? "vermelho" : p.andamento === "Em atendimento" ? "amarelo" : "verde"; }
  };
  var LEGENDA_PONTOS = {
    prioridade: [["vermelho", "Prioridade crítica ou alta"], ["amarelo", "Prioridade média"], ["verde", "Prioridade baixa"]],
    andamento: [["vermelho", "Aguardando atendimento"], ["amarelo", "Em atendimento"], ["verde", "Concluído"]]
  };
  window.CB_mapaPainel = function (id) {
    var el = document.getElementById(id); if (!el) return;
    var legenda = document.getElementById("legenda-pontos");
    atualizarTudo();
    if (!window.L) return falha(el);
    var m = base(el, 14), circulos = {}, modo = "prioridade";
    var areas = L.layerGroup().addTo(m), pontos = L.layerGroup().addTo(m), calor = null;
    EST.areas.forEach(function (a) {
      circulos[a.id] = L.circle(a.c, { radius: a.raio, weight: 2, fillOpacity: 0.16 })
        .bindTooltip("", { permanent: true, direction: "center", className: "rotulo-area" })
        .on("click", function () { EST.sel = a.id; salvar(); atualizarTudo(); })
        .addTo(areas);
    });
    function desenhar() {
      var pts = [];
      EST.areas.forEach(function (a) {
        var n = NIVEL[nivelArea(a)];
        circulos[a.id].setStyle({ color: n.cor, fillColor: n.cor, weight: a.id === EST.sel ? 4 : 2 });
        circulos[a.id].setTooltipContent(a.nome + " · " + n.curto);
        pts = pts.concat(pontosDaArea(a));
      });
      pontos.clearLayers();
      pts.forEach(function (p) {
        var k = COR_PONTO[modo](p), n = NIVEL[k];
        L.circleMarker([p.lat, p.lng], { radius: k === "vermelho" ? 8 : k === "amarelo" ? 7 : 6, color: k === "amarelo" ? "#6B4E00" : "#FFFFFF", weight: 2, fillColor: n.cor, fillOpacity: 1 })
          .bindTooltip(p.area + " · " + (modo === "prioridade" ? "prioridade " + p.prioridade.toLowerCase() : p.andamento.toLowerCase())).addTo(pontos);
      });
      if (calor) m.removeLayer(calor);
      calor = L.heatLayer ? L.heatLayer(pts.map(function (p) { return [p.lat, p.lng, 0.6]; }), { radius: 30, blur: 22, minOpacity: 0.25, gradient: { 0.3: "#F5C232", 0.6: "#E07B2A", 1: "#B3261E" } }) : null;
      liga("camada-calor", calor);
      if (legenda) legenda.innerHTML = LEGENDA_PONTOS[modo].map(function (l) { return '<span class="item-legenda"><span class="bolinha" style="background:' + NIVEL[l[0]].cor + '"></span>' + l[1] + "</span>"; }).join("");
    }
    function liga(chipId, camada) { var c = document.getElementById(chipId); if (!c || !camada) return; var on = c.getAttribute("aria-pressed") === "true"; if (on && !m.hasLayer(camada)) camada.addTo(m); if (!on && m.hasLayer(camada)) m.removeLayer(camada); }
    document.addEventListener("cb:opcoes", function () {
      liga("camada-areas", areas); liga("camada-pontos", pontos); liga("camada-calor", calor);
      var novo = document.getElementById("cor-andamento") && document.getElementById("cor-andamento").getAttribute("aria-pressed") === "true" ? "andamento" : "prioridade";
      if (novo !== modo) { modo = novo; desenhar(); }
    });
    mapaApi = { atualizar: desenhar };
    desenhar();
  };

  /* ---------- Confirmação genérica (enviado.html?de=...) ---------- */
  function telaEnviado() {
    var el = document.getElementById("enviado"); if (!el) return;
    var de = new URLSearchParams(location.search).get("de") || "adocao";
    var T = {
      adocao: ["Interesse enviado", "A equipe responsável pelo animal vai entrar em contato para conversar e, se for o caso, enviar o questionário completo de adoção.", "adocao.html", "Ver outros animais"],
      lar: ["Cadastro recebido", "Obrigado! A Secretaria vai analisar o cadastro e entrar em contato quando houver um animal compatível com o seu espaço.", "inicio.html", "Voltar ao início"]
    }[de] || ["Enviado", "", "inicio.html", "Voltar ao início"];
    el.querySelector("h1").textContent = T[0];
    el.querySelector("p").textContent = T[1];
    var b = el.querySelector("a.btn"); b.href = T[2]; b.lastChild.textContent = T[3];
  }

  document.addEventListener("DOMContentLoaded", function () {
    partes(); icones(); chips(); navegacao(); telaRelato(); telaConfira(); telaEnviado(); acoesSituacao();
    if (document.getElementById("orientacao-maus-tratos")) document.addEventListener("cb:opcoes", atualizarMausTratos);
    var modoMapa = document.body.getAttribute("data-mapa");
    if (modoMapa === "cidadao" || modoMapa === "mini") CB_mapaCidadao("mapa");
    if (modoMapa === "painel") CB_mapaPainel("mapa");
    if (document.getElementById("recomendacoes")) CB_renderRecomendacoes("recomendacoes");
  });
})();
