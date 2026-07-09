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
const supabase = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY) : null;

// Sala global padrão para conectar os dois que acessarem o link
let roomId = "sala_unica"; 
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
    if(!supabase) return;
    
    channel = supabase.channel(`room:${roomId}`);
    
    channel.on('broadcast', { event: 'state-update' }, ({ payload }) => {
        gameState = payload;
        renderGame();
    }).on('broadcast', { event: 'req-sync' }, () => {
        if(playerNumber !== 0) sendUpdate();
    }).subscribe((status) => {
        if(status === 'SUBSCRIBED') {
            channel.send({ type: 'broadcast', event: 'req-sync' });
        }
    });

    renderGame();
}

function sendUpdate() {
    if(channel) {
        channel.send({ type: 'broadcast', event: 'state-update', payload: gameState });
    }
    renderGame();
}

// Função chamada ao clicar nos botões manuais de Jogador 1 ou 2
window.selectRole = function(num) {
    playerNumber = num;
    
    document.getElementById('btn-select-p1').classList.remove('active');
    document.getElementById('btn-select-p2').classList.remove('active');
    
    if(num === 1) {
        gameState.p1Connected = true;
        document.getElementById('btn-select-p1').classList.add('active');
    } else {
        gameState.p2Connected = true;
        document.getElementById('btn-select-p2').classList.add('active');
    }
    
    sendUpdate();
};

document.getElementById('btn-start-draft').addEventListener('click', () => {
    let shuffled = [...PERSONAGENS].sort(() => 0.5 - Math.random());
    gameState.p1Cards = shuffled.slice(0, 4);
    gameState.p2Cards = shuffled.slice(4, 8);
    gameState.phase = 'phase1-save';
    sendUpdate();
});

function renderGame() {
    // Atualiza o estado visual dos botões de seleção baseado no banco
    if(gameState.p1Connected) document.getElementById('btn-select-p1').style.opacity = "0.5";
    if(gameState.p2Connected) document.getElementById('btn-select-p2').style.opacity = "0.5";

    const statusMsg = document.getElementById('status-message');
    const startBtn = document.getElementById('btn-start-draft');

    if (playerNumber === 0) {
        statusMsg.innerText = "Escolha um papel acima para entrar no jogo.";
        startBtn.style.display = 'none';
    } else {
        if (gameState.p1Connected && gameState.p2Connected) {
            if (playerNumber === 1) {
                statusMsg.innerText = "Jogador 2 conectado! Você pode iniciar o sorteio.";
                startBtn.style.display = 'inline-block';
            } else {
                statusMsg.innerText = "Pronto! Aguardando o Jogador 1 iniciar o sorteio...";
                startBtn.style.display = 'none';
            }
        } else {
            statusMsg.innerText = `Você entrou como Jogador ${playerNumber}. Aguardando o outro jogador escolher papel...`;
            startBtn.style.display = 'none';
        }
    }

    if(gameState.phase.startsWith('phase')) {
        document.getElementById('screen-connect').style.display = 'none';
        document.getElementById('screen-draft').style.display = 'block';
        buildDraftInterface();
    }

    if(gameState.phase === 'combat') {
        document.getElementById('screen-draft').style.display = 'none';
        document.getElementById('screen-combat').style.display = 'block';
        buildCombatInterface();
    }
}

function buildDraftInterface() {
    const container = document.getElementById('cards-container');
    const title = document.getElementById('draft-phase-title');
    const instr = document.getElementById('draft-instructions');
    container.innerHTML = "";
    
    let myCards = playerNumber === 1 ? gameState.p1Cards : gameState.p2Cards;
    let opCards = playerNumber === 1 ? gameState.p2Cards : gameState.p1Cards;
    let hasConfirmed = false;

    if (gameState.phase === 'phase1-save') {
        title.innerText = "Fase 1: Salvar Personagem";
        instr.innerText = "Escolha 1 dos seus 4 heróis para SALVAR secretamente.";
        displayCards(myCards);
        hasConfirmed = playerNumber === 1 ? gameState.p1Saved : gameState.p2Saved;
    } else if (gameState.phase === 'phase2-ban') {
        title.innerText = "Fase 2: Excluir do Oponente";
        instr.innerText = "Escolha 1 herói do seu OPONENTE para EXCLUIR do jogo.";
        let opSaved = playerNumber === 1 ? gameState.p2Saved : gameState.p1Saved;
        let opLeftovers = opCards.filter(c => c !== opSaved);
        displayCards(opLeftovers);
        hasConfirmed = playerNumber === 1 ? gameState.p1Banned : gameState.p2Banned;
    } else if (gameState.phase === 'phase3-final') {
        title.innerText = "Fase 3: Escolha Final";
        instr.innerText = "Escolha mais 1 herói para fechar seu deck de 2.";
        let mySaved = playerNumber === 1 ? gameState.p1Saved : gameState.p2Saved;
        let opBanned = playerNumber === 1 ? gameState.p2Banned : gameState.p1Banned;
        let myLeftovers = myCards.filter(c => c !== mySaved && c !== opBanned);
        displayCards(myLeftovers);
        hasConfirmed = playerNumber === 1 ? gameState.p1Final.length === 2 : gameState.p2Final.length === 2;
    }

    document.getElementById('wait-message').style.display = hasConfirmed ? 'block' : 'none';
    document.getElementById('btn-confirm-choice').style.display = hasConfirmed ? 'none' : 'inline-block';
}

