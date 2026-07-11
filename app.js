// Lista limpa e estruturada com objetos para suportar nome e imagem
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
    { nome: "Dr. Jekyll | Sr. Hyde", img: "URL_DA_IMAGEM" },
    { nome: "Homem Invisível", img: "URL_DA_IMAGEM" },
    { nome: "Annie Christmas | Charlie", img: "URL_DA_IMAGEM" },
    { nome: "Mercenário", img: "URL_DA_IMAGEM" },
    { nome: "Raptores", img: "URL_DA_IMAGEM" },
    { nome: "Rei Arthur | Merlin", img: "URL_DA_IMAGEM" },
    { nome: "Robert Muldoon | Trabadores Ingen", img: "URL_DA_IMAGEM" },
    { nome: "Shakespeare | Atores", img: "URL_DA_IMAGEM" },
    { nome: "Sun Wukong", img: "URL_DA_IMAGEM" },
    { nome: "Tomoe Gozen", img: "URL_DA_IMAGEM" },
    { nome: "Eletrika | O tentáculo", img: "URL_DA_IMAGEM" },
    { nome: "Titânia | Oberon", img: "URL_DA_IMAGEM" },
    { nome: "As Irmãs Estranhas", img: "URL_DA_IMAGEM" },
    { nome: "Darth Vader", img: "URL_DA_IMAGEM" },
    { nome: "Deadpool", img: "URL_DA_IMAGEM" },
    { nome: "Dra. Ellie Sattler | Dr. Ian Malcolm", img: "URL_DA_IMAGEM" },
    { nome: "Fantomas", img: "URL_DA_IMAGEM" },
    { nome: "Hamlet", img: "URL_DA_IMAGEM" },
    { nome: "Nicolas Tesla", img: "URL_DA_IMAGEM" },
    { nome: "Oda Nobunaga | Guarda de Honra", img: "URL_DA_IMAGEM" },
    { nome: "T-Rex", img: "URL_DA_IMAGEM" },
    { nome: "Homem-Mariposa | Sapo de Loveland", img: "URL_DA_IMAGEM" },
    { nome: "Invasor maciano", img: "URL_DA_IMAGEM" },
    { nome: "Jill Trent | Daizy", img: "URL_DA_IMAGEM" },
    { nome: "Lampião e Corisco", img: "URL_DA_IMAGEM" }
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

// Qualquer botão de jogador clicado inicia o draft local
window.selectRole = function(num) {
    startLocalDraft();
};

const startBtnEl = document.getElementById('btn-start-draft');
if (startBtnEl) {
    startBtnEl.addEventListener('click', () => {
        startLocalDraft();
    });
}

// CORREÇÃO: Embaralhamento robusto usando o algoritmo de Fisher-Yates
function startLocalDraft() {
    let shuffled = [...PERSONAGENS];
    
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    gameState.p1Cards = shuffled.slice(0, 4);
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
            
            // Injeção da imagem do herói
            let img = document.createElement('img');
            img.src = char.img;
            img.alt = char.nome;
            img.className = 'card-image'; 
            img.style.width = '100%';
            img.style.height = 'auto';
            img.style.display = 'block';

            let textSpan = document.createElement('span');
            textSpan.innerText = char.nome;

            div.appendChild(img);
            div.appendChild(textSpan);

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
                let isUsed = used.some(u => u.nome === char.nome);
                let div = document.createElement('div');
                div.className = 'card' + (isUsed ? ' used' : '');
                
                // Injeção da imagem do herói na seleção de combate
                let img = document.createElement('img');
                img.src = char.img;
                img.alt = char.nome;
                img.className = 'card-image';
                img.style.width = '100%';
                img.style.height = 'auto';

                let textSpan = document.createElement('span');
                textSpan.innerText = char.nome;

                div.appendChild(img);
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
            if (confirmCombatBtn) confirmCombatBtn.style.display = 'inline-block';
        }
    } else {
        if (selectArea) selectArea.style.display = 'none';
        if (matchupArea) matchupArea.style.display = 'block';
        const fP1 = document.getElementById('fighter-p1');
        const fP2 = document.getElementById('fighter-p2');
        
        // Exibe imagem + nome na tela de confronto direto
        if (fP1) fP1.innerHTML = `<img src="${gameState.p1CombatChoice.img}" style="max-width:150px; height:auto; display:block; margin:0 auto;"><br>${gameState.p1CombatChoice.nome}`;
        if (fP2) fP2.innerHTML = `<img src="${gameState.p2CombatChoice.img}" style="max-width:150px; height:auto; display:block; margin:0 auto;"><br>${gameState.p2CombatChoice.nome}`;
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
