// Lista limpa e sem duplicatas de nomes ou variações repetidas
const PERSONAGENS = [
    "Alice | O Jaguadarte", "Chapeuzinho Vermelho & O Caçador", "Sherlock Holmes | Dr. Watson",
    "Drácula | As Três Irmãs", "Medusa | Harpias", "Robin Hood | Os Fora-da-lei",
    "Aquiles | Pátroclo", "Beowulf & Wiglaf", "Maria Sangrenta", "O Gênio",
    "Pé Grande | O Lebrílope", "Houdini | Bess", "Simbad | O Carregador", "Demolidor",
    "Yennenga | Arqueiras", "Dr. Jekyll | Sr. Hyde", "Homem Invisível", "Annie Christmas | Charlie",
    "Mercenário", "Raptores", "Rei Arthur | Merlin", "Robert Muldoon | Trabadores Ingen",
    "Shakespeare | Atores", "Sun Wukong", "Tomoe Gozen", "Eletrika | O tentáculo",
    "Titânia | Oberon", "As Irmãs Estranhas", "Darth Vader", "Deadpool",
    "Dra. Ellie Sattler | Dr. Ian Malcolm", "Fantomas", "Hamlet", "Nicolas Tesla",
    "Oda Nobunaga | Guarda de Honra", "T-Rex", "Homem-Mariposa | Sapo de Loveland",
    "Invasor maciano", "Jill Trent | Daizy", "Lampião e Corisco"
];

// Gerenciamento de Estado Local (Pass-and-Play)
let gameState = {
    phase: 'wait', // wait, phase1-j1-save, phase1-j2-save, phase2-j1-ban, phase2-j2-ban, phase3-j1-final, phase3-j2-final, combat
    p1Cards: [], p2Cards: [], 
    p1Saved: null, p2Saved: null,
    p1Banned: null, p2Banned: null, 
    p1Final: [], p2Final: [],
    p1CombatChoice: null, p2CombatChoice: null,
    p1Used: [], p2Used: [], 
    p1Score: 0, p2Score: 0
};

let selectedCardIndex = null;
let privacyMode = true; 

function init() {
    renderGame();
}

window.selectRole = function(num) {
    startLocalDraft();
};

const startBtnEl = document.getElementById('btn-start-draft');
if (startBtnEl) {
    startBtnEl.addEventListener('click', () => {
        startLocalDraft();
    });
}

// CORREÇÃO AQUI: Garante a exclusividade matemática de cartas entre os jogadores
function startLocalDraft() {
    // Cria uma cópia embaralhada de toda a lista única
    let shuffled = [...PERSONAGENS].sort(() => 0.5 - Math.random());
    
    // J1 pega os índices 0, 1, 2, 3
    gameState.p1Cards = shuffled.slice(0, 4);
    // J2 pega os índices 4, 5, 6, 7 (Impossível repetir o que foi pro J1)
    gameState.p2Cards = shuffled.slice(4, 8);
    
    gameState.phase = 'phase1-j1-save'; 
    privacyMode = true; 
    renderGame();
}

function renderGame() {
    const screenConnect = document.getElementById('screen-connect');
    const screenDraft = document.getElementById('screen-draft');
    const screenCombat = document.getElementById('screen-combat');

    const shareBtn = document.getElementById('btn-share-link');
    if (shareBtn) shareBtn.style.display = 'none';

    if (gameState.phase === 'wait') {
        if (screenConnect) screenConnect.style.display = 'block';
        if (screenDraft) screenDraft.style.display = 'none';
        if (screenCombat) screenCombat.style.display = 'none';
        return;
    }

    if (gameState.phase.startsWith('phase')) {
        if (screenConnect) screenConnect.style.display = 'none';
        if (screenDraft) screenDraft.style.display = 'block';
        if (screenCombat) screenCombat.style.display = 'none';
        buildDraftInterface();
        return;
    }

    if (gameState.phase === 'combat') {
        if (screenConnect) screenConnect.style.display = 'none';
        if (screenDraft) screenDraft.style.display = 'none';
        if (screenCombat) screenCombat.style.display = 'block';
        buildCombatInterface();
    }
}