function displayCards(array) {
    const container = document.getElementById('cards-container');
    array.forEach((char, index) => {
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
}

document.getElementById('btn-confirm-choice').onclick = () => {
    let myCards = playerNumber === 1 ? gameState.p1Cards : gameState.p2Cards;
    let opCards = playerNumber === 1 ? gameState.p2Cards : gameState.p1Cards;
    
    let activeCards = myCards;
    if(gameState.phase === 'phase2-ban') {
        let opSaved = playerNumber === 1 ? gameState.p2Saved : gameState.p1Saved;
        activeCards = opCards.filter(c => c !== opSaved);
    } else if(gameState.phase === 'phase3-final') {
        let mySaved = playerNumber === 1 ? gameState.p1Saved : gameState.p2Saved;
        let opBanned = playerNumber === 1 ? gameState.p2Banned : gameState.p1Banned;
        activeCards = myCards.filter(c => c !== mySaved && c !== opBanned);
    }

    let picked = activeCards[selectedCardIndex];

    if (gameState.phase === 'phase1-save') {
        if(playerNumber === 1) gameState.p1Saved = picked; else gameState.p2Saved = picked;
        if(gameState.p1Saved && gameState.p2Saved) gameState.phase = 'phase2-ban';
    } else if (gameState.phase === 'phase2-ban') {
        if(playerNumber === 1) gameState.p1Banned = picked; else gameState.p2Banned = picked;
        if(gameState.p1Banned && gameState.p2Banned) gameState.phase = 'phase3-final';
    } else if (gameState.phase === 'phase3-final') {
        if(playerNumber === 1) gameState.p1Final = [gameState.p1Saved, picked];
        else gameState.p2Final = [gameState.p2Saved, picked];
        if(gameState.p1Final.length === 2 && gameState.p2Final.length === 2) gameState.phase = 'combat';
    }

    selectedCardIndex = null;
    document.getElementById('btn-confirm-choice').disabled = true;
    sendUpdate();
};

function buildCombatInterface() {
    document.getElementById('score-p1').innerText = gameState.p1Score;
    document.getElementById('score-p2').innerText = gameState.p2Score;

    if(gameState.p1Score >= 2 || gameState.p2Score >= 2) {
        alert(`🏆 Fim de jogo! Campeão: ${gameState.p1Score >= 2 ? 'Jogador 1' : 'Jogador 2'}`);
        return;
    }

    let myPool = playerNumber === 1 ? gameState.p1Final : gameState.p2Final;
    let myUsed = playerNumber === 1 ? gameState.p1Used : gameState.p2Used;
    let hasChosen = playerNumber === 1 ? gameState.p1CombatChoice : gameState.p2CombatChoice;

    if(!hasChosen) {
        document.getElementById('combat-selection-area').style.display = 'block';
        document.getElementById('combat-matchup-area').style.display = 'none';
        const container = document.getElementById('combat-choices');
        container.innerHTML = "";

        myPool.forEach((char) => {
            let div = document.createElement('div');
            div.className = 'card' + (myUsed.includes(char) ? ' used' : '');
            div.innerText = char;
            if(!myUsed.includes(char)) {
                div.onclick = () => {
                    document.querySelectorAll('#combat-choices .card').forEach(c => c.classList.remove('selected'));
                    div.classList.add('selected');
                    gameState.tempChoice = char;
                    document.getElementById('btn-confirm-combat').disabled = false;
                };
            }
            container.appendChild(div);
        });
    } else {
        document.getElementById('combat-selection-area').style.display = 'none';
        document.getElementById('combat-matchup-area').style.display = 'block';

        if(gameState.p1CombatChoice && gameState.p2CombatChoice) {
            document.getElementById('fighter-p1').innerText = gameState.p1CombatChoice;
            document.getElementById('fighter-p2').innerText = gameState.p2CombatChoice;
        } else {
            document.getElementById('fighter-p1').innerText = playerNumber === 1 ? "Pronto" : "Aguardando...";
            document.getElementById('fighter-p2').innerText = playerNumber === 2 ? "Pronto" : "Aguardando...";
        }
    }
}

document.getElementById('btn-confirm-combat').onclick = () => {
    if(playerNumber === 1) gameState.p1CombatChoice = gameState.tempChoice;
    else gameState.p2CombatChoice = gameState.tempChoice;
    document.getElementById('btn-confirm-combat').disabled = true;
    sendUpdate();
};

window.registerWinner = function(winnerNum) {
    if(winnerNum === 1) {
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
