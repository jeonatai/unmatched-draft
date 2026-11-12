// ===================================================================
// NOVIDADES DA VERSÃO
// Para lançar uma nova atualização: adicione um novo bloco NO TOPO da lista
// "versions" (a mais nova primeiro). A aba aparece uma vez para cada pessoa
// (fica salvo no navegador) mostrando as versões que ela ainda não viu, e pode
// ser reaberta pelo "Novidades" na tela inicial.
// ===================================================================
const CHANGELOG = {
    title: 'Novidades da atualização',
    versions: [
        {
            version: 'V0.9.7',
            items: [
                { icon: '🧭', text: 'Correção: o botão voltar do navegador e do celular agora passa pelas telas na ordem certa até a tela principal (ex.: Ranking → herói → Ranking → início).' },
                { icon: '✍️', text: 'Caixas de nome dos jogadores agora começam vazias, com "Jogador 1", "Jogador 2"... em cinza claro como dica. É só tocar e digitar.' },
                { icon: '📤', text: 'Link da sala: no celular, o botão agora abre o compartilhar do aparelho (WhatsApp, Instagram e outros apps).' }
            ]
        }
    ]
};

(function () {
    const SEEN_KEY = 'unmatched_seen_version';

    function getSeen() {
        try { return localStorage.getItem(SEEN_KEY); } catch (e) { return null; }
    }
    const LATEST = CHANGELOG.versions[0].version;

    function setSeen() {
        try { localStorage.setItem(SEEN_KEY, LATEST); } catch (e) { /* sem localStorage: só mostra de novo */ }
    }

    // Versões que a pessoa ainda não viu (no máximo 3, da mais nova para a mais antiga)
    function unseenVersions() {
        const idx = CHANGELOG.versions.findIndex(v => v.version === getSeen());
        if (idx === 0) return [];
        return (idx === -1 ? CHANGELOG.versions : CHANGELOG.versions.slice(0, idx)).slice(0, 3);
    }

    function injectStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .cl-overlay { position: fixed; inset: 0; background: rgba(0,0,0,.75); display: flex; align-items: center; justify-content: center; z-index: 3000; padding: 16px; animation: clFade .18s ease-out; }
            .cl-box { background: #1e1e24; border: 2px solid #ff4757; border-radius: 16px; padding: 20px 18px 16px; max-width: 400px; width: 100%; max-height: 85vh; max-height: 85dvh; display: flex; flex-direction: column; box-shadow: 0 10px 40px rgba(0,0,0,.6); text-align: left; }
            .cl-badge { align-self: flex-start; background: rgba(255,71,87,.18); color: #ff6b81; border: 1px solid rgba(255,71,87,.5); border-radius: 999px; padding: 2px 10px; font-size: 12px; font-weight: 800; margin-bottom: 8px; }
            .cl-title { color: #fff; font-size: 18px; font-weight: 800; margin: 0 0 12px; }
            .cl-content { overflow-y: auto; margin-bottom: 14px; }
            .cl-content .cl-badge { margin-top: 4px; }
            .cl-list { list-style: none; margin: 0 0 14px; padding: 0; display: flex; flex-direction: column; gap: 10px; }
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

    function openChangelog(versions) {
        if (document.getElementById('changelog-overlay')) return;
        versions = versions || CHANGELOG.versions.slice(0, 3);

        const overlay = document.createElement('div');
        overlay.id = 'changelog-overlay';
        overlay.className = 'cl-overlay';
        overlay.addEventListener('click', (e) => { if (e.target === overlay) closeChangelog(); });

        const box = document.createElement('div');
        box.className = 'cl-box';

        const title = document.createElement('h3');
        title.className = 'cl-title';
        title.textContent = CHANGELOG.title;

        const content = document.createElement('div');
        content.className = 'cl-content';
        versions.forEach(v => {
            const badge = document.createElement('div');
            badge.className = 'cl-badge';
            badge.textContent = v.version;
            content.appendChild(badge);

            const list = document.createElement('ul');
            list.className = 'cl-list';
            v.items.forEach(item => {
                const li = document.createElement('li');
                const icon = document.createElement('span');
                icon.textContent = item.icon;
                const text = document.createElement('span');
                text.textContent = item.text;
                li.appendChild(icon);
                li.appendChild(text);
                list.appendChild(li);
            });
            content.appendChild(list);
        });

        const btn = document.createElement('button');
        btn.className = 'cl-close';
        btn.textContent = 'Entendi';
        btn.addEventListener('click', closeChangelog);

        box.appendChild(title);
        box.appendChild(content);
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
            link.textContent = LATEST + ' · Novidades';
            link.addEventListener('click', () => openChangelog());
            home.appendChild(link);
        }

        // Aparece só na página principal (não atrapalha quem entra por link de sala)
        // e só uma vez por versão.
        const onHome = home && home.style.display !== 'none';
        const unseen = unseenVersions();
        if (onHome && unseen.length) openChangelog(unseen);
    });

    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeChangelog(); });
})();
