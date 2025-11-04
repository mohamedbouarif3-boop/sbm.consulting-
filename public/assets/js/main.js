// Attendre que le contenu de la page soit entièrement chargé
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Sélection des éléments DOM
    const menuToggle = document.getElementById('menu-toggle-btn');
    const mainNavigation = document.getElementById('main-navigation');
    
    // S'assurer que les éléments existent avant d'ajouter l'écouteur d'événement
    if (menuToggle && mainNavigation) {
        
        // 2. Fonction pour basculer la classe 'open'
        menuToggle.addEventListener('click', function() {
            // Ajoute ou retire la classe 'open' sur la balise <nav>
            mainNavigation.classList.toggle('open');
            
            // OPTIONNEL: Mettre à jour l'icône du menu (☰ devient X)
            if (mainNavigation.classList.contains('open')) {
                menuToggle.innerHTML = '✕'; // Symbole X
            } else {
                menuToggle.innerHTML = '☰'; // Symbole Hamburger
            }
        });

        // 3. Fermer le menu si on clique sur un lien (pour améliorer l'UX mobile)
        const navLinks = mainNavigation.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mainNavigation.classList.contains('open')) {
                    mainNavigation.classList.remove('open');
                    menuToggle.innerHTML = '☰';
                }
            });
        });
        
    } else {
        console.error("Erreur JS: Les éléments 'menu-toggle-btn' ou 'main-navigation' n'ont pas été trouvés.");
    }
});

// À l'avenir, ce fichier contiendra aussi la validation du formulaire de contact.
