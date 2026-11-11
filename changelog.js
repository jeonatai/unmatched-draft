// ===================================================================
// NOVIDADES DA VERSÃO
// Para lançar uma nova atualização: troque CHANGELOG.version e a lista
// "items" abaixo. A aba aparece uma única vez para cada pessoa (fica
// salvo no navegador) e pode ser reaberta pelo "Novidades" na tela inicial.
// ===================================================================
const CHANGELOG = {
    version: 'V0.9.6',
    title: 'Novidades da atualização',
    items: [
        { icon: '🎲', text: 'Melhor de 3: novo botão para re-sortear os personagens. O outro jogador precisa permitir.' },
        { icon: '⚔️', text: 'Nova ferramenta Confrontos: escolha dois heróis e veja a porcentagem de vitória de cada um, com link para compartilhar.' },
        { icon: '🏅', text: 'Novo Ranking de heróis, do mais forte ao mais fraco, com busca e posição numérica.' },
        { icon: '📊', text: 'Porcentagem de vitória mais clara: mostra o número de jogos e, sem confrontos diretos, o desempenho geral.' },
        { icon: '🎨', text: 'Porcentagens de vitória com as mesmas cores do Ranking: verde, amarelo, vermelho e cinza (sem dados).' },
        { icon: '⏱️', text: 'Cronômetro: se alguém pausar e esquecer, agora dá para ajustar o tempo manualmente no botão ✏️.' },
        { icon: '🧹', text: 'Removida a lista "Heróis sorteados" do Sorteio Rápido, para a tela ficar mais limpa.' },
        { icon: '🧼', text: 'Tela de combate mais limpa: "Jogador inicial" vira uma etiqueta no card do herói e saíram textos desnecessários.' },
        { icon: '🔀', text: 'Sorteio melhorado em todos os modos, com menos repetição de heróis.' },
        { icon: '🛠️', text: 'Correção: a revanche no Melhor de 3 agora sorteia heróis novos.' },
        { icon: '📱', text: 'Layout mais rápido e prático no celular.' },
        { icon: '🗑️', text: 'Modo Torneio removido, para deixar o site mais leve.' }
    ]
};

(function () {
    const SEEN_KEY = 'unmatched_seen_version';

    function getSeen() {
        try { return localStorage.getItem(SEEN_KEY); } catch (e) { return null; }
    }
    function setSeen() {
        try { localStorage.setItem(SEEN_KEY, CHANGELOG.version); } catch (e) { /* sem localStorage: só mostra de novo */ }
    }

    function injectStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .cl-overlay { position: fixed; inset: 0; background: rgba(0,0,0,.75); display: flex; align-items: center; justify-content: center; z-index: 3000; padding: 16px; animation: clFade .18s ease-out; }
            .cl-box { background: #1e1e24; border: 2px solid #ff4757; border-radius: 16px; padding: 20px 18px 16px; max-width: 400px; width: 100%; max-height: 85vh; max-height: 85dvh; display: flex; flex-direction: column; box-shadow: 0 10px 40px rgba(0,0,0,.6); text-align: left; }
            .cl-badge { align-self: flex-start; background: rgba(255,71,87,.18); color: #ff6b81; border: 1px solid rgba(255,71,87,.5); border-radius: 999px; padding: 2px 10px; font-size: 12px; font-weight: 800; margin-bottom: 8px; }
            .cl-title { color: #fff; font-size: 18px; font-weight: 800; margin: 0 0 12px; }
            .cl-list { list-style: none; margin: 0 0 14px; padding: 0; overflow-y: auto; display: flex; flex-direction: column; gap: 10px; }
            .cl-list li { display: flex; gap: 10px; align-items: flex-start; color: #ced6e0; font-size: 14px; line-height: 1.4; }
            .cl-list li span:first-child { flex: 0 0 22px; text-align: center; }
            .cl-close { width: 100%; min-height: 46px; }
            .cl-open { background: none !important; box-shadow: none !important; color: #747d8c; font-size: 12px; font-weight: 600; min-height: 36px !important; padding: 6px !important; margin-top: 10px; width: auto !important; }
            @keyframes clFade { from { opacity: 0; } to { opacity: 1; } }
        `;
        document.head.appendChild(style);
    }

    function closeChangelog() {
        const el = document.getElementById('changelog-overlay');
        if (el) el.remove();
        setSeen();
    }

    function openChangelog() {
        if (document.getElementById('changelog-overlay')) return;

        const overlay = document.createElement('div');
        overlay.id = 'changelog-overlay';
        overlay.className = 'cl-overlay';
        overlay.addEventListener('click', (e) => { if (e.target === overlay) closeChangelog(); });

        const box = document.createElement('div');
        box.className = 'cl-box';

        const badge = document.createElement('div');
        badge.className = 'cl-badge';
        badge.textContent = CHANGELOG.version;

        const title = document.createElement('h3');
        title.className = 'cl-title';
        title.textContent = CHANGELOG.title;

        const list = document.createElement('ul');
        list.className = 'cl-list';
        CHANGELOG.items.forEach(item => {
            const li = document.createElement('li');
            const icon = document.createElement('span');
            icon.textContent = item.icon;
            const text = document.createElement('span');
            text.textContent = item.text;
            li.appendChild(icon);
            li.appendChild(text);
            list.appendChild(li);
        });

        const btn = document.createElement('button');
        btn.className = 'cl-close';
        btn.textContent = 'Entendi';
        btn.addEventListener('click', closeChangelog);

        box.appendChild(badge);
        box.appendChild(title);
        box.appendChild(list);
        box.appendChild(btn);
        overlay.appendChild(box);
        document.body.appendChild(overlay);
    }

    window.addEventListener('DOMContentLoaded', () => {
        injectStyles();

        // Link discreto para reabrir as novidades na tela inicial
        const home = document.getElementById('screen-home');
        if (home) {
            const link = document.createElement('button');
            link.className = 'cl-open';
            link.textContent = CHANGELOG.version + ' · Novidades';
            link.addEventListener('click', openChangelog);
            home.appendChild(link);
        }

        // Aparece só na página principal (não atrapalha quem entra por link de sala)
        // e só uma vez por versão.
        const onHome = home && home.style.display !== 'none';
        if (onHome && getSeen() !== CHANGELOG.version) openChangelog();
    });

    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeChangelog(); });
})();
