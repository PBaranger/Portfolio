document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalInfo = document.getElementById('modal-info');
    const modalClose = document.getElementById('modal-close');
    const skillCards = document.querySelectorAll('.skill-card');

    const skillInfos = {
        html1: { title: "HTML", info: "Langage de structure des pages Web." },
        // ##### AVEC LIEN SIMPLE
        // html1: {
        // title: "HTML",
        // info: 'Langage de structure des pages Web. <a href="developpement.html#site-web-1">Aller à l’ancre 1 dans autrepage.html</a>'
        // },

        // ##### AVEC BOUTON
        html1: {
            title: "HTML",
            // info: `
            // J'ai pu développer plusieurs sites web en utilisant le HTML ainsi que le CSS pour créer mes pages web.
            //     J'ai développé un site simple à l'aide de HTML et CSS pour présenter un tour du monde en 5 pas.
            // <button onclick="window.location.href='../../html/projets/developpement.html#site-web-1'" style="cursor:pointer; padding:6px 12px; border:none; background-color:#3498db; color:white; border-radius:5px;">
            //   Voir le Projet
            // </button>
            //   `
            info: `
                <div class="modal-row">
                    <p class="modal-text">
                        J'ai pu développer plusieurs sites web en utilisant le HTML ainsi que le CSS pour créer mes pages web.
                        J'ai développé un site simple à l'aide de HTML et CSS pour présenter un tour du monde en 5 pas.
                    </p>
                    <button class="modal-btn" onclick="window.location.href='../../html/projets/developpement.html#site-web-1'">
                        Voir le Projet
                    </button>
                </div>
            <br />
            <hr />
            <br />
            `
        },



        css1: { title: "CSS", info: "" },
        javascript1: { title: "JavaScript", info: "Langage dynamique." },

        cisco1: {
            title: "Cisco", info: `
                <div class="modal-row">
                    <p class="modal-text">
                        J'ai créer différents types de réseau à l’aide de Cisco Paquet Tracer qui permet de simuler un réseau informatique. 
                        J'ai développé un site simple à l'aide de HTML et CSS pour présenter un tour du monde en 5 pas.
                    </p>
                    <button class="modal-btn" onclick="window.location.href='../../html/projets/developpement.html#site-web-1'">
                        Voir le Projet
                    </button>
                </div>
            <br />
            <hr />
            <br />
            ` },

        reseau1: { title: "Configuration réseau", info: "Gestion de réseaux." },
        manipulation1: { title: "Manipulation matériel", info: "Maintenance hardware." }
    };

    skillCards.forEach(card => {
        card.addEventListener('click', () => {
            let key = Array.from(card.classList).find(c => skillInfos[c]);
            if (key && skillInfos[key]) {
                modalTitle.textContent = skillInfos[key].title;
                // modalInfo.textContent = skillInfos[key].info;
                modalInfo.innerHTML = skillInfos[key].info;
                modal.style.display = 'flex';
            }
        });
    });

    modalClose.addEventListener('click', () => { modal.style.display = 'none'; });
    window.addEventListener('click', e => {
        if (e.target === modal) { modal.style.display = 'none'; }
    });
});
