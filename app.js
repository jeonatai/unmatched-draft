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
    { nome: "Sun Wukong", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/EoDLc4PNqSqST9akf5nVn.jpg" },
    { nome: "Tomoe Gozen", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/8P9zI-HHRr-qgJASxttfi.webp" },
    { nome: "Eletrika | O Tentáculo", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/BiC5iLlqu_RyyelKidLWp.webp" },
    { nome: "Titânia | Oberon", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/hq3qeQJWxR1UIcSt9aIkw.webp" },
    { nome: "As Irmãs Estranhas", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/epUAsiZCbo09Q_Tew3OxK.webp" },
    { nome: "Darth Vader", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGLmpFnjkvmn-NLbixmiel5H3davC2VTHxJAB8HiRCnxLTjmQdxGQ6npg&s=10" },
    { nome: "Deadpool", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/mF-7XGbmp7eHQrbMSaX6v.webp" },
    { nome: "Dra. Ellie Sattler | Dr. Ian Malcolm", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/xrt_5GcTzDQd9Bb0P2Z56.webp" },
    { nome: "Fantomas", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/A891P2gL7IPp2_Kjk3P7b.webp" },
    { nome: "Hamlet", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/bg3s8IEdB07YlbFJQSGS5.webp" },
    { nome: "Nicolas Tesla", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/byq-c3l_HktvangjGc33q.webp" },
    { nome: "Oda Nobunaga | Guarda de Honra", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/_hVP2Ah-uMSD_kH5-LUol.webp" },
    { nome: "T-Rex", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/mURpEFDw_zxQRn19mYXgG.webp" },
    { nome: "Homem-Mariposa | Sapo de Loveland", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/npcs/villains/card-covers/x83yAUgQGlJDoSWVi-CXQ.webp" },
    { nome: "Invasor Marciano", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/npcs/villains/card-covers/XMvDZU9R1vCn5dT4Do6iZ.webp" },
    { nome: "Jill Trent | Daizy", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/CvsgmaMFob3JNZ9OFOjgA.webp" },
    { nome: "Cavaleiro da Lua", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/nh0wyjVp6hYSrGY8HS47C.webp" },
    { nome: "Homem Aranha", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/Kngv_p0P1hdxfOANliL7Y.webp" },
    { nome: "Luke Cage | Misty Knight", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/SkGReM3sdO9x2AGIumUao.webp" },
    { nome: "Dr. Estranho | Wong", img: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/nV6hmlXVda7Kf4ABbW26Y.webp" },
    { nome: "Lampião e Corisco", img: "https://storage.googleapis.com/ludopedia-imagens-jogo/3741e_230447.jpg" }
];

// Marcadores de vida para personagens específicos (nome deve bater com "nome" em PERSONAGENS)
const HERO_LIFE_DATA = {
    "Cavaleiro da Lua": { color: "#000000", trackers: [{ label: "Cavaleiro da Lua", hp: 16 }] },
    "Homem Aranha": { color: "#e74c3c", trackers: [{ label: "Homem Aranha", hp: 15 }] },
    "Dr. Estranho | Wong": { color: "#3498db", trackers: [{ label: "Dr. Estranho", hp: 14 }, { label: "Wong", hp: 6 }] },
    "Luke Cage | Misty Knight": { color: "#f1c40f", trackers: [{ label: "Luke Cage", hp: 13 }, { label: "Misty Knight", hp: 6 }] }
};

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

function secureRandomInt(maxExclusive) {
    const arr = new Uint32Array(1);
    crypto.getRandomValues(arr);
    return arr[0] % maxExclusive;
}

function shuffleArray(arr) {
    let shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = secureRandomInt(i + 1);
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
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

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
    const el = document.getElementById(id);
    if (el) el.style.display = 'block';
}

function updateRoomHeader() {
    const header = document.getElementById('room-code-header');
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
        div.appendChild(img);
    }
    let textSpan = document.createElement('span');
    textSpan.innerText = char.nome;
    if (!char.img) textSpan.style.margin = "auto";
    div.appendChild(textSpan);
}

// ============================================================
// MARCADORES DE VIDA
// ============================================================
function getLifeConfig(hero) {
    if (!hero || !hero.nome) return null;
    return HERO_LIFE_DATA[hero.nome] || null;
}

// Garante que o estado de vida no Firebase existe e corresponde ao herói atual
function ensureLifeCounter(roleKey, hero) {
    const config = getLifeConfig(hero);
    if (!config || !roomRef) return;
    const existing = gameState.lifeCounters && gameState.lifeCounters[roleKey];
    if (existing && existing.heroName === hero.nome) return;

    const initValues = config.trackers.map(t => t.hp);
    const updates = {};
    updates['lifeCounters/' + roleKey] = { heroName: hero.nome, values: initValues };
    roomRef.update(updates);
}

// Renderiza o(s) marcador(es) de vida dentro do card do lutador.
// isOwner controla se os botões de +/- aparecem (só o dono do lutador edita);
// para os demais, mostra apenas o número da vida, sem botões.
function renderLifeTrackers(container, roleKey, hero, isOwner) {
    const config = getLifeConfig(hero);
    if (!config) return;

    const state = gameState.lifeCounters && gameState.lifeCounters[roleKey];
    const values = (state && state.heroName === hero.nome) ? state.values : config.trackers.map(t => t.hp);

    const wrap = document.createElement('div');
    wrap.className = 'life-trackers';

    config.trackers.forEach((t, idx) => {
        const row = document.createElement('div');
        row.className = 'life-tracker';
        row.style.setProperty('--life-color', config.color);

        const label = document.createElement('span');
        label.className = 'life-tracker-label';
        label.innerText = t.label;

        const controls = document.createElement('div');
        controls.className = 'life-tracker-controls';

        if (isOwner) {
            const minusBtn = document.createElement('button');
            minusBtn.type = 'button';
            minusBtn.className = 'life-btn';
            minusBtn.innerText = '−';
            minusBtn.onclick = () => updateLifeValue(roleKey, idx, -1);
            controls.appendChild(minusBtn);
        }

        const valSpan = document.createElement('span');
        valSpan.className = 'life-value';
        valSpan.innerText = values[idx];
        controls.appendChild(valSpan);

        if (isOwner) {
            const plusBtn = document.createElement('button');
            plusBtn.type = 'button';
            plusBtn.className = 'life-btn';
            plusBtn.innerText = '+';
            plusBtn.onclick = () => updateLifeValue(roleKey, idx, 1);
            controls.appendChild(plusBtn);
        }

        row.appendChild(label);
        row.appendChild(controls);
        wrap.appendChild(row);
    });

    container.appendChild(wrap);
}

function updateLifeValue(roleKey, idx, delta) {
    const state = gameState.lifeCounters && gameState.lifeCounters[roleKey];
    if (!state || !roomRef) return;
    const newValues = [...state.values];
    newValues[idx] = Math.max(0, newValues[idx] + delta);
    const updates = {};
    updates['lifeCounters/' + roleKey + '/values'] = newValues;
    roomRef.update(updates);
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

function goHome() {
    detachFeedListener();
    if (roomRef) roomRef.off();
    roomId = null;
    myRole = null;
    myNameIndex = null;
    roomRef = null;
    gameState = null;
    updateRoomHeader();
    window.history.replaceState({}, '', window.location.pathname);
    showScreen('screen-home');
}

// ============================================================
// CONFIGURAÇÃO DE SALA
// ============================================================
function buildNameInputs(count) {
    const container = document.getElementById('player-names-inputs');
    container.innerHTML = '';
    for (let i = 0; i < count; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'text-input name-input';
        input.placeholder = 'Jogador ' + (i + 1);
        input.value = 'Jogador ' + (i + 1);
        input.dataset.index = i;
        container.appendChild(input);
    }
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
function createRoomFromConfig() {
    const mode = pendingConfig.mode;
    const playerNames = pendingConfig.playerNames;
    roomId = generateRoomId();
    myRole = mode === 'team' ? null : 1;
    localStorage.setItem('unmatched_role_' + roomId, mode === 'team' ? 'creator' : '1');

    const initialState = {
        mode,
        phase: 'lobby',
        playerNames,
        player2Joined: false,
        nameClaims: {},
        slotAssignments: null,
        winner: null,
        winnerTeam: null
    };

    if (mode === 'single') {
        Object.assign(initialState, {
            p1Cards: null, p2Cards: null,
            p1Pick: null, p2Pick: null
        });
    } else if (mode === 'bestof3') {
        Object.assign(initialState, buildBestOf3State());
    } else if (mode === 'team') {
        Object.assign(initialState, buildTeamDraftState());
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
    const shuffled = shuffleArray(PERSONAGENS);
    return {
        p1Cards: shuffled.slice(0, 4),
        p2Cards: shuffled.slice(4, 8),
        p1Saved: null, p2Saved: null,
        p1Banned: null, p2Banned: null,
        p1Final: null, p2Final: null,
        p1CombatChoice: null, p2CombatChoice: null,
        p1Used: [], p2Used: [],
        p1Score: 0, p2Score: 0
    };
}

function buildTeamDraftState() {
    return {
        teamPool: shuffleArray(PERSONAGENS).slice(0, 12),
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
    ref.get().then(snapshot => {
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

        if (data.player2Joined) {
            showJoinError('Essa sala já está cheia.');
            return;
        }

        myRole = 2;
        localStorage.setItem('unmatched_role_' + roomId, '2');
        roomRef = ref;

        const updates = { player2Joined: true };
        if (data.mode === 'single') {
            const shuffled = shuffleArray(PERSONAGENS);
            updates.phase = 'single-pick';
            updates.p1Cards = shuffled.slice(0, 2);
            updates.p2Cards = shuffled.slice(2, 4);
            updates.p1Pick = null;
            updates.p2Pick = null;
        } else if (data.mode === 'bestof3') {
            updates.phase = 'phase1-j1-save';
        }

        roomRef.update(updates).then(() => attachRoomListener());
    }).catch(() => {
        showJoinError('Não foi possível conectar. Verifique sua internet.');
    });
}

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

    const phase = gameState.phase;

    if (phase === 'lobby') {
        renderWaitingRoom();
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

    if (phase === 'single-pick') {
        if (gameState.p1Pick && gameState.p2Pick) {
            roomRef.update({ phase: 'single-combat' });
            return;
        }
        showScreen('screen-single-pick');
        buildSinglePickInterface();
        return;
    }

    if (phase.startsWith('phase') || phase.startsWith('team-')) {
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
        document.getElementById('waiting-subtitle').innerText = 'Envie o link ou código para o Jogador 2.';

        const p1Name = gameState.playerNames[0] || 'Jogador 1';
        const p2Name = gameState.playerNames[1] || 'Jogador 2';
        list.innerHTML = '<div class="waiting-player"><span class="player-tag player-1">J1</span> ' + p1Name + ' ✓</div>' +
            '<div class="waiting-player"><span class="player-tag player-2">J2</span> ' + p2Name + (gameState.player2Joined ? ' ✓' : ' ⏳') + '</div>';

        document.getElementById('waiting-status').innerText = gameState.player2Joined
            ? '✅ Jogador 2 entrou! Iniciando...'
            : '⏳ Aguardando o Jogador 2 entrar...';
    }
}

function claimName(nameIndex) {
    const deviceId = getDeviceId();
    const claims = gameState.nameClaims || {};

    for (const [idx, dev] of Object.entries(claims)) {
        if (dev === deviceId) return;
    }

    if (claims[nameIndex]) return;

    myNameIndex = nameIndex;
    localStorage.setItem('unmatched_nameidx_' + roomId, String(nameIndex));
    localStorage.setItem('unmatched_role_' + roomId, 'creator');

    const updates = {};
    updates['nameClaims/' + nameIndex] = deviceId;

    const newClaimCount = Object.keys(claims).length + 1;
    if (newClaimCount >= 4) {
        const shuffledIndices = shuffleArray([0, 1, 2, 3]);
        updates.slotAssignments = {
            1: shuffledIndices[0],
            2: shuffledIndices[1],
            3: shuffledIndices[2],
            4: shuffledIndices[3]
        };
        updates.phase = 'team-assignment';
        updates.teamPool = shuffleArray(PERSONAGENS).slice(0, 12);
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
            div.innerHTML += ' <span class="taken-badge">✓ Ocupado</span>';
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

function buildCombatInterface() {
    const isTeam = gameState.phase === 'team-combat';
    const isSingle = gameState.phase === 'single-combat';

    document.getElementById('combat-scoreboard').style.display = isTeam || isSingle ? 'none' : 'flex';
    document.getElementById('matchup-1v1').style.display = isTeam ? 'none' : 'flex';
    document.getElementById('matchup-teams').style.display = isTeam ? 'flex' : 'none';
    document.getElementById('judge-1v1').style.display = isTeam ? 'none' : 'flex';
    document.getElementById('judge-teams').style.display = isTeam ? 'flex' : 'none';

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
        ensureLifeCounter('p1', gameState.p1Pick);
        ensureLifeCounter('p2', gameState.p2Pick);
        renderLifeTrackers(fP1, 'p1', gameState.p1Pick, myRole === 1);
        renderLifeTrackers(fP2, 'p2', gameState.p2Pick, myRole === 2);

        document.getElementById('judge-1v1').innerHTML =
            '<button onclick="registerWinner(1)">' + getPlayerDisplayName(1) + ' Venceu</button>' +
            '<button onclick="registerWinner(2)">' + getPlayerDisplayName(2) + ' Venceu</button>';
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
            ensureLifeCounter('s' + slot, picks[slot]);
            renderLifeTrackers(div, 's' + slot, picks[slot], myRole === slot);
            teamAFighters.appendChild(div);
        });

        [2, 4].forEach(slot => {
            const div = document.createElement('div');
            div.className = 'fighter-card ' + PLAYER_COLORS[slot].class;
            fillCardContent(div, picks[slot]);
            const label = document.createElement('small');
            label.innerText = getPlayerDisplayName(slot);
            div.appendChild(label);
            ensureLifeCounter('s' + slot, picks[slot]);
            renderLifeTrackers(div, 's' + slot, picks[slot], myRole === slot);
            teamBFighters.appendChild(div);
        });

        const teamANames = [1, 3].map(s => getPlayerDisplayName(s)).join(' + ');
        const teamBNames = [2, 4].map(s => getPlayerDisplayName(s)).join(' + ');
        document.getElementById('team-a-label').innerText = 'Equipe A: ' + teamANames;
        document.getElementById('team-b-label').innerText = 'Equipe B: ' + teamBNames;
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
        ensureLifeCounter('p1', gameState.p1CombatChoice);
        ensureLifeCounter('p2', gameState.p2CombatChoice);
        renderLifeTrackers(fP1, 'p1', gameState.p1CombatChoice, myRole === 1);
        renderLifeTrackers(fP2, 'p2', gameState.p2CombatChoice, myRole === 2);

        document.getElementById('judge-1v1').innerHTML =
            '<button onclick="registerWinner(1)">' + getPlayerDisplayName(1) + ' Venceu</button>' +
            '<button onclick="registerWinner(2)">' + getPlayerDisplayName(2) + ' Venceu</button>';
    }
}

window.registerWinner = function(winnerNum) {
    if (gameState.mode === 'single') {
        roomRef.update({ phase: 'post-game', winner: winnerNum });
        return;
    }

    let updates = {
        p1CombatChoice: null,
        p2CombatChoice: null
    };
    let newP1Score = gameState.p1Score || 0;
    let newP2Score = gameState.p2Score || 0;

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
    }

    roomRef.update(updates);
};

window.registerTeamWinner = function(team) {
    roomRef.update({ phase: 'post-game', winnerTeam: team });
};

// ============================================================
// PÓS-JOGO: REVANCHE E FECHAR SALA
// ============================================================
function renderPostGame() {
    showScreen('screen-post-game');

    let msg = '';
    if (gameState.mode === 'team' && gameState.winnerTeam) {
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

    const postForm = document.getElementById('post-match-form');
    const postBtn = document.getElementById('btn-post-match');
    if (postForm && postBtn) {
        if (gameState.matchPosted) {
            postForm.style.display = 'none';
        } else {
            postForm.style.display = 'block';
            postBtn.disabled = false;
            postBtn.innerText = '📣 Postar Partida';
        }
    }
}

// ============================================================
// FEED DE PARTIDAS
// ============================================================
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
        if (!winnerRole) return null;
        return [1, 2].map(role => ({
            name: getPlayerDisplayName(role),
            hero: (role === winnerRole ? gameState.finalWinnerHero : gameState.finalLoserHero)?.nome || '?',
            colorClass: PLAYER_COLORS[role].class,
            won: role === winnerRole,
            note: (gameState.p1Score || 0) + ' x ' + (gameState.p2Score || 0)
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

let feedRef = null;

function goToFeed() {
    showScreen('screen-feed');
    attachFeedListener();
}

function attachFeedListener() {
    if (feedRef) feedRef.off();
    feedRef = db.ref('posts');
    feedRef.on('value', snapshot => {
        renderFeed(snapshot.val() || {});
    });
}

function detachFeedListener() {
    if (feedRef) feedRef.off();
    feedRef = null;
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

function renderFeed(posts) {
    const list = document.getElementById('feed-list');
    if (!list) return;
    list.innerHTML = '';

    const entries = Object.entries(posts).sort((a, b) => (b[1].timestamp || 0) - (a[1].timestamp || 0));

    if (entries.length === 0) {
        list.innerHTML = '<p class="feed-empty">Nenhuma partida postada ainda. Jogue e clique em "Postar Partida" no fim!</p>';
        return;
    }

    entries.forEach(([postId, post]) => {
        const div = document.createElement('div');
        div.className = 'feed-post';

        // Linha do topo: chips dos jogadores + botão de apagar
        const topRow = document.createElement('div');
        topRow.className = 'feed-post-top';

        const participants = post.participants || [];
        if (participants.length > 0) {
            const chipsRow = document.createElement('div');
            chipsRow.className = 'feed-participants';
            participants.forEach(p => {
                const chip = document.createElement('span');
                chip.className = 'feed-chip ' + (p.colorClass || '') + (p.won ? '' : ' feed-chip-loser');
                chip.innerText = (p.won ? '🏆 ' : '') + p.name + ' · ' + p.hero;
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
            const pass = window.prompt('Digite a senha para apagar este post:');
            if (pass === null) return;
            if (pass !== 'bolas') {
                alert('Senha incorreta. O post não foi apagado.');
                return;
            }
            db.ref('posts/' + postId).remove();
        };
        topRow.appendChild(deleteBtn);

        div.appendChild(topRow);

        if (participants[0] && participants[0].note) {
            const note = document.createElement('span');
            note.className = 'feed-post-note';
            note.innerText = participants[0].note;
            div.appendChild(note);
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
}

document.getElementById('btn-post-match')?.addEventListener('click', () => {
    if (!gameState || !roomRef || gameState.matchPosted) return;
    const participants = buildMatchParticipants();
    if (!participants) return;

    const descInput = document.getElementById('post-match-description');
    const description = descInput ? descInput.value.trim() : '';

    const postBtn = document.getElementById('btn-post-match');
    if (postBtn) postBtn.disabled = true;

    db.ref('posts').push({
        participants,
        description,
        mode: gameState.mode,
        timestamp: Date.now()
    }).then(() => {
        roomRef.update({ matchPosted: true });
    }).catch(() => {
        if (postBtn) postBtn.disabled = false;
    });
});

document.getElementById('btn-rematch')?.addEventListener('click', () => {
    if (!roomRef) return;
    const descInput = document.getElementById('post-match-description');
    if (descInput) descInput.value = '';
    let updates = { phase: null, winner: null, winnerTeam: null, lifeCounters: null, matchPosted: null, finalWinnerHero: null, finalLoserHero: null };

    if (gameState.mode === 'single') {
        const shuffled = shuffleArray(PERSONAGENS);
        updates.phase = 'single-pick';
        updates.p1Cards = shuffled.slice(0, 2);
        updates.p2Cards = shuffled.slice(2, 4);
        updates.p1Pick = null;
        updates.p2Pick = null;
    } else if (gameState.mode === 'bestof3') {
        Object.assign(updates, buildBestOf3State());
        updates.phase = 'phase1-j1-save';
    } else if (gameState.mode === 'team') {
        const shuffledIndices = shuffleArray([0, 1, 2, 3]);
        updates.slotAssignments = {
            1: shuffledIndices[0],
            2: shuffledIndices[1],
            3: shuffledIndices[2],
            4: shuffledIndices[3]
        };
        updates.teamPool = shuffleArray(PERSONAGENS).slice(0, 12);
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
// INICIALIZAÇÃO
// ============================================================
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn-go-create').onclick = () => {
        pendingConfig = null;
        buildNameInputs(2);
        showScreen('screen-configure');
    };

    document.getElementById('btn-go-join').onclick = () => showScreen('screen-enter-code');

    document.getElementById('btn-go-feed').onclick = goToFeed;
    document.getElementById('btn-feed-back').onclick = () => {
        detachFeedListener();
        showScreen('screen-home');
    };

    document.getElementById('btn-back-home').onclick = goHome;
    document.getElementById('btn-back-config').onclick = () => showScreen('screen-home');

    document.getElementById('btn-join-room').onclick = () => {
        const code = document.getElementById('input-room-code').value.trim();
        if (!code) return;
        joinRoomByCode(code);
    };

    document.querySelectorAll('input[name="game-mode"]').forEach(radio => {
        radio.addEventListener('change', () => {
            const mode = getSelectedMode();
            buildNameInputs(mode === 'team' ? 4 : 2);
        });
    });

    document.getElementById('btn-confirm-create').onclick = () => {
        pendingConfig = {
            mode: getSelectedMode(),
            playerNames: getNameInputs()
        };
        createRoomFromConfig();
    };

    document.getElementById('btn-copy-link').onclick = copyRoomLink;
    document.getElementById('btn-copy-code').onclick = copyRoomCode;

    const params = new URLSearchParams(window.location.search);
    const urlRoom = params.get('room');

    if (urlRoom) {
        roomId = urlRoom.toUpperCase();
        updateRoomHeader();
        tryJoinRoom();
    } else {
        showScreen('screen-home');
    }
});

window.goHome = goHome;
