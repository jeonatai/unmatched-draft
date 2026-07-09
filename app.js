const PERSONAGENS = [
    "Alice | O Jaguadarte", "Chapeuzinho Vermelho & O Caçador", "Sherlock Holmes | Dr. Watson",
    "Drácula | As Três Irmãs", "Medusa | Harpias", "Robin Hood | Os Fora-da-lei",
    "Aquiles | Pátroclo", "Beowulf & Wiglaf", "Maria Sangrenta", "O Gênio",
    "Pé Grande | O Lebrílope", "Houdini | Bess", "Simbad | O Carregador", "Demolidor",
    "Yennenga | Arqueiras", "Dr. Jekyll | Sr. Hyde", "Homem Invisível", "Annie Christmas | Charlie",
    "Mercenário", "Raptores", "Rei Arthur | Merlin", "Robert Muldoon | Trabadores Ingen",
    "Shakespeare | Atores", "Sun Wukong", "Tomoe Gozen", "Eletrika | O tentáculo",
    "Titânia | Oberon", "As 3 irmãs", "As Irmãs Estranhas", "Darth Vader", "Deadpool",
    "Dra. Ellie Sattler | Dr. Ian Malcolm", "Fantomas", "Hamlet", "Nicolas Tesla",
    "Oda Nobunaga | Guarda de Honra", "T-Rex", "Homem mariposa", "Homem-Mariposa | Sapo de Loveland",
    "Invasor maciano", "Jill Trent | Daizy", "Lampião e Corisco"
];

// Gerenciamento de Estado Local (Sem banco de dados, rodando liso no mesmo aparelho)
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
let privacyMode = true; // Controla se as cartas estão borradas/escondidas na tela

function init() {
    renderGame();
}

// Inicia o Draft embaralhando tudo localmente
document.getElementById('btn-start-draft').addEventListener('click', () => {
    let shuffled = [...PERSONAGENS].sort(() => 0.5 - Math.random());
    gameState.p1Cards = shuffled.slice(0, 4);
    gameState.p2Cards = shuffled.slice(4, 8);
    gameState.phase = 'phase1-j1-save'; // Começa com o J1 escolhendo o que salvar
    privacyMode = true; 
    renderGame();
});

function renderGame() {
    const screenConnect = document.getElementById('screen-connect');
    const screenDraft = document.getElementById('screen-draft');
    const screenCombat = document.getElementById('screen-combat');

    if (gameState.phase === 'wait') {
        screenConnect.style.display = 'block';
        screenDraft.style.display = 'none';
        screenCombat.style.display = 'none';
        return;
    }

    if (gameState.phase.startsWith('phase')) {
        screenConnect.style.display = 'none';
        screenDraft.style.display = 'block';
        screenCombat.style.display = 'none';
        buildDraftInterface();
        return;
    }

    if (gameState.phase === 'combat') {
        screenConnect.style.display = 'none';
        screenDraft.style.display = 'none';
        screenCombat.style.display = 'block';
        buildCombatInterface();
    }
}

function buildDraftInterface() {
    const title = document.getElementById('draft-phase-title');
    const instr = document.getElementById('draft-instructions');
    const container = document.getElementById('cards-container');
    container.innerHTML = "";

    let activePlayerText = "";
    let cardsToDisplay = [];
    
    // Configura o fluxo de turnos e esconde o jogo do oponente
    switch (gameState.phase) {
        case 'phase1-j1-save':
            activePlayerText = "JOGADOR 1";
            title.innerText = `${activePlayerText} - Fase 1: Salvar Herói`;
            instr.innerText = "Escolha 1 herói para SALVAR secretamente. Depois, passe o aparelho.";
            cardsToDisplay = gameState.p1Cards;
            break;
        case 'phase1-j2-save':
            activePlayerText = "JOGADOR 2";
            title.innerText = `${activePlayerText} - Fase 1: Salvar Herói`;
            instr.innerText = "Escolha 1 herói para SALVAR secretamente. Depois, passe o aparelho.";
            cardsToDisplay = gameState.p2Cards;
            break;
        case 'phase2-j1-ban':
            activePlayerText = "JOGADOR 1";
            title.innerText = `${activePlayerText} - Fase 2: Banir do Oponente`;
            instr.innerText = "Escolha 1 herói do Jogador 2 para BANIR (Ele não verá o herói salvo dele).";
            cardsToDisplay = gameState.p2Cards.filter(c => c !== gameState.p2Saved);
            break;
        case 'phase2-j2-ban':
            activePlayerText = "JOGADOR 2";
            title.innerText = `${activePlayerText} - Fase 2: Banir do Oponente`;
            instr.innerText = "Escolha 1 herói do Jogador 1 para BANIR (Ele não verá o herói salvo dele).";
            cardsToDisplay = gameState.p1Cards.filter(c => c !== gameState.p1Saved);
            break;
        case 'phase3-j1-final':
            activePlayerText = "JOGADOR 1";
            title.innerText = `${activePlayerText} - Fase 3: Escolha Final`;
            instr.innerText = "Escolha seu segundo herói para fechar seu deck de 2.";
            cardsToDisplay = gameState.p1Cards.filter(c => c !== gameState.p1Saved && c !== gameState.p2Banned);
            break;
        case 'phase3-j2-final':
            activePlayerText = "JOGADOR 2";
            title.innerText = `${activePlayerText} - Fase 3: Escolha Final`;
            instr.innerText = "Escolha seu segundo herói para fechar seu deck de 2 e ir para o combate!";
            cardsToDisplay = gameState.p2Cards.filter(c => c !== gameState.p2Saved && c !== gameState.p1Banned);
            break;
    }

    // Cria a barreira de privacidade para o sorteio ser secreto
    if (privacyMode) {
        let privacyBtn = document.createElement('button');
        privacyBtn.className = "btn-action";
        privacyBtn.style.background = "#ffa500";
        privacyBtn.style.padding = "20px";
        privacyBtn.style.fontSize = "16px";
        privacyBtn.innerText = `👁️ Vez do ${activePlayerText}.\nClique para revelar as opções na tela.`;
        privacyBtn.onclick = () => {
            privacyMode = false;
            buildDraftInterface();
        };
        container.appendChild(privacyBtn);
        document.getElementById('btn-confirm-choice').style.display = 'none';
    } else {
        // Mostra as cartas para o jogador atual
        cardsToDisplay.forEach((char, index) => {
            let div = document.createElement('div');
            div.className = 'card';
            div.innerText = char;
            div.onclick = () => {
                document.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));
                div.classList.add('selected');
                selectedCardIndex = index;
                document.getElementById('btn-confirm-choice').disabled = false;
            };
            container.appendChild(div);
        });
        document.getElementById('btn-confirm-choice').style.display = 'inline-block';
    }
}

