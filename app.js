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

const SUPABASE_URL = "https://qgqxegskziqzqpnomthc.supabase.co";
const SUPABASE_KEY = "EyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFncXhlZ3NremlxenFwbm9tdGhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM1MzQ0MTMsImV4cCI6MjA5OTExMDQxM30.42zo3MnIxUy_Ln10wtpeNvoKbL9DlzstfwyrCWvWfy8";

// Alterado o nome de 'supabase' para 'supabaseClient' para eliminar o conflito de sintaxe global
const supabaseClient = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY) : null;

const urlParams = new URLSearchParams(window.location.search);
let roomId = urlParams.get('room'); 

if (!roomId) {
    roomId = "sala_" + Math.random().toString(36).substring(2, 9);
    window.history.replaceState({}, '', `${window.location.pathname}?room=${roomId}`);
}

let playerNumber = 0; 

let gameState = {
    p1Connected: false, p2Connected: false, phase: 'wait',
    p1Cards: [], p2Cards: [], p1Saved: null, p2Saved: null,
    p1Banned: null, p2Banned: null, p1Final: [], p2Final: [],
    p1CombatChoice: null, p2CombatChoice: null,
    p1Used: [], p2Used: [], p1Score: 0, p2Score: 0
};

let selectedCardIndex = null;
let channel = null;

async function init() {
    renderGame();

    if (!supabaseClient) {
        document.getElementById('status-message').innerText = "Erro: Banco offline.";
        return;
    }
    
    channel = supabaseClient.channel(`room:${roomId}`, {
        config: { broadcast: { ack: true } }
    });
    
    channel.on('broadcast', { event: 'state-update' }, ({ payload }) => {
        gameState = payload;
        renderGame();
    }).on('broadcast', { event: 'req-sync' }, () => {
        if (playerNumber !== 0) {
            sendUpdate();
        }
    });

    channel.subscribe((status) => {
        if (status === 'SUBSCRIBED') {
            setTimeout(() => {
                if (channel) {
                    channel.send({ type: 'broadcast', event: 'req-sync' });
                }
            }, 300);
        }
    });
}

function sendUpdate() {
    if (channel) {
        channel.send({ type: 'broadcast', event: 'state-update', payload: gameState });
    }
    renderGame();
}

window.selectRole = function(num) {
    playerNumber = num;
    
    if (num === 1) {
        gameState.p1Connected = true;
    } else {
        gameState.p2Connected = true;
    }
    
    sendUpdate();
};

window.copyRoomLink = function() {
    const link = window.location.href;
    navigator.clipboard.writeText(link).then(() => {
        const btn = document.getElementById('btn-share-link');
        if (btn) {
            btn.innerText = "🔗 Link Copiado!";
            btn.style.background = "#2ed573";
            setTimeout(() => {
                btn.innerText = "📋 Copiar Link do Convidado";
                btn.style.background = "#1e90ff";
            }, 2000);
        }
    }).catch(() => {
        alert("Copie este link: " + link);
    });
};

const startBtnEl = document.getElementById('btn-start-draft');
if (startBtnEl) {
    startBtnEl.addEventListener('click', () => {
        let shuffled = [...PERSONAGENS].sort(() => 0.5 - Math.random());
        gameState.p1Cards = shuffled.slice(0, 4);
        gameState.p2Cards = shuffled.slice(4, 8);
        gameState.phase = 'phase1-save';
        sendUpdate();
    });
}

