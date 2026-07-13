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
    { nome: "Lampião e Corisco", img: "https://storage.googleapis.com/ludopedia-imagens-jogo/3741e_230447.jpg" }
];

// ============================================================
// ESTADO LOCAL DESTE DISPOSITIVO (não é o estado do jogo em si,
// que fica no Firebase e é compartilhado entre os 2 jogadores)
// ============================================================
let roomId = null;
let myRole = null; // 1 ou 2
let roomRef = null;
let gameState = null; // preenchido pelo listener do Firebase
let selectedCardIndex = null;

// Gera um número aleatório usando a API criptográfica do navegador,
// que é uma fonte de aleatoriedade mais forte que Math.random().
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

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
    const el = document.getElementById(id);
    if (el) el.style.display = 'block';
}

// Monta o conteúdo visual de um card: imagem (se houver) + nome
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
// INICIALIZAÇÃO: decide se cria sala nova ou entra em uma existente
// ============================================================
window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const urlRoom = params.get('room');

    document.getElementById('btn-create-room').onclick = createRoom;
    document.getElementById('btn-copy-link').onclick = copyRoomLink;

    if (!urlRoom) {
        // Ninguém ainda: mostra tela de criar sala
        showScreen('screen-connect');
        return;
    }

    roomId = urlRoom;
    const savedRole = localStorage.getItem('unmatched_role_' + roomId);

    if (savedRole) {
        // Já é um jogador conhecido desta sala (ex: deu refresh na página)
        myRole = parseInt(savedRole, 10);
        attachRoomListener();
        return;
    }

    // Dispositivo novo entrando por um link -> tenta virar Jogador 2
    tryJoinAsPlayer2();
});

function createRoom() {
    roomId = generateRoomId();
    myRole = 1;
    localStorage.setItem('unmatched_role_' + roomId, '1');

    const shuffled = shuffleArray(PERSONAGENS);
    const initialState = {
        phase: 'lobby',
        player2Joined: false,
        p1Cards: shuffled.slice(0, 4),
        p2Cards: shuffled.slice(4, 8),
        p1Saved: null, p2Saved: null,
        p1Banned: null, p2Banned: null,
        p1Final: null, p2Final: null,
        p1CombatChoice: null, p2CombatChoice: null,
        p1Used: [], p2Used: [],
        p1Score: 0, p2Score: 0
    };

    roomRef = db.ref('rooms/' + roomId);
    roomRef.set(initialState).then(() => {
        const link = window.location.origin + window.location.pathname + '?room=' + roomId;
        document.getElementById('room-link-input').value = link;
        showScreen('screen-waiting-room');
        window.history.replaceState({}, '', link);
        attachRoomListener();
    });
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

function tryJoinAsPlayer2() {
    const ref = db.ref('rooms/' + roomId);
    ref.get().then(snapshot => {
        if (!snapshot.exists()) {
            document.getElementById('join-error-message').innerText =
                'Essa sala não existe (ou o link está errado).';
            showScreen('screen-join-error');
            return;
        }
        const data = snapshot.val();
        if (data.player2Joined) {
            document.getElementById('join-error-message').innerText =
                'Essa sala já está cheia. Peça ao Jogador 1 para criar uma nova sala.';
            showScreen('screen-join-error');
            return;
        }

        myRole = 2;
        localStorage.setItem('unmatched_role_' + roomId, '2');
        roomRef = ref;
        roomRef.update({ player2Joined: true, phase: 'phase1-j1-save' }).then(() => {
            attachRoomListener();
        });
    }).catch(() => {
        document.getElementById('join-error-message').innerText =
            'Não foi possível conectar à sala. Verifique sua internet e o firebase-config.js.';
        showScreen('screen-join-error');
    });
}

function attachRoomListener() {
    roomRef = db.ref('rooms/' + roomId);
    roomRef.on('value', snapshot => {
        gameState = snapshot.val();
        if (gameState) renderGame();
    });
}

// ============================================================
// RENDERIZAÇÃO PRINCIPAL
// ============================================================
function renderGame() {
    if (gameState.phase === 'lobby') {
        showScreen('screen-waiting-room');
        return;
    }

    if (gameState.phase.startsWith('phase')) {
        showScreen('screen-draft');
        const roleLabel = document.getElementById('my-role-label');
        if (roleLabel) roleLabel.innerText = 'JOGADOR ' + myRole;
        buildDraftInterface();
        return;
    }

    if (gameState.phase === 'combat') {
        showScreen('screen-combat');
        buildCombatInterface();
    }
}

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
            instr.innerText = "Escolha 1 herói do Jogador 2 para BANIR.";
            cardsToDisplay = gameState.p2Cards.filter(c => c.nome !== gameState.p2Saved.nome);
            break;
        case 'phase2-j2-ban':
            title.innerText = "Fase 2: Banir do Oponente";
            instr.innerText = "Escolha 1 herói do Jogador 1 para BANIR.";
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

    const confirmBtn = document.getElementById('btn-confirm-choice');
    confirmBtn.disabled = true;

    cardsToDisplay.forEach((char, index) => {
        let div = document.createElement('div');
        div.className = 'card';
        fillCardContent(div, char);

        div.onclick = () => {
            document.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));
            div.classList.add('selected');
            selectedCardIndex = index;
            confirmBtn.disabled = false;
        };
        container.appendChild(div);
    });
}

document.getElementById('btn-confirm-choice')?.addEventListener('click', () => {
    if (selectedCardIndex === null) return;
    const phase = gameState.phase;
    let updates = {};

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

// ============================================================
// COMBATE
// ============================================================
function currentCombatTurn() {
    if (!gameState.p1CombatChoice) return 1;
    if (!gameState.p2CombatChoice) return 2;
    return null;
}

function buildCombatInterface() {
    document.getElementById('score-p1').innerText = gameState.p1Score;
    document.getElementById('score-p2').innerText = gameState.p2Score;

    const combatActive = document.getElementById('combat-active');
    const combatWaiting = document.getElementById('combat-waiting');
    const matchupArea = document.getElementById('combat-matchup-area');

    if (gameState.p1Score >= 2 || gameState.p2Score >= 2) {
        combatActive.style.display = 'none';
        combatWaiting.style.display = 'none';
        matchupArea.style.display = 'none';
        alert(`🏆 Fim de jogo! Campeão: ${gameState.p1Score >= 2 ? 'Jogador 1' : 'Jogador 2'}`);
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

        document.getElementById('combat-title').innerText = `Sua vez, Jogador ${myRole} - Escolha secretamente`;

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
        const fP1 = document.getElementById('fighter-p1');
        const fP2 = document.getElementById('fighter-p2');
        fP1.innerHTML = "";
        fP2.innerHTML = "";
        fillCardContent(fP1, gameState.p1CombatChoice);
        fillCardContent(fP2, gameState.p2CombatChoice);
    }
}

window.registerWinner = function(winnerNum) {
    let updates = {
        p1CombatChoice: null,
        p2CombatChoice: null
    };
    if (winnerNum === 1) {
        updates.p1Score = gameState.p1Score + 1;
        updates.p1Used = [...(gameState.p1Used || []), gameState.p1CombatChoice];
    } else {
        updates.p2Score = gameState.p2Score + 1;
        updates.p2Used = [...(gameState.p2Used || []), gameState.p2CombatChoice];
    }
    roomRef.update(updates);
};
