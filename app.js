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

// Gerenciamento de Estado Local (Pass-and-Play)
let gameState = {
    phase: 'wait', // wait, phase1-j1-save, phase1-j2-save, phase2-j1-ban, phase2-j2-ban, phase3-j1-final, phase3-j2-final, combat
    p1Cards: [], p2Cards: [],
    p1Saved: null, p2Saved: null,
    p1Banned: null, p2Banned: null,
    p1Final: [], p2Final: [],
    p1CombatChoice: null, p2CombatChoice: null,
    tempChoice: null,
    p1Used: [], p2Used: [],
    p1Score: 0, p2Score: 0
};

let selectedCardIndex = null;
let privacyMode = true;

function init() {
    renderGame();
}

// Torna as funções visíveis para os cliques no HTML
window.startLocalDraft = startLocalDraft;

function startLocalDraft() {
    privacyMode = true;
    selectedCardIndex = null;

    let shuffled = [...PERSONAGENS];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    gameState.p1Cards = shuffled.slice(0, 4);
    gameState.p2Cards = shuffled.slice(4, 8);

    gameState.phase = 'phase1-j1-save';
    renderGame();
}

function renderGame() {
    const screenConnect = document.getElementById('screen-connect');
    const screenDraft = document.getElementById('screen-draft');
    const screenCombat = document.getElementById('screen-combat');

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
            cardsToDisplay = gameState.p2Cards.filter(c => c.nome !== gameState.p2Saved.nome);
            break;
        case 'phase2-j2-ban':
            activePlayerText = "JOGADOR 2";
            if (title) title.innerText = `${activePlayerText} - Fase 2: Banir do Oponente`;
            if (instr) instr.innerText = "Escolha 1 herói do Jogador 1 para BANIR.";
            cardsToDisplay = gameState.p1Cards.filter(c => c.nome !== gameState.p1Saved.nome);
            break;
        case 'phase3-j1-final':
            activePlayerText = "JOGADOR 1";
            if (title) title.innerText = `${activePlayerText} - Fase 3: Escolha Final`;
            if (instr) instr.innerText = "Escolha seu segundo herói para fechar seu deck de 2.";
            cardsToDisplay = gameState.p1Cards.filter(c => c.nome !== gameState.p1Saved.nome && c.nome !== gameState.p2Banned.nome);
            break;
        case 'phase3-j2-final':
            activePlayerText = "JOGADOR 2";
            if (title) title.innerText = `${activePlayerText} - Fase 3: Escolha Final`;
            if (instr) instr.innerText = "Escolha seu segundo herói para fechar seu deck de 2 e ir para o combate!";
            cardsToDisplay = gameState.p2Cards.filter(c => c.nome !== gameState.p2Saved.nome && c.nome !== gameState.p1Banned.nome);
            break;
    }

    const confirmBtn = document.getElementById('btn-confirm-choice');

    if (privacyMode) {
        let privacyBtn = document.createElement('button');
        privacyBtn.className = "btn-action";
        privacyBtn.style.background = "#ffa500";
        privacyBtn.innerText = `👁️ Vez do ${activePlayerText}. Clique para revelar as opções na tela.`;
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

            let textSpan = document.createElement('span');
            textSpan.innerText = char.nome;
            textSpan.style.margin = "auto";

            div.appendChild(textSpan);

            div.onclick = () => {
                document.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));
                div.classList.add('selected');
                selectedCardIndex = index;
                if (confirmBtn) confirmBtn.disabled = false;
            };
            container.appendChild(div);
        });
        if (confirmBtn) {
            confirmBtn.style.display = 'inline-block';
            confirmBtn.disabled = true;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
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
                let available = gameState.p2Cards.filter(c => c.nome !== gameState.p2Saved.nome);
                gameState.p1Banned = available[selectedCardIndex];
                gameState.phase = 'phase2-j2-ban';
            } else if (gameState.phase === 'phase2-j2-ban') {
                let available = gameState.p1Cards.filter(c => c.nome !== gameState.p1Saved.nome);
                gameState.p2Banned = available[selectedCardIndex];
                gameState.phase = 'phase3-j1-final';
            } else if (gameState.phase === 'phase3-j1-final') {
                let available = gameState.p1Cards.filter(c => c.nome !== gameState.p1Saved.nome && c.nome !== gameState.p2Banned.nome);
                gameState.p1Final = [gameState.p1Saved, available[selectedCardIndex]];
                gameState.phase = 'phase3-j2-final';
            } else if (gameState.phase === 'phase3-j2-final') {
                let available = gameState.p2Cards.filter(c => c.nome !== gameState.p2Saved.nome && c.nome !== gameState.p1Banned.nome);
                gameState.p2Final = [gameState.p2Saved, available[selectedCardIndex]];
                gameState.phase = 'combat';
            }

            selectedCardIndex = null;
            privacyMode = true;
            confirmChoiceBtnEl.disabled = true;
            renderGame();
        };
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
});

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
            privacyBtn.innerText = `👁️ Vez do ${activePlayerText}. Clique para escolher o Herói deste Round.`;
            privacyBtn.onclick = () => {
                privacyMode = false;
                buildCombatInterface();
            };
            container.appendChild(privacyBtn);
            if (confirmCombatBtn) confirmCombatBtn.style.display = 'none';
        } else {
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
                        gameState.tempChoice = char;
                        if (confirmCombatBtn) confirmCombatBtn.disabled = false;
                    };
                }
                container.appendChild(div);
            });
            if (confirmCombatBtn) {
                confirmCombatBtn.style.display = 'inline-block';
                confirmCombatBtn.disabled = true;
            }
        }
    } else {
        if (selectArea) selectArea.style.display = 'none';
        if (matchupArea) matchupArea.style.display = 'block';
        const fP1 = document.getElementById('fighter-p1');
        const fP2 = document.getElementById('fighter-p2');

        if (fP1) fP1.innerHTML = `<span>${gameState.p1CombatChoice.nome}</span>`;
        if (fP2) fP2.innerHTML = `<span>${gameState.p2CombatChoice.nome}</span>`;
    }
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
