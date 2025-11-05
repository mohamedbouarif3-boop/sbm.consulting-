// Attendre que le contenu de la page soit entièrement chargé
document.addEventListener('DOMContentLoaded', function() {
    
    // ===============================================
    // 1. GESTION DU MENU MOBILE
    // ===============================================
    const menuToggle = document.getElementById('menu-toggle-btn');
    const mainNavigation = document.getElementById('main-navigation');
    
    if (menuToggle && mainNavigation) {
        
        menuToggle.addEventListener('click', function() {
            mainNavigation.classList.toggle('open');
            menuToggle.innerHTML = mainNavigation.classList.contains('open') ? '✕' : '☰';
        });

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
    // 2. CARROUSEL D'IMAGES AUTOMATIQUE
    // ===============================================
    const carouselInner = document.querySelector('.carousel-inner');
    const indicators = document.querySelectorAll('.carousel-indicators .indicator');
    const totalItems = indicators.length;
    
    if (carouselInner && totalItems > 0) {
        let currentIndex = 0;
        const slideInterval = 6000; // Défilement toutes les 6 secondes

        function updateCarousel() {
            // Calcule le décalage basé sur l'index actuel
            carouselInner.style.transform = `translateX(-${currentIndex * 100 / totalItems}%)`;
            
            // Mise à jour des indicateurs
            indicators.forEach((indicator, index) => {
                indicator.classList.remove('active');
                if (index === currentIndex) {
                    indicator.classList.add('active');
                }
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
        }

        // Démarrer le défilement automatique
        setInterval(nextSlide, slideInterval);

        // Gérer les clics sur les indicateurs
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                currentIndex = index;
                updateCarousel();
            });
        });
    }


    // ===============================================
    // 3. VALIDATION DU FORMULAIRE DE CONTACT
    // ===============================================
    const contactForm = document.querySelector('.contact-form-container form');
    
    if (contactForm) {
        
        contactForm.addEventListener('submit', function(event) {
            
            event.preventDefault(); 
            
            let isValid = true; 
            const inputs = contactForm.querySelectorAll('[required]');
            
            inputs.forEach(input => {
                input.style.border = '1px solid #CCCCCC';
                if (input.value.trim() === '') {
                    input.style.border = '2px solid var(--color-accent)'; 
                    isValid = false;
                }
            });

            const emailInput = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput && !emailRegex.test(emailInput.value.trim())) {
                emailInput.style.border = '2px solid red';
                isValid = false;
            }
            
            const phoneInput = document.getElementById('telephone');
            const phoneRegex = /^[0-9\s-]{8,}$/; 
            if (phoneInput && !phoneRegex.test(phoneInput.value.trim())) {
                phoneInput.style.border = '2px solid red';
                isValid = false;
            }


            if (isValid) {
                alert('Félicitations ! Votre demande de tranquillité a été envoyée à SBM Consulting. Nous vous recontactons sous 24h !');
                contactForm.reset(); 
                // contactForm.submit(); // Ligne pour l'envoi réel
            } else {
                alert('Attention : Veuillez corriger les champs obligatoires.');
            }
        });
    }
});
