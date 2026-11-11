// Lista de personagens
const PERSONAGENS = [
    { nome: "Alice | O Jaguadarte", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/UyRTRFSeylTWqKpnkSIus.png" },
    { nome: "Chapeuzinho Vermelho & O Caçador", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/xLyD7qzSKyz94f_F6QtEi.webp" },
    { nome: "Sherlock Holmes | Dr. Watson", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/ZTs8B3IyqHabuE3aeXHF_.png" },
    { nome: "Drácula | As Três Irmãs", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/vI43Lyv3aAGgUa9vfv-uT.png" },
    { nome: "Medusa | Harpias", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/ROSMO3sRi6Jh1o7S_riGI.png" },
    { nome: "Robin Hood | Os Fora-da-lei", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/nTLDla5Mkj_Hc2DfFQULj.jpg" },
    { nome: "Aquiles | Pátroclo", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/INWx-zVx8tsyrlQD4gFE2.gif" },
    { nome: "Beowulf & Wiglaf", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/UQLFTSR_LuIMa60bOFMPl.webp" },
    { nome: "Maria Sangrenta", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/_R8K6Xw1JWJfBSOOfhB9t.gif" },
    { nome: "O Gênio", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/iZi7oBFoZ34YyVa1Qg28u.webp" },
    { nome: "Pé Grande | O Lebrílope", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/mbjF8pursj8AYkalODyXa.jpg" },
    { nome: "Houdini | Bess", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/HkwPbbhKUMb_XWpndh6DN.webp" },
    { nome: "Simbad | O Carregador", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/iX3R40hAP80XJ-UalPt6E.png" },
    { nome: "Demolidor", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/B0qnKxZyoG3KLwRNvKsrG.webp" },
    { nome: "Yennenga | Arqueiras", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/QQfafCmj_R9Qhz1-XKvhr.jpg" },
    { nome: "Dr. Jekyll | Sr. Hyde", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/ALEF6sBXvEA3kUuJEb3gb.png" },
    { nome: "Homem Invisível", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/UaF-LncvMygaqpZvmecew.png" },
    { nome: "Annie Christmas | Charlie", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/tM1nfezImPsBo-Dnd6wNG.webp" },
    { nome: "Mercenário", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/RBfXKmTmIQ_rAq7TjQ1bV.webp" },
    { nome: "Raptores", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/591BE1ij7PVn6uzsqucd1.webp" },
    { nome: "Rei Arthur | Merlin", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/WWzu16BEFGsEdu5NsMbMI.png" },
    { nome: "Robert Muldoon | Trabalhadores Ingen", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/8TYpVxAqscVJYDfMuPeyk.webp" },
    { nome: "Shakespeare | Atores", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/pqYPwbvPq9hp_RtpsQB5B.webp" },
    { nome: "She hulk", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/dfiv68ElGn0Gf-G0Il-Vy.webp" },
    { nome: "Sun Wukong", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/EoDLc4PNqSqST9akf5nVn.jpg" },
    { nome: "Tomoe Gozen", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/8P9zI-HHRr-qgJASxttfi.webp" },
    { nome: "Eletrika | O Tentáculo", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/BiC5iLlqu_RyyelKidLWp.webp" },
    { nome: "Titânia | Oberon", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/hq3qeQJWxR1UIcSt9aIkw.webp" },
    { nome: "As Irmãs Estranhas", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/epUAsiZCbo09Q_Tew3OxK.webp" },
    { nome: "Darth Vader", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGLmpFnjkvmn-NLbixmiel5H3davC2VTHxJAB8HiRCnxLTjmQdxGQ6npg&s=10" },
    { nome: "Deadpool", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/mF-7XGbmp7eHQrbMSaX6v.webp" },
    { nome: "Dra. Ellie Sattler | Dr. Ian Malcolm", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/xrt_5GcTzDQd9Bb0P2Z56.webp" },
    { nome: "Fantomas", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/A891P2gL7IPp2_Kjk3P7b.webp" },
    { nome: "Motoqueiro Fantasma", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/LRuz2YID8471dnTGfM1_b.webp" },
    { nome: "Cavaleiro Banana", img: "https://i.imgur.com/SQtDNjJ.png" },
    { nome: "Hamlet", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/bg3s8IEdB07YlbFJQSGS5.webp" },
    { nome: "Nicola Tesla", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/byq-c3l_HktvangjGc33q.webp" },
    { nome: "Oda Nobunaga | Guarda de Honra", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/_hVP2Ah-uMSD_kH5-LUol.webp" },
    { nome: "T-Rex", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/mURpEFDw_zxQRn19mYXgG.webp" },
    { nome: "Homem-Mariposa | Sapo de Loveland", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/npcs/villains/card-covers/XMvDZU9R1vCn5dT4Do6iZ.webp" },
    { nome: "Invasor Marciano", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/npcs/villains/card-covers/x83yAUgQGlJDoSWVi-CXQ.webp" },
    { nome: "Jill Trent | Daizy", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/CvsgmaMFob3JNZ9OFOjgA.webp" },
    { nome: "Cavaleiro da Lua", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/nh0wyjVp6hYSrGY8HS47C.webp" },
    { nome: "Homem Aranha", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/Kngv_p0P1hdxfOANliL7Y.webp" },
    { nome: "Luke Cage | Misty Knight", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/SkGReM3sdO9x2AGIumUao.webp" },
    { nome: "Dr. Estranho | Wong", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/nV6hmlXVda7Kf4ABbW26Y.webp" },
    { nome: "Yennefer | Triss", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/wyF2xEhMaHY_hYfRIkWWv.webp" },
    { nome: "Eredin | Cavaleiros Vermelhos", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/s3I7T0MDElqnYmN5Kzv3r.webp" },
    { nome: "Philippa | Dijkstra", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/u0_PFJIp0z0ITwRgpitzx.webp" },
    { nome: "Geralt of Rivia | Dandelion", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/CNnTH-5_N8SAAWXV_RSZV.webp" },
    { nome: "Ciri | Ihuarraquax", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/sr7i7S_M7FHSAVuqn21jE.webp" },
    { nome: "Liche Ancião | Lobos", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/A-XrmwVNY2Gf9TvYj6FES.webp" },
    { nome: "Pantera Negra | Shuri", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/VuFF0FGwy-spBM3-5NfDA.webp" },
    { nome: "Soldado Invernal", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/JxKGaAvQQUDqjJK1ec8Ua.webp" },
    { nome: "Viuva Negra | Maria Hill", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/wlWum83DPKQPdY0TfJEcm.webp" },
    { nome: "Angel | Faith", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/zOn8WP6ucoOiZ4aFxZ5Rb.webp" },
    { nome: "Spike | Drusilla", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/NK3Qs9KU2YSv7HERD-zm4.webp" },
    { nome: "Buffy | Giles", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/jQ74IjwVi4uRKQfRxjE2i.webp" },
    { nome: "Willow | Tara", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/rsxAPjEmhngg8mZ-yXDIk.webp" },
    { nome: "Lampião | Corisco", img: "https://storage.googleapis.com/ludopedia-imagens-jogo/3741e_230447.jpg" },
    { nome: "Manto e Adaga", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/WK4lDtMPBv8cTVuZXVBzv.webp" },
    { nome: "Garota esquilos | Esquilos", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/5eoggYWJKVJ_PNs8bQOCr.webp" },
    { nome: "Ms. Marvel", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/MFiQb6grYsbNNYwR_hoh1.webp" }
];

// ============================================================
// MAPAS (sorteio de mapa dentro do combate)
// ============================================================
const MAPAS_GRANDES = [
    { nome: "Baskerville Manor", img: "maps/grande/baskerville-manor.webp", tamanho: "grande" },
    { nome: "Globe Theatre", img: "maps/grande/globe-theatre.webp", tamanho: "grande" },
    { nome: "Hanging Gardens", img: "maps/grande/hanging-gardens.webp", tamanho: "grande" },
    { nome: "Helicarrier", img: "maps/grande/helicarrier.webp", tamanho: "grande" },
    { nome: "Hell's Kitchen", img: "maps/grande/hell-s-kitchen.webp", tamanho: "grande" },
    { nome: "Kaer Morhen", img: "maps/grande/kaer-morhen.webp", tamanho: "grande" },
    { nome: "Marmoreal", img: "maps/grande/marmoreal.webp", tamanho: "grande" },
    { nome: "McMinnville OR", img: "maps/grande/mcminnville-or.webp", tamanho: "grande" },
    { nome: "Naglfar", img: "maps/grande/naglfar.webp", tamanho: "grande" },
    { nome: "Point Pleasant", img: "maps/grande/point-pleasant.webp", tamanho: "grande" },
    { nome: "Sarpedon", img: "maps/grande/sarpedon.webp", tamanho: "grande" },
    { nome: "Soho", img: "maps/grande/soho.webp", tamanho: "grande" },
    { nome: "sunnydale", img: "maps/grande/sunnydale-high.webp", tamanho: "grande" },
    { nome: "The Bronze", img: "maps/grande/the-bronze.webp", tamanho: "grande" },
    { nome: "Streets of Novigrad", img: "maps/grande/streets-of-novigrad.webp", tamanho: "grande" }
];

const MAPAS_PEQUENOS = [
    { nome: "Azuchi Castle", img: "maps/pequena/azuchi-castle.webp", tamanho: "pequena" },
    { nome: "Heorot", img: "maps/pequena/heorot.webp", tamanho: "pequena" },
    { nome: "Raptor Paddock", img: "maps/pequena/raptor-paddock.webp", tamanho: "pequena" },
    { nome: "Sherwood Forest", img: "maps/pequena/sherwood-forest.webp", tamanho: "pequena" },
    { nome: "Yukon", img: "maps/pequena/yukon.webp", tamanho: "pequena" },
    { nome: "t.rex pardock", img: "maps/pequena/t.rex-paddock.webp", tamanho: "pequena" },
    { nome: "king Solomon's Mine", img: "maps/pequena/king-solomon-s-mine.webp", tamanho: "pequena" }
];

const MAPAS_TODOS = [...MAPAS_GRANDES, ...MAPAS_PEQUENOS];

// ============================================================
// MEMÓRIA DO SORTEIO DE MAPAS (evita repetir sempre o mesmo)
// ============================================================
// Mesmo princípio da memória de heróis: guarda neste navegador os
// últimos mapas sorteados e, na maioria das vezes, evita repeti-los.
// Como o pool de mapas é bem menor que o de heróis (principalmente o de
// mapas pequenos), a janela de memória é mais curta.
const RECENT_MAPS_KEY = 'unmatched_recent_maps';
const RECENT_MAPS_REPEAT_CHANCE = 0.10;
const RECENT_MAPS_MAX = 5;

function getRecentMapNames() {
    try {
        const raw = localStorage.getItem(RECENT_MAPS_KEY);
        const list = raw ? JSON.parse(raw) : [];
        return Array.isArray(list) ? list : [];
    } catch (e) {
        return [];
    }
}

function addRecentMapNames(names) {
    try {
        const current = getRecentMapNames();
        const merged = [...names, ...current.filter(n => !names.includes(n))].slice(0, RECENT_MAPS_MAX);
        localStorage.setItem(RECENT_MAPS_KEY, JSON.stringify(merged));
    } catch (e) {
        // localStorage indisponível — segue sem memória, sem quebrar o sorteio
    }
}

// Sorteia um mapa. `excludeNames` (opcional) é usado pelo botão de
// "re-rolar" pra garantir que o re-sorteio não caia no mesmo mapa que
// já estava mostrado. Na maioria das vezes (90%) também evita os
// últimos mapas sorteados neste navegador, dando mais variedade.
function drawRandomMap(onlyLarge, excludeNames) {
    const fullPool = onlyLarge ? MAPAS_GRANDES : MAPAS_TODOS;

    let basePool = fullPool;
    if (excludeNames && excludeNames.length > 0) {
        const filtered = fullPool.filter(m => !excludeNames.includes(m.nome));
        if (filtered.length > 0) basePool = filtered;
    }

    const recentNames = new Set(getRecentMapNames());
    const allowRepeat = recentNames.size === 0 || secureRandomFloat() < RECENT_MAPS_REPEAT_CHANCE;
    let pool = basePool;
    if (!allowRepeat) {
        const filtered = basePool.filter(m => !recentNames.has(m.nome));
        if (filtered.length > 0) pool = filtered;
    }

    const picked = pool[secureRandomInt(pool.length)];
    addRecentMapNames([picked.nome]);
    return picked;
}

const PLAYER_COLORS = {
    1: { name: 'Jogador 1', color: '#3498db', class: 'player-1' },
    2: { name: 'Jogador 2', color: '#e74c3c', class: 'player-2' },
    3: { name: 'Jogador 3', color: '#2ecc71', class: 'player-3' },
    4: { name: 'Jogador 4', color: '#f39c12', class: 'player-4' }
};

// ============================================================
// ESTADO LOCAL
// ============================================================
let roomId = null;
let myRole = null;
let myNameIndex = null;
let roomRef = null;
let gameState = null;
let selectedCardIndex = null;
let pendingConfig = null;
let combatTimerInterval = null;
let quickState = null;
let quickTimerInterval = null;


// ============================================================
// TIMER COM PAUSE/PLAY
// ============================================================
// Um "timer" é guardado como { accumulatedMs, paused, runStartTime }.
// accumulatedMs: tempo já decorrido antes do trecho atual em execução.
// runStartTime: quando o trecho atual começou a rodar (null se pausado).
function getElapsedMs(timer) {
    if (!timer) return 0;
    const base = timer.accumulatedMs || 0;
    if (timer.paused || !timer.runStartTime) return base;
    return base + (Date.now() - timer.runStartTime);
}

function pauseTimer(timer) {
    if (!timer || timer.paused) return timer;
    return { accumulatedMs: getElapsedMs(timer), paused: true, runStartTime: null };
}

function resumeTimer(timer) {
    if (!timer) return { accumulatedMs: 0, paused: false, runStartTime: Date.now() };
    if (!timer.paused) return timer;
    return { accumulatedMs: timer.accumulatedMs || 0, paused: false, runStartTime: Date.now() };
}

function newTimer() {
    return { accumulatedMs: 0, paused: true, runStartTime: null };
}

function pauseBtnLabel(timer) {
    if (!timer || timer.paused) {
        return (timer && timer.accumulatedMs > 0) ? '▶️ Retomar' : '▶️ Iniciar';
    }
    return '⏸️ Pausar';
}

function secureRandomInt(maxExclusive) {
    if (maxExclusive <= 0) return 0;
    // Amostragem por rejeição: descarta os poucos valores que sobrariam de
    // uma divisão não-exata por maxExclusive, eliminando qualquer viés do
    // módulo (por menor que fosse) e deixando o sorteio genuinamente uniforme.
    const maxUint32 = 4294967296; // 2^32
    const limit = maxUint32 - (maxUint32 % maxExclusive);
    const arr = new Uint32Array(1);
    let x;
    do {
        crypto.getRandomValues(arr);
        x = arr[0];
    } while (x >= limit);
    return x % maxExclusive;
}

function shuffleArray(arr) {
    let shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = secureRandomInt(i + 1);
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// ============================================================
// SORTEIO DE HERÓIS COM MEMÓRIA (evita repetir sempre os mesmos)
// ============================================================
// Guarda, neste navegador (localStorage — não afeta outros dispositivos),
// uma janela contínua dos últimos heróis sorteados aqui (não só do último
// sorteio, mas dos últimos ~30 heróis vistos, mesmo em sorteios diferentes).
// A cada novo sorteio, existe 90% de chance de esses heróis ficarem de
// fora (dando espaço pros que ainda não saíram) e 10% de chance de o
// sorteio ser totalmente livre, podendo repetir algum deles normalmente.
const RECENT_HEROES_KEY = 'unmatched_recent_heroes';
const RECENT_HEROES_REPEAT_CHANCE = 0.10; // 10% de chance de não filtrar nada
const RECENT_HEROES_MAX = 30; // tamanho da "memória" rolante neste navegador

function getRecentHeroNames() {
    try {
        const raw = localStorage.getItem(RECENT_HEROES_KEY);
        const list = raw ? JSON.parse(raw) : [];
        return Array.isArray(list) ? list : [];
    } catch (e) {
        return [];
    }
}

// Acumula (em vez de sobrescrever) os heróis mais recentes, mantendo uma
// janela rolante — assim o sorteio "lembra" de mais do que só a última
// rodada, espalhando melhor a variedade entre vários sorteios seguidos.
function addRecentHeroNames(names) {
    try {
        const current = getRecentHeroNames();
        const merged = [...names, ...current.filter(n => !names.includes(n))].slice(0, RECENT_HEROES_MAX);
        localStorage.setItem(RECENT_HEROES_KEY, JSON.stringify(merged));
    } catch (e) {
        // localStorage indisponível (modo privado etc.) — segue sem memória, sem quebrar o sorteio
    }
}

// Gera um número decimal aleatório em [0, 1) usando o mesmo gerador
// criptograficamente seguro usado no resto do sorteio.
function secureRandomFloat() {
    const arr = new Uint32Array(1);
    crypto.getRandomValues(arr);
    return arr[0] / 4294967296;
}

// ============================================================
// HERÓIS EM USO EM OUTRAS SALAS ABERTAS
// ============================================================
// Antes de sortear heróis para uma sala nova, olha as outras salas ainda
// em andamento (não finalizadas, criadas nas últimas horas) e evita
// sortear heróis que já estão sendo usados nelas — assim, se tiver mais
// de uma sala rolando ao mesmo tempo (ex: um evento com várias mesas),
// dificilmente vai repetir o mesmo personagem em mesas diferentes.
const ACTIVE_ROOM_WINDOW_MS = 6 * 60 * 60 * 1000; // salas de até 6h atrás contam como "em andamento"

async function getActiveRoomHeroNames() {
    try {
        const cutoff = Date.now() - ACTIVE_ROOM_WINDOW_MS;
        const snap = await db.ref('rooms').once('value');
        const rooms = snap.val() || {};
        const names = new Set();

        const addHero = (h) => {
            if (!h) return;
            if (typeof h === 'string') names.add(h);
            else if (h.nome) names.add(h.nome);
        };
        const addArr = (arr) => { (arr || []).forEach(addHero); };

        Object.values(rooms).forEach(room => {
            if (!room) return;
            if (room.phase === 'post-game') return; // partida já terminou, libera os heróis
            if (typeof room.createdAt === 'number' && room.createdAt < cutoff) return; // sala velha/abandonada

            addArr(room.p1Cards);
            addArr(room.p2Cards);
            addHero(room.p1Pick);
            addHero(room.p2Pick);
            addHero(room.p1Final);
            addHero(room.p2Final);
            addHero(room.p1CombatChoice);
            addHero(room.p2CombatChoice);
            addArr(room.p1Used);
            addArr(room.p2Used);
            addArr(room.teamPool);
            if (room.teamPicks) Object.values(room.teamPicks).forEach(addHero);
            if (room.cafePicks) {
                Object.values(room.cafePicks).forEach(v => {
                    if (Array.isArray(v)) v.forEach(addHero); else addHero(v);
                });
            }
        });

        return Array.from(names);
    } catch (e) {
        return []; // se a consulta falhar, segue sem excluir nada — não trava o sorteio
    }
}

// Motor de sorteio ÚNICO, usado por todos os modos (combate único, melhor
// de 3, equipe, sorteio rápido, revanche, café com leite e re-sorteio).
//   count          -> quantos heróis sortear (sempre únicos entre si)
//   excludeNames   -> preferência: evita esses heróis (ex: já em uso em outras
//                     salas ou que acabaram de sair), mas só se sobrar gente
//                     suficiente depois de tirá-los
//   mandatoryNames -> obrigatório: esses heróis NUNCA podem sair (ex: já
//                     escolhidos manualmente por um jogador café com leite)
// Além disso, em 90% dos sorteios os heróis vistos recentemente neste
// navegador ficam de fora (10% é totalmente livre), e todo o aleatório usa
// o gerador criptograficamente seguro.
function drawUniqueHeroes(count, excludeNames, mandatoryNames) {
    const mandatory = new Set(mandatoryNames || []);
    const available = PERSONAGENS.filter(p => !mandatory.has(p.nome));

    let basePool = available;
    if (excludeNames && excludeNames.length > 0) {
        const soft = new Set(excludeNames);
        const filtered = available.filter(p => !soft.has(p.nome));
        if (filtered.length >= count) basePool = filtered;
    }

    const n = Math.min(count, basePool.length);
    const recentNames = new Set(getRecentHeroNames());
    const allowRepeat = recentNames.size === 0 || secureRandomFloat() < RECENT_HEROES_REPEAT_CHANCE;

    let pool = basePool;
    if (!allowRepeat) {
        const filtered = basePool.filter(p => !recentNames.has(p.nome));
        if (filtered.length >= n) pool = filtered;
    }

    const picked = shuffleArray(pool).slice(0, n);
    addRecentHeroNames(picked.map(p => p.nome));
    return picked;
}

// Versão que já consulta as outras salas abertas antes de sortear.
async function drawHeroes(count, extraExclude, mandatoryNames) {
    const otherRoomHeroes = await getActiveRoomHeroNames();
    return drawUniqueHeroes(count, [...otherRoomHeroes, ...(extraExclude || [])], mandatoryNames);
}

// Monta as atualizações de "distribuição de heróis" de uma sala 1v1
// (combate único ou melhor de 3). Usada na entrada do 2º jogador e na
// revanche — assim as duas situações sempre seguem exatamente o mesmo fluxo
// (inclusive o Café com Leite).
async function buildDealUpdates(data) {
    const updates = {};
    const cafeFlags = data.cafeComLeite || {};
    const hasCafe = Object.values(cafeFlags).some(Boolean);

    if (data.mode === 'single') {
        Object.assign(updates, { p1Cards: null, p2Cards: null, p1Pick: null, p2Pick: null });
        if (hasCafe) {
            updates.phase = 'cafe-pick-single';
            updates.cafePicks = null;
            updates.cafeResolving = null;
        } else {
            const drawn = await drawHeroes(4);
            updates.phase = 'single-pick';
            updates.p1Cards = drawn.slice(0, 2);
            updates.p2Cards = drawn.slice(2, 4);
        }
    } else if (data.mode === 'bestof3') {
        Object.assign(updates, buildBestOf3State());
        if (hasCafe) {
            updates.phase = 'cafe-pick-b3';
            updates.cafePicks = null;
            updates.cafeResolving = null;
        } else {
            const drawn = await drawHeroes(8);
            updates.phase = 'phase1-j1-save';
            updates.p1Cards = drawn.slice(0, 4);
            updates.p2Cards = drawn.slice(4, 8);
        }
    }
    return updates;
}

function generateRoomId() {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
}

function getDeviceId() {
    let id = localStorage.getItem('unmatched_device_id');
    if (!id) {
        id = Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
        localStorage.setItem('unmatched_device_id', id);
    }
    return id;
}

// Telas de menu/configuração que ficam "navegáveis" pelo botão Voltar do
// navegador (ou gesto de voltar no celular). Fora de uma sala/partida ativa,
// isso evita que a pessoa saia do site sem querer ao usar o voltar do
// aparelho — ele volta pra tela anterior dentro do próprio site.
const BACK_TRACKED_SCREENS = new Set([
    'screen-home', 'screen-configure', 'screen-enter-code', 'screen-creator-role-pick',
    'screen-quick-setup', 'screen-quick-result', 'screen-tools', 'screen-add-match',
    'screen-hero-stats', 'screen-hero-rank', 'screen-matchup', 'screen-stats-audit', 'screen-join-error'
]);
let suppressHistoryPush = false;

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
    const el = document.getElementById(id);
    if (el) el.style.display = 'block';

    if (!suppressHistoryPush && BACK_TRACKED_SCREENS.has(id)) {
        const currentTracked = window.history.state && window.history.state.appScreen;
        if (currentTracked !== id) {
            window.history.pushState({ appScreen: id }, '', window.location.href);
        }
    }
}

// Enquanto uma sala ou sorteio rápido está em andamento, o botão
// Voltar (do navegador OU o botão/gesto físico de voltar do sistema do
// celular — os dois disparam esse mesmo evento "popstate") encerra essa
// sessão com segurança (mesma limpeza do botão "Voltar ao Início") em vez
// de deixar a tela dessincronizada.
window.addEventListener('popstate', (e) => {
    const sessionActive = !!roomRef || !!quickState;
    if (sessionActive) {
        goHome();
    } else {
        const target = (e.state && e.state.appScreen) || 'screen-home';
        if (document.getElementById(target)) {
            suppressHistoryPush = true;
            showScreen(target);
            suppressHistoryPush = false;
        }
    }

    // Repõe uma entrada no histórico logo em seguida. Assim, tanto o botão
    // de voltar do navegador quanto o botão/gesto de voltar do próprio
    // sistema do celular nunca "esgotam" o histórico e saem do site — eles
    // sempre continuam presos dentro do app, navegando pelas telas.
    window.history.pushState(window.history.state || { appScreen: 'screen-home' }, '', window.location.href);
});

function updateRoomHeader() {
    const header = document.getElementById('room-code-header');
    document.body.classList.toggle('has-room-header', !!roomId);
    if (roomId) {
        header.style.display = 'flex';
        document.getElementById('room-code-display').innerText = roomId;
    } else {
        header.style.display = 'none';
    }
}

function fillCardContent(div, char) {
    if (char.img) {
        let img = document.createElement('img');
        img.className = 'card-image';
        img.src = char.img;
        img.alt = char.nome;
        img.loading = 'lazy';
        img.decoding = 'async';
        div.appendChild(img);
    }
    let textSpan = document.createElement('span');
    textSpan.innerText = char.nome;
    if (!char.img) textSpan.style.margin = "auto";
    div.appendChild(textSpan);
}

function getPlayerDisplayName(role) {
    if (!gameState || !gameState.playerNames) return 'J' + role;
    if (gameState.mode === 'team' && gameState.slotAssignments) {
        const nameIdx = gameState.slotAssignments[role];
        return gameState.playerNames[nameIdx] || ('Jogador ' + role);
    }
    const idx = role - 1;
    return gameState.playerNames[idx] || ('Jogador ' + role);
}

function getMySlotFromNameIndex(nameIndex) {
    if (!gameState.slotAssignments) return null;
    for (const [slot, idx] of Object.entries(gameState.slotAssignments)) {
        if (parseInt(idx) === nameIndex) return parseInt(slot);
    }
    return null;
}

function formatDuration(ms) {
    const totalSeconds = Math.max(0, Math.floor(ms / 1000));
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    if (hours > 0) {
        return String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');
    }
    return String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');
}

function updateCombatTimerDisplay() {
    const el = document.getElementById('combat-timer');
    if (el && gameState) {
        el.innerText = '⏱️ ' + formatDuration(getElapsedMs(gameState.combatTimer));
    }
    const pauseBtn = document.getElementById('btn-pause-combat');
    if (pauseBtn && gameState) {
        pauseBtn.innerText = pauseBtnLabel(gameState.combatTimer);
    }
}

function startCombatTimerDisplay() {
    stopCombatTimerDisplay();
    updateCombatTimerDisplay();
    combatTimerInterval = setInterval(updateCombatTimerDisplay, 1000);
}

function stopCombatTimerDisplay() {
    if (combatTimerInterval) {
        clearInterval(combatTimerInterval);
        combatTimerInterval = null;
    }
}

document.getElementById('btn-pause-combat')?.addEventListener('click', () => {
    if (!gameState || !roomRef) return;
    const firstStart = firstRoomTimerStartUpdates();
    if (firstStart) {
        roomRef.update(firstStart);
        return;
    }
    const timer = gameState.combatTimer;
    const updated = (timer && !timer.paused) ? pauseTimer(timer) : resumeTimer(timer);
    roomRef.update({ combatTimer: updated });
});

// ------------------------------------------------------------
// Ajuste manual do cronômetro (caso alguém pause e esqueça de retomar)
// ------------------------------------------------------------
// Aceita "mm:ss", "h:mm:ss" ou só minutos (ex: "12"). Mantém o estado do
// timer: se estava correndo continua correndo a partir do novo valor; se
// estava pausado continua pausado.
function parseTimeInput(text) {
    if (text === null || text === undefined) return null;
    const parts = String(text).trim().split(':').map(p => p.trim());
    if (parts.length < 1 || parts.length > 3 || parts.some(p => !/^\d+$/.test(p))) return null;
    const n = parts.map(Number);
    let seconds;
    if (n.length === 1) seconds = n[0] * 60;
    else if (n.length === 2) seconds = n[0] * 60 + n[1];
    else seconds = n[0] * 3600 + n[1] * 60 + n[2];
    return seconds * 1000;
}

function timerWithValue(timer, ms) {
    const running = !!(timer && !timer.paused && timer.runStartTime);
    return { accumulatedMs: ms, paused: !running, runStartTime: running ? Date.now() : null };
}

function promptNewTimerMs(timer) {
    const answer = window.prompt('Ajustar o tempo (mm:ss):', formatDuration(getElapsedMs(timer)));
    if (answer === null) return null; // cancelou
    const ms = parseTimeInput(answer);
    if (ms === null) {
        alert('Tempo inválido. Use o formato mm:ss (ex: 12:30).');
        return null;
    }
    return ms;
}

document.getElementById('btn-edit-timer')?.addEventListener('click', () => {
    if (!gameState || !roomRef) return;
    const ms = promptNewTimerMs(gameState.combatTimer);
    if (ms === null) return;
    roomRef.update({ combatTimer: timerWithValue(gameState.combatTimer || newTimer(), ms) });
});

document.getElementById('btn-quick-edit-timer')?.addEventListener('click', () => {
    if (!quickState) return;
    const ms = promptNewTimerMs(quickState.timer);
    if (ms === null) return;
    quickState.timer = timerWithValue(quickState.timer || newTimer(), ms);
    updateQuickTimerDisplay();
});

document.getElementById('btn-finish-bestof3')?.addEventListener('click', () => {
    window.finishBestOf3Early();
});

function goHome() {
    stopCombatTimerDisplay();
    if (roomRef) roomRef.off();
    hideRerollUI();
    roomId = null;
    myRole = null;
    myNameIndex = null;
    roomRef = null;
    gameState = null;
    updateRoomHeader();
    window.history.replaceState({ appScreen: 'screen-home' }, '', window.location.pathname);
    showScreen('screen-home');
    attachFeedListener();
}

// ============================================================
// CONFIGURAÇÃO DE SALA
// ============================================================
function buildNameInputs(count, mode) {
    const container = document.getElementById('player-names-inputs');
    container.innerHTML = '';
    const showCafe = mode !== 'team';
    for (let i = 0; i < count; i++) {
        const row = document.createElement('div');
        row.className = 'name-input-row';

        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'text-input name-input';
        input.placeholder = 'Jogador ' + (i + 1);
        input.value = 'Jogador ' + (i + 1);
        input.dataset.index = i;
        row.appendChild(input);

        if (showCafe) {
            const label = document.createElement('label');
            label.className = 'cafe-checkbox-label';
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'cafe-checkbox';
            checkbox.dataset.index = i;
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode('☕ Café com leite'));
            row.appendChild(label);
        }

        container.appendChild(row);
    }
}

function getCafeComLeiteFlags() {
    const flags = {};
    document.querySelectorAll('.cafe-checkbox').forEach(cb => {
        flags[cb.dataset.index] = cb.checked;
    });
    return flags;
}

function getSelectedMode() {
    const checked = document.querySelector('input[name="game-mode"]:checked');
    return checked ? checked.value : 'single';
}

function getNameInputs() {
    return Array.from(document.querySelectorAll('.name-input')).map(inp => inp.value.trim() || inp.placeholder);
}

// ============================================================
// CRIAÇÃO E ENTRADA NA SALA
// ============================================================
function showCreatorRolePick() {
    const list = document.getElementById('creator-role-pick-list');
    list.innerHTML = '';

    pendingConfig.playerNames.forEach((name, idx) => {
        const div = document.createElement('div');
        div.className = 'name-claim-item';
        div.innerText = name;
        div.onclick = () => createRoomFromConfig(idx + 1);
        list.appendChild(div);
    });

    showScreen('screen-creator-role-pick');
}

async function createRoomFromConfig(creatorRole) {
    const mode = pendingConfig.mode;
    const playerNames = pendingConfig.playerNames;
    roomId = generateRoomId();

    if (mode === 'team') {
        myRole = null;
        localStorage.setItem('unmatched_role_' + roomId, 'creator');
    } else {
        myRole = creatorRole || 1;
        localStorage.setItem('unmatched_role_' + roomId, String(myRole));
    }

    const initialState = {
        mode,
        phase: 'lobby',
        playerNames,
        cafeComLeite: pendingConfig.cafeComLeite || {},
        creatorRole: mode === 'team' ? null : myRole,
        player2Joined: false,
        nameClaims: {},
        slotAssignments: null,
        winner: null,
        winnerTeam: null,
        combatTimer: null,
        combatLogs: [],
        currentMap: null,
        matchPosted: false,
        createdAt: Date.now()
    };

    if (mode === 'single') {
        Object.assign(initialState, {
            p1Cards: null, p2Cards: null,
            p1Pick: null, p2Pick: null
        });
    } else if (mode === 'bestof3') {
        Object.assign(initialState, buildBestOf3State());
    } else if (mode === 'team') {
        const otherRoomHeroes = await getActiveRoomHeroNames();
        Object.assign(initialState, buildTeamDraftState(otherRoomHeroes));
    }

    roomRef = db.ref('rooms/' + roomId);
    roomRef.set(initialState).then(() => {
        const link = window.location.origin + window.location.pathname + '?room=' + roomId;
        document.getElementById('room-link-input').value = link;
        document.getElementById('waiting-room-code').innerText = roomId;
        updateRoomHeader();
        window.history.replaceState({}, '', link);
        showScreen('screen-waiting-room');
        attachRoomListener();
    });
}

function buildBestOf3State() {
    return {
        p1Cards: null, p2Cards: null,
        p1Saved: null, p2Saved: null,
        p1Banned: null, p2Banned: null,
        p1Final: null, p2Final: null,
        p1CombatChoice: null, p2CombatChoice: null,
        p1Used: [], p2Used: [],
        p1Score: 0, p2Score: 0
    };
}

function buildTeamDraftState(excludeNames) {
    return {
        teamPool: drawUniqueHeroes(12, excludeNames),
        teamPicks: { 1: null, 2: null, 3: null, 4: null },
        teamBans: []
    };
}

function joinRoomByCode(code) {
    roomId = code.toUpperCase().trim();
    const link = window.location.origin + window.location.pathname + '?room=' + roomId;
    window.history.replaceState({}, '', link);
    tryJoinRoom();
}

function tryJoinRoom() {
    updateRoomHeader();
    const savedRole = localStorage.getItem('unmatched_role_' + roomId);
    const savedNameIdx = localStorage.getItem('unmatched_nameidx_' + roomId);

    if (savedRole === 'creator' || savedRole) {
        if (savedRole !== 'creator') myRole = parseInt(savedRole, 10);
        if (savedNameIdx !== null) myNameIndex = parseInt(savedNameIdx, 10);
        attachRoomListener();
        return;
    }

    const ref = db.ref('rooms/' + roomId);
    ref.get().then(async snapshot => {
        if (!snapshot.exists()) {
            showJoinError('Essa sala não existe. Verifique o código.');
            return;
        }
        const data = snapshot.val();

        if (data.mode === 'team') {
            roomRef = ref;
            attachRoomListener();
            return;
        }

        roomRef = ref;

        if (!data.player2Joined) {
            // Vaga livre: entra com o papel que o criador não escolheu.
            const freeRole = (data.creatorRole === 2) ? 1 : 2;
            myRole = freeRole;
            localStorage.setItem('unmatched_role_' + roomId, String(freeRole));

            const updates = Object.assign({ player2Joined: true }, await buildDealUpdates(data));

            roomRef.update(updates).then(() => attachRoomListener());
            return;
        }

        // A sala já tem os 2 jogadores e este dispositivo não tem registro local
        // dessa sala (ex: perdeu a conexão, trocou de navegador/app, limpou o cache).
        // Em vez de bloquear, deixa a pessoa dizer quem ela é para retomar a posição.
        showRejoinChoice(data);
    }).catch(() => {
        showJoinError('Não foi possível conectar. Verifique sua internet.');
    });
}

function showRejoinChoice(data) {
    showScreen('screen-rejoin-choice');
    document.getElementById('rejoin-p1-name').innerText = (data.playerNames && data.playerNames[0]) || 'Jogador 1';
    document.getElementById('rejoin-p2-name').innerText = (data.playerNames && data.playerNames[1]) || 'Jogador 2';
}

function rejoinAsRole(role) {
    myRole = role;
    localStorage.setItem('unmatched_role_' + roomId, String(role));
    attachRoomListener();
}
window.rejoinAsRole = rejoinAsRole;

function showJoinError(msg) {
    document.getElementById('join-error-message').innerText = msg;
    showScreen('screen-join-error');
}

function copyRoomLink() {
    const input = document.getElementById('room-link-input');
    input.select();
    navigator.clipboard.writeText(input.value).then(() => {
        const btn = document.getElementById('btn-copy-link');
        const original = btn.innerText;
        btn.innerText = 'Copiado! ✅';
        setTimeout(() => { btn.innerText = original; }, 1500);
    });
}

function copyRoomCode() {
    navigator.clipboard.writeText(roomId).then(() => {
        const btn = document.getElementById('btn-copy-code');
        const original = btn.innerText;
        btn.innerText = '✓';
        setTimeout(() => { btn.innerText = original; }, 1500);
    });
}

// ============================================================
// LISTENER E RENDERIZAÇÃO PRINCIPAL
// ============================================================
function attachRoomListener() {
    roomRef = db.ref('rooms/' + roomId);
    roomRef.on('value', snapshot => {
        gameState = snapshot.val();
        if (!gameState) {
            goHome();
            return;
        }
        syncMyRole();
        renderGame();
    });
}

function syncMyRole() {
    const deviceId = getDeviceId();
    if (gameState.mode === 'team' && gameState.nameClaims) {
        for (const [idx, claimDevice] of Object.entries(gameState.nameClaims)) {
            if (claimDevice === deviceId) {
                myNameIndex = parseInt(idx, 10);
                localStorage.setItem('unmatched_nameidx_' + roomId, idx);
                if (gameState.slotAssignments) {
                    myRole = getMySlotFromNameIndex(myNameIndex);
                    if (myRole) localStorage.setItem('unmatched_role_' + roomId, String(myRole));
                }
            }
        }
    }
}

function renderGame() {
    updateRoomHeader();
    renderRerollUI();

    const phase = gameState.phase;

    if (phase === 'lobby') {
        if (gameState.mode === 'team' && myNameIndex === null) {
            renderNameClaim();
        } else {
            renderWaitingRoom();
        }
        return;
    }

    if (phase === 'name-claim') {
        renderNameClaim();
        return;
    }

    if (phase === 'team-assignment') {
        renderTeamAssignment();
        return;
    }

    if (phase === 'cafe-pick-single' || phase === 'cafe-pick-b3') {
        showScreen('screen-cafe-pick');
        renderCafePick();
        return;
    }

    if (phase === 'single-pick') {
        if (gameState.p1Pick && gameState.p2Pick) {
            roomRef.update({ phase: 'single-combat' });
            return;
        }
        showScreen('screen-single-pick');
        buildSinglePickInterface();
        return;
    }

    if ((phase.startsWith('phase') || phase.startsWith('team-')) && phase !== 'team-combat') {
        showScreen('screen-draft');
        const roleLabel = document.getElementById('my-role-label');
        if (roleLabel) {
            const label = myRole ? getPlayerDisplayName(myRole) : '-';
            roleLabel.innerText = myRole ? (PLAYER_COLORS[myRole].name + ' (' + label + ')') : '-';
        }
        if (phase.startsWith('team-')) buildTeamDraftInterface();
        else buildDraftInterface();
        return;
    }

    if (phase === 'combat' || phase === 'single-combat' || phase === 'team-combat') {
        showScreen('screen-combat');
        buildCombatInterface();
        return;
    }

    if (phase === 'post-game') {
        stopCombatTimerDisplay();
        renderPostGame();
        return;
    }
}

// ============================================================
// SALA DE ESPERA
// ============================================================
function renderWaitingRoom() {
    showScreen('screen-waiting-room');
    const link = window.location.origin + window.location.pathname + '?room=' + roomId;
    document.getElementById('room-link-input').value = link;
    document.getElementById('waiting-room-code').innerText = roomId;

    const list = document.getElementById('waiting-players-list');
    list.innerHTML = '';

    if (gameState.mode === 'team') {
        document.getElementById('waiting-title').innerText = '⚔️ Sala de Equipe ⚔️';
        document.getElementById('waiting-subtitle').innerText = 'Clique no seu nome e envie o código para os outros.';

        gameState.playerNames.forEach((name, idx) => {
            const claimed = gameState.nameClaims && gameState.nameClaims[idx];
            const isMe = claimed === getDeviceId();
            const div = document.createElement('div');
            div.className = 'name-claim-item' + (claimed ? ' claimed' : '') + (isMe ? ' is-me' : '');
            div.innerHTML = '<span class="player-tag player-' + ((idx % 4) + 1) + '">Nome ' + (idx + 1) + '</span><span>' + name + '</span>';
            if (!claimed) {
                div.onclick = () => claimName(idx);
            } else if (isMe) {
                div.innerHTML += ' <span class="you-badge">(Você)</span>';
            } else {
                div.innerHTML += ' <span class="taken-badge">✓</span>';
            }
            list.appendChild(div);
        });

        const claimedCount = gameState.nameClaims ? Object.keys(gameState.nameClaims).length : 0;
        if (claimedCount < 4) {
            document.getElementById('waiting-status').innerText = '⏳ ' + claimedCount + '/4 jogadores entraram...';
        } else {
            document.getElementById('waiting-status').innerText = '✅ Todos entraram! Sorteando equipes...';
        }
    } else {
        document.getElementById('waiting-title').innerText = '⚔️ Sala Criada! ⚔️';
        const waitingRole = gameState.creatorRole === 2 ? 1 : 2;
        document.getElementById('waiting-subtitle').innerText = 'Envie o link ou código para o Jogador ' + waitingRole + '.';

        const p1Name = gameState.playerNames[0] || 'Jogador 1';
        const p2Name = gameState.playerNames[1] || 'Jogador 2';
        const p1You = gameState.creatorRole === 1 ? ' <span class="you-badge">(Você)</span>' : '';
        const p2You = gameState.creatorRole === 2 ? ' <span class="you-badge">(Você)</span>' : '';
        list.innerHTML = '<div class="waiting-player"><span class="player-tag player-1">J1</span> ' + p1Name + ' ✓' + p1You + '</div>' +
            '<div class="waiting-player"><span class="player-tag player-2">J2</span> ' + p2Name + (gameState.player2Joined ? ' ✓' : ' ⏳') + p2You + '</div>';

        document.getElementById('waiting-status').innerText = gameState.player2Joined
            ? '✅ Segundo jogador entrou! Iniciando...'
            : '⏳ Aguardando o outro jogador entrar...';
    }
}

async function claimName(nameIndex) {
    const deviceId = getDeviceId();
    const claims = gameState.nameClaims || {};

    for (const [idx, dev] of Object.entries(claims)) {
        if (dev === deviceId) return;
    }

    const alreadyClaimed = !!claims[nameIndex];
    if (alreadyClaimed) {
        // Nome já reivindicado por outro dispositivo. Pode ser o mesmo jogador
        // reconectando de um navegador/app diferente (ex: link aberto pelo WhatsApp)
        // — confirma antes de retomar essa posição.
        const name = gameState.playerNames[nameIndex] || ('Nome ' + (nameIndex + 1));
        const ok = window.confirm('O nome "' + name + '" já foi escolhido em outro dispositivo.\n\nSe for você mesmo reconectando, toque OK para retomar essa posição.');
        if (!ok) return;
    }

    myNameIndex = nameIndex;
    localStorage.setItem('unmatched_nameidx_' + roomId, String(nameIndex));
    localStorage.setItem('unmatched_role_' + roomId, 'creator');

    const updates = {};
    updates['nameClaims/' + nameIndex] = deviceId;

    const newClaimCount = alreadyClaimed ? Object.keys(claims).length : Object.keys(claims).length + 1;
    if (newClaimCount >= 4 && !gameState.slotAssignments) {
        const shuffledIndices = shuffleArray([0, 1, 2, 3]);
        updates.slotAssignments = {
            1: shuffledIndices[0],
            2: shuffledIndices[1],
            3: shuffledIndices[2],
            4: shuffledIndices[3]
        };
        const otherRoomHeroes = await getActiveRoomHeroNames();
        updates.phase = 'team-assignment';
        updates.teamPool = drawUniqueHeroes(12, otherRoomHeroes);
        updates.teamPicks = { 1: null, 2: null, 3: null, 4: null };
        updates.teamBans = [];
    }

    roomRef.update(updates);
}

// ============================================================
// NOME (modo equipe - jogadores que entram depois)
// ============================================================
function renderNameClaim() {
    showScreen('screen-name-claim');
    const list = document.getElementById('name-claim-list');
    list.innerHTML = '';

    gameState.playerNames.forEach((name, idx) => {
        const claimed = gameState.nameClaims && gameState.nameClaims[idx];
        const isMe = claimed === getDeviceId();
        const div = document.createElement('div');
        div.className = 'name-claim-item' + (claimed ? ' claimed' : '') + (isMe ? ' is-me' : '');
        div.innerHTML = '<span class="player-tag player-' + ((idx % 4) + 1) + '">Nome ' + (idx + 1) + '</span><span>' + name + '</span>';
        if (!claimed) {
            div.onclick = () => claimName(idx);
        } else if (isMe) {
            div.innerHTML += ' <span class="you-badge">(Você)</span>';
        } else {
            div.innerHTML += ' <span class="taken-badge">✓ Ocupado — toque p/ retomar</span>';
            div.onclick = () => claimName(idx);
        }
        list.appendChild(div);
    });
}

// ============================================================
// EQUIPES DEFINIDAS
// ============================================================
function renderTeamAssignment() {
    showScreen('screen-team-assignment');
    syncMyRole();

    const display = document.getElementById('team-display');
    display.innerHTML = '';

    const slots = gameState.slotAssignments;
    const teamA = [1, 3].map(s => ({ slot: s, name: gameState.playerNames[slots[s]] }));
    const teamB = [2, 4].map(s => ({ slot: s, name: gameState.playerNames[slots[s]] }));

    const teamADiv = document.createElement('div');
    teamADiv.className = 'team-box team-a-box';
    teamADiv.innerHTML = '<h3>Equipe A</h3>';
    teamA.forEach(p => {
        const el = document.createElement('div');
        el.className = 'team-member ' + PLAYER_COLORS[p.slot].class;
        el.innerHTML = '<span class="player-tag ' + PLAYER_COLORS[p.slot].class + '">J' + p.slot + '</span> ' + p.name;
        if (myRole === p.slot) el.innerHTML += ' <span class="you-badge">(Você)</span>';
        teamADiv.appendChild(el);
    });

    const teamBDiv = document.createElement('div');
    teamBDiv.className = 'team-box team-b-box';
    teamBDiv.innerHTML = '<h3>Equipe B</h3>';
    teamB.forEach(p => {
        const el = document.createElement('div');
        el.className = 'team-member ' + PLAYER_COLORS[p.slot].class;
        el.innerHTML = '<span class="player-tag ' + PLAYER_COLORS[p.slot].class + '">J' + p.slot + '</span> ' + p.name;
        if (myRole === p.slot) el.innerHTML += ' <span class="you-badge">(Você)</span>';
        teamBDiv.appendChild(el);
    });

    display.appendChild(teamADiv);
    display.appendChild(teamBDiv);
}

document.getElementById('btn-continue-team')?.addEventListener('click', () => {
    roomRef.update({ phase: 'team-ban-j4' });
});

// ============================================================
// COMBATE ÚNICO - ESCOLHA SIMULTÂNEA
// ============================================================
function buildSinglePickInterface() {
    const myCards = myRole === 1 ? gameState.p1Cards : gameState.p2Cards;
    const myPick = myRole === 1 ? gameState.p1Pick : gameState.p2Pick;
    const container = document.getElementById('single-pick-cards');
    const confirmBtn = document.getElementById('btn-confirm-single-pick');
    const waitingDiv = document.getElementById('single-pick-waiting');

    if (myPick) {
        container.style.display = 'none';
        confirmBtn.style.display = 'none';
        waitingDiv.style.display = 'block';
        document.getElementById('single-pick-instructions').innerText = 'Escolha confirmada! Aguardando o oponente...';
        return;
    }

    container.style.display = 'grid';
    confirmBtn.style.display = 'block';
    waitingDiv.style.display = 'none';
    container.innerHTML = '';
    selectedCardIndex = null;
    confirmBtn.disabled = true;

    myCards.forEach((char, index) => {
        let div = document.createElement('div');
        div.className = 'card';
        fillCardContent(div, char);
        div.onclick = () => {
            document.querySelectorAll('#single-pick-cards .card').forEach(c => c.classList.remove('selected'));
            div.classList.add('selected');
            selectedCardIndex = index;
            confirmBtn.disabled = false;
        };
        container.appendChild(div);
    });
}

document.getElementById('btn-confirm-single-pick')?.addEventListener('click', () => {
    if (selectedCardIndex === null) return;
    const myCards = myRole === 1 ? gameState.p1Cards : gameState.p2Cards;
    const field = myRole === 1 ? 'p1Pick' : 'p2Pick';
    const pick = myCards[selectedCardIndex];

    roomRef.update({ [field]: pick });
});

// ============================================================
// CAFÉ COM LEITE — escolha manual de herói(s), sem sorteio
// ============================================================
// Jogador(es) marcados como "café com leite" na criação da sala escolhem
// livremente seu(s) próprio(s) herói(s) (1 no Combate Único, 4 na Melhor
// de 3) ANTES do sorteio normal acontecer. Depois que todos os jogadores
// café com leite confirmarem, o(s) jogador(es) normal(is) recebe(m) o
// sorteio de sempre (agora sem os heróis já escolhidos) e o jogo segue
// no fluxo de sempre (single-pick / fase de banimentos).
let cafeTempSelection = [];

function cafeRequiredCount() {
    return gameState.phase === 'cafe-pick-b3' ? 4 : 1;
}

function renderCafePick() {
    const cafeFlags = gameState.cafeComLeite || {};
    const cafeRoles = [1, 2].filter(r => cafeFlags[r - 1]);
    const amCafe = myRole && cafeFlags[myRole - 1];
    const required = cafeRequiredCount();

    const titleEl = document.getElementById('cafe-pick-title');
    const instructionsEl = document.getElementById('cafe-pick-instructions');
    const activeDiv = document.getElementById('cafe-pick-active');
    const waitingDiv = document.getElementById('cafe-pick-waiting');
    const gridEl = document.getElementById('cafe-pick-cards');
    const confirmBtn = document.getElementById('btn-confirm-cafe-pick');
    const counterEl = document.getElementById('cafe-pick-counter');

    if (titleEl) titleEl.innerText = '☕ Café com Leite';

    const cafePicks = gameState.cafePicks || {};

    // Ordem de escolha: sempre o café com leite de menor número de jogador
    // que ainda não completou sua escolha. Um café com leite só escolhe
    // depois que o(s) anterior(es) já tiverem confirmado os seus.
    const currentTurnRole = cafeRoles.find(r => (cafePicks[r] || []).length < required);

    // Todo mundo já escolheu: um cliente qualquer finaliza o sorteio pros
    // jogadores normais (protegido por transaction).
    if (!currentTurnRole) {
        finalizeCafePickIfNeeded();
    }

    if (!amCafe) {
        activeDiv.style.display = 'none';
        waitingDiv.style.display = 'block';
        if (currentTurnRole) {
            document.getElementById('cafe-pick-waiting-text').innerText =
                '⏳ Aguardando ' + getPlayerDisplayName(currentTurnRole) + ' (café com leite) escolher ' +
                (required > 1 ? ('os ' + required + ' heróis') : 'o herói') +
                ' — depois disso o sorteio acontece normalmente pra você.';
        } else {
            document.getElementById('cafe-pick-waiting-text').innerText = '⏳ Preparando o sorteio...';
        }
        return;
    }

    const myPicks = cafePicks[myRole] || [];
    if (myPicks.length === required) {
        activeDiv.style.display = 'none';
        waitingDiv.style.display = 'block';
        document.getElementById('cafe-pick-waiting-text').innerText = '⏳ Escolha confirmada! Aguardando os outros jogadores...';
        return;
    }

    if (currentTurnRole !== myRole) {
        // Sou café com leite, mas ainda não é minha vez (outro café com
        // leite de número menor ainda está escolhendo).
        activeDiv.style.display = 'none';
        waitingDiv.style.display = 'block';
        document.getElementById('cafe-pick-waiting-text').innerText =
            '⏳ Aguarde sua vez! Agora é a vez de ' + getPlayerDisplayName(currentTurnRole) + ' escolher.';
        return;
    }

    activeDiv.style.display = 'block';
    waitingDiv.style.display = 'none';
    if (instructionsEl) {
        instructionsEl.innerText = required > 1
            ? ('Escolha ' + required + ' heróis pra usar na sua Melhor de 3 (sem sorteio).')
            : 'Escolha o herói que você vai usar (sem sorteio).';
    }

    // Heróis já escolhidos por QUALQUER café com leite (inclusive de uma
    // vez anterior) ficam fora da lista, pra nunca repetir.
    const takenNames = new Set();
    cafeRoles.forEach(r => (cafePicks[r] || []).forEach(h => takenNames.add(h.nome)));

    gridEl.innerHTML = '';
    confirmBtn.disabled = cafeTempSelection.length !== required;
    if (counterEl) counterEl.innerText = cafeTempSelection.length + ' / ' + required;

    PERSONAGENS.filter(char => !takenNames.has(char.nome)).forEach(char => {
        const div = document.createElement('div');
        const isSelected = cafeTempSelection.some(h => h.nome === char.nome);
        div.className = 'card' + (isSelected ? ' selected' : '');
        fillCardContent(div, char);
        div.onclick = () => {
            const idx = cafeTempSelection.findIndex(h => h.nome === char.nome);
            if (idx >= 0) {
                cafeTempSelection.splice(idx, 1);
            } else {
                if (cafeTempSelection.length >= required) return;
                cafeTempSelection.push(char);
            }
            renderCafePick();
        };
        gridEl.appendChild(div);
    });
}

document.getElementById('btn-confirm-cafe-pick')?.addEventListener('click', () => {
    const required = cafeRequiredCount();
    if (cafeTempSelection.length !== required || !myRole || !roomRef) return;
    const cafeFlags = gameState.cafeComLeite || {};
    const cafeRoles = [1, 2].filter(r => cafeFlags[r - 1]);
    const cafePicks = gameState.cafePicks || {};
    const currentTurnRole = cafeRoles.find(r => (cafePicks[r] || []).length < required);
    if (currentTurnRole !== myRole) return; // não é minha vez ainda
    roomRef.update({ ['cafePicks/' + myRole]: cafeTempSelection }).then(() => {
        cafeTempSelection = [];
    });
});

// Sorteia os heróis dos jogadores NÃO marcados como café com leite
// (excluindo os heróis já escolhidos manualmente, e preferindo evitar os
// que já estão em uso em outras salas abertas) e segue o fluxo normal
// do modo. Protegido por transaction pra rodar uma única vez, mesmo com
// os dois dispositivos percebendo a condição ao mesmo tempo.
async function finalizeCafePickIfNeeded() {
    if (!roomRef) return;
    const otherRoomHeroes = await getActiveRoomHeroNames();

    roomRef.child('cafeResolving').transaction(current => {
        if (current) return; // já está sendo (ou já foi) resolvido
        return true;
    }, (error, committed) => {
        if (error || !committed) return;

        const isB3 = gameState.phase === 'cafe-pick-b3';
        const cafeFlags = gameState.cafeComLeite || {};
        const cafePicks = gameState.cafePicks || {};
        const cafeRoles = [1, 2].filter(r => cafeFlags[r - 1]);
        const normalRoles = [1, 2].filter(r => !cafeFlags[r - 1]);
        const perPlayer = isB3 ? 4 : 2;
        const needed = normalRoles.length * perPlayer;

        const chosenNames = new Set();
        cafeRoles.forEach(r => (cafePicks[r] || []).forEach(h => chosenNames.add(h.nome)));

        // Os já escolhidos pelos café com leite nunca podem sair (obrigatório);
        // evitar heróis de outras salas é só preferência.
        const drawn = drawUniqueHeroes(needed, otherRoomHeroes, Array.from(chosenNames));

        const updates = {};
        let idx = 0;
        normalRoles.forEach(r => {
            updates['p' + r + 'Cards'] = drawn.slice(idx, idx + perPlayer);
            idx += perPlayer;
        });

        if (isB3) {
            cafeRoles.forEach(r => {
                updates['p' + r + 'Cards'] = cafePicks[r] || [];
            });
            updates.phase = 'phase1-j1-save';
        } else {
            cafeRoles.forEach(r => {
                updates['p' + r + 'Pick'] = (cafePicks[r] || [])[0] || null;
            });
            updates.p1Pick = updates.hasOwnProperty('p1Pick') ? updates.p1Pick : (gameState.p1Pick || null);
            updates.p2Pick = updates.hasOwnProperty('p2Pick') ? updates.p2Pick : (gameState.p2Pick || null);
            updates.phase = 'single-pick';
        }

        roomRef.update(updates);
    });
}

// ============================================================
// DRAFT MELHOR DE 3
// ============================================================
function isMyDraftTurn(phase) {
    if (phase.includes('j1')) return myRole === 1;
    if (phase.includes('j2')) return myRole === 2;
    return false;
}

function buildDraftInterface() {
    const draftActive = document.getElementById('draft-active');
    const draftWaiting = document.getElementById('draft-waiting');

    // Enquanto existe um pedido de re-sorteio aguardando resposta, o draft
    // fica parado para os dois jogadores (evita escolher algo que vai ser resetado).
    const rr = gameState.rerollRequest;
    if (gameState.mode === 'bestof3' && rr && rr.status === 'pending') {
        draftActive.style.display = 'none';
        draftWaiting.style.display = 'block';
        document.getElementById('draft-waiting-text').innerText = rr.by === myRole
            ? '⏳ Aguardando ' + getPlayerDisplayName(rr.by === 1 ? 2 : 1) + ' responder ao seu pedido de re-sorteio...'
            : '🎲 ' + getPlayerDisplayName(rr.by) + ' pediu para re-sortear os personagens. Responda na janela que apareceu.';
        return;
    }

    if (!isMyDraftTurn(gameState.phase)) {
        draftActive.style.display = 'none';
        draftWaiting.style.display = 'block';
        document.getElementById('draft-waiting-text').innerText = 'Aguardando ' + getPlayerDisplayName(gameState.phase.includes('j1') ? 1 : 2) + '...';
        return;
    }
    draftActive.style.display = 'block';
    draftWaiting.style.display = 'none';

    const title = document.getElementById('draft-phase-title');
    const instr = document.getElementById('draft-instructions');
    const container = document.getElementById('cards-container');
    container.innerHTML = "";
    selectedCardIndex = null;

    let cardsToDisplay = [];

    switch (gameState.phase) {
        case 'phase1-j1-save':
            title.innerText = "Fase 1: Salvar Herói";
            instr.innerText = "Escolha 1 herói para SALVAR secretamente.";
            cardsToDisplay = gameState.p1Cards;
            break;
        case 'phase1-j2-save':
            title.innerText = "Fase 1: Salvar Herói";
            instr.innerText = "Escolha 1 herói para SALVAR secretamente.";
            cardsToDisplay = gameState.p2Cards;
            break;
        case 'phase2-j1-ban':
            title.innerText = "Fase 2: Banir do Oponente";
            instr.innerText = "Escolha 1 herói do oponente para BANIR.";
            cardsToDisplay = gameState.p2Cards.filter(c => c.nome !== gameState.p2Saved.nome);
            break;
        case 'phase2-j2-ban':
            title.innerText = "Fase 2: Banir do Oponente";
            instr.innerText = "Escolha 1 herói do oponente para BANIR.";
            cardsToDisplay = gameState.p1Cards.filter(c => c.nome !== gameState.p1Saved.nome);
            break;
        case 'phase3-j1-final':
            title.innerText = "Fase 3: Escolha Final";
            instr.innerText = "Escolha seu segundo herói para fechar seu deck de 2.";
            cardsToDisplay = gameState.p1Cards.filter(c => c.nome !== gameState.p1Saved.nome && c.nome !== gameState.p2Banned.nome);
            break;
        case 'phase3-j2-final':
            title.innerText = "Fase 3: Escolha Final";
            instr.innerText = "Escolha seu segundo herói e vá para o combate!";
            cardsToDisplay = gameState.p2Cards.filter(c => c.nome !== gameState.p2Saved.nome && c.nome !== gameState.p1Banned.nome);
            break;
    }

    renderCardGrid(container, cardsToDisplay);
}

// ============================================================
// RE-SORTEIO DE PERSONAGENS (Melhor de 3) — com permissão do oponente
// ============================================================
// Durante o draft da Melhor de 3 (antes do 1º combate), qualquer jogador
// pode pedir para re-sortear os personagens. O pedido fica salvo na sala
// (rerollRequest) e o OUTRO jogador vê uma janela para permitir ou recusar.
// Só quem aceita executa o novo sorteio, então nunca há sorteio duplo.
// Se permitido: os heróis dos jogadores normais são sorteados de novo (os
// de quem é café com leite continuam iguais) e o draft recomeça do zero.
let rerollDeniedTimer = null;

function isBestOf3DraftPhase(phase) {
    return typeof phase === 'string' && /^phase[123]-/.test(phase);
}

function hideRerollUI() {
    const area = document.getElementById('reroll-area');
    const modal = document.getElementById('reroll-modal');
    if (area) area.style.display = 'none';
    if (modal) modal.style.display = 'none';
}

function renderRerollUI() {
    const area = document.getElementById('reroll-area');
    const modal = document.getElementById('reroll-modal');
    if (!area || !modal) return;

    const inDraft = gameState && gameState.mode === 'bestof3' && myRole && isBestOf3DraftPhase(gameState.phase);
    if (!inDraft) {
        hideRerollUI();
        return;
    }

    const req = gameState.rerollRequest || null;
    const cafeFlags = gameState.cafeComLeite || {};
    const iAmCafe = !!cafeFlags[myRole - 1];
    const oppRole = myRole === 1 ? 2 : 1;
    const oppName = getPlayerDisplayName(oppRole);

    // Janela de permissão para quem RECEBEU o pedido
    if (req && req.status === 'pending' && req.by !== myRole) {
        document.getElementById('reroll-modal-text').innerText =
            getPlayerDisplayName(req.by) + ' quer re-sortear os personagens. ' +
            'Se você permitir, os heróis serão sorteados de novo e o draft recomeça do início.';
        modal.style.display = 'flex';
    } else {
        modal.style.display = 'none';
    }

    // Botão de pedir (café com leite não pede: os heróis dele são escolhidos à mão)
    const btn = document.getElementById('btn-request-reroll');
    const status = document.getElementById('reroll-status');
    area.style.display = iAmCafe ? 'none' : 'block';
    status.style.display = 'none';
    btn.disabled = false;
    btn.innerText = '🎲 Re-sortear personagens';

    if (req && req.status === 'pending') {
        if (req.by === myRole) {
            btn.innerText = '✖ Cancelar pedido';
            status.innerText = '⏳ Aguardando ' + oppName + ' permitir...';
            status.style.display = 'block';
        } else {
            btn.disabled = true;
        }
    } else if (req && req.status === 'denied' && req.by === myRole) {
        status.innerText = '❌ ' + oppName + ' não permitiu o re-sorteio.';
        status.style.display = 'block';
        if (!rerollDeniedTimer) {
            rerollDeniedTimer = setTimeout(() => {
                rerollDeniedTimer = null;
                if (roomRef) roomRef.child('rerollRequest').remove();
            }, 4000);
        }
    }
}

document.getElementById('btn-request-reroll')?.addEventListener('click', () => {
    if (!roomRef || !gameState || !myRole || !isBestOf3DraftPhase(gameState.phase)) return;
    const req = gameState.rerollRequest;

    if (req && req.status === 'pending') {
        if (req.by === myRole) roomRef.child('rerollRequest').remove(); // cancelar o meu pedido
        return;
    }

    if (rerollDeniedTimer) { clearTimeout(rerollDeniedTimer); rerollDeniedTimer = null; }
    roomRef.child('rerollRequest').transaction(current => {
        if (current && current.status === 'pending') return; // já existe pedido em aberto
        return { by: myRole, status: 'pending', at: Date.now() };
    });
});

document.getElementById('btn-reroll-deny')?.addEventListener('click', () => {
    if (!roomRef || !gameState || !gameState.rerollRequest) return;
    roomRef.child('rerollRequest').update({ status: 'denied' });
});

document.getElementById('btn-reroll-accept')?.addEventListener('click', async () => {
    if (!roomRef || !gameState) return;
    const req = gameState.rerollRequest;
    if (!req || req.status !== 'pending' || req.by === myRole) return;

    // O draft já passou da fase de escolha: só limpa o pedido.
    if (!isBestOf3DraftPhase(gameState.phase)) {
        roomRef.child('rerollRequest').remove();
        return;
    }

    const cafeFlags = gameState.cafeComLeite || {};
    const rerollRoles = [1, 2].filter(r => !cafeFlags[r - 1]);
    const cafeRoles = [1, 2].filter(r => cafeFlags[r - 1]);
    const namesOf = r => (gameState['p' + r + 'Cards'] || []).map(c => c.nome);

    const oldNames = rerollRoles.flatMap(namesOf);          // evita repetir o que acabou de sair
    const cafeNames = cafeRoles.flatMap(namesOf);           // nunca pode sair (já escolhidos à mão)
    const needed = rerollRoles.length * 4;

    const drawn = await drawHeroes(needed, oldNames, cafeNames);
    if (drawn.length < needed) {
        alert('Não há heróis suficientes para re-sortear.');
        roomRef.child('rerollRequest').update({ status: 'denied' });
        return;
    }

    const updates = {
        phase: 'phase1-j1-save',
        p1Saved: null, p2Saved: null,
        p1Banned: null, p2Banned: null,
        p1Final: null, p2Final: null,
        rerollRequest: null,
        rerollCount: (gameState.rerollCount || 0) + 1
    };
    rerollRoles.forEach((r, i) => {
        updates['p' + r + 'Cards'] = drawn.slice(i * 4, i * 4 + 4);
    });
    roomRef.update(updates);
});

// ============================================================
// DRAFT MODO EQUIPE
// ============================================================
const TEAM_DRAFT_PHASES = {
    'team-ban-j4': { actor: 4, action: 'ban', next: 'team-pick-j1', title: 'Banir Herói', instr: 'Banir 1 herói antes da escolha do Jogador 1.' },
    'team-pick-j1': { actor: 1, action: 'pick', next: 'team-ban-j3', title: 'Escolher Herói', instr: 'Escolha 1 herói para sua equipe.' },
    'team-ban-j3': { actor: 3, action: 'ban', next: 'team-pick-j2', title: 'Banir Herói', instr: 'Banir 1 herói antes da escolha do Jogador 2.' },
    'team-pick-j2': { actor: 2, action: 'pick', next: 'team-ban-j2', title: 'Escolher Herói', instr: 'Escolha 1 herói para sua equipe.' },
    'team-ban-j2': { actor: 2, action: 'ban', next: 'team-pick-j3', title: 'Banir Herói', instr: 'Banir 1 herói antes da escolha do Jogador 3.' },
    'team-pick-j3': { actor: 3, action: 'pick', next: 'team-ban-j1', title: 'Escolher Herói', instr: 'Escolha 1 herói para sua equipe.' },
    'team-ban-j1': { actor: 1, action: 'ban', next: 'team-pick-j4', title: 'Banir Herói', instr: 'Banir 1 herói antes da escolha do Jogador 4.' },
    'team-pick-j4': { actor: 4, action: 'pick', next: 'team-combat', title: 'Escolher Herói', instr: 'Escolha 1 herói para sua equipe.' }
};

function getAvailableTeamPool() {
    const banned = gameState.teamBans || [];
    const picked = Object.values(gameState.teamPicks || {}).filter(Boolean);
    const removed = [...banned, ...picked].map(c => c.nome);
    return (gameState.teamPool || []).filter(c => !removed.includes(c.nome));
}

function buildTeamDraftInterface() {
    const phaseInfo = TEAM_DRAFT_PHASES[gameState.phase];
    if (!phaseInfo) return;

    const draftActive = document.getElementById('draft-active');
    const draftWaiting = document.getElementById('draft-waiting');

    if (myRole !== phaseInfo.actor) {
        draftActive.style.display = 'none';
        draftWaiting.style.display = 'block';
        document.getElementById('draft-waiting-text').innerText = 'Aguardando ' + getPlayerDisplayName(phaseInfo.actor) + ' (' + PLAYER_COLORS[phaseInfo.actor].name + ')...';
        return;
    }

    draftActive.style.display = 'block';
    draftWaiting.style.display = 'none';

    document.getElementById('draft-phase-title').innerText = phaseInfo.title + ' — ' + PLAYER_COLORS[phaseInfo.actor].name;
    document.getElementById('draft-instructions').innerText = phaseInfo.instr;

    const container = document.getElementById('cards-container');
    container.innerHTML = "";
    selectedCardIndex = null;

    renderCardGrid(container, getAvailableTeamPool());
}

function renderCardGrid(container, cardsToDisplay) {
    const confirmBtn = document.getElementById('btn-confirm-choice');
    confirmBtn.disabled = true;

    cardsToDisplay.forEach((char, index) => {
        let div = document.createElement('div');
        div.className = 'card';
        fillCardContent(div, char);
        div.onclick = () => {
            document.querySelectorAll('#cards-container .card').forEach(c => c.classList.remove('selected'));
            div.classList.add('selected');
            selectedCardIndex = index;
            confirmBtn.disabled = false;
        };
        container.appendChild(div);
    });
}

document.getElementById('btn-confirm-choice')?.addEventListener('click', () => {
    if (selectedCardIndex === null) return;

    if (gameState.phase.startsWith('team-')) {
        handleTeamDraftConfirm();
        return;
    }

    const phase = gameState.phase;
    let updates = {};
    const pool = getAvailableTeamPool();

    if (phase === 'phase1-j1-save') {
        updates.p1Saved = gameState.p1Cards[selectedCardIndex];
        updates.phase = 'phase1-j2-save';
    } else if (phase === 'phase1-j2-save') {
        updates.p2Saved = gameState.p2Cards[selectedCardIndex];
        updates.phase = 'phase2-j1-ban';
    } else if (phase === 'phase2-j1-ban') {
        let available = gameState.p2Cards.filter(c => c.nome !== gameState.p2Saved.nome);
        updates.p1Banned = available[selectedCardIndex];
        updates.phase = 'phase2-j2-ban';
    } else if (phase === 'phase2-j2-ban') {
        let available = gameState.p1Cards.filter(c => c.nome !== gameState.p1Saved.nome);
        updates.p2Banned = available[selectedCardIndex];
        updates.phase = 'phase3-j1-final';
    } else if (phase === 'phase3-j1-final') {
        let available = gameState.p1Cards.filter(c => c.nome !== gameState.p1Saved.nome && c.nome !== gameState.p2Banned.nome);
        updates.p1Final = [gameState.p1Saved, available[selectedCardIndex]];
        updates.phase = 'phase3-j2-final';
    } else if (phase === 'phase3-j2-final') {
        let available = gameState.p2Cards.filter(c => c.nome !== gameState.p2Saved.nome && c.nome !== gameState.p1Banned.nome);
        updates.p2Final = [gameState.p2Saved, available[selectedCardIndex]];
        updates.phase = 'combat';
    }

    selectedCardIndex = null;
    roomRef.update(updates);
});

function handleTeamDraftConfirm() {
    const phaseInfo = TEAM_DRAFT_PHASES[gameState.phase];
    const available = getAvailableTeamPool();
    const chosen = available[selectedCardIndex];
    let updates = { phase: phaseInfo.next };

    if (phaseInfo.action === 'ban') {
        updates.teamBans = [...(gameState.teamBans || []), chosen];
    } else {
        updates['teamPicks/' + phaseInfo.actor] = chosen;
    }

    if (phaseInfo.next === 'team-combat') {
        updates.phase = 'team-combat';
    }

    selectedCardIndex = null;
    roomRef.update(updates);
}

// ============================================================
// COMBATE
// ============================================================
function currentCombatTurn() {
    if (!gameState.p1CombatChoice) return 1;
    if (!gameState.p2CombatChoice) return 2;
    return null;
}

function renderMapDrawSection(ids, onlyLarge, onDraw) {
    const btn = document.getElementById(ids.btn);
    const resultBox = document.getElementById(ids.result);
    const img = document.getElementById(ids.img);
    const nameEl = document.getElementById(ids.name);
    const rerollBtn = ids.reroll ? document.getElementById(ids.reroll) : null;
    if (!btn) return;

    const map = ids.getMap();
    if (map) {
        btn.style.display = 'none';
        resultBox.style.display = 'flex';
        img.src = map.img;
        img.alt = map.nome;
        nameEl.innerText = '🗺️ Mapa sorteado: ' + map.nome;
        if (rerollBtn) {
            rerollBtn.style.display = 'inline-flex';
            rerollBtn.onclick = () => onDraw(drawRandomMap(onlyLarge, [map.nome]));
        }
    } else {
        btn.style.display = 'inline-block';
        resultBox.style.display = 'none';
        if (rerollBtn) rerollBtn.style.display = 'none';
        btn.onclick = () => onDraw(drawRandomMap(onlyLarge));
    }
}

// Etiqueta pequena "Jogador inicial" em cima do card do herói (ou do lado da
// equipe) de quem começa. Substitui o texto grande que ficava na tela.
function setStarterTag(target) {
    const tag = document.createElement('div');
    tag.className = 'starter-tag';
    tag.innerText = 'Jogador inicial';
    target.insertBefore(tag, target.firstChild);
}

function clearStarterTags(root) {
    root.querySelectorAll('.starter-tag').forEach(t => t.remove());
}

function renderRoomStartingPlayer() {
    const el = document.getElementById('room-starting-player');
    if (el) el.style.display = 'none';
    const screen = document.getElementById('screen-combat');
    if (!screen) return;
    clearStarterTags(screen);

    const sp = gameState && gameState.startingPlayer;
    if (!sp) return;
    const target = gameState.phase === 'team-combat'
        ? screen.querySelector(sp === 1 ? '.team-side.team-a' : '.team-side.team-b')
        : document.getElementById(sp === 1 ? 'fighter-p1' : 'fighter-p2');
    if (target) setStarterTag(target);
}

// Sorteia quem começa jogando e retorna as atualizações do timer, mas só
// se o timer da sala ainda não tiver sido iniciado de verdade (existe mas
// pausado com 0 tempo acumulado, ou nem existe ainda). Se já foi iniciado
// alguma vez (mesmo que esteja pausado agora), não redesenha o timer nem o
// jogador inicial de novo.
function firstRoomTimerStartUpdates() {
    const timer = gameState.combatTimer;
    const neverStarted = !timer || (timer.paused && (timer.accumulatedMs || 0) === 0);
    if (!neverStarted) return null;
    return {
        combatTimer: resumeTimer(timer || newTimer()),
        startingPlayer: secureRandomInt(2) + 1
    };
}

function renderRoomMapDraw(onlyLarge) {
    renderMapDrawSection({
        btn: 'btn-draw-map',
        result: 'map-draw-result',
        img: 'map-draw-image',
        name: 'map-draw-name',
        reroll: 'btn-reroll-map',
        getMap: () => gameState.currentMap
    }, onlyLarge, (map) => {
        if (!roomRef) return;
        const updates = { currentMap: map };
        const timerUpdates = firstRoomTimerStartUpdates();
        if (timerUpdates) Object.assign(updates, timerUpdates);
        roomRef.update(updates);
    });
}

function buildCombatInterface() {
    buildCombatInterfaceInner();
    renderRoomStartingPlayer();
}

function buildCombatInterfaceInner() {
    if (!gameState.combatTimer && roomRef) {
        roomRef.update({ combatTimer: newTimer() });
    }
    if (!combatTimerInterval) startCombatTimerDisplay();

    const isTeam = gameState.phase === 'team-combat';
    const isSingle = gameState.phase === 'single-combat';

    document.getElementById('combat-scoreboard').style.display = isTeam || isSingle ? 'none' : 'flex';
    document.getElementById('matchup-1v1').style.display = isTeam ? 'none' : 'flex';
    document.getElementById('matchup-teams').style.display = isTeam ? 'flex' : 'none';
    document.getElementById('judge-1v1').style.display = isTeam ? 'none' : 'flex';
    document.getElementById('judge-teams').style.display = isTeam ? 'flex' : 'none';

    const finishBtn = document.getElementById('btn-finish-bestof3');
    if (finishBtn) finishBtn.style.display = (!isSingle && !isTeam) ? 'inline-block' : 'none';

    if (!isSingle && !isTeam) {
        document.getElementById('score-p1').innerText = gameState.p1Score;
        document.getElementById('score-p2').innerText = gameState.p2Score;
        document.getElementById('score-p1-name').innerText = getPlayerDisplayName(1);
        document.getElementById('score-p2-name').innerText = getPlayerDisplayName(2);

        if (gameState.p1Score >= 2 || gameState.p2Score >= 2) {
            if (gameState.phase !== 'post-game') {
                const winner = gameState.p1Score >= 2 ? 1 : 2;
                roomRef.update({ phase: 'post-game', winner, winnerTeam: null });
            }
            return;
        }
    }

    const combatActive = document.getElementById('combat-active');
    const combatWaiting = document.getElementById('combat-waiting');
    const matchupArea = document.getElementById('combat-matchup-area');

    if (isSingle) {
        combatActive.style.display = 'none';
        combatWaiting.style.display = 'none';
        matchupArea.style.display = 'block';
        document.getElementById('combat-matchup-title').innerText = '🔥 CONFRONTO! 🔥';
        document.getElementById('combat-judge-text').innerText = 'Quem venceu este combate?';

        const fP1 = document.getElementById('fighter-p1');
        const fP2 = document.getElementById('fighter-p2');
        fP1.innerHTML = "";
        fP2.innerHTML = "";
        fillCardContent(fP1, gameState.p1Pick);
        fillCardContent(fP2, gameState.p2Pick);
        const p1Tag = document.createElement('small');
        p1Tag.className = 'fighter-player-name';
        p1Tag.innerText = getPlayerDisplayName(1);
        fP1.appendChild(p1Tag);
        const p2Tag = document.createElement('small');
        p2Tag.className = 'fighter-player-name';
        p2Tag.innerText = getPlayerDisplayName(2);
        fP2.appendChild(p2Tag);
        renderMatchupOdds(fP1, gameState.p1Pick, fP2, gameState.p2Pick);

        document.getElementById('judge-1v1').innerHTML =
            '<button onclick="registerWinner(1)">' + getPlayerDisplayName(1) + ' Venceu</button>' +
            '<button onclick="registerWinner(2)">' + getPlayerDisplayName(2) + ' Venceu</button>';
        renderRoomMapDraw(false);
        return;
    }

    if (isTeam) {
        combatActive.style.display = 'none';
        combatWaiting.style.display = 'none';
        matchupArea.style.display = 'block';
        document.getElementById('combat-matchup-title').innerText = '🔥 CONFRONTO DE EQUIPES! 🔥';
        document.getElementById('combat-judge-text').innerText = 'Qual equipe venceu?';

        const picks = gameState.teamPicks;
        const teamAFighters = document.getElementById('team-a-fighters');
        const teamBFighters = document.getElementById('team-b-fighters');
        teamAFighters.innerHTML = '';
        teamBFighters.innerHTML = '';

        [1, 3].forEach(slot => {
            const div = document.createElement('div');
            div.className = 'fighter-card ' + PLAYER_COLORS[slot].class;
            fillCardContent(div, picks[slot]);
            const label = document.createElement('small');
            label.innerText = getPlayerDisplayName(slot);
            div.appendChild(label);
            teamAFighters.appendChild(div);
        });

        [2, 4].forEach(slot => {
            const div = document.createElement('div');
            div.className = 'fighter-card ' + PLAYER_COLORS[slot].class;
            fillCardContent(div, picks[slot]);
            const label = document.createElement('small');
            label.innerText = getPlayerDisplayName(slot);
            div.appendChild(label);
            teamBFighters.appendChild(div);
        });

        const teamANames = [1, 3].map(s => getPlayerDisplayName(s)).join(' + ');
        const teamBNames = [2, 4].map(s => getPlayerDisplayName(s)).join(' + ');
        document.getElementById('team-a-label').innerText = 'Equipe A: ' + teamANames;
        document.getElementById('team-b-label').innerText = 'Equipe B: ' + teamBNames;
        renderRoomMapDraw(true);
        return;
    }

    const turn = currentCombatTurn();

    if (turn !== null) {
        matchupArea.style.display = 'none';

        if (turn !== myRole) {
            combatActive.style.display = 'none';
            combatWaiting.style.display = 'block';
            return;
        }

        combatActive.style.display = 'block';
        combatWaiting.style.display = 'none';

        const container = document.getElementById('combat-choices');
        container.innerHTML = "";
        const pool = myRole === 1 ? gameState.p1Final : gameState.p2Final;
        const used = (myRole === 1 ? gameState.p1Used : gameState.p2Used) || [];
        const confirmCombatBtn = document.getElementById('btn-confirm-combat');
        confirmCombatBtn.disabled = true;

        document.getElementById('combat-title').innerText = getPlayerDisplayName(myRole) + ' — Escolha secretamente';

        let tempChoice = null;
        pool.forEach((char) => {
            let isUsed = used.some(u => u.nome === char.nome);
            let div = document.createElement('div');
            div.className = 'card' + (isUsed ? ' used' : '');
            fillCardContent(div, char);

            if (!isUsed) {
                div.onclick = () => {
                    document.querySelectorAll('#combat-choices .card').forEach(c => c.classList.remove('selected'));
                    div.classList.add('selected');
                    tempChoice = char;
                    confirmCombatBtn.disabled = false;
                };
            }
            container.appendChild(div);
        });

        confirmCombatBtn.onclick = () => {
            if (!tempChoice) return;
            const field = myRole === 1 ? 'p1CombatChoice' : 'p2CombatChoice';
            roomRef.update({ [field]: tempChoice });
        };
    } else {
        combatActive.style.display = 'none';
        combatWaiting.style.display = 'none';
        matchupArea.style.display = 'block';
        document.getElementById('combat-judge-text').innerText = 'Quem venceu este combate?';

        const fP1 = document.getElementById('fighter-p1');
        const fP2 = document.getElementById('fighter-p2');
        fP1.innerHTML = "";
        fP2.innerHTML = "";
        fillCardContent(fP1, gameState.p1CombatChoice);
        fillCardContent(fP2, gameState.p2CombatChoice);
        const p1Tag2 = document.createElement('small');
        p1Tag2.className = 'fighter-player-name';
        p1Tag2.innerText = getPlayerDisplayName(1);
        fP1.appendChild(p1Tag2);
        const p2Tag2 = document.createElement('small');
        p2Tag2.className = 'fighter-player-name';
        p2Tag2.innerText = getPlayerDisplayName(2);
        fP2.appendChild(p2Tag2);
        renderMatchupOdds(fP1, gameState.p1CombatChoice, fP2, gameState.p2CombatChoice);

        document.getElementById('judge-1v1').innerHTML =
            '<button onclick="registerWinner(1)">' + getPlayerDisplayName(1) + ' Venceu</button>' +
            '<button onclick="registerWinner(2)">' + getPlayerDisplayName(2) + ' Venceu</button>';
        renderRoomMapDraw(false);
    }
}

window.registerWinner = function(winnerNum) {
    const elapsed = getElapsedMs(gameState.combatTimer);
    const mapName = gameState.currentMap ? gameState.currentMap.nome : null;

    if (gameState.mode === 'single') {
        const p1HeroName = gameState.p1Pick ? gameState.p1Pick.nome : null;
        const p2HeroName = gameState.p2Pick ? gameState.p2Pick.nome : null;
        recordHeroBattleResult(
            [winnerNum === 1 ? p1HeroName : p2HeroName],
            [winnerNum === 1 ? p2HeroName : p1HeroName]
        );

        const combatLogs = [{
            round: 1,
            p1Hero: p1HeroName || '?',
            p2Hero: p2HeroName || '?',
            winnerName: getPlayerDisplayName(winnerNum),
            durationMs: elapsed,
            mapName
        }];
        roomRef.update({
            phase: 'post-game',
            winner: winnerNum,
            matchDurationMs: elapsed,
            combatLogs,
            combatTimer: null
        });
        return;
    }

    let updates = {
        p1CombatChoice: null,
        p2CombatChoice: null,
        currentMap: null
    };
    let newP1Score = gameState.p1Score || 0;
    let newP2Score = gameState.p2Score || 0;

    const p1HeroName = gameState.p1CombatChoice ? gameState.p1CombatChoice.nome : null;
    const p2HeroName = gameState.p2CombatChoice ? gameState.p2CombatChoice.nome : null;
    recordHeroBattleResult(
        [winnerNum === 1 ? p1HeroName : p2HeroName],
        [winnerNum === 1 ? p2HeroName : p1HeroName]
    );

    const priorLogs = gameState.combatLogs || [];
    const roundLog = {
        round: priorLogs.length + 1,
        p1Hero: p1HeroName || '?',
        p2Hero: p2HeroName || '?',
        winnerName: getPlayerDisplayName(winnerNum),
        durationMs: elapsed,
        mapName
    };
    const combatLogs = [...priorLogs, roundLog];
    updates.combatLogs = combatLogs;

    if (winnerNum === 1) {
        newP1Score += 1;
        updates.p1Score = newP1Score;
        updates.p1Used = [...(gameState.p1Used || []), gameState.p1CombatChoice];
    } else {
        newP2Score += 1;
        updates.p2Score = newP2Score;
        updates.p2Used = [...(gameState.p2Used || []), gameState.p2CombatChoice];
    }

    if (newP1Score >= 2 || newP2Score >= 2) {
        updates.phase = 'post-game';
        updates.winner = newP1Score >= 2 ? 1 : 2;
        updates.winnerTeam = null;
        updates.finalWinnerHero = winnerNum === 1 ? gameState.p1CombatChoice : gameState.p2CombatChoice;
        updates.finalLoserHero = winnerNum === 1 ? gameState.p2CombatChoice : gameState.p1CombatChoice;
        updates.matchDurationMs = combatLogs.reduce((sum, c) => sum + (c.durationMs || 0), 0);
        updates.combatTimer = null;
    } else {
        // Novo timer independente para o próximo combate da melhor de 3
        updates.combatTimer = newTimer();
    }

    roomRef.update(updates);
};

// Encerra uma "Melhor de 3" antes dos 3 combates (ex: um jogador precisa
// sair, ou os dois concordam em não jogar o combate decisivo). O placar
// atual decide tudo, sem perguntar quem deve vencer: quem estiver na
// frente vence; se estiver empatado (0x0 ou 1x1), a série termina em
// EMPATE. Não conta vitória/derrota extra nas estatísticas — só fecha a
// série com o que já foi jogado até aqui.
window.finishBestOf3Early = function() {
    if (!gameState || gameState.mode !== 'bestof3' || !roomRef) return;

    const p1s = gameState.p1Score || 0;
    const p2s = gameState.p2Score || 0;

    const p1Used = gameState.p1Used || [];
    const p2Used = gameState.p2Used || [];
    const p1LastHero = gameState.p1CombatChoice || p1Used[p1Used.length - 1] || null;
    const p2LastHero = gameState.p2CombatChoice || p2Used[p2Used.length - 1] || null;
    const combatLogs = gameState.combatLogs || [];
    const durationMs = combatLogs.reduce((sum, c) => sum + (c.durationMs || 0), 0);

    if (p1s === p2s) {
        const ok = window.confirm('Finalizar a Melhor de 3 agora? Placar ' + p1s + ' x ' + p2s + ' — vai terminar em EMPATE.');
        if (!ok) return;

        roomRef.update({
            phase: 'post-game',
            winner: null,
            winnerTeam: null,
            isDraw: true,
            finalWinnerHero: null,
            finalLoserHero: null,
            finalP1Hero: p1LastHero,
            finalP2Hero: p2LastHero,
            matchDurationMs: durationMs,
            combatTimer: null,
            p1CombatChoice: null,
            p2CombatChoice: null
        });
        return;
    }

    const winnerNum = p1s > p2s ? 1 : 2;
    const winnerName = getPlayerDisplayName(winnerNum);
    const ok = window.confirm('Finalizar a Melhor de 3 agora?\n\nPlacar: ' + p1s + ' x ' + p2s + '\nVencedor: ' + winnerName);
    if (!ok) return;

    const winnerHero = winnerNum === 1 ? p1LastHero : p2LastHero;
    const loserHero = winnerNum === 1 ? p2LastHero : p1LastHero;

    roomRef.update({
        phase: 'post-game',
        winner: winnerNum,
        winnerTeam: null,
        isDraw: false,
        finalWinnerHero: winnerHero,
        finalLoserHero: loserHero,
        finalP1Hero: null,
        finalP2Hero: null,
        matchDurationMs: durationMs,
        combatTimer: null,
        p1CombatChoice: null,
        p2CombatChoice: null
    });
};

window.registerTeamWinner = function(team) {
    const elapsed = getElapsedMs(gameState.combatTimer);
    const picks = gameState.teamPicks || {};
    const mapName = gameState.currentMap ? gameState.currentMap.nome : null;
    const teamAHeroes = [1, 3].map(s => picks[s] ? picks[s].nome : null).filter(Boolean);
    const teamBHeroes = [2, 4].map(s => picks[s] ? picks[s].nome : null).filter(Boolean);
    recordHeroBattleResult(
        team === 'A' ? teamAHeroes : teamBHeroes,
        team === 'A' ? teamBHeroes : teamAHeroes
    );

    const combatLogs = [{
        round: 1,
        p1Hero: teamAHeroes.join(' & ') || '?',
        p2Hero: teamBHeroes.join(' & ') || '?',
        winnerName: 'Equipe ' + team,
        durationMs: elapsed,
        mapName
    }];
    roomRef.update({
        phase: 'post-game',
        winnerTeam: team,
        matchDurationMs: elapsed,
        combatLogs,
        combatTimer: null
    });
};


// ============================================================
// PÓS-JOGO: REVANCHE E FECHAR SALA
// ============================================================
function renderPostGame() {
    showScreen('screen-post-game');
    postMatchAutomatically();

    let msg = '';
    if (gameState.mode === 'bestof3' && gameState.isDraw) {
        msg = '🤝 Empate! (' + (gameState.p1Score || 0) + ' x ' + (gameState.p2Score || 0) + ')';
    } else if (gameState.mode === 'team' && gameState.winnerTeam) {
        const teamName = gameState.winnerTeam === 'A'
            ? [1, 3].map(s => getPlayerDisplayName(s)).join(' + ')
            : [2, 4].map(s => getPlayerDisplayName(s)).join(' + ');
        msg = '🏆 Equipe ' + gameState.winnerTeam + ' venceu! (' + teamName + ')';
    } else if (gameState.winner) {
        msg = '🏆 Campeão: ' + getPlayerDisplayName(gameState.winner);
    } else if (gameState.mode === 'bestof3') {
        const w = gameState.p1Score >= 2 ? 1 : 2;
        msg = '🏆 Campeão: ' + getPlayerDisplayName(w);
    }

    document.getElementById('post-game-message').innerText = msg;

    const durationEl = document.getElementById('post-game-duration');
    if (durationEl) {
        durationEl.innerText = (gameState.matchDurationMs != null)
            ? '⏱️ Duração da batalha: ' + formatDuration(gameState.matchDurationMs)
            : '';
    }

}

// ============================================================
// FEED DE PARTIDAS
// ============================================================
// Posta a partida automaticamente assim que ela termina. Usa uma transaction
// no campo matchPosted para garantir que, mesmo com vários clientes vendo a
// mesma sala ao mesmo tempo, o post seja criado uma única vez.
function postMatchAutomatically() {
    if (!gameState || !roomRef) return;

    roomRef.child('matchPosted').transaction(current => {
        if (current) return; // aborta: já foi postado por este ou outro cliente
        return true;
    }, (error, committed) => {
        if (error || !committed) return;

        const participants = buildMatchParticipants();
        if (!participants) return;

        db.ref('posts').push({
            participants,
            mode: gameState.mode,
            combats: gameState.combatLogs || [],
            durationMs: gameState.matchDurationMs || null,
            timestamp: Date.now()
        });
    });
}

function buildMatchParticipants() {
    if (gameState.mode === 'single') {
        const winnerRole = gameState.winner;
        if (!winnerRole) return null;
        return [1, 2].map(role => ({
            name: getPlayerDisplayName(role),
            hero: (role === 1 ? gameState.p1Pick : gameState.p2Pick)?.nome || '?',
            colorClass: PLAYER_COLORS[role].class,
            won: role === winnerRole
        }));
    }

    if (gameState.mode === 'bestof3') {
        const winnerRole = gameState.winner;
        if (!winnerRole && !gameState.isDraw) return null;
        const scoreNote = (gameState.p1Score || 0) + ' x ' + (gameState.p2Score || 0) + (gameState.isDraw ? ' (Empate)' : '');
        return [1, 2].map(role => ({
            name: getPlayerDisplayName(role),
            hero: (gameState.isDraw
                ? (role === 1 ? gameState.finalP1Hero : gameState.finalP2Hero)
                : (role === winnerRole ? gameState.finalWinnerHero : gameState.finalLoserHero))?.nome || '?',
            colorClass: PLAYER_COLORS[role].class,
            won: !gameState.isDraw && role === winnerRole,
            note: scoreNote
        }));
    }

    if (gameState.mode === 'team') {
        const winnerTeam = gameState.winnerTeam;
        if (!winnerTeam) return null;
        const picks = gameState.teamPicks || {};
        return [1, 2, 3, 4].map(slot => {
            const team = (slot === 1 || slot === 3) ? 'A' : 'B';
            return {
                name: getPlayerDisplayName(slot),
                hero: picks[slot] ? picks[slot].nome : '?',
                colorClass: PLAYER_COLORS[slot].class,
                won: team === winnerTeam,
                note: 'Equipe ' + team
            };
        });
    }

    return null;
}

// ============================================================
// ADICIONAR PARTIDA MANUALMENTE (Ferramentas)
// ============================================================
// Registra no feed e nas estatísticas uma partida jogada fora do site
// (ex: presencialmente), sem precisar criar sala nem jogar pelo app.
function updateAddMatchModeUI() {
    const mode = document.querySelector('input[name="add-match-mode"]:checked')?.value || '1v1';
    document.getElementById('add-match-1v1-fields').style.display = (mode === '1v1') ? 'block' : 'none';
    document.getElementById('add-match-2v2-fields').style.display = (mode === '2v2') ? 'block' : 'none';
}

function openAddMatchScreen() {
    const datalist = document.getElementById('add-match-heroes-datalist');
    if (datalist && datalist.children.length === 0) {
        PERSONAGENS.forEach(h => {
            const opt = document.createElement('option');
            opt.value = h.nome;
            datalist.appendChild(opt);
        });
    }

    ['add-match-p1-name', 'add-match-p1-hero', 'add-match-p2-name', 'add-match-p2-hero',
     'add-match-a1-name', 'add-match-a1-hero', 'add-match-a2-name', 'add-match-a2-hero',
     'add-match-b1-name', 'add-match-b1-hero', 'add-match-b2-name', 'add-match-b2-hero'
    ].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });

    document.querySelector('input[name="add-match-mode"][value="1v1"]').checked = true;
    updateAddMatchModeUI();
}

// Acha o herói pelo nome digitado (via datalist). Aceita correspondência
// exata (ignorando maiúsculas/espaços) — se não encontrar, retorna null.
function findHeroByName(typedName) {
    const clean = (typedName || '').trim().toLowerCase();
    if (!clean) return null;
    return PERSONAGENS.find(h => h.nome.trim().toLowerCase() === clean) || null;
}

function submitAddMatch() {
    const mode = document.querySelector('input[name="add-match-mode"]:checked')?.value || '1v1';

    if (mode === '1v1') {
        const p1Name = document.getElementById('add-match-p1-name').value.trim() || 'Jogador 1';
        const p2Name = document.getElementById('add-match-p2-name').value.trim() || 'Jogador 2';
        const p1Hero = findHeroByName(document.getElementById('add-match-p1-hero').value);
        const p2Hero = findHeroByName(document.getElementById('add-match-p2-hero').value);
        const winnerVal = document.getElementById('add-match-1v1-winner').value;

        if (!p1Hero || !p2Hero) {
            alert('Escolha os heróis dos 2 jogadores a partir da lista sugerida.');
            return;
        }

        const isDraw = winnerVal === 'draw';
        const p1 = { name: p1Name, hero: p1Hero.nome, colorClass: PLAYER_COLORS[1].class, won: winnerVal === '1' };
        const p2 = { name: p2Name, hero: p2Hero.nome, colorClass: PLAYER_COLORS[2].class, won: winnerVal === '2' };
        if (isDraw) p1.note = 'Empate';
        const participants = [p1, p2];
        const combats = [{
            round: 1,
            p1Hero: p1Hero.nome,
            p2Hero: p2Hero.nome,
            winnerName: isDraw ? null : (winnerVal === '1' ? p1Name : p2Name)
        }];

        db.ref('posts').push({
            participants,
            mode: 'manual-1v1',
            combats,
            durationMs: null,
            timestamp: Date.now()
        });

        if (!isDraw) {
            const winnerHero = winnerVal === '1' ? p1Hero.nome : p2Hero.nome;
            const loserHero = winnerVal === '1' ? p2Hero.nome : p1Hero.nome;
            recordHeroBattleResult([winnerHero], [loserHero]);
        }
    } else {
        const a1Name = document.getElementById('add-match-a1-name').value.trim() || 'Jogador 1';
        const a2Name = document.getElementById('add-match-a2-name').value.trim() || 'Jogador 2';
        const b1Name = document.getElementById('add-match-b1-name').value.trim() || 'Jogador 3';
        const b2Name = document.getElementById('add-match-b2-name').value.trim() || 'Jogador 4';
        const a1Hero = findHeroByName(document.getElementById('add-match-a1-hero').value);
        const a2Hero = findHeroByName(document.getElementById('add-match-a2-hero').value);
        const b1Hero = findHeroByName(document.getElementById('add-match-b1-hero').value);
        const b2Hero = findHeroByName(document.getElementById('add-match-b2-hero').value);
        const winnerVal = document.getElementById('add-match-2v2-winner').value;

        if (!a1Hero || !a2Hero || !b1Hero || !b2Hero) {
            alert('Escolha os heróis dos 4 jogadores a partir da lista sugerida.');
            return;
        }

        const isDraw = winnerVal === 'draw';
        const teamAHeroes = [a1Hero.nome, a2Hero.nome];
        const teamBHeroes = [b1Hero.nome, b2Hero.nome];

        const participants = [
            { name: a1Name, hero: a1Hero.nome, colorClass: PLAYER_COLORS[1].class, won: winnerVal === 'A', note: 'Equipe A' + (isDraw ? ' (Empate)' : '') },
            { name: b1Name, hero: b1Hero.nome, colorClass: PLAYER_COLORS[2].class, won: winnerVal === 'B', note: 'Equipe B' + (isDraw ? ' (Empate)' : '') },
            { name: a2Name, hero: a2Hero.nome, colorClass: PLAYER_COLORS[3].class, won: winnerVal === 'A', note: 'Equipe A' + (isDraw ? ' (Empate)' : '') },
            { name: b2Name, hero: b2Hero.nome, colorClass: PLAYER_COLORS[4].class, won: winnerVal === 'B', note: 'Equipe B' + (isDraw ? ' (Empate)' : '') }
        ];
        const combats = [{
            round: 1,
            p1Hero: teamAHeroes.join(' & '),
            p2Hero: teamBHeroes.join(' & '),
            winnerName: isDraw ? null : ('Equipe ' + winnerVal)
        }];

        db.ref('posts').push({
            participants,
            mode: 'manual-team',
            combats,
            durationMs: null,
            timestamp: Date.now()
        });

        if (!isDraw) {
            recordHeroBattleResult(
                winnerVal === 'A' ? teamAHeroes : teamBHeroes,
                winnerVal === 'A' ? teamBHeroes : teamAHeroes
            );
        }
    }

    alert('Partida registrada! Ela já aparece no feed e nas estatísticas dos heróis.');
    showScreen('screen-tools');
}

let feedRef = null;
let allPostsData = {};

function attachFeedListener() {
    if (feedRef) return; // já conectado
    feedRef = db.ref('posts');
    feedRef.on('value', snapshot => {
        allPostsData = snapshot.val() || {};
        renderFeed(allPostsData);
    });
}

function detachFeedListener() {
    if (feedRef) feedRef.off();
    feedRef = null;
}

// ============================================================
// CONTADOR SEPARADO DE ESTATÍSTICAS (heroStats) — leve e rápido
// ============================================================
// Em vez de reler o feed inteiro toda vez (o que pesaria conforme o
// número de partidas cresce), cada resultado de combate 1x1 atualiza
// direto um pequeno "banco de dados" próprio no Firebase:
//   heroStats/{heroKey}/wins            -> vitórias totais do herói
//   heroStats/{heroKey}/losses          -> derrotas totais do herói
//   heroStats/{heroKey}/vs/{oppKey}/wins -> vitórias desse herói especificamente contra o outro
// Consultar a porcentagem entre dois heróis vira uma leitura direta de
// 2 valores (O(1)), em vez de varrer todas as partidas já jogadas.

// Nomes de heróis podem ter caracteres que o Firebase não aceita em
// chaves (. # $ [ ] /), então codificamos em base64 seguro pra URL.
function heroKey(name) {
    const b64 = btoa(unescape(encodeURIComponent(name)));
    return b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}

// Registra o resultado de um combate no contador separado.
// winnerNames/loserNames: listas de nomes de heróis (normalmente 1 de
// cada lado numa luta 1x1; podem ter mais de 1 em combates de equipe,
// caso em que só as vitórias/derrotas gerais são contadas — o confronto
// direto "A vs B" só é gravado quando é claramente 1 herói contra 1).
function recordHeroBattleResult(winnerNames, loserNames) {
    winnerNames = (winnerNames || []).filter(Boolean);
    loserNames = (loserNames || []).filter(Boolean);
    if (winnerNames.length === 0) return;

    const updates = {};

    winnerNames.forEach(name => {
        const k = heroKey(name);
        updates['heroStats/' + k + '/name'] = name;
    });
    loserNames.forEach(name => {
        const k = heroKey(name);
        updates['heroStats/' + k + '/name'] = name;
    });

    if (Object.keys(updates).length > 0) {
        db.ref().update(updates);
    }

    winnerNames.forEach(name => {
        db.ref('heroStats/' + heroKey(name) + '/wins').transaction(v => (v || 0) + 1);
    });
    loserNames.forEach(name => {
        db.ref('heroStats/' + heroKey(name) + '/losses').transaction(v => (v || 0) + 1);
    });

    if (winnerNames.length === 1 && loserNames.length === 1 && winnerNames[0] !== loserNames[0]) {
        const wKey = heroKey(winnerNames[0]);
        const lKey = heroKey(loserNames[0]);
        // IMPORTANTE: grava dos DOIS lados do confronto — as vitórias do
        // vencedor contra o perdedor E as derrotas do perdedor contra o
        // vencedor. Antes só gravava o lado do vencedor, então quando o
        // perdedor nunca tinha vencido esse confronto específico (em outra
        // partida), o confronto direto ficava sempre em 0x0 = 50%, mesmo
        // já tendo sido jogado várias vezes.
        db.ref('heroStats/' + wKey + '/vs/' + lKey + '/wins').transaction(v => (v || 0) + 1);
        db.ref('heroStats/' + wKey + '/vs/' + lKey + '/name').set(loserNames[0]);
        db.ref('heroStats/' + lKey + '/vs/' + wKey + '/losses').transaction(v => (v || 0) + 1);
        db.ref('heroStats/' + lKey + '/vs/' + wKey + '/name').set(winnerNames[0]);
    }

    // Invalida o cache local da tela "Heróis": assim, se alguém consultar as
    // estatísticas no meio de uma Melhor de 3 (depois só do 1º combate, por
    // exemplo), a busca já baixa os números atualizados na hora, em vez de
    // mostrar dados de antes desse combate.
    heroStatsCache = null;
}

// Lê direto do contador separado (poucas leituras rápidas, sem varrer partidas).
// Retorna:
//   source 'h2h'     -> existe histórico direto A x B (pctA/pctB somam 100, total = nº de jogos)
//   source 'general' -> nunca se enfrentaram: usa o aproveitamento GERAL de cada herói
//                       (genA/genB = { pct, games } ou null se o herói nunca jogou)
//   source 'none'    -> sem nenhum dado
async function getHeroHeadToHead(heroA, heroB) {
    if (!heroA || !heroB || heroA === heroB) {
        return { source: 'none', pctA: 50, pctB: 50, total: 0 };
    }

    const kA = heroKey(heroA);
    const kB = heroKey(heroB);

    const [snapABwins, snapBAwins, snapABlosses, snapBAlosses] = await Promise.all([
        db.ref('heroStats/' + kA + '/vs/' + kB + '/wins').once('value'),
        db.ref('heroStats/' + kB + '/vs/' + kA + '/wins').once('value'),
        db.ref('heroStats/' + kB + '/vs/' + kA + '/losses').once('value'),
        db.ref('heroStats/' + kA + '/vs/' + kB + '/losses').once('value')
    ]);

    // Usa o maior dos dois sinais possíveis pra cada lado: o próprio "wins"
    // contra o outro, ou o "losses" que o outro registrou contra ele —
    // cobre tanto partidas novas (grava os dois) quanto antigas (só
    // gravavam o lado do vencedor).
    const winsA = Math.max(snapABwins.val() || 0, snapABlosses.val() || 0);
    const winsB = Math.max(snapBAwins.val() || 0, snapBAlosses.val() || 0);
    const total = winsA + winsB;

    if (total > 0) {
        const pctA = Math.round((winsA / total) * 100);
        return { source: 'h2h', pctA, pctB: 100 - pctA, total, winsA, winsB };
    }

    // Nunca se enfrentaram: cai pro aproveitamento geral de cada herói.
    const [wA, lA, wB, lB] = await Promise.all([
        db.ref('heroStats/' + kA + '/wins').once('value'),
        db.ref('heroStats/' + kA + '/losses').once('value'),
        db.ref('heroStats/' + kB + '/wins').once('value'),
        db.ref('heroStats/' + kB + '/losses').once('value')
    ]);
    const mk = (w, l) => {
        const wins = w.val() || 0, losses = l.val() || 0, games = wins + losses;
        return games > 0 ? { pct: Math.round((wins / games) * 100), games } : null;
    };
    const genA = mk(wA, lA);
    const genB = mk(wB, lB);

    if (!genA && !genB) return { source: 'none', pctA: 50, pctB: 50, total: 0 };
    return { source: 'general', genA, genB, pctA: 50, pctB: 50, total: 0 };
}

// Mesma regra de cores do Ranking: verde (60%+), amarelo (45–59%),
// vermelho (abaixo de 45%) e cinza (sem dados).
function pctTone(pct) {
    if (pct === null || pct === undefined) return 'none';
    return pct >= 60 ? 'good' : (pct >= 45 ? 'mid' : 'bad');
}

// Cria (ou atualiza) o selo de porcentagem dentro do card do lutador.
// `main` é o número/símbolo grande; `sub` (opcional) é a legenda pequena;
// `pct` (opcional) define a cor do selo.
function renderMatchupOddsBadge(cardEl, main, sub, pct) {
    if (!cardEl) return;
    let badge = cardEl.querySelector('.matchup-odds-badge');
    if (!badge) {
        badge = document.createElement('div');
        cardEl.appendChild(badge);
    }
    badge.className = 'matchup-odds-badge odds-' + pctTone(pct);
    badge.innerText = '';
    const mainEl = document.createElement('span');
    mainEl.innerText = main;
    badge.appendChild(mainEl);
    if (sub) {
        const subEl = document.createElement('small');
        subEl.className = 'odds-sub';
        subEl.innerText = sub;
        badge.appendChild(subEl);
    }
}

// Nota discreta abaixo do confronto quando os dois heróis nunca se enfrentaram.
function setOddsNote(cardEl, show) {
    const row = cardEl && cardEl.parentElement;
    if (!row) return;
    let note = row.nextElementSibling;
    if (!note || !note.classList.contains('odds-note')) {
        if (!show) return;
        note = document.createElement('p');
        note.className = 'odds-note';
        row.insertAdjacentElement('afterend', note);
    }
    note.innerText = 'Sem embates desses personagens';
    note.style.display = show ? '' : 'none';
}

function plural(n, one, many) { return n + ' ' + (n === 1 ? one : many); }

// Calcula e exibe a porcentagem de vitória de cada lado dentro dos cards
// de dois lutadores 1x1, lendo do contador separado (rápido, não pesa
// conforme o site acumula partidas).
//  - Com confrontos diretos: "62%" + "8 jogos"
//  - Sem confrontos diretos: aproveitamento geral do herói + "geral · N jogos"
//  - Sem nenhum dado: "—" + "sem dados"
async function renderMatchupOdds(cardP1El, heroP1, cardP2El, heroP2) {
    if (!heroP1 || !heroP2) return;
    setOddsNote(cardP1El, false);
    renderMatchupOddsBadge(cardP1El, '...');
    renderMatchupOddsBadge(cardP2El, '...');
    const odds = await getHeroHeadToHead(heroP1.nome, heroP2.nome);

    if (odds.source === 'h2h') {
        const sub = plural(odds.total, 'jogo', 'jogos');
        renderMatchupOddsBadge(cardP1El, odds.pctA + '%', sub, odds.pctA);
        renderMatchupOddsBadge(cardP2El, odds.pctB + '%', sub, odds.pctB);
    } else if (odds.source === 'general') {
        setOddsNote(cardP1El, true);
        const show = (el, g) => g
            ? renderMatchupOddsBadge(el, g.pct + '%', 'geral · ' + plural(g.games, 'jogo', 'jogos'), g.pct)
            : renderMatchupOddsBadge(el, '—', 'sem dados');
        show(cardP1El, odds.genA);
        show(cardP2El, odds.genB);
    } else {
        renderMatchupOddsBadge(cardP1El, '—', 'sem dados');
        renderMatchupOddsBadge(cardP2El, '—', 'sem dados');
    }
}

// ============================================================
// TELA "HERÓIS": busca um herói e mostra contra quem ele costuma
// vencer/perder, olhando o contador leve (heroStats) inteiro de uma vez.
// ============================================================
// Como o heroStats cresce com o número de HERÓIS (fixo, ~60), não com o
// número de PARTIDAS, dá pra baixar a árvore inteira de uma vez só (é
// pequena) e fazer todos os cálculos localmente, sem nenhuma consulta
// extra ao Firebase por herói pesquisado.
let heroStatsCache = null;
let heroStatsCachePromise = null;

async function ensureHeroStatsCache(forceRefresh) {
    if (!forceRefresh && heroStatsCache) return heroStatsCache;
    if (!forceRefresh && heroStatsCachePromise) return heroStatsCachePromise;

    heroStatsCachePromise = db.ref('heroStats').once('value').then(snap => {
        heroStatsCache = snap.val() || {};
        heroStatsCachePromise = null;
        return heroStatsCache;
    });
    return heroStatsCachePromise;
}

function populateHeroDatalist() {
    const list = document.getElementById('hero-names-list');
    if (!list || list.children.length > 0) return; // já preenchido
    const frag = document.createDocumentFragment();
    PERSONAGENS.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.nome;
        frag.appendChild(opt);
    });
    list.appendChild(frag);
}

// Classifica uma porcentagem de vitória numa categoria (igual referência).
function classifyMatchup(pct, total) {
    if (total === 0) return { key: 'unknown', label: 'Desconhecido' };
    if (pct >= 65) return { key: 'favoured', label: 'Ganha contra' };
    if (pct >= 55) return { key: 'slightly-favoured', label: 'Levemente Favorito' };
    if (pct >= 45) return { key: 'balanced', label: 'Equilibrado' };
    if (pct >= 35) return { key: 'slightly-losing', label: 'Levemente Perdendo' };
    if (pct >= 25) return { key: 'losing', label: 'Perdendo' };
    return { key: 'nightmare', label: 'Perde contra' };
}

// Monta, pra um herói escolhido, o confronto contra TODOS os outros
// heróis da lista de personagens — usando só o cache já baixado.
function computeHeroMatchups(heroName) {
    const heroKeyX = heroKey(heroName);
    const heroNode = (heroStatsCache && heroStatsCache[heroKeyX]) || {};

    return PERSONAGENS
        .filter(p => p.nome !== heroName)
        .map(p => {
            const keyY = heroKey(p.nome);
            const oppNode = (heroStatsCache && heroStatsCache[keyY]) || {};
            // Mesma lógica robusta do getHeroHeadToHead: usa o maior entre o
            // "wins" do próprio lado e o "losses" que o outro lado gravou.
            const winsX = Math.max(
                (heroNode.vs && heroNode.vs[keyY] && heroNode.vs[keyY].wins) || 0,
                (oppNode.vs && oppNode.vs[heroKeyX] && oppNode.vs[heroKeyX].losses) || 0
            );
            const winsY = Math.max(
                (oppNode.vs && oppNode.vs[heroKeyX] && oppNode.vs[heroKeyX].wins) || 0,
                (heroNode.vs && heroNode.vs[keyY] && heroNode.vs[keyY].losses) || 0
            );
            const total = winsX + winsY;
            const pct = total === 0 ? 50 : Math.round((winsX / total) * 100);
            return {
                hero: p,
                winsX,
                winsY,
                total,
                pct,
                bucket: classifyMatchup(pct, total)
            };
        });
}

async function renderHeroStatsResults(heroName) {
    const hero = PERSONAGENS.find(p => p.nome.toLowerCase() === heroName.trim().toLowerCase());
    const errorEl = document.getElementById('hero-search-error');
    const summaryEl = document.getElementById('hero-stats-summary');
    const resultsEl = document.getElementById('hero-stats-results');
    const loadingEl = document.getElementById('hero-stats-loading');

    if (!hero) {
        errorEl.style.display = 'block';
        errorEl.innerText = '⚠️ Herói não encontrado. Escolha um nome da lista.';
        summaryEl.style.display = 'none';
        resultsEl.innerHTML = '';
        return;
    }
    errorEl.style.display = 'none';

    resultsEl.innerHTML = '';
    summaryEl.style.display = 'none';
    loadingEl.style.display = 'block';

    await ensureHeroStatsCache(false);
    loadingEl.style.display = 'none';

    const heroKeyX = heroKey(hero.nome);
    const heroNode = (heroStatsCache && heroStatsCache[heroKeyX]) || {};
    const overallWins = heroNode.wins || 0;
    const overallLosses = heroNode.losses || 0;
    const overallTotal = overallWins + overallLosses;
    const overallPct = overallTotal === 0 ? null : Math.round((overallWins / overallTotal) * 100);

    summaryEl.style.display = 'flex';
    summaryEl.className = 'hero-stats-summary-card';
    summaryEl.innerHTML = '';
    if (hero.img) {
        const img = document.createElement('img');
        img.src = hero.img;
        img.alt = hero.nome;
        summaryEl.appendChild(img);
    }
    const textWrap = document.createElement('div');
    const nameEl = document.createElement('div');
    nameEl.className = 'hero-stats-summary-name';
    nameEl.innerText = hero.nome;
    textWrap.appendChild(nameEl);
    const recordEl = document.createElement('div');
    recordEl.className = 'hero-stats-summary-record';
    recordEl.innerText = overallTotal === 0
        ? 'Ainda sem partidas registradas'
        : overallWins + ' vitórias, ' + overallLosses + ' derrotas no total (' + overallPct + '% de vitória geral)';
    textWrap.appendChild(recordEl);
    summaryEl.appendChild(textWrap);

    const matchups = computeHeroMatchups(hero.nome);

    const order = ['favoured', 'slightly-favoured', 'balanced', 'slightly-losing', 'losing', 'nightmare', 'unknown'];
    const grouped = {};
    order.forEach(k => grouped[k] = []);
    matchups.forEach(m => grouped[m.bucket.key].push(m));

    // Dentro de cada categoria, mostra primeiro quem tem mais jogos (mais confiável)
    order.forEach(k => grouped[k].sort((a, b) => b.total - a.total));

    resultsEl.innerHTML = '';
    order.forEach(key => {
        const items = grouped[key];
        if (items.length === 0) return;

        const section = document.createElement('div');
        section.className = 'hero-stat-section ' + key;

        const label = document.createElement('span');
        label.className = 'hero-stat-section-label';
        label.innerText = items[0].bucket.label;
        section.appendChild(label);

        const grid = document.createElement('div');
        grid.className = 'hero-stat-grid';

        items.forEach(m => {
            const card = document.createElement('div');
            card.className = 'hero-stat-card';

            if (m.hero.img) {
                const img = document.createElement('img');
                img.src = m.hero.img;
                img.alt = m.hero.nome;
                card.appendChild(img);
            }

            const nameTag = document.createElement('div');
            nameTag.className = 'hero-stat-card-name';
            nameTag.innerText = m.hero.nome;
            card.appendChild(nameTag);

            const recordTag = document.createElement('div');
            recordTag.className = 'hero-stat-card-record';
            recordTag.innerText = m.total + ' jogo' + (m.total === 1 ? '' : 's');
            card.appendChild(recordTag);

            const pctTag = document.createElement('div');
            pctTag.className = 'hero-stat-card-pct';
            pctTag.innerText = m.pct + '%';
            card.appendChild(pctTag);

            grid.appendChild(card);
        });

        section.appendChild(grid);
        resultsEl.appendChild(section);
    });
}

function goToHeroStatsScreen() {
    showScreen('screen-hero-stats');
    populateHeroDatalist();
    document.getElementById('hero-search-input').value = '';
    document.getElementById('hero-search-error').style.display = 'none';
    document.getElementById('hero-stats-summary').style.display = 'none';
    document.getElementById('hero-stats-results').innerHTML = '';
    ensureHeroStatsCache(false); // já começa a baixar em segundo plano
}

// ============================================================
// RANKING DE HERÓIS (todos os heróis, do mais forte ao mais fraco)
// ============================================================
// Usa o mesmo contador leve (heroStats) da tela Heróis. A ordem é pelo
// aproveitamento AJUSTADO: cada herói começa com RANK_PRIOR_GAMES jogos
// "imaginários" a 50%, para que 1 vitória em 1 jogo não passe à frente de
// 20 vitórias em 25. Heróis sem nenhum jogo ficam no final.
const RANK_PRIOR_GAMES = 4;
let heroRankRows = null;

function computeHeroRanking(stats) {
    const rows = PERSONAGENS.map(p => {
        const node = (stats && stats[heroKey(p.nome)]) || {};
        const wins = node.wins || 0;
        const losses = node.losses || 0;
        const games = wins + losses;
        return {
            hero: p, wins, losses, games,
            pct: games ? Math.round((wins / games) * 100) : null,
            score: (wins + RANK_PRIOR_GAMES * 0.5) / (games + RANK_PRIOR_GAMES)
        };
    });
    rows.sort((a, b) =>
        (b.games > 0) - (a.games > 0) ||
        b.score - a.score || b.wins - a.wins || a.losses - b.losses ||
        a.hero.nome.localeCompare(b.hero.nome, 'pt-BR'));
    rows.forEach((r, i) => { r.rank = i + 1; });
    return rows;
}

function renderHeroRank() {
    const list = document.getElementById('rank-list');
    if (!list || !heroRankRows) return;
    const q = document.getElementById('rank-filter').value.trim().toLowerCase();
    const medals = { 1: '🥇', 2: '🥈', 3: '🥉' };
    const frag = document.createDocumentFragment();

    heroRankRows.forEach(r => {
        if (q && !r.hero.nome.toLowerCase().includes(q)) return;
        const row = document.createElement('div');
        row.className = 'rank-row' + (r.games === 0 ? ' nogames' : (r.rank <= 3 ? ' r' + r.rank : ''));
        row.onclick = () => openHeroFromRank(r.hero.nome);

        const pos = document.createElement('div');
        pos.className = 'rank-pos';
        pos.innerText = (r.games > 0 && medals[r.rank]) || ('#' + r.rank);
        row.appendChild(pos);

        if (r.hero.img) {
            const img = document.createElement('img');
            img.className = 'rank-img';
            img.loading = 'lazy';
            img.decoding = 'async';
            img.alt = '';
            img.src = r.hero.img;
            row.appendChild(img);
        }

        const info = document.createElement('div');
        info.className = 'rank-info';
        const name = document.createElement('div');
        name.className = 'rank-name';
        name.innerText = r.hero.nome;
        const rec = document.createElement('div');
        rec.className = 'rank-record';
        rec.innerText = r.games ? (r.wins + 'V · ' + r.losses + 'D · ' + r.games + (r.games === 1 ? ' jogo' : ' jogos')) : 'sem jogos';
        info.appendChild(name);
        info.appendChild(rec);
        row.appendChild(info);

        const pct = document.createElement('div');
        pct.className = 'rank-pct';
        if (r.games) {
            const color = r.pct >= 60 ? '#2ecc71' : (r.pct >= 45 ? '#f1c40f' : '#ff4757');
            pct.style.color = color;
            pct.innerText = r.pct + '%';
            const bar = document.createElement('div');
            bar.className = 'rank-bar';
            const fill = document.createElement('i');
            fill.style.width = r.pct + '%';
            fill.style.background = color;
            bar.appendChild(fill);
            pct.appendChild(bar);
        } else {
            pct.innerText = '—';
        }
        row.appendChild(pct);
        frag.appendChild(row);
    });

    list.innerHTML = '';
    if (!frag.childNodes.length) {
        list.innerHTML = '<p class="waiting-text">Nenhum herói encontrado.</p>';
        return;
    }
    list.appendChild(frag);
}

async function goToHeroRank() {
    showScreen('screen-hero-rank');
    document.getElementById('rank-filter').value = '';
    const loading = document.getElementById('rank-loading');

    // Se já tem uma versão em memória, mostra na hora e atualiza em seguida.
    if (heroRankRows) renderHeroRank(); else loading.style.display = 'block';
    try {
        const stats = await ensureHeroStatsCache(true);
        heroRankRows = computeHeroRanking(stats);
    } catch (e) {
        if (!heroRankRows) {
            loading.style.display = 'none';
            document.getElementById('rank-list').innerHTML = '<p class="waiting-text">Não foi possível carregar o ranking. Verifique sua internet.</p>';
            return;
        }
    }
    loading.style.display = 'none';
    renderHeroRank();
}

function openHeroFromRank(heroName) {
    goToHeroStatsScreen();
    document.getElementById('hero-search-input').value = heroName;
    renderHeroStatsResults(heroName);
}

document.querySelectorAll('.js-go-rank').forEach(btn => btn.addEventListener('click', goToHeroRank));
document.getElementById('btn-rank-back')?.addEventListener('click', () => showScreen('screen-home'));
document.getElementById('rank-filter')?.addEventListener('input', renderHeroRank);

// Vibração curtinha ao tocar (só onde o aparelho suporta) — dá retorno
// imediato nos botões e cartas.
document.addEventListener('click', (e) => {
    if (navigator.vibrate && e.target.closest('button:not(:disabled), .card, .name-claim-item, .rank-row')) {
        navigator.vibrate(8);
    }
}, { passive: true });

// ============================================================
// CONFRONTOS: escolha 2 heróis e veja a porcentagem de cada um
// ============================================================
// Usa os mesmos dados do site (heroStats). Com confrontos diretos mostra a
// porcentagem entre os dois; sem confrontos, mostra o desempenho geral de
// cada um. Aceita link direto: ?h1=alice&h2=robin-hood
let muPicks = [null, null];   // nomes dos heróis escolhidos
let muPickingSlot = 0;
let muRenderToken = 0;

function heroSlug(name) {
    return String(name).normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function findHeroBySlugParam(value) {
    if (!value) return null;
    const s = heroSlug(value);
    if (!s) return null;
    return PERSONAGENS.find(p => heroSlug(p.nome) === s)
        || PERSONAGENS.find(p => heroSlug(p.nome).startsWith(s))
        || PERSONAGENS.find(p => heroSlug(p.nome).includes(s))
        || null;
}

function goToMatchup(name1, name2) {
    showScreen('screen-matchup');
    if (name1 !== undefined || name2 !== undefined) muPicks = [name1 || null, name2 || null];
    renderMatchupSlots();
    renderMatchupResult();
}

function renderMatchupSlots() {
    [0, 1].forEach(i => {
        const slot = document.getElementById('mu-slot-' + (i + 1));
        if (!slot) return;
        slot.innerHTML = '';
        const hero = muPicks[i] ? PERSONAGENS.find(p => p.nome === muPicks[i]) : null;
        slot.classList.toggle('filled', !!hero);
        if (hero) {
            if (hero.img) {
                const img = document.createElement('img');
                img.src = hero.img;
                img.alt = hero.nome;
                img.loading = 'lazy';
                img.decoding = 'async';
                slot.appendChild(img);
            }
            const name = document.createElement('span');
            name.innerText = hero.nome;
            slot.appendChild(name);
        } else {
            const plus = document.createElement('span');
            plus.className = 'mu-plus';
            plus.innerText = '+';
            const txt = document.createElement('span');
            txt.innerText = 'Escolher herói ' + (i + 1);
            slot.appendChild(plus);
            slot.appendChild(txt);
        }
    });
}

function openMatchupPicker(slotNumber) {
    muPickingSlot = slotNumber;
    const filter = document.getElementById('mu-picker-filter');
    filter.value = '';
    renderMatchupPickerList();
    document.getElementById('mu-picker').style.display = 'flex';
}

function closeMatchupPicker() {
    document.getElementById('mu-picker').style.display = 'none';
}

function renderMatchupPickerList() {
    const list = document.getElementById('mu-picker-list');
    const q = document.getElementById('mu-picker-filter').value.trim().toLowerCase();
    const frag = document.createDocumentFragment();
    PERSONAGENS.slice().sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR')).forEach(p => {
        if (q && !p.nome.toLowerCase().includes(q)) return;
        const row = document.createElement('div');
        row.className = 'rank-row';
        row.onclick = () => {
            muPicks[muPickingSlot - 1] = p.nome;
            closeMatchupPicker();
            renderMatchupSlots();
            renderMatchupResult();
        };
        if (p.img) {
            const img = document.createElement('img');
            img.className = 'rank-img';
            img.loading = 'lazy';
            img.decoding = 'async';
            img.alt = '';
            img.src = p.img;
            row.appendChild(img);
        }
        const info = document.createElement('div');
        info.className = 'rank-info';
        const name = document.createElement('div');
        name.className = 'rank-name';
        name.innerText = p.nome;
        info.appendChild(name);
        row.appendChild(info);
        frag.appendChild(row);
    });
    list.innerHTML = '';
    if (!frag.childNodes.length) list.innerHTML = '<p class="waiting-text">Nenhum herói encontrado.</p>';
    else list.appendChild(frag);
}

// Monta o resultado: duas caixas coloridas (esquerda = herói 1, direita = herói 2)
function buildMatchupResult(left, right, note, split) {
    const wrap = document.createElement('div');

    const grid = document.createElement('div');
    grid.className = 'mu-pcts';
    [left, right].forEach(side => {
        const box = document.createElement('div');
        box.className = 'mu-pct mu-' + pctTone(side.pct);
        const big = document.createElement('b');
        big.innerText = side.pct === null ? '—' : side.pct + '%';
        const small = document.createElement('small');
        small.innerText = side.sub || '';
        box.appendChild(big);
        box.appendChild(small);
        grid.appendChild(box);
    });
    wrap.appendChild(grid);

    if (split) {
        const bar = document.createElement('div');
        bar.className = 'mu-bar';
        [left, right].forEach(side => {
            const seg = document.createElement('i');
            seg.style.width = side.pct + '%';
            seg.className = 'mu-seg-' + pctTone(side.pct);
            bar.appendChild(seg);
        });
        wrap.appendChild(bar);
    }

    if (note) {
        const p = document.createElement('p');
        p.className = 'odds-note';
        p.innerText = note;
        wrap.appendChild(p);
    }
    return wrap;
}

async function renderMatchupResult() {
    const box = document.getElementById('mu-result');
    if (!box) return;
    const [a, b] = muPicks;
    const token = ++muRenderToken;
    box.innerHTML = '';

    if (!a || !b) {
        box.innerHTML = '<p class="waiting-text">Escolha os dois heróis para ver a porcentagem.</p>';
        return;
    }
    if (a === b) {
        box.appendChild(buildMatchupResult({ pct: 50 }, { pct: 50 }, 'Mesmo herói: confronto espelho', true));
        return;
    }

    box.innerHTML = '<p class="waiting-text">Calculando...</p>';
    let odds;
    try {
        odds = await getHeroHeadToHead(a, b);
    } catch (e) {
        if (token === muRenderToken) box.innerHTML = '<p class="waiting-text">Não foi possível carregar. Verifique sua internet.</p>';
        return;
    }
    if (token !== muRenderToken) return; // o usuário já trocou de herói

    box.innerHTML = '';
    const games = n => n + (n === 1 ? ' jogo' : ' jogos');
    if (odds.source === 'h2h') {
        box.appendChild(buildMatchupResult(
            { pct: odds.pctA, sub: odds.winsA + (odds.winsA === 1 ? ' vitória' : ' vitórias') },
            { pct: odds.pctB, sub: odds.winsB + (odds.winsB === 1 ? ' vitória' : ' vitórias') },
            games(odds.total) + ' entre eles', true));
    } else if (odds.source === 'general') {
        const side = g => g ? { pct: g.pct, sub: 'geral · ' + games(g.games) } : { pct: null, sub: 'sem dados' };
        box.appendChild(buildMatchupResult(side(odds.genA), side(odds.genB), 'Sem embates desses personagens', false));
    } else {
        box.appendChild(buildMatchupResult({ pct: null, sub: 'sem dados' }, { pct: null, sub: 'sem dados' }, 'Sem embates desses personagens', false));
    }
}

['mu-slot-1', 'mu-slot-2'].forEach((id, i) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('click', () => openMatchupPicker(i + 1));
    el.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openMatchupPicker(i + 1); } });
});
document.getElementById('mu-picker-filter')?.addEventListener('input', renderMatchupPickerList);
document.getElementById('btn-mu-picker-close')?.addEventListener('click', closeMatchupPicker);
document.getElementById('mu-picker')?.addEventListener('click', (e) => { if (e.target.id === 'mu-picker') closeMatchupPicker(); });
document.getElementById('btn-go-matchup')?.addEventListener('click', () => goToMatchup());
document.getElementById('btn-mu-back')?.addEventListener('click', () => {
    window.history.replaceState(window.history.state, '', window.location.pathname);
    showScreen('screen-tools');
});
document.getElementById('btn-mu-swap')?.addEventListener('click', () => {
    muPicks = [muPicks[1], muPicks[0]];
    renderMatchupSlots();
    renderMatchupResult();
});
document.getElementById('btn-mu-copy')?.addEventListener('click', () => {
    const params = new URLSearchParams();
    if (muPicks[0]) params.set('h1', heroSlug(muPicks[0]));
    if (muPicks[1]) params.set('h2', heroSlug(muPicks[1]));
    const link = window.location.origin + window.location.pathname + '?' + params.toString();
    const btn = document.getElementById('btn-mu-copy');
    const original = btn.innerText;
    navigator.clipboard.writeText(link).then(() => {
        btn.innerText = 'Copiado! ✅';
        setTimeout(() => { btn.innerText = original; }, 1500);
    }).catch(() => { window.prompt('Copie o link:', link); });
});

// ============================================================
// VERIFICAR ESTATÍSTICAS: compara o contador (heroStats) com o histórico
// ============================================================
// O histórico do feed (posts) é a fonte que dá pra conferir a olho. Aqui
// cada combate de uma Melhor de 3 conta como 1 jogo pros dois heróis (o
// vencedor e o perdedor daquele combate); nos demais modos vale o resultado
// de cada participante. Se algum herói estiver com números diferentes, a
// tela mostra a diferença e permite corrigir.
let auditAgg = null;

function aggregateHeroStatsFromPosts(posts) {
    const agg = {};
    const ensure = n => agg[n] || (agg[n] = { wins: 0, losses: 0, vs: {} });
    const bump = (n, f) => { if (n) ensure(n)[f]++; };
    const bumpVs = (w, l) => {
        if (!w || !l || w === l) return;
        const a = ensure(w), b = ensure(l);
        if (!a.vs[l]) a.vs[l] = { wins: 0, losses: 0 };
        if (!b.vs[w]) b.vs[w] = { wins: 0, losses: 0 };
        a.vs[l].wins++;
        b.vs[w].losses++;
    };
    const combatResult = (c, participants) => {
        if (!c || !c.p1Hero || !c.p2Hero) return null;
        if (c.p1Hero.includes(',') || c.p2Hero.includes(',') || c.p1Hero.includes(' & ') || c.p2Hero.includes(' & ')) return null;
        if (c.p1Hero === c.p2Hero) return null;
        let side = null;
        if (c.winnerName != null && participants[0] && participants[0].name === c.winnerName) side = 1;
        else if (c.winnerName != null && participants[1] && participants[1].name === c.winnerName) side = 2;
        else if (c.winner === 1 || c.winner === 2) side = c.winner;
        else return null;
        return side === 1 ? { winner: c.p1Hero, loser: c.p2Hero } : { winner: c.p2Hero, loser: c.p1Hero };
    };

    Object.values(posts || {}).forEach(post => {
        const participants = post.participants || [];
        const combats = post.combats || [];
        if (post.mode === 'bestof3') {
            combats.forEach(c => {
                const r = combatResult(c, participants);
                if (!r) return;
                bump(r.winner, 'wins');
                bump(r.loser, 'losses');
                bumpVs(r.winner, r.loser);
            });
        } else {
            participants.forEach(p => { if (p && p.hero) bump(p.hero, p.won ? 'wins' : 'losses'); });
            if (combats.length === 1) {
                const r = combatResult(combats[0], participants);
                if (r) bumpVs(r.winner, r.loser);
            }
        }
    });
    return agg;
}

async function runStatsAudit() {
    const out = document.getElementById('audit-result');
    const fixBtn = document.getElementById('btn-audit-fix');
    fixBtn.style.display = 'none';
    out.innerHTML = '<p class="waiting-text">Verificando o histórico...</p>';
    try {
        const [postsSnap, statsSnap] = await Promise.all([
            db.ref('posts').once('value'),
            db.ref('heroStats').once('value')
        ]);
        const posts = postsSnap.val() || {};
        const stats = statsSnap.val() || {};
        auditAgg = aggregateHeroStatsFromPosts(posts);

        const counter = {};
        Object.values(stats).forEach(n => {
            if (n && n.name) counter[n.name] = { wins: n.wins || 0, losses: n.losses || 0 };
        });

        const names = new Set([...Object.keys(counter), ...Object.keys(auditAgg)]);
        const diffs = [];
        names.forEach(name => {
            const c = counter[name] || { wins: 0, losses: 0 };
            const a = auditAgg[name] || { wins: 0, losses: 0 };
            if (c.wins !== a.wins || c.losses !== a.losses) {
                diffs.push({ name, c, a, delta: (c.wins + c.losses) - (a.wins + a.losses) });
            }
        });
        diffs.sort((x, y) => Math.abs(y.delta) - Math.abs(x.delta) || x.name.localeCompare(y.name, 'pt-BR'));

        out.innerHTML = '';
        const summary = document.createElement('p');
        summary.className = 'audit-summary';
        summary.innerText = Object.keys(posts).length + ' partidas no histórico · ' + names.size + ' heróis conferidos';
        out.appendChild(summary);

        if (!diffs.length) {
            const ok = document.createElement('p');
            ok.className = 'waiting-text';
            ok.innerText = '✅ O contador está igual ao histórico do feed.';
            out.appendChild(ok);
            return;
        }

        const warn = document.createElement('p');
        warn.className = 'audit-summary';
        warn.innerText = '⚠️ ' + diffs.length + (diffs.length === 1 ? ' herói está' : ' heróis estão') + ' com números diferentes:';
        out.appendChild(warn);

        const fmt = s => s.wins + 'V · ' + s.losses + 'D (' + (s.wins + s.losses) + ' jogos)';
        diffs.slice(0, 60).forEach(d => {
            const row = document.createElement('div');
            row.className = 'audit-row';
            const nm = document.createElement('b');
            nm.innerText = d.name;
            const l1 = document.createElement('div');
            l1.innerText = 'Contador: ' + fmt(d.c);
            const l2 = document.createElement('div');
            l2.innerText = 'Histórico: ' + fmt(d.a);
            row.appendChild(nm);
            row.appendChild(l1);
            row.appendChild(l2);
            out.appendChild(row);
        });
        if (diffs.length > 60) {
            const more = document.createElement('p');
            more.className = 'odds-note';
            more.innerText = '... e mais ' + (diffs.length - 60) + ' heróis.';
            out.appendChild(more);
        }
        fixBtn.style.display = 'block';
    } catch (e) {
        out.innerHTML = '<p class="waiting-text">Não foi possível verificar. Confira a internet e as permissões do Firebase.</p>';
    }
}

async function applyStatsFix() {
    if (!auditAgg) return;
    const pass = window.prompt('Digite a senha para corrigir as estatísticas:');
    if (pass === null) return;
    if (pass !== 'bolas') { alert('Senha incorreta. Nada foi alterado.'); return; }
    if (!window.confirm('Os contadores serão substituídos pelos números do histórico do feed.\n\nCombates de partidas que nunca viraram post (ou posts apagados) deixam de contar. Continuar?')) return;

    const tree = {};
    Object.entries(auditAgg).forEach(([name, s]) => {
        const node = { name, wins: s.wins, losses: s.losses };
        const vs = {};
        Object.entries(s.vs).forEach(([opp, r]) => { vs[heroKey(opp)] = { name: opp, wins: r.wins, losses: r.losses }; });
        if (Object.keys(vs).length) node.vs = vs;
        tree[heroKey(name)] = node;
    });
    try {
        await db.ref('heroStats').set(tree);
        heroStatsCache = null;
        heroRankRows = null;
        alert('Estatísticas corrigidas!');
        runStatsAudit();
    } catch (e) {
        alert('Não foi possível gravar a correção.');
    }
}

document.getElementById('btn-go-audit')?.addEventListener('click', () => {
    showScreen('screen-stats-audit');
    document.getElementById('audit-result').innerHTML = '';
    document.getElementById('btn-audit-fix').style.display = 'none';
});
document.getElementById('btn-audit-run')?.addEventListener('click', runStatsAudit);
document.getElementById('btn-audit-fix')?.addEventListener('click', applyStatsFix);
document.getElementById('btn-audit-back')?.addEventListener('click', () => showScreen('screen-tools'));

// ============================================================
// MIGRAÇÃO ÚNICA: preenche o contador separado com as partidas que já
// aconteceram e estão salvas no feed (posts). Roda sozinha, uma única
// vez, na primeira vez que qualquer pessoa abrir o site depois desta
// atualização — usa uma trava (transaction) pra garantir que só um
// dispositivo faça a migração, mesmo que várias pessoas abram o site
// ao mesmo tempo. Depois disso, cada partida nova já atualiza o
// contador na hora (recordHeroBattleResult), sem precisar migrar de novo.
async function runHeroStatsMigrationIfNeeded() {
    try {
        const flagRef = db.ref('migrations/heroStatsV1Done');
        const already = await flagRef.once('value');
        if (already.val()) return;

        const lock = await flagRef.transaction(current => current ? undefined : 'running');
        if (!lock.committed || lock.snapshot.val() !== 'running') return;

        const postsSnap = await db.ref('posts').once('value');
        const posts = postsSnap.val() || {};

        // Agrega tudo em memória primeiro, pra gravar no Firebase de uma vez só
        const agg = {}; // nome do herói -> { wins, losses, vs: { nomeAdversario: vitórias } }
        function bump(name, field) {
            if (!agg[name]) agg[name] = { wins: 0, losses: 0, vs: {} };
            agg[name][field]++;
        }

        Object.values(posts).forEach(post => {
            const participants = post.participants || [];

            // Vitórias/derrotas gerais: usa os participantes de qualquer modo
            // (single, melhor de 3, equipe, sorteio rápido e battle royale).
            participants.forEach(p => {
                if (!p || !p.hero) return;
                bump(p.hero, p.won ? 'wins' : 'losses');
            });

            // Confronto direto (vs): só combates realmente 1 herói contra 1.
            (post.combats || []).forEach(c => {
                if (!c.p1Hero || !c.p2Hero) return;
                if (c.p1Hero.includes(',') || c.p2Hero.includes(',')) return;
                if (c.p1Hero === c.p2Hero) return;

                let winningHero = null;
                let losingHero = null;
                if (participants[0] && participants[0].name === c.winnerName) {
                    winningHero = c.p1Hero;
                    losingHero = c.p2Hero;
                } else if (participants[1] && participants[1].name === c.winnerName) {
                    winningHero = c.p2Hero;
                    losingHero = c.p1Hero;
                } else {
                    return;
                }

                if (!agg[winningHero]) agg[winningHero] = { wins: 0, losses: 0, vs: {} };
                agg[winningHero].vs[losingHero] = (agg[winningHero].vs[losingHero] || 0) + 1;
            });
        });

        const updates = {};
        Object.entries(agg).forEach(([heroName, stats]) => {
            const k = heroKey(heroName);
            updates['heroStats/' + k + '/name'] = heroName;
            updates['heroStats/' + k + '/wins'] = stats.wins;
            updates['heroStats/' + k + '/losses'] = stats.losses;
            Object.entries(stats.vs).forEach(([oppName, wins]) => {
                const ok = heroKey(oppName);
                updates['heroStats/' + k + '/vs/' + ok + '/wins'] = wins;
                updates['heroStats/' + k + '/vs/' + ok + '/name'] = oppName;
            });
        });

        if (Object.keys(updates).length > 0) {
            await db.ref().update(updates);
        }

        await flagRef.set(true);
    } catch (e) {
        // Se algo falhar (ex: sem permissão), não trava o site — só não migra agora.
        console.warn('Migração de heroStats não concluída:', e);
        db.ref('migrations/heroStatsV1Done').transaction(v => v === 'running' ? null : v).catch(() => {});
    }
}

// ============================================================
// MIGRAÇÃO V2: corrige a contagem de vitórias/derrotas da Melhor de 3.
// ------------------------------------------------------------
// A migração V1 (acima) e o post do feed só guardam, pra cada jogador,
// o herói FINAL da série (post.participants). Numa melhor de 3, isso faz
// cada série contar como "1 vitória/1 derrota" no total geral de um herói,
// mesmo quando ele venceu 2 combates diferentes (ou usou mais de 1 herói
// ao longo da série). Esta migração refaz o total geral (wins/losses) e o
// confronto direto (vs) usando o registro round a round (post.combats),
// que é o que realmente aconteceu em cada combate da série. Roda uma
// única vez (nova trava, independente da V1) e RECALCULA os números do
// zero a partir de todas as partidas já postadas — corrigindo o que a
// migração antiga (e partidas antigas) deixaram errado.
async function runHeroStatsMigrationV3IfNeeded() {
    try {
        const flagRef = db.ref('migrations/heroStatsV3Done');
        const already = await flagRef.once('value');
        if (already.val()) return;

        const lock = await flagRef.transaction(current => current ? undefined : 'running');
        if (!lock.committed || lock.snapshot.val() !== 'running') return;

        const postsSnap = await db.ref('posts').once('value');
        const posts = postsSnap.val() || {};

        const agg = {}; // nome do herói -> { wins, losses, vs: { nomeAdversario: vitórias } }
        function bump(name, field) {
            if (!name) return;
            if (!agg[name]) agg[name] = { wins: 0, losses: 0, vs: {} };
            agg[name][field]++;
        }
        function bumpVs(winner, loser) {
            if (!winner || !loser || winner === loser) return;
            if (!agg[winner]) agg[winner] = { wins: 0, losses: 0, vs: {} };
            agg[winner].vs[loser] = (agg[winner].vs[loser] || 0) + 1;
        }

        // Extrai o herói vencedor/perdedor de UM combate individual (1 herói
        // contra 1), usando participants pra descobrir de que lado (p1/p2)
        // veio a vitória. Ignora combates de equipe (heróis juntados com
        // ", " ou " & ") e combates sem os dois lados definidos.
        function combatResult(c, participants) {
            if (!c || !c.p1Hero || !c.p2Hero) return null;
            if (c.p1Hero.includes(',') || c.p2Hero.includes(',')) return null;
            if (c.p1Hero.includes(' & ') || c.p2Hero.includes(' & ')) return null;
            if (c.p1Hero === c.p2Hero) return null;

            let side = null;
            if (c.winnerName != null && participants[0] && participants[0].name === c.winnerName) side = 1;
            else if (c.winnerName != null && participants[1] && participants[1].name === c.winnerName) side = 2;
            else if (c.winner === 1 || c.winner === 2) side = c.winner;
            else return null;

            return side === 1
                ? { winner: c.p1Hero, loser: c.p2Hero }
                : { winner: c.p2Hero, loser: c.p1Hero };
        }

        Object.values(posts).forEach(post => {
            const participants = post.participants || [];
            const combats = post.combats || [];

            if (post.mode === 'bestof3') {
                // Cada combate da série conta separadamente pro total geral.
                // Se a série foi finalizada sem nenhum combate jogado (ex:
                // encerrada logo de cara como empate), não há nada a somar.
                combats.forEach(c => {
                    const r = combatResult(c, participants);
                    if (!r) return;
                    bump(r.winner, 'wins');
                    bump(r.loser, 'losses');
                    bumpVs(r.winner, r.loser);
                });
            } else {
                // Modos com 1 combate por post (single, equipe, sorteio
                // rápido): os participantes já refletem o resultado
                // exato daquele único combate.
                participants.forEach(p => {
                    if (!p || !p.hero) return;
                    bump(p.hero, p.won ? 'wins' : 'losses');
                });
                if (combats.length === 1) {
                    const r = combatResult(combats[0], participants);
                    if (r) bumpVs(r.winner, r.loser);
                }
            }
        });

        const updates = {};
        Object.entries(agg).forEach(([heroName, stats]) => {
            const k = heroKey(heroName);
            updates['heroStats/' + k + '/name'] = heroName;
            updates['heroStats/' + k + '/wins'] = stats.wins;
            updates['heroStats/' + k + '/losses'] = stats.losses;
            Object.entries(stats.vs).forEach(([oppName, wins]) => {
                const ok = heroKey(oppName);
                updates['heroStats/' + k + '/vs/' + ok + '/wins'] = wins;
                updates['heroStats/' + k + '/vs/' + ok + '/name'] = oppName;
            });
        });

        if (Object.keys(updates).length > 0) {
            await db.ref().update(updates);
        }

        await flagRef.set(true);
        heroStatsCache = null; // força recarregar o cache com os números corrigidos
    } catch (e) {
        console.warn('Migração V2 de heroStats não concluída:', e);
        db.ref('migrations/heroStatsV3Done').transaction(v => v === 'running' ? null : v).catch(() => {});
    }
}

// ============================================================
// MIGRAÇÃO V4: corrige o confronto direto (vs) que só gravava o lado de
// quem VENCIA, nunca o lado de quem PERDIA.
// ------------------------------------------------------------
// heroStats/{herói}/vs/{adversário}/wins só era gravado pro VENCEDOR do
// confronto — o perdedor nunca tinha nada gravado sobre aquele confronto
// específico (só o nome do adversário, sem número). Resultado: até um
// herói jogar contra o mesmo adversário e VENCER pelo menos uma vez, o
// confronto direto sempre aparecia como 0 x 0 = 50%, mesmo já tendo sido
// jogado várias vezes (e sempre com o mesmo lado ganhando). Esta migração
// recalcula o confronto direto do zero, gravando os dois lados (vitórias
// de quem venceu E derrotas de quem perdeu), pra ficar completo mesmo que
// um dos lados nunca tenha vencido esse confronto específico.
async function runHeroStatsMigrationV4IfNeeded() {
    try {
        const flagRef = db.ref('migrations/heroStatsV4Done');
        const already = await flagRef.once('value');
        if (already.val()) return;

        const lock = await flagRef.transaction(current => current ? undefined : 'running');
        if (!lock.committed || lock.snapshot.val() !== 'running') return;

        const postsSnap = await db.ref('posts').once('value');
        const posts = postsSnap.val() || {};

        const agg = {}; // nome do herói -> { wins, losses, vs: { nomeAdversario: {wins, losses} } }
        function ensure(name) {
            if (!agg[name]) agg[name] = { wins: 0, losses: 0, vs: {} };
            return agg[name];
        }
        function bump(name, field) {
            if (!name) return;
            ensure(name)[field]++;
        }
        function bumpVs(winner, loser) {
            if (!winner || !loser || winner === loser) return;
            const w = ensure(winner);
            if (!w.vs[loser]) w.vs[loser] = { wins: 0, losses: 0 };
            w.vs[loser].wins++;

            const l = ensure(loser);
            if (!l.vs[winner]) l.vs[winner] = { wins: 0, losses: 0 };
            l.vs[winner].losses++;
        }

        function combatResult(c, participants) {
            if (!c || !c.p1Hero || !c.p2Hero) return null;
            if (c.p1Hero.includes(',') || c.p2Hero.includes(',')) return null;
            if (c.p1Hero.includes(' & ') || c.p2Hero.includes(' & ')) return null;
            if (c.p1Hero === c.p2Hero) return null;

            let side = null;
            if (c.winnerName != null && participants[0] && participants[0].name === c.winnerName) side = 1;
            else if (c.winnerName != null && participants[1] && participants[1].name === c.winnerName) side = 2;
            else if (c.winner === 1 || c.winner === 2) side = c.winner;
            else return null;

            return side === 1
                ? { winner: c.p1Hero, loser: c.p2Hero }
                : { winner: c.p2Hero, loser: c.p1Hero };
        }

        Object.values(posts).forEach(post => {
            const participants = post.participants || [];
            const combats = post.combats || [];

            if (post.mode === 'bestof3') {
                combats.forEach(c => {
                    const r = combatResult(c, participants);
                    if (!r) return;
                    bump(r.winner, 'wins');
                    bump(r.loser, 'losses');
                    bumpVs(r.winner, r.loser);
                });
            } else {
                participants.forEach(p => {
                    if (!p || !p.hero) return;
                    bump(p.hero, p.won ? 'wins' : 'losses');
                });
                if (combats.length === 1) {
                    const r = combatResult(combats[0], participants);
                    if (r) bumpVs(r.winner, r.loser);
                }
            }
        });

        const updates = {};
        Object.entries(agg).forEach(([heroName, stats]) => {
            const k = heroKey(heroName);
            updates['heroStats/' + k + '/name'] = heroName;
            updates['heroStats/' + k + '/wins'] = stats.wins;
            updates['heroStats/' + k + '/losses'] = stats.losses;
            Object.entries(stats.vs).forEach(([oppName, rec]) => {
                const ok = heroKey(oppName);
                updates['heroStats/' + k + '/vs/' + ok + '/wins'] = rec.wins;
                updates['heroStats/' + k + '/vs/' + ok + '/losses'] = rec.losses;
                updates['heroStats/' + k + '/vs/' + ok + '/name'] = oppName;
            });
        });

        if (Object.keys(updates).length > 0) {
            await db.ref().update(updates);
        }

        await flagRef.set(true);
        heroStatsCache = null;
    } catch (e) {
        console.warn('Migração V4 de heroStats não concluída:', e);
        db.ref('migrations/heroStatsV4Done').transaction(v => v === 'running' ? null : v).catch(() => {});
    }
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.innerText = str == null ? '' : str;
    return div.innerHTML;
}

function formatTimestamp(ts) {
    if (!ts) return '';
    try {
        return new Date(ts).toLocaleString('pt-BR');
    } catch (e) {
        return '';
    }
}

const FEED_PAGE_SIZE = 5;
let feedCurrentPage = 0;

const PAGE_BUTTONS_GROUP_SIZE = 5;

function renderFeedPagination(container, totalEntries) {
    container.innerHTML = '';
    const totalPages = Math.max(1, Math.ceil(totalEntries / FEED_PAGE_SIZE));
    if (totalPages <= 1) return;

    // Mostra só um grupo de 5 números de página por vez, com setas pra
    // navegar entre os grupos (em vez de mostrar todos os números de uma vez).
    const groupStart = Math.floor(feedCurrentPage / PAGE_BUTTONS_GROUP_SIZE) * PAGE_BUTTONS_GROUP_SIZE;
    const groupEnd = Math.min(groupStart + PAGE_BUTTONS_GROUP_SIZE, totalPages);

    if (groupStart > 0) {
        const prevBtn = document.createElement('button');
        prevBtn.type = 'button';
        prevBtn.className = 'feed-page-btn feed-page-nav';
        prevBtn.innerText = '‹';
        prevBtn.title = 'Páginas anteriores';
        prevBtn.onclick = () => {
            feedCurrentPage = groupStart - 1;
            renderFeed(allPostsData);
        };
        container.appendChild(prevBtn);
    }

    for (let i = groupStart; i < groupEnd; i++) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'feed-page-btn' + (i === feedCurrentPage ? ' active' : '');
        btn.innerText = String(i + 1);
        btn.onclick = () => {
            feedCurrentPage = i;
            renderFeed(allPostsData);
        };
        container.appendChild(btn);
    }

    if (groupEnd < totalPages) {
        const nextBtn = document.createElement('button');
        nextBtn.type = 'button';
        nextBtn.className = 'feed-page-btn feed-page-nav';
        nextBtn.innerText = '›';
        nextBtn.title = 'Próximas páginas';
        nextBtn.onclick = () => {
            feedCurrentPage = groupEnd;
            renderFeed(allPostsData);
        };
        container.appendChild(nextBtn);
    }
}

function renderFeed(posts) {
    const list = document.getElementById('home-feed-list');
    const paginationEl = document.getElementById('home-feed-pagination');
    if (!list) return;
    list.innerHTML = '';

    const entries = Object.entries(posts)
        .filter(([, p]) => !p.hidden)
        .sort((a, b) => (b[1].timestamp || 0) - (a[1].timestamp || 0));

    if (entries.length === 0) {
        list.innerHTML = '<p class="feed-empty">Nenhuma partida postada ainda. Jogue uma partida para ela aparecer aqui automaticamente!</p>';
        if (paginationEl) paginationEl.innerHTML = '';
        return;
    }

    const totalPages = Math.max(1, Math.ceil(entries.length / FEED_PAGE_SIZE));
    if (feedCurrentPage >= totalPages) feedCurrentPage = totalPages - 1;
    if (feedCurrentPage < 0) feedCurrentPage = 0;

    const pageEntries = entries.slice(feedCurrentPage * FEED_PAGE_SIZE, feedCurrentPage * FEED_PAGE_SIZE + FEED_PAGE_SIZE);

    pageEntries.forEach(([postId, post]) => {
        const div = document.createElement('div');
        div.className = 'feed-post';

        // Linha do topo: chips dos jogadores + botão de apagar
        const topRow = document.createElement('div');
        topRow.className = 'feed-post-top';

        const participants = post.participants || [];
        if (participants.length > 0) {
            const chipsRow = document.createElement('div');
            chipsRow.className = 'feed-participants';
            const isBestOf3 = post.mode === 'bestof3';
            const combats = post.combats || [];
            participants.forEach((p, i) => {
                const chip = document.createElement('span');
                chip.className = 'feed-chip ' + (p.colorClass || '') + (p.won ? '' : ' feed-chip-loser');

                if (isBestOf3) {
                    // Heróis com os quais ESTE jogador venceu cada combate da série
                    // (participants[0] = jogador 1 / p1Hero, participants[1] = jogador 2 / p2Hero
                    // em todos os combates registrados, independente de quem venceu a série).
                    const winHeroes = combats
                        .filter(c => c.winnerName === p.name)
                        .map(c => (i === 0 ? c.p1Hero : c.p2Hero))
                        .filter(Boolean);

                    const trophies = winHeroes.length > 0 ? '🏆'.repeat(winHeroes.length) + ' ' : '';
                    const heroesText = winHeroes.length > 0
                        ? ' · venceu com ' + winHeroes.join(', ')
                        : ' · ' + p.hero;
                    chip.innerText = trophies + p.name + heroesText;
                } else {
                    chip.innerText = (p.won ? '🏆 ' : '') + p.name + ' · ' + p.hero;
                }

                chipsRow.appendChild(chip);
            });
            topRow.appendChild(chipsRow);
        } else {
            topRow.appendChild(document.createElement('span'));
        }

        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'button';
        deleteBtn.className = 'feed-delete-btn';
        deleteBtn.innerText = '🗑️';
        deleteBtn.title = 'Apagar post';
        deleteBtn.onclick = () => {
            const pass = window.prompt('Digite a senha para gerenciar este post:');
            if (pass === null) return;
            if (pass !== 'bolas') {
                alert('Senha incorreta. Nada foi alterado.');
                return;
            }
            const wantsDelete = window.confirm(
                'Senha correta!\n\n' +
                'Toque OK para APAGAR esse post definitivamente,\n' +
                'ou Cancelar para apenas OCULTAR ele do feed (fica escondido, mas não é apagado).'
            );
            if (wantsDelete) {
                db.ref('posts/' + postId).remove();
            } else {
                db.ref('posts/' + postId + '/hidden').set(true);
            }
        };
        topRow.appendChild(deleteBtn);

        div.appendChild(topRow);

        if (participants[0] && participants[0].note) {
            const note = document.createElement('span');
            note.className = 'feed-post-note';
            note.innerText = participants[0].note;
            div.appendChild(note);
        }

        if (post.durationMs != null) {
            const durationSpan = document.createElement('span');
            durationSpan.className = 'feed-post-note';
            durationSpan.innerText = '⏱️ Tempo total: ' + formatDuration(post.durationMs);
            div.appendChild(durationSpan);
        }

        // Detalhamento de cada combate (útil sobretudo na melhor de 3, que pode ter até 3 combates)
        const combats = post.combats || [];
        if (combats.length > 0) {
            const combatsBox = document.createElement('div');
            combatsBox.className = 'feed-combats';
            combats.forEach(c => {
                const row = document.createElement('div');
                row.className = 'feed-combat-row';
                const matchup = (c.p1Hero && c.p2Hero) ? (c.p1Hero + ' vs ' + c.p2Hero + ' — ') : '';
                const mapTag = c.mapName ? (' 🗺️ ' + c.mapName) : '';
                row.innerText = 'Combate ' + c.round + ': ' + matchup + '🏆 ' + c.winnerName + ' (' + formatDuration(c.durationMs || 0) + ')' + mapTag;
                combatsBox.appendChild(row);
            });
            div.appendChild(combatsBox);
        }

        // Texto livre escrito por quem postou (ou resumo antigo, para posts anteriores a essa versão)
        const bodyText = post.description || post.summary || '';
        if (bodyText) {
            const desc = document.createElement('p');
            desc.className = 'feed-post-text';
            desc.innerText = bodyText;
            div.appendChild(desc);
        }

        const time = document.createElement('span');
        time.className = 'feed-post-time';
        time.innerText = formatTimestamp(post.timestamp);
        div.appendChild(time);

        // Comentários: área recolhível, fechada por padrão
        const comments = post.comments
            ? Object.entries(post.comments).sort((a, b) => (a[1].timestamp || 0) - (b[1].timestamp || 0))
            : [];

        const toggleBtn = document.createElement('button');
        toggleBtn.type = 'button';
        toggleBtn.className = 'btn-secondary feed-toggle-comments';
        const setToggleLabel = (open) => {
            toggleBtn.innerText = (open ? '▲ Ocultar comentários' : '💬 Comentários') + ' (' + comments.length + ')';
        };
        setToggleLabel(false);

        const commentsSection = document.createElement('div');
        commentsSection.className = 'feed-comments-section';
        commentsSection.style.display = 'none';

        const commentsList = document.createElement('div');
        commentsList.className = 'feed-comments';
        comments.forEach(([, c]) => {
            const cDiv = document.createElement('div');
            cDiv.className = 'feed-comment';
            cDiv.innerHTML = '<strong>' + escapeHtml(c.name) + ':</strong> ' + escapeHtml(c.text);
            commentsList.appendChild(cDiv);
        });
        if (comments.length === 0) {
            const empty = document.createElement('p');
            empty.className = 'feed-comment-empty';
            empty.innerText = 'Nenhum comentário ainda. Seja o primeiro!';
            commentsList.appendChild(empty);
        }
        commentsSection.appendChild(commentsList);

        const form = document.createElement('div');
        form.className = 'feed-comment-form';

        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.className = 'text-input feed-comment-name';
        nameInput.placeholder = 'Seu nome';

        const textInput = document.createElement('input');
        textInput.type = 'text';
        textInput.className = 'text-input feed-comment-text';
        textInput.placeholder = 'Escreva um comentário...';

        const sendBtn = document.createElement('button');
        sendBtn.type = 'button';
        sendBtn.innerText = 'Comentar';
        sendBtn.onclick = () => {
            const name = nameInput.value.trim();
            const text = textInput.value.trim();
            if (!name || !text) return;
            sendBtn.disabled = true;
            db.ref('posts/' + postId + '/comments').push({
                name,
                text,
                timestamp: Date.now()
            }).then(() => {
                nameInput.value = '';
                textInput.value = '';
                sendBtn.disabled = false;
            }).catch(() => {
                sendBtn.disabled = false;
            });
        };

        form.appendChild(nameInput);
        form.appendChild(textInput);
        form.appendChild(sendBtn);
        commentsSection.appendChild(form);

        toggleBtn.onclick = () => {
            const isOpen = commentsSection.style.display !== 'none';
            commentsSection.style.display = isOpen ? 'none' : 'block';
            setToggleLabel(!isOpen);
        };

        div.appendChild(toggleBtn);
        div.appendChild(commentsSection);

        list.appendChild(div);
    });

    if (paginationEl) renderFeedPagination(paginationEl, entries.length);
}

document.getElementById('btn-rematch')?.addEventListener('click', async () => {
    if (!roomRef) return;
    let updates = { phase: null, winner: null, winnerTeam: null, isDraw: null, matchPosted: false, finalWinnerHero: null, finalLoserHero: null, finalP1Hero: null, finalP2Hero: null, combatTimer: null, startingPlayer: null, combatLogs: [], matchDurationMs: null };

    const otherRoomHeroes = await getActiveRoomHeroNames();

    updates.rerollRequest = null;
    updates.rerollCount = null;

    if (gameState.mode === 'single' || gameState.mode === 'bestof3') {
        Object.assign(updates, await buildDealUpdates(gameState));
    } else if (gameState.mode === 'team') {
        const shuffledIndices = shuffleArray([0, 1, 2, 3]);
        updates.slotAssignments = {
            1: shuffledIndices[0],
            2: shuffledIndices[1],
            3: shuffledIndices[2],
            4: shuffledIndices[3]
        };
        updates.teamPool = drawUniqueHeroes(12, otherRoomHeroes);
        updates.teamPicks = { 1: null, 2: null, 3: null, 4: null };
        updates.teamBans = [];
        updates.phase = 'team-assignment';
    }

    roomRef.update(updates);
});

document.getElementById('btn-close-room')?.addEventListener('click', () => {
    if (!roomRef) return;
    roomRef.remove().then(() => {
        localStorage.removeItem('unmatched_role_' + roomId);
        localStorage.removeItem('unmatched_nameidx_' + roomId);
        goHome();
    });
});

// ============================================================
// SORTEIO RÁPIDO (sem sala, sem link — tudo local nesta tela)
// ============================================================
function buildQuickNameInputs(count) {
    const container = document.getElementById('quick-names-inputs');
    container.innerHTML = '';
    for (let i = 0; i < count; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'text-input name-input quick-name-input';
        input.placeholder = 'Jogador ' + (i + 1);
        input.value = 'Jogador ' + (i + 1);
        input.dataset.index = i;
        if (i > 0) input.style.marginTop = '10px';
        container.appendChild(input);
    }
}

function getQuickNameInputs() {
    return Array.from(document.querySelectorAll('.quick-name-input')).map(inp => inp.value.trim() || inp.placeholder);
}

function getQuickFormat() {
    const checked = document.querySelector('input[name="quick-format"]:checked');
    return checked ? checked.value : 'ffa';
}

function getQuickTeamSize() {
    const checked = document.querySelector('input[name="quick-team-size"]:checked');
    return checked ? parseInt(checked.value) : 2;
}

function updateQuickSetupUI() {
    const count = parseInt(document.getElementById('quick-player-count').value) || 2;
    buildQuickNameInputs(count);

    const format = getQuickFormat();
    const teamSection = document.getElementById('quick-team-size-section');
    teamSection.style.display = format === 'team' ? 'block' : 'none';

    const warning = document.getElementById('quick-setup-warning');
    if (format === 'team') {
        const teamSize = getQuickTeamSize();
        if (count < teamSize * 2) {
            warning.style.display = 'block';
            warning.innerText = '⚠️ São necessários pelo menos ' + (teamSize * 2) + ' jogadores para equipes de ' + teamSize + '.';
        } else if (count % teamSize !== 0) {
            warning.style.display = 'block';
            warning.innerText = '⚠️ ' + count + ' jogadores não divide igualmente em equipes de ' + teamSize + '. Uma equipe ficará com um número diferente de jogadores.';
        } else {
            warning.style.display = 'none';
        }
    } else {
        warning.style.display = 'none';
    }
}

function startQuickSetup() {
    quickState = null;
    showScreen('screen-quick-setup');
    document.getElementById('quick-player-count').value = 2;
    document.querySelector('input[name="quick-format"][value="ffa"]').checked = true;
    document.querySelector('input[name="quick-team-size"][value="2"]').checked = true;
    updateQuickSetupUI();
}

// Divide os jogadores (já embaralhados) em equipes do tamanho pedido.
// Se não dividir igualmente, o resto é distribuído entre as primeiras equipes.
function splitIntoTeams(playerIndexes, teamSize) {
    const teams = [];
    let i = 0;
    while (i < playerIndexes.length) {
        const remaining = playerIndexes.length - i;
        const size = (remaining < teamSize * 2 && remaining > teamSize) ? Math.ceil(remaining / 2) : teamSize;
        teams.push(playerIndexes.slice(i, i + size));
        i += size;
    }
    return teams;
}

// Gera todos os pares possíveis (round-robin) entre os índices fornecidos
function buildRoundRobinPairs(indexes) {
    const pairs = [];
    for (let i = 0; i < indexes.length; i++) {
        for (let j = i + 1; j < indexes.length; j++) {
            pairs.push([indexes[i], indexes[j]]);
        }
    }
    return pairs;
}

async function startQuickDraft() {
    const names = getQuickNameInputs();
    const format = getQuickFormat();

    if (names.length < 2) {
        alert('É necessário pelo menos 2 jogadores.');
        return;
    }
    if (format === 'team') {
        const teamSize = getQuickTeamSize();
        if (names.length < teamSize * 2) {
            alert('São necessários pelo menos ' + (teamSize * 2) + ' jogadores para equipes de ' + teamSize + '.');
            return;
        }
    }

    const otherRoomHeroes = await getActiveRoomHeroNames();
    const drawnHeroes = drawUniqueHeroes(names.length, otherRoomHeroes);

    const players = names.map((name, idx) => ({
        name,
        hero: drawnHeroes[idx],
        wins: 0
    }));

    let teams = null;
    let matches = [];

    if (format === 'team') {
        const teamSize = getQuickTeamSize();
        const shuffledPlayerIdx = shuffleArray(players.map((_, idx) => idx));
        teams = splitIntoTeams(shuffledPlayerIdx, teamSize).map(members => ({ members, wins: 0 }));
        const teamIndexes = teams.map((_, idx) => idx);
        matches = buildRoundRobinPairs(teamIndexes).map(([a, b]) => ({ type: 'team', teamA: a, teamB: b }));
    } else {
        // Todos Contra Todos = uma única partida battle royale com todo mundo ao mesmo tempo
        matches = [{ type: 'ffa', players: players.map((_, idx) => idx) }];
    }

    quickState = {
        format,
        players,
        teams,
        matches,
        matchIndex: 0,
        combatLog: [],
        timer: newTimer()
    };

    showScreen('screen-quick-combat');
    renderQuickCombat();
    startQuickTimer();
}

// Resorteia os heróis só do confronto atual do Sorteio Rápido (sem afetar
// os outros jogadores/partidas), evitando repetir herói de quem não está
// nesse confronto.
function rerollCurrentQuickMatchHeroes() {
    if (!quickState) return;
    const match = quickState.matches[quickState.matchIndex];
    if (!match) return;

    let involvedIndexes = [];
    if (match.type === 'ffa') {
        involvedIndexes = match.players.slice();
    } else {
        const teamA = quickState.teams[match.teamA];
        const teamB = quickState.teams[match.teamB];
        involvedIndexes = [...teamA.members, ...teamB.members];
    }
    if (!involvedIndexes.length) return;

    const otherHeroNames = new Set();
    quickState.players.forEach((p, idx) => {
        if (!involvedIndexes.includes(idx) && p.hero) otherHeroNames.add(p.hero.nome);
    });

    // Os heróis que acabaram de sair são evitados (pra não "re-sortear" o
    // mesmo herói); os de quem não está no confronto são proibidos.
    const currentNames = involvedIndexes
        .map(idx => quickState.players[idx].hero && quickState.players[idx].hero.nome)
        .filter(Boolean);
    const pool = drawUniqueHeroes(involvedIndexes.length, currentNames, Array.from(otherHeroNames));
    if (pool.length < involvedIndexes.length) {
        alert('Não há heróis suficientes disponíveis pra sortear de novo sem repetir.');
        return;
    }

    involvedIndexes.forEach((idx, i) => {
        quickState.players[idx].hero = pool[i];
    });

    renderQuickCombat();
}

document.getElementById('btn-quick-reroll')?.addEventListener('click', rerollCurrentQuickMatchHeroes);

function renderQuickCombat() {
    if (!quickState) return;
    const match = quickState.matches[quickState.matchIndex];
    if (!match) return;

    // "Partida X de Y" só aparece quando há mais de uma partida
    const progressEl = document.getElementById('quick-match-progress');
    progressEl.innerText = 'Partida ' + (quickState.matchIndex + 1) + ' de ' + quickState.matches.length;
    progressEl.style.display = quickState.matches.length > 1 ? 'block' : 'none';

    const ffaBox = document.getElementById('quick-matchup-ffa');
    const teamsBox = document.getElementById('quick-matchup-teams');
    const brGrid = document.getElementById('quick-br-grid');
    const judgeText = document.getElementById('quick-judge-text');
    const btnP1 = document.getElementById('btn-quick-winner-p1');
    const btnP2 = document.getElementById('btn-quick-winner-p2');

    if (match.type === 'ffa' && match.players.length === 2) {
        ffaBox.style.display = 'flex';
        teamsBox.style.display = 'none';
        brGrid.style.display = 'none';

        const p1idx = match.players[0];
        const p2idx = match.players[1];
        const p1 = quickState.players[p1idx];
        const p2 = quickState.players[p2idx];

        const fP1 = document.getElementById('quick-fighter-p1');
        const fP2 = document.getElementById('quick-fighter-p2');
        fP1.innerHTML = '';
        fP2.innerHTML = '';
        fillCardContent(fP1, p1.hero);
        fillCardContent(fP2, p2.hero);

        const p1NameTag = document.createElement('small');
        p1NameTag.className = 'fighter-player-name';
        p1NameTag.innerText = p1.name;
        fP1.appendChild(p1NameTag);

        const p2NameTag = document.createElement('small');
        p2NameTag.className = 'fighter-player-name';
        p2NameTag.innerText = p2.name;
        fP2.appendChild(p2NameTag);
        renderMatchupOdds(fP1, p1.hero, fP2, p2.hero);

        judgeText.style.display = 'none';

        btnP1.style.display = 'inline-block';
        btnP2.style.display = 'inline-block';
        btnP1.innerText = 'Venceu ' + p1.name;
        btnP2.innerText = 'Venceu ' + p2.name;
        btnP1.onclick = () => registerFfaWinner(p1idx);
        btnP2.onclick = () => registerFfaWinner(p2idx);
    } else if (match.type === 'ffa') {
        ffaBox.style.display = 'none';
        teamsBox.style.display = 'none';
        btnP1.style.display = 'none';
        btnP2.style.display = 'none';

        judgeText.style.display = 'block';
        judgeText.innerText = '🏆 Clique no jogador que venceu:';

        brGrid.style.display = 'grid';
        brGrid.className = 'br-grid br-count-' + match.players.length;
        brGrid.innerHTML = '';

        match.players.forEach((idx, i) => {
            const p = quickState.players[idx];
            const card = document.createElement('button');
            card.type = 'button';
            card.className = 'br-card player-' + ((i % 10) + 1);

            if (p.hero.img) {
                const img = document.createElement('img');
                img.src = p.hero.img;
                img.alt = p.hero.nome;
                card.appendChild(img);
            }

            const nameEl = document.createElement('span');
            nameEl.className = 'br-card-name';
            nameEl.innerText = p.name;
            card.appendChild(nameEl);

            const heroEl = document.createElement('span');
            heroEl.className = 'br-card-hero';
            heroEl.innerText = p.hero.nome;
            card.appendChild(heroEl);

            card.onclick = () => registerFfaWinner(idx);
            brGrid.appendChild(card);
        });
    } else {
        ffaBox.style.display = 'none';
        teamsBox.style.display = 'flex';
        brGrid.style.display = 'none';
        btnP1.style.display = 'inline-block';
        btnP2.style.display = 'inline-block';

        const teamA = quickState.teams[match.teamA];
        const teamB = quickState.teams[match.teamB];
        const teamANames = teamA.members.map(i => quickState.players[i].name).join(' + ');
        const teamBNames = teamB.members.map(i => quickState.players[i].name).join(' + ');

        document.getElementById('quick-team-a-label').innerText = 'Equipe A: ' + teamANames;
        document.getElementById('quick-team-b-label').innerText = 'Equipe B: ' + teamBNames;

        const fightersA = document.getElementById('quick-team-a-fighters');
        const fightersB = document.getElementById('quick-team-b-fighters');
        fightersA.innerHTML = '';
        fightersB.innerHTML = '';

        teamA.members.forEach(i => {
            const p = quickState.players[i];
            const div = document.createElement('div');
            div.className = 'fighter-card';
            fillCardContent(div, p.hero);
            const label = document.createElement('small');
            label.innerText = p.name;
            div.appendChild(label);
            fightersA.appendChild(div);
        });

        teamB.members.forEach(i => {
            const p = quickState.players[i];
            const div = document.createElement('div');
            div.className = 'fighter-card';
            fillCardContent(div, p.hero);
            const label = document.createElement('small');
            label.innerText = p.name;
            div.appendChild(label);
            fightersB.appendChild(div);
        });

        judgeText.style.display = 'none';

        btnP1.innerText = 'Venceu Equipe A';
        btnP2.innerText = 'Venceu Equipe B';
        btnP1.onclick = () => registerTeamMatchWinner(1);
        btnP2.onclick = () => registerTeamMatchWinner(2);
    }

    renderQuickStartingPlayer(match);
    updateQuickTimerDisplay();
    renderQuickMapDraw(match);
}

function renderQuickMapDraw(match) {
    const onlyLarge = match.type === 'team' || (match.type === 'ffa' && match.players.length > 2);
    renderMapDrawSection({
        btn: 'btn-quick-draw-map',
        result: 'quick-map-draw-result',
        img: 'quick-map-draw-image',
        name: 'quick-map-draw-name',
        reroll: 'btn-quick-reroll-map',
        getMap: () => match.map || null
    }, onlyLarge, (map) => {
        match.map = map;
        firstQuickTimerStart(match);
        renderQuickMapDraw(match);
        renderQuickStartingPlayer(match);
    });
}

// Sorteia quem começa jogando (só na 1ª vez que o cronômetro do Sorteio
// Rápido é ligado de verdade — não redesenha se já tiver sido iniciado
// antes, mesmo que esteja pausado agora).
function firstQuickTimerStart(match) {
    if (!quickState) return;
    const timer = quickState.timer;
    const neverStarted = !timer || (timer.paused && (timer.accumulatedMs || 0) === 0);
    if (!neverStarted) return;
    quickState.timer = resumeTimer(timer || newTimer());
    if (match && (match.type === 'ffa' && match.players.length === 2 || match.type === 'team')) {
        quickState.startingPlayer = secureRandomInt(2) + 1;
    }
    updateQuickTimerDisplay();
}

function renderQuickStartingPlayer(match) {
    const el = document.getElementById('quick-starting-player');
    if (el) el.style.display = 'none';
    const screen = document.getElementById('screen-quick-combat');
    if (!screen) return;
    clearStarterTags(screen);
    if (!quickState || !quickState.startingPlayer || !match) return;

    let target = null;
    if (match.type === 'ffa' && match.players.length === 2) {
        target = document.getElementById(quickState.startingPlayer === 1 ? 'quick-fighter-p1' : 'quick-fighter-p2');
    } else if (match.type === 'team') {
        target = screen.querySelector(quickState.startingPlayer === 1 ? '.team-side.team-a' : '.team-side.team-b');
    }
    if (target) setStarterTag(target);
}

function updateQuickTimerDisplay() {
    if (!quickState) return;
    const el = document.getElementById('quick-combat-timer');
    if (el) el.innerText = '⏱️ ' + formatDuration(getElapsedMs(quickState.timer));
    const pauseBtn = document.getElementById('btn-quick-pause');
    if (pauseBtn) pauseBtn.innerText = pauseBtnLabel(quickState.timer);
}

function updateQuickPauseBtn() {
    updateQuickTimerDisplay();
}

function startQuickTimer() {
    stopQuickTimer();
    updateQuickTimerDisplay();
    quickTimerInterval = setInterval(updateQuickTimerDisplay, 1000);
}

function stopQuickTimer() {
    if (quickTimerInterval) {
        clearInterval(quickTimerInterval);
        quickTimerInterval = null;
    }
}

window.registerFfaWinner = function(winnerIdx) {
    if (!quickState) return;

    const match = quickState.matches[quickState.matchIndex];
    const elapsed = getElapsedMs(quickState.timer);
    const winner = quickState.players[winnerIdx];
    winner.wins++;

    const winnerHeroName = winner.hero.nome;
    const loserHeroNames = match.players
        .filter(idx => idx !== winnerIdx)
        .map(idx => quickState.players[idx].hero.nome);
    recordHeroBattleResult([winnerHeroName], loserHeroNames);

    const participants = match.players.map((idx, i) => ({
        name: quickState.players[idx].name,
        hero: quickState.players[idx].hero.nome,
        colorClass: 'player-' + ((i % 10) + 1),
        won: idx === winnerIdx
    }));

    const combatEntry = {
        round: quickState.matchIndex + 1,
        winnerName: winner.name,
        durationMs: elapsed,
        mapName: match.map ? match.map.nome : null
    };
    if (match.players.length === 2) {
        combatEntry.p1Hero = quickState.players[match.players[0]].hero.nome;
        combatEntry.p2Hero = quickState.players[match.players[1]].hero.nome;
    }

    db.ref('posts').push({
        participants,
        mode: 'quick',
        combats: [combatEntry],
        durationMs: elapsed,
        timestamp: Date.now()
    });

    quickState.matchIndex++;
    quickState.startingPlayer = null;

    if (quickState.matchIndex < quickState.matches.length) {
        renderQuickCombat();
    } else {
        stopQuickTimer();
        showQuickResult(elapsed);
    }
};

window.registerTeamMatchWinner = function(winnerNum) {
    if (!quickState) return;

    const match = quickState.matches[quickState.matchIndex];
    const elapsed = getElapsedMs(quickState.timer);

    const teamA = quickState.teams[match.teamA];
    const teamB = quickState.teams[match.teamB];
    const winnerTeam = winnerNum === 1 ? teamA : teamB;
    winnerTeam.wins++;
    const winnerName = winnerNum === 1
        ? teamA.members.map(i => quickState.players[i].name).join(' + ')
        : teamB.members.map(i => quickState.players[i].name).join(' + ');
    const p1Hero = teamA.members.map(i => quickState.players[i].hero.nome).join(', ');
    const p2Hero = teamB.members.map(i => quickState.players[i].hero.nome).join(', ');
    const teamAHeroNames = teamA.members.map(i => quickState.players[i].hero.nome);
    const teamBHeroNames = teamB.members.map(i => quickState.players[i].hero.nome);
    recordHeroBattleResult(
        winnerNum === 1 ? teamAHeroNames : teamBHeroNames,
        winnerNum === 1 ? teamBHeroNames : teamAHeroNames
    );
    const participants = [
        ...teamA.members.map(i => ({ name: quickState.players[i].name, hero: quickState.players[i].hero.nome, colorClass: 'player-1', won: winnerNum === 1 })),
        ...teamB.members.map(i => ({ name: quickState.players[i].name, hero: quickState.players[i].hero.nome, colorClass: 'player-2', won: winnerNum === 2 }))
    ];

    db.ref('posts').push({
        participants,
        mode: 'quick',
        combats: [{
            round: quickState.matchIndex + 1,
            p1Hero,
            p2Hero,
            winnerName,
            durationMs: elapsed,
            mapName: match.map ? match.map.nome : null
        }],
        durationMs: elapsed,
        timestamp: Date.now()
    });

    quickState.matchIndex++;
    quickState.startingPlayer = null;

    if (quickState.matchIndex < quickState.matches.length) {
        renderQuickCombat();
    } else {
        stopQuickTimer();
        showQuickResult(elapsed);
    }
};

function showQuickResult(elapsed) {
    showScreen('screen-quick-result');

    const standingsEl = document.getElementById('quick-result-standings');
    standingsEl.innerHTML = '';

    if (quickState.format === 'team') {
        const ranked = [...quickState.teams]
            .map((team, idx) => ({ team, idx }))
            .sort((a, b) => b.team.wins - a.team.wins);
        const topWins = ranked[0].team.wins;
        const winners = ranked.filter(r => r.team.wins === topWins);
        const winnerLabel = winners.length > 1 ? 'Empate!' :
            winners[0].team.members.map(i => quickState.players[i].name).join(' + ') + ' venceu!';
        document.getElementById('quick-result-message').innerText = '🏆 ' + winnerLabel;

        ranked.forEach(r => {
            const teamNames = r.team.members.map(i => quickState.players[i].name).join(' + ');
            const row = document.createElement('div');
            row.className = 'waiting-player';
            row.innerText = teamNames + ' — ' + r.team.wins + ' vitória(s)';
            standingsEl.appendChild(row);
        });
    } else {
        const ranked = [...quickState.players].sort((a, b) => b.wins - a.wins);
        const topWins = ranked[0].wins;
        const winners = ranked.filter(p => p.wins === topWins);
        const winnerLabel = winners.length > 1 ? 'Empate!' : winners[0].name + ' venceu!';
        document.getElementById('quick-result-message').innerText = '🏆 ' + winnerLabel;

        ranked.forEach(p => {
            const row = document.createElement('div');
            row.className = 'waiting-player';
            row.innerText = p.name + ' (' + p.hero.nome + ') — ' + p.wins + ' vitória(s)';
            standingsEl.appendChild(row);
        });
    }

    document.getElementById('quick-result-duration').innerText = '⏱️ Duração total: ' + formatDuration(elapsed);
}

// ============================================================
// LIMPEZA DE SALAS ANTIGAS (mais de 1 semana)
// ============================================================
function cleanupOldRooms() {
    const oneWeekAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
    db.ref('rooms')
        .orderByChild('createdAt')
        .endAt(oneWeekAgo)
        .once('value')
        .then(snapshot => {
            const updates = {};
            snapshot.forEach(child => {
                updates[child.key] = null;
            });
            if (Object.keys(updates).length > 0) {
                db.ref('rooms').update(updates);
            }
        })
        .catch(() => { /* silencioso: limpeza é best-effort */ });
}

// ============================================================
// INICIALIZAÇÃO
// ============================================================
window.addEventListener('DOMContentLoaded', () => {
    cleanupOldRooms();
    if (!window.history.state || !window.history.state.appScreen) {
        window.history.replaceState({ appScreen: 'screen-home' }, '', window.location.href);
    }

    document.getElementById('btn-go-create').onclick = () => {
        pendingConfig = null;
        buildNameInputs(2, 'single');
        showScreen('screen-configure');
    };

    document.getElementById('btn-go-join').onclick = () => showScreen('screen-enter-code');

    document.getElementById('btn-go-quick').onclick = startQuickSetup;
    document.getElementById('btn-go-tools').onclick = () => showScreen('screen-tools');
    document.getElementById('btn-tools-back').onclick = () => showScreen('screen-home');
    document.getElementById('btn-go-add-match').onclick = () => {
        showScreen('screen-add-match');
        openAddMatchScreen();
    };
    document.getElementById('btn-back-add-match').onclick = () => showScreen('screen-tools');
    document.querySelectorAll('input[name="add-match-mode"]').forEach(radio => {
        radio.addEventListener('change', updateAddMatchModeUI);
    });
    document.getElementById('btn-submit-add-match').onclick = submitAddMatch;
    document.getElementById('btn-go-heroes').onclick = goToHeroStatsScreen;
    document.getElementById('btn-hero-stats-back').onclick = () => showScreen('screen-tools');
    document.getElementById('btn-hero-search-confirm').onclick = () => {
        const val = document.getElementById('hero-search-input').value;
        renderHeroStatsResults(val);
    };
    document.getElementById('hero-search-input').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            renderHeroStatsResults(e.target.value);
        }
    });
    document.getElementById('btn-quick-back').onclick = () => showScreen('screen-home');
    document.getElementById('btn-quick-start').onclick = startQuickDraft;
    document.getElementById('btn-quick-again').onclick = () => startQuickSetup();
    document.getElementById('btn-quick-home').onclick = () => { stopQuickTimer(); showScreen('screen-home'); };
    document.getElementById('btn-quick-pause').onclick = () => {
        if (!quickState) return;
        const timer = quickState.timer;
        const neverStarted = !timer || (timer.paused && (timer.accumulatedMs || 0) === 0);
        if (neverStarted) {
            const match = quickState.matches[quickState.matchIndex];
            firstQuickTimerStart(match);
            renderQuickStartingPlayer(match);
            return;
        }
        quickState.timer = quickState.timer.paused ? resumeTimer(quickState.timer) : pauseTimer(quickState.timer);
        updateQuickPauseBtn();
    };

    document.getElementById('quick-player-count').addEventListener('input', (e) => {
        let val = parseInt(e.target.value);
        if (isNaN(val)) val = 2;
        if (val < 2) val = 2;
        if (val > 10) val = 10;
        e.target.value = val;
        updateQuickSetupUI();
    });
    document.querySelectorAll('input[name="quick-format"]').forEach(radio => {
        radio.addEventListener('change', updateQuickSetupUI);
    });
    document.querySelectorAll('input[name="quick-team-size"]').forEach(radio => {
        radio.addEventListener('change', updateQuickSetupUI);
    });

    document.getElementById('btn-back-home').onclick = goHome;
    document.getElementById('btn-back-config').onclick = () => showScreen('screen-home');

    document.getElementById('btn-join-room').onclick = () => {
        const code = document.getElementById('input-room-code').value.trim();
        if (!code) return;
        joinRoomByCode(code);
    };

    document.getElementById('btn-rejoin-p1').onclick = () => rejoinAsRole(1);
    document.getElementById('btn-rejoin-p2').onclick = () => rejoinAsRole(2);

    document.querySelectorAll('input[name="game-mode"]').forEach(radio => {
        radio.addEventListener('change', () => {
            const mode = getSelectedMode();
            buildNameInputs(mode === 'team' ? 4 : 2, mode);
        });
    });

    document.getElementById('btn-confirm-create').onclick = () => {
        const mode = getSelectedMode();
        const playerNames = getNameInputs();
        const cafeComLeite = mode === 'team' ? {} : getCafeComLeiteFlags();
        pendingConfig = { mode, playerNames, cafeComLeite };

        if (mode === 'team') {
            createRoomFromConfig();
        } else {
            showCreatorRolePick();
        }
    };

    document.getElementById('btn-creator-role-back').onclick = () => showScreen('screen-configure');

    document.getElementById('btn-copy-link').onclick = copyRoomLink;
    document.getElementById('btn-copy-code').onclick = copyRoomCode;

    const params = new URLSearchParams(window.location.search);
    const urlRoom = params.get('room');

    attachFeedListener();
    runHeroStatsMigrationIfNeeded().then(() => runHeroStatsMigrationV3IfNeeded()).then(() => runHeroStatsMigrationV4IfNeeded());

    if (urlRoom) {
        roomId = urlRoom.toUpperCase();
        updateRoomHeader();
        tryJoinRoom();
    } else if (params.get('h1') || params.get('h2')) {
        const h1 = findHeroBySlugParam(params.get('h1'));
        const h2 = findHeroBySlugParam(params.get('h2'));
        goToMatchup(h1 ? h1.nome : null, h2 ? h2.nome : null);
    } else {
        showScreen('screen-home');
    }
});

window.goHome = goHome;
