// Cookies functionality
document.addEventListener('DOMContentLoaded', function() {
    // Cookie banner functionality
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptAllBtn = document.getElementById('accept-all');
    const acceptNecessaryBtn = document.getElementById('accept-necessary');
    const denyCookiesBtn = document.getElementById('deny-cookies');
    
    // Cookies modal functionality
    const cookiesToggle = document.getElementById('cookies-toggle');
    const cookiesModal = document.getElementById('cookies-modal');
    const cookiesClose = document.getElementById('cookies-close');
    
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    // Show cookie banner if no choice has been made
    if (!cookieConsent && cookieBanner) {
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 1000);
    }
    
    // Accept all cookies
    if (acceptAllBtn) {
        acceptAllBtn.addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'all');
            if (cookieBanner) {
                cookieBanner.classList.remove('show');
            }
            // Here you can add analytics tracking code
            console.log('All cookies accepted');
        });
    }
    
    // Accept only necessary cookies
    if (acceptNecessaryBtn) {
        acceptNecessaryBtn.addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'necessary');
            if (cookieBanner) {
                cookieBanner.classList.remove('show');
            }
            console.log('Only necessary cookies accepted');
        });
    }
    
    // Deny cookies
    if (denyCookiesBtn) {
        denyCookiesBtn.addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'denied');
            if (cookieBanner) {
                cookieBanner.classList.remove('show');
            }
            console.log('Cookies denied');
        });
    }
    
    // Toggle cookies modal
    if (cookiesToggle) {
        cookiesToggle.addEventListener('click', function() {
            if (cookiesModal) {
                cookiesModal.style.display = 'block';
            }
        });
    }
    
    // Close cookies modal
    if (cookiesClose) {
        cookiesClose.addEventListener('click', function() {
            if (cookiesModal) {
                cookiesModal.style.display = 'none';
            }
        });
    }
    
    // Close modal when clicking outside
    if (cookiesModal) {
        cookiesModal.addEventListener('click', function(e) {
            if (e.target === cookiesModal) {
                cookiesModal.style.display = 'none';
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && cookiesModal && cookiesModal.style.display === 'block') {
            cookiesModal.style.display = 'none';
        }
    });
    
    // Function to check if cookies are accepted
    window.checkCookieConsent = function() {
        const consent = localStorage.getItem('cookieConsent');
        return consent === 'all' || consent === 'necessary';
    };
    
    // Function to check if analytics cookies are accepted
    window.checkAnalyticsConsent = function() {
        const consent = localStorage.getItem('cookieConsent');
        return consent === 'all';
    };
}); 