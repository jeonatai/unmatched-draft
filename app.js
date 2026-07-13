// Lista de personagens (sem imagens por enquanto - apenas texto)
const PERSONAGENS = [
    { nome: "Alice | O Jaguadarte" },
    { nome: "Chapeuzinho Vermelho & O Caçador" },
    { nome: "Sherlock Holmes | Dr. Watson" },
    { nome: "Drácula | As Três Irmãs" },
    { nome: "Medusa | Harpias" },
    { nome: "Robin Hood | Os Fora-da-lei" },
    { nome: "Aquiles | Pátroclo" },
    { nome: "Beowulf & Wiglaf" },
    { nome: "Maria Sangrenta" },
    { nome: "O Gênio" },
    { nome: "Pé Grande | O Lebrílope" },
    { nome: "Houdini | Bess" },
    { nome: "Simbad | O Carregador" },
    { nome: "Demolidor" },
    { nome: "Yennenga | Arqueiras" },
    { nome: "Dr. Jekyll | Sr. Hyde" },
    { nome: "Homem Invisível" },
    { nome: "Annie Christmas | Charlie" },
    { nome: "Mercenário" },
    { nome: "Raptores" },
    { nome: "Rei Arthur | Merlin" },
    { nome: "Robert Muldoon | Trabalhadores Ingen" },
    { nome: "Shakespeare | Atores" },
    { nome: "Sun Wukong" },
    { nome: "Tomoe Gozen" },
    { nome: "Eletrika | O Tentáculo" },
    { nome: "Titânia | Oberon" },
    { nome: "As Irmãs Estranhas" },
    { nome: "Darth Vader" },
    { nome: "Deadpool" },
    { nome: "Dra. Ellie Sattler | Dr. Ian Malcolm" },
    { nome: "Fantomas" },
    { nome: "Hamlet" },
    { nome: "Nicolas Tesla" },
    { nome: "Oda Nobunaga | Guarda de Honra" },
    { nome: "T-Rex" },
    { nome: "Homem-Mariposa | Sapo de Loveland" },
    { nome: "Invasor Marciano" },
    { nome: "Jill Trent | Daizy" },
    { nome: "Lampião e Corisco" }
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

function shuffleArray(arr) {
    let shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
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
        let textSpan = document.createElement('span');
        textSpan.innerText = char.nome;
        textSpan.style.margin = "auto";
        div.appendChild(textSpan);

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
        const used = myRole === 1 ? gameState.p1Used : gameState.p2Used;
        const confirmCombatBtn = document.getElementById('btn-confirm-combat');
        confirmCombatBtn.disabled = true;

        document.getElementById('combat-title').innerText = `Sua vez, Jogador ${myRole} - Escolha secretamente`;

        let tempChoice = null;
        pool.forEach((char) => {
            let isUsed = used.some(u => u.nome === char.nome);
            let div = document.createElement('div');
            div.className = 'card' + (isUsed ? ' used' : '');
            let textSpan = document.createElement('span');
            textSpan.innerText = char.nome;
            textSpan.style.margin = "auto";
            div.appendChild(textSpan);

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
        document.getElementById('fighter-p1').innerHTML = `<span>${gameState.p1CombatChoice.nome}</span>`;
        document.getElementById('fighter-p2').innerHTML = `<span>${gameState.p2CombatChoice.nome}</span>`;
    }
}

window.registerWinner = function(winnerNum) {
    let updates = {
        p1CombatChoice: null,
        p2CombatChoice: null
    };
    if (winnerNum === 1) {
        updates.p1Score = gameState.p1Score + 1;
        updates.p1Used = [...gameState.p1Used, gameState.p1CombatChoice];
    } else {
        updates.p2Score = gameState.p2Score + 1;
        updates.p2Used = [...gameState.p2Used, gameState.p2CombatChoice];
    }
    roomRef.update(updates);
};