function buildDraftInterface() {
    const title = document.getElementById('draft-phase-title');
    const instr = document.getElementById('draft-instructions');
    const container = document.getElementById('cards-container');
    if (!container) return;
    container.innerHTML = "";

    let activePlayerText = "";
    let cardsToDisplay = [];
    
    switch (gameState.phase) {
        case 'phase1-j1-save':
            activePlayerText = "JOGADOR 1";
            if (title) title.innerText = `${activePlayerText} - Fase 1: Salvar Herói`;
            if (instr) instr.innerText = "Escolha 1 herói para SALVAR secretamente. Depois, passe o aparelho.";
            cardsToDisplay = gameState.p1Cards;
            break;
        case 'phase1-j2-save':
            activePlayerText = "JOGADOR 2";
            if (title) title.innerText = `${activePlayerText} - Fase 1: Salvar Herói`;
            if (instr) instr.innerText = "Escolha 1 herói para SALVAR secretamente. Depois, passe o aparelho.";
            cardsToDisplay = gameState.p2Cards;
            break;
        case 'phase2-j1-ban':
            activePlayerText = "JOGADOR 1";
            if (title) title.innerText = `${activePlayerText} - Fase 2: Banir do Oponente`;
            if (instr) instr.innerText = "Escolha 1 herói do Jogador 2 para BANIR.";
            cardsToDisplay = gameState.p2Cards.filter(c => c !== gameState.p2Saved);
            break;
        case 'phase2-j2-ban':
            activePlayerText = "JOGADOR 2";
            if (title) title.innerText = `${activePlayerText} - Fase 2: Banir do Oponente`;
            if (instr) instr.innerText = "Escolha 1 herói do Jogador 1 para BANIR.";
            cardsToDisplay = gameState.p1Cards.filter(c => c !== gameState.p1Saved);
            break;
        case 'phase3-j1-final':
            activePlayerText = "JOGADOR 1";
            if (title) title.innerText = `${activePlayerText} - Fase 3: Escolha Final`;
            if (instr) instr.innerText = "Escolha seu segundo herói para fechar seu deck de 2.";
            cardsToDisplay = gameState.p1Cards.filter(c => c !== gameState.p1Saved && c !== gameState.p2Banned);
            break;
        case 'phase3-j2-final':
            activePlayerText = "JOGADOR 2";
            if (title) title.innerText = `${activePlayerText} - Fase 3: Escolha Final`;
            if (instr) instr.innerText = "Escolha seu segundo herói para fechar seu deck de 2 e ir para o combate!";
            cardsToDisplay = gameState.p2Cards.filter(c => c !== gameState.p2Saved && c !== gameState.p1Banned);
            break;
    }

    const confirmBtn = document.getElementById('btn-confirm-choice');

    if (privacyMode) {
        let privacyBtn = document.createElement('button');
        privacyBtn.className = "btn-action";
        privacyBtn.style.background = "#ffa500";
        privacyBtn.style.padding = "20px";
        privacyBtn.style.fontSize = "16px";
        privacyBtn.style.border = "none";
        privacyBtn.style.borderRadius = "8px";
        privacyBtn.style.cursor = "pointer";
        privacyBtn.style.color = "white";
        privacyBtn.innerText = `👁️ Vez do ${activePlayerText}.\nClique para revelar as opções na tela.`;
        privacyBtn.onclick = () => {
            privacyMode = false;
            buildDraftInterface();
        };
        container.appendChild(privacyBtn);
        if (confirmBtn) confirmBtn.style.display = 'none';
    } else {
        cardsToDisplay.forEach((char, index) => {
            let div = document.createElement('div');
            div.className = 'card';
            div.innerText = char;
            div.onclick = () => {
                document.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));
                div.classList.add('selected');
                selectedCardIndex = index;
                if (confirmBtn) confirmBtn.disabled = false;
            };
            container.appendChild(div);
        });
        if (confirmBtn) confirmBtn.style.display = 'inline-block';
    }
}

const confirmChoiceBtnEl = document.getElementById('btn-confirm-choice');
if (confirmChoiceBtnEl) {
    confirmChoiceBtnEl.onclick = () => {
        if (gameState.phase === 'phase1-j1-save') {
            gameState.p1Saved = gameState.p1Cards[selectedCardIndex];
            gameState.phase = 'phase1-j2-save';
        } else if (gameState.phase === 'phase1-j2-save') {
            gameState.p2Saved = gameState.p2Cards[selectedCardIndex];
            gameState.phase = 'phase2-j1-ban';
        } else if (gameState.phase === 'phase2-j1-ban') {
            let available = gameState.p2Cards.filter(c => c !== gameState.p2Saved);
            gameState.p1Banned = available[selectedCardIndex];
            gameState.phase = 'phase2-j2-ban';
        } else if (gameState.phase === 'phase2-j2-ban') {
            let available = gameState.p1Cards.filter(c => c !== gameState.p1Saved);
            gameState.p2Banned = available[selectedCardIndex];
            gameState.phase = 'phase3-j1-final';
        } else if (gameState.phase === 'phase3-j1-final') {
            let available = gameState.p1Cards.filter(c => c !== gameState.p1Saved && c !== gameState.p2Banned);
            gameState.p1Final = [gameState.p1Saved, available[selectedCardIndex]];
            gameState.phase = 'phase3-j2-final';
        } else if (gameState.phase === 'phase3-j2-final') {
            let available = gameState.p2Cards.filter(c => c !== gameState.p2Saved && c !== gameState.p1Banned);
            gameState.p2Final = [gameState.p2Saved, available[selectedCardIndex]];
            gameState.phase = 'combat';
        }

        selectedCardIndex = null;
        privacyMode = true; 
        confirmChoiceBtnEl.disabled = true;
        renderGame();
    };
}