function renderGame() {
    const btnP1 = document.getElementById('btn-select-p1');
    const btnP2 = document.getElementById('btn-select-p2');
    
    if (btnP1) {
        if (gameState.p1Connected) { 
            btnP1.style.opacity = "0.4"; 
            btnP1.innerText = "J1 Ocupado";
        } else { 
            btnP1.style.opacity = "1"; 
            btnP1.innerText = "Ser Jogador 1"; 
        }
        if (playerNumber === 1) btnP1.classList.add('active');
    }
    
    if (btnP2) {
        if (gameState.p2Connected) { 
            btnP2.style.opacity = "0.4"; 
            btnP2.innerText = "J2 Ocupado";
        } else { 
            btnP2.style.opacity = "1"; 
            btnP2.innerText = "Ser Jogador 2"; 
        }
        if (playerNumber === 2) btnP2.classList.add('active');
    }

    const statusMsg = document.getElementById('status-message');
    const startBtn = document.getElementById('btn-start-draft');
    const shareBtn = document.getElementById('btn-share-link');

    if (statusMsg) {
        if (playerNumber === 0) {
            statusMsg.innerText = "Escolha um papel acima para entrar no jogo.";
            if (startBtn) startBtn.style.display = 'none';
            if (shareBtn) shareBtn.style.display = 'none';
        } else {
            if (gameState.p1Connected && gameState.p2Connected) {
                if (shareBtn) shareBtn.style.display = 'none';
                if (playerNumber === 1) {
                    statusMsg.innerText = "Jogador 2 conectado! Você pode iniciar o sorteio.";
                    if (startBtn) startBtn.style.display = 'inline-block';
                } else {
                    statusMsg.innerText = "Pronto! Aguardando o Jogador 1 iniciar o sorteio...";
                    if (startBtn) startBtn.style.display = 'none';
                }
            } else {
                statusMsg.innerText = `Você entrou como Jogador ${playerNumber}. Aguardando o oponente...`;
                if (startBtn) startBtn.style.display = 'none';
                if (shareBtn) shareBtn.style.display = 'inline-block';
            }
        }
    }

    if (gameState.phase.startsWith('phase')) {
        const scrConnect = document.getElementById('screen-connect');
        const scrDraft = document.getElementById('screen-draft');
        if (scrConnect) scrConnect.style.display = 'none';
        if (scrDraft) scrDraft.style.display = 'block';
        buildDraftInterface();
    }

    if (gameState.phase === 'combat') {
        const scrDraft = document.getElementById('screen-draft');
        const scrCombat = document.getElementById('screen-combat');
        if (scrDraft) scrDraft.style.display = 'none';
        if (scrCombat) scrCombat.style.display = 'block';
        buildCombatInterface();
    }
}

function buildDraftInterface() {
    const container = document.getElementById('cards-container');
    const title = document.getElementById('draft-phase-title');
    const instr = document.getElementById('draft-instructions');
    if (!container) return;
    container.innerHTML = "";
    
    let myCards = playerNumber === 1 ? gameState.p1Cards : gameState.p2Cards;
    let opCards = playerNumber === 1 ? gameState.p2Cards : gameState.p1Cards;
    let hasConfirmed = false;

    if (gameState.phase === 'phase1-save') {
        if (title) title.innerText = "Fase 1: Salvar Personagem";
        if (instr) instr.innerText = "Escolha 1 dos seus 4 heróis para SALVAR secretamente.";
        displayCards(myCards);
        hasConfirmed = playerNumber === 1 ? gameState.p1Saved : gameState.p2Saved;
    } else if (gameState.phase === 'phase2-ban') {
        if (title) title.innerText = "Fase 2: Excluir do Oponente";
        if (instr) instr.innerText = "Escolha 1 herói do seu OPONENTE para EXCLUIR do jogo.";
        let opSaved = playerNumber === 1 ? gameState.p2Saved : gameState.p1Saved;
        let opLeftovers = opCards.filter(c => c !== opSaved);
        displayCards(opLeftovers);
        hasConfirmed = playerNumber === 1 ? gameState.p1Banned : gameState.p2Banned;
    } else if (gameState.phase === 'phase3-final') {
        if (title) title.innerText = "Fase 3: Escolha Final";
        if (instr) instr.innerText = "Escolha mais 1 herói para fechar seu deck de 2.";
        let mySaved = playerNumber === 1 ? gameState.p1Saved : gameState.p2Saved;
        let opBanned = playerNumber === 1 ? gameState.p2Banned : gameState.p1Banned;
        let myLeftovers = myCards.filter(c => c !== mySaved && c !== opBanned);
        displayCards(myLeftovers);
        hasConfirmed = playerNumber === 1 ? gameState.p1Final.length === 2 : gameState.p2Final.length === 2;
    }

    const waitMsg = document.getElementById('wait-message');
    const confirmBtn = document.getElementById('btn-confirm-choice');
    if (waitMsg) waitMsg.style.display = hasConfirmed ? 'block' : 'none';
    if (confirmBtn) confirmBtn.style.display = hasConfirmed ? 'none' : 'inline-block';
}

function displayCards(array) {
    const container = document.getElementById('cards-container');
    if (!container) return;
    array.forEach((char, index) => {
        let div = document.createElement('div');
        div.className = 'card';
        div.innerText = char;
        div.onclick = () => {
            document.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));
            div.classList.add('selected');
            selectedCardIndex = index;
            const confirmBtn = document.getElementById('btn-confirm-choice');
            if (confirmBtn) confirmBtn.disabled = false;
        };
        container.appendChild(div);
    });
}

