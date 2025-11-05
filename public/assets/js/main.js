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
        const slideInterval = 6000; 

        function updateCarousel() {
            carouselInner.style.transform = `translateX(-${currentIndex * 100 / totalItems}%)`;
            
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

        setInterval(nextSlide, slideInterval);

        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                currentIndex = index;
                updateCarousel();
            });
        });
    }


    // ===============================================
    // 3. VALIDATION DU FORMULAIRE DE CONTACT (Simulée)
    // ===============================================
    const contactForm = document.querySelector('.contact-form-container form');
    
    if (contactForm) {
        
        contactForm.addEventListener('submit', function(event) {
            
            event.preventDefault(); 
            
            let isValid = true; 
            const inputs = contactForm.querySelectorAll('[required]');
            
            // ... (Logique de validation ici) ...
            
            if (isValid) {
                alert('Félicitations ! Votre demande de tranquillité a été envoyée à SBM Consulting. Nous vous recontactons sous 24h !');
                contactForm.reset(); 
            } else {
                alert('Attention : Veuillez corriger les champs obligatoires.');
            }
        });
    }
    
    // ===============================================
    // 4. SCROLL REVEAL (Animation au défilement)
    // ===============================================
    if (typeof ScrollReveal !== 'undefined') {
        
        // Configuration de base
        const sr = ScrollReveal({
            distance: '40px',
            duration: 1200,
            easing: 'cubic-bezier(.215, .61, .355, 1)',
            interval: 100, 
        });

        // Révéler les 3 piliers (arrivée par le bas)
        sr.reveal('.reveal-item', { 
            origin: 'bottom',
            reset: false, 
        });

        // Révéler le CTA secondaire (arrivée par le haut)
        sr.reveal('#reveal-cta', { 
            origin: 'top', 
            scale: 0.95, 
            delay: 400,
        });

    } 
});