function buildCombatInterface() {
    const p1ScoreEl = document.getElementById('score-p1');
    const p2ScoreEl = document.getElementById('score-p2');
    if (p1ScoreEl) p1ScoreEl.innerText = gameState.p1Score;
    if (p2ScoreEl) p2ScoreEl.innerText = gameState.p2Score;

    if (gameState.p1Score >= 2 || gameState.p2Score >= 2) {
        alert(`🏆 Fim de jogo! Campeão: ${gameState.p1Score >= 2 ? 'Jogador 1' : 'Jogador 2'}`);
        return;
    }

    const selectArea = document.getElementById('combat-selection-area');
    const matchupArea = document.getElementById('combat-matchup-area');
    const confirmCombatBtn = document.getElementById('btn-confirm-combat');

    if (!gameState.p1CombatChoice || !gameState.p2CombatChoice) {
        if (selectArea) selectArea.style.display = 'block';
        if (matchupArea) matchupArea.style.display = 'none';
        
        const container = document.getElementById('combat-choices');
        if (!container) return;
        container.innerHTML = "";

        let activePlayerText = !gameState.p1CombatChoice ? "JOGADOR 1" : "JOGADOR 2";
        let pool = !gameState.p1CombatChoice ? gameState.p1Final : gameState.p2Final;
        let used = !gameState.p1CombatChoice ? gameState.p1Used : gameState.p2Used;

        const combatTitle = document.getElementById('combat-title');
        if (combatTitle) combatTitle.innerText = `${activePlayerText} - Seleção Secreta de Combate`;

        if (privacyMode) {
            let privacyBtn = document.createElement('button');
            privacyBtn.className = "btn-action";
            privacyBtn.style.background = "#ff4757";
            privacyBtn.style.padding = "20px";
            privacyBtn.style.border = "none";
            privacyBtn.style.borderRadius = "8px";
            privacyBtn.style.color = "white";
            privacyBtn.style.cursor = "pointer";
            privacyBtn.innerText = `👁️ Vez do ${activePlayerText}.\nClique para escolher o Herói deste Round.`;
            privacyBtn.onclick = () => {
                privacyMode = false;
                buildCombatInterface();
            };
            container.appendChild(privacyBtn);
            if (confirmCombatBtn) confirmCombatBtn.style.display = 'none';
        } else {
            pool.forEach((char) => {
                let div = document.createElement('div');
                div.className = 'card' + (used.includes(char) ? ' used' : '');
                div.innerText = char;
                if (!used.includes(char)) {
                    div.onclick = () => {
                        document.querySelectorAll('#combat-choices .card').forEach(c => c.classList.remove('selected'));
                        div.classList.add('selected');
                        gameState.tempChoice = char;
                        if (confirmCombatBtn) confirmCombatBtn.disabled = false;
                    };
                }
                container.appendChild(div);
            });
            if (confirmCombatBtn) confirmCombatBtn.style.display = 'inline-block';
        }
    } else {
        if (selectArea) selectArea.style.display = 'none';
        if (matchupArea) matchupArea.style.display = 'block';
        const fP1 = document.getElementById('fighter-p1');
        const fP2 = document.getElementById('fighter-p2');
        if (fP1) fP1.innerText = gameState.p1CombatChoice;
        if (fP2) fP2.innerText = gameState.p2CombatChoice;
    }
}

const confirmCombatBtnEl = document.getElementById('btn-confirm-combat');
if (confirmCombatBtnEl) {
    confirmCombatBtnEl.onclick = () => {
        if (!gameState.p1CombatChoice) {
            gameState.p1CombatChoice = gameState.tempChoice;
        } else {
            gameState.p2CombatChoice = gameState.tempChoice;
        }
        gameState.tempChoice = null;
        privacyMode = true;
        confirmCombatBtnEl.disabled = true;
        buildCombatInterface();
    };
}

window.registerWinner = function(winnerNum) {
    if (winnerNum === 1) {
        gameState.p1Score++;
        gameState.p1Used.push(gameState.p1CombatChoice);
    } else {
        gameState.p2Score++;
        gameState.p2Used.push(gameState.p2CombatChoice);
    }
    gameState.p1CombatChoice = null;
    gameState.p2CombatChoice = null;
    privacyMode = true;
    renderGame();
};

window.onload = init;