const confirmChoiceBtnEl = document.getElementById('btn-confirm-choice');
if (confirmChoiceBtnEl) {
    confirmChoiceBtnEl.onclick = () => {
        let myCards = playerNumber === 1 ? gameState.p1Cards : gameState.p2Cards;
        let opCards = playerNumber === 1 ? gameState.p2Cards : gameState.p1Cards;
        
        let activeCards = myCards;
        if (gameState.phase === 'phase2-ban') {
            let opSaved = playerNumber === 1 ? gameState.p2Saved : gameState.p1Saved;
            activeCards = opCards.filter(c => c !== opSaved);
        } else if (gameState.phase === 'phase3-final') {
            let mySaved = playerNumber === 1 ? gameState.p1Saved : gameState.p2Saved;
            let opBanned = playerNumber === 1 ? gameState.p2Banned : gameState.p1Banned;
            activeCards = myCards.filter(c => c !== mySaved && c !== opBanned);
        }

        let picked = activeCards[selectedCardIndex];

        if (gameState.phase === 'phase1-save') {
            if (playerNumber === 1) gameState.p1Saved = picked; else gameState.p2Saved = picked;
            if (gameState.p1Saved && gameState.p2Saved) gameState.phase = 'phase2-ban';
        } else if (gameState.phase === 'phase2-ban') {
            if (playerNumber === 1) gameState.p1Banned = picked; else gameState.p2Banned = picked;
            if (gameState.p1Banned && gameState.p2Banned) gameState.phase = 'phase3-final';
        } else if (gameState.phase === 'phase3-final') {
            if (playerNumber === 1) gameState.p1Final = [gameState.p1Saved, picked];
            else gameState.p2Final = [gameState.p2Saved, picked];
            if (gameState.p1Final.length === 2 && gameState.p2Final.length === 2) gameState.phase = 'combat';
        }

        selectedCardIndex = null;
        confirmChoiceBtnEl.disabled = true;
        sendUpdate();
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

    let myPool = playerNumber === 1 ? gameState.p1Final : gameState.p2Final;
    let myUsed = playerNumber === 1 ? gameState.p1Used : gameState.p2Used;
    let hasChosen = playerNumber === 1 ? gameState.p1CombatChoice : gameState.p2CombatChoice;

    const selectArea = document.getElementById('combat-selection-area');
    const matchupArea = document.getElementById('combat-matchup-area');

    if (!hasChosen) {
        if (selectArea) selectArea.style.display = 'block';
        if (matchupArea) matchupArea.style.display = 'none';
        const container = document.getElementById('combat-choices');
        if (container) {
            container.innerHTML = "";
            myPool.forEach((char) => {
                let div = document.createElement('div');
                div.className = 'card' + (myUsed.includes(char) ? ' used' : '');
                div.innerText = char;
                if (!myUsed.includes(char)) {
                    div.onclick = () => {
                        document.querySelectorAll('#combat-choices .card').forEach(c => c.classList.remove('selected'));
                        div.classList.add('selected');
                        gameState.tempChoice = char;
                        const confirmCombatBtn = document.getElementById('btn-confirm-combat');
                        if (confirmCombatBtn) confirmCombatBtn.disabled = false;
                    };
                }
                container.appendChild(div);
            });
        }
    } else {
        if (selectArea) selectArea.style.display = 'none';
        if (matchupArea) matchupArea.style.display = 'block';

        const fP1 = document.getElementById('fighter-p1');
        const fP2 = document.getElementById('fighter-p2');
        if (fP1 && fP2) {
            if (gameState.p1CombatChoice && gameState.p2CombatChoice) {
                fP1.innerText = gameState.p1CombatChoice;
                fP2.innerText = gameState.p2CombatChoice;
            } else {
                fP1.innerText = playerNumber === 1 ? "Pronto" : "Aguardando...";
                fP2.innerText = playerNumber === 2 ? "Pronto" : "Aguardando...";
            }
        }
    }
}

const confirmCombatBtnEl = document.getElementById('btn-confirm-combat');
if (confirmCombatBtnEl) {
    confirmCombatBtnEl.onclick = () => {
        if (playerNumber === 1) gameState.p1CombatChoice = gameState.tempChoice;
        else gameState.p2CombatChoice = gameState.tempChoice;
        confirmCombatBtnEl.disabled = true;
        sendUpdate();
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
    sendUpdate();
}

window.onload = init;
