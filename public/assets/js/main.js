// Attendre que le contenu de la page soit entièrement chargé
document.addEventListener('DOMContentLoaded', function() {
    
    // ===============================================
    // 1. GESTION DU MENU MOBILE (Fonctionnalité existante)
    // ===============================================
    const menuToggle = document.getElementById('menu-toggle-btn');
    const mainNavigation = document.getElementById('main-navigation');
    
    if (menuToggle && mainNavigation) {
        
        menuToggle.addEventListener('click', function() {
            mainNavigation.classList.toggle('open');
            menuToggle.innerHTML = mainNavigation.classList.contains('open') ? '✕' : '☰';
        });

        // Fermer le menu si on clique sur un lien 
        const navLinks = mainNavigation.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mainNavigation.classList.contains('open')) {
                    mainNavigation.classList.remove('open');
                    menuToggle.innerHTML = '☰';
                }
            });
        });
    }

    // ===============================================
    // 2. VALIDATION DU FORMULAIRE DE CONTACT
    // ===============================================
    const contactForm = document.querySelector('.contact-form-container form');
    
    if (contactForm) {
        
        contactForm.addEventListener('submit', function(event) {
            
            // Empêche l'envoi standard du formulaire pour effectuer la validation
            event.preventDefault(); 
            
            let isValid = true; // Drapeaux de validation
            const inputs = contactForm.querySelectorAll('[required]');
            
            // Réinitialiser les indicateurs d'erreurs précédents
            inputs.forEach(input => {
                input.style.border = '1px solid #CCCCCC';
            });
            
            // Boucle de vérification des champs requis
            inputs.forEach(input => {
                if (input.value.trim() === '') {
                    input.style.border = '2px solid red'; // Marquer l'erreur
                    isValid = false;
                }
            });

            // Validation spécifique de l'Email
            const emailInput = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput && !emailRegex.test(emailInput.value.trim())) {
                emailInput.style.border = '2px solid red';
                isValid = false;
            }
            
            // Validation spécifique du Téléphone (simple, vérifie seulement si ce sont des chiffres)
            const phoneInput = document.getElementById('telephone');
            const phoneRegex = /^[0-9\s-]{8,}$/; // Au moins 8 chiffres ou espace/tiret
            if (phoneInput && !phoneRegex.test(phoneInput.value.trim())) {
                phoneInput.style.border = '2px solid red';
                isValid = false;
            }


            // Si tout est valide
            if (isValid) {
                // Ici, vous enverriez normalement les données à votre serveur ou service d'email.
                
                alert('Félicitations ! Votre demande de tranquillité a été envoyée à SBM Consulting. Nous vous recontactons sous 24h !');
                
                // Dé-commenter la ligne suivante pour envoyer réellement le formulaire
                // contactForm.submit(); 
                
                // Pour la démo, on réinitialise le formulaire après le message d'alerte
                contactForm.reset(); 

            } else {
                alert('Attention : Veuillez corriger les champs en rouge pour valider votre demande.');
            }
        });
    }

});