// Processa a confirmação de cada etapa do Draft local
document.getElementById('btn-confirm-choice').onclick = () => {
    let cardsToDisplay = [];
    
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
    privacyMode = true; // Ativa a privacidade para o próximo jogador não ver o histórico
    document.getElementById('btn-confirm-choice').disabled = true;
    renderGame();
};

function buildCombatInterface() {
    document.getElementById('score-p1').innerText = gameState.p1Score;
    document.getElementById('score-p2').innerText = gameState.p2Score;

    if (gameState.p1Score >= 2 || gameState.p2Score >= 2) {
        alert(`🏆 Fim de jogo! Campeão: ${gameState.p1Score >= 2 ? 'Jogador 1' : 'Jogador 2'}`);
        return;
    }

    const selectArea = document.getElementById('combat-selection-area');
    const matchupArea = document.getElementById('combat-matchup-area');

    // Se algum jogador ainda não escolheu seu combatente secreto do round
    if (!gameState.p1CombatChoice || !gameState.p2CombatChoice) {
        selectArea.style.display = 'block';
        matchupArea.style.display = 'none';
        
        const container = document.getElementById('combat-choices');
        container.innerHTML = "";

        let activePlayerText = !gameState.p1CombatChoice ? "JOGADOR 1" : "JOGADOR 2";
        let pool = !gameState.p1CombatChoice ? gameState.p1Final : gameState.p2Final;
        let used = !gameState.p1CombatChoice ? gameState.p1Used : gameState.p2Used;

        document.getElementById('combat-title').innerText = `${activePlayerText} - Seleção Secreta de Combate`;

        if (privacyMode) {
            let privacyBtn = document.createElement('button');
            privacyBtn.className = "btn-action";
            privacyBtn.style.background = "#ff4757";
            privacyBtn.style.padding = "20px";
            privacyBtn.innerText = `👁️ Vez do ${activePlayerText}.\nClique para escolher o Herói deste Round.`;
            privacyBtn.onclick = () => {
                privacyMode = false;
                buildCombatInterface();
            };
            container.appendChild(privacyBtn);
            document.getElementById('btn-confirm-combat').style.display = 'none';
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
                        document.getElementById('btn-confirm-combat').disabled = false;
                    };
                }
                container.appendChild(div);
            });
            document.getElementById('btn-confirm-combat').style.display = 'inline-block';
        }
    } else {
        // Revelação simultânea na tela após os dois escolherem!
        selectArea.style.display = 'none';
        matchupArea.style.display = 'block';
        document.getElementById('fighter-p1').innerText = gameState.p1CombatChoice;
        document.getElementById('fighter-p2').innerText = gameState.p2CombatChoice;
    }
}

document.getElementById('btn-confirm-combat').onclick = () => {
    if (!gameState.p1CombatChoice) {
        gameState.p1CombatChoice = gameState.tempChoice;
    } else {
        gameState.p2CombatChoice = gameState.tempChoice;
    }
    gameState.tempChoice = null;
    privacyMode = true;
    document.getElementById('btn-confirm-combat').disabled = true;
    buildCombatInterface();
};

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
