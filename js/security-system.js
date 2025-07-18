// Security System - Ba-Ma Traduceri Autorizate
// © 2024 Ba-Ma Traduceri Autorizate. All rights reserved.

(function() {
    'use strict';
    
    const SECURITY_CONFIG = {
        siteName: 'Ba-Ma Traduceri Autorizate',
        copyright: '© 2024 Ba-Ma Traduceri Autorizate. All rights reserved.',
        maintenancePage: '/maintenance.html',
        maxRetries: 3,
        retryDelay: 2000,
        securityCheckInterval: 5000,
        antiDebugInterval: 1000
    };
    
    let securityInitialized = false;
    let pageLoadTime = Date.now();
    let securityChecks = 0;
    let maintenanceMode = false;
    
    // Anti-Copyrighting System
    class AntiCopyrighting {
        constructor() {
            this.init();
        }
        
        init() {
            this.addWatermark();
            this.preventTextSelection();
            this.preventRightClick();
            this.preventKeyboardShortcuts();
            this.addInvisibleCopyright();
        }
        
        addWatermark() {
            if (!document.body) {
                document.addEventListener('DOMContentLoaded', () => this.addWatermark());
                return;
            }
            const watermark = document.createElement('div');
            watermark.className = 'security-watermark';
            watermark.innerHTML = SECURITY_CONFIG.copyright;
            document.body.appendChild(watermark);

            const subtleWatermark = document.createElement('div');
            subtleWatermark.className = 'subtle-watermark';
            document.body.appendChild(subtleWatermark);
        }
        
        preventTextSelection() {
            document.addEventListener('selectstart', function(e) {
                if (!e.target.classList.contains('allow-copy')) {
                    e.preventDefault();
                    return false;
                }
            });
            
            document.addEventListener('dragstart', function(e) {
                e.preventDefault();
                return false;
            });
        }
        
        preventRightClick() {
            document.addEventListener('contextmenu', function(e) {
                e.preventDefault();
                SecuritySystem.showSecurityNotice('Accesul la meniul contextual este restricționat din motive de securitate.');
                return false;
            });
        }
        
        preventKeyboardShortcuts() {
            document.addEventListener('keydown', function(e) {
                if (
                    (e.ctrlKey && (e.key === 'a' || e.key === 'c' || e.key === 'x' || e.key === 'v' || e.key === 'u')) ||
                    e.key === 'F12' ||
                    (e.ctrlKey && e.shiftKey && e.key === 'I')
                ) {
                    e.preventDefault();
                    SecuritySystem.showSecurityNotice('Această acțiune este restricționată din motive de securitate.');
                    return false;
                }
            });
        }
        
        addInvisibleCopyright() {
            if (!document.body) {
                document.addEventListener('DOMContentLoaded', () => this.addInvisibleCopyright());
                return;
            }
            const invisible = document.createElement('div');
            invisible.className = 'invisible-copyright';
            document.body.appendChild(invisible);
        }
    }
    
    // Anti-Hacking System
    class AntiHacking {
        constructor() {
            this.init();
        }
        
        init() {
            this.preventDevTools();
            this.detectTampering();
            this.preventInjection();
            this.monitorNetworkRequests();
        }
        
        preventDevTools() {
            let devtools = {
                open: false,
                orientation: null
            };
            
            setInterval(() => {
                const threshold = 160;
                const widthThreshold = window.outerWidth - window.innerWidth > threshold;
                const heightThreshold = window.outerHeight - window.innerHeight > threshold;
                
                if (widthThreshold || heightThreshold) {
                    if (!devtools.open) {
                        devtools.open = true;
                        SecuritySystem.handleSecurityViolation('DevTools detectat');
                    }
                } else {
                    devtools.open = false;
                }
            }, SECURITY_CONFIG.antiDebugInterval);
            
            document.addEventListener('keydown', function(e) {
                if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
                    e.preventDefault();
                    SecuritySystem.handleSecurityViolation('Încercare de deschidere DevTools');
                    return false;
                }
            });
        }
        
        detectTampering() {
            const observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    if (mutation.type === 'childList') {
                        const watermarks = document.querySelectorAll('.security-watermark, .subtle-watermark');
                        if (watermarks.length === 0) {
                            SecuritySystem.handleSecurityViolation('Watermark-ul de securitate a fost șters');
                        }
                    }
                });
            });
            if (document.body && window.Node && document.body instanceof Node) {
                observer.observe(document.body, {
                    childList: true,
                    subtree: true
                });
            } else {
                document.addEventListener('DOMContentLoaded', () => this.detectTampering());
            }
        }
        
        preventInjection() {
            const scripts = document.querySelectorAll('script');
            scripts.forEach(script => {
                if (script.src && !script.src.includes(window.location.hostname)) {
                    SecuritySystem.handleSecurityViolation('Script extern detectat');
                }
            });
        }
        
        monitorNetworkRequests() {
            const originalXHROpen = XMLHttpRequest.prototype.open;
            XMLHttpRequest.prototype.open = function(method, url, async, user, password) {
                if (url && !url.includes(window.location.hostname)) {
                    SecuritySystem.handleSecurityViolation('Cerere XHR către domeniu extern');
                }
                return originalXHROpen.call(this, method, url, async, user, password);
            };
        }
    }
    
    // Anti-Page Crash System
    class AntiPageCrash {
        constructor() {
            this.init();
        }
        
        init() {
            this.monitorPageHealth();
            this.handleErrors();
            this.preventInfiniteLoops();
            this.monitorMemoryUsage();
        }
        
        monitorPageHealth() {
            setInterval(() => {
                try {
                    if (!document.body || !document.head) {
                        this.recoverPage();
                        return;
                    }
                    
                    const testElement = document.createElement('div');
                    testElement.style.display = 'none';
                    document.body.appendChild(testElement);
                    document.body.removeChild(testElement);
                    
                } catch (error) {
                    this.recoverPage();
                }
            }, SECURITY_CONFIG.securityCheckInterval);
        }
        
        handleErrors() {
            window.addEventListener('error', (e) => {
                console.warn('Eroare detectată:', e.message);
                SecuritySystem.logSecurityEvent('Eroare JavaScript', e.message);
                
                if (++securityChecks > 10) {
                    this.redirectToMaintenance('Prea multe erori JavaScript');
                }
            });
            
            window.addEventListener('unhandledrejection', (e) => {
                console.warn('Promise rejection nehandled:', e.reason);
                SecuritySystem.logSecurityEvent('Promise rejection', e.reason);
            });
        }
        
        preventInfiniteLoops() {
            let loopCount = 0;
            const maxLoops = 1000;
            
            const originalSetInterval = window.setInterval;
            window.setInterval = function(fn, delay) {
                if (++loopCount > maxLoops) {
                    SecuritySystem.handleSecurityViolation('Posibil loop infinit detectat');
                    return null;
                }
                return originalSetInterval.call(this, fn, delay);
            };
        }
        
        monitorMemoryUsage() {
            if ('memory' in performance) {
                setInterval(() => {
                    const memory = performance.memory;
                    if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.8) {
                        SecuritySystem.logSecurityEvent('Utilizare memorie ridicată', 
                            `${Math.round(memory.usedJSHeapSize / 1024 / 1024)}MB`);
                    }
                }, 10000);
            }
        }
        
        recoverPage() {
            try {
                if (document.readyState === 'complete') {
                    location.reload();
                } else {
                    window.addEventListener('load', () => {
                        setTimeout(() => location.reload(), 1000);
                    });
                }
            } catch (error) {
                this.redirectToMaintenance('Eroare la recuperarea paginii');
            }
        }
        
        redirectToMaintenance(reason) {
            if (!maintenanceMode) {
                maintenanceMode = true;
                SecuritySystem.logSecurityEvent('Redirecționare mentenanță', reason);
                window.location.href = SECURITY_CONFIG.maintenancePage;
            }
        }
    }
    
    // Anti-Blocking System
    class AntiBlocking {
        constructor() {
            this.init();
        }
        
        init() {
            this.detectBlocking();
            this.monitorConnectivity();
        }
        
        detectBlocking() {
            const testUrls = [
                // 'https://www.google.com', // eliminat pentru a evita erorile 429
                'https://www.bing.com'
                // 'https://www.facebook.com' // deja eliminat anterior
            ];
            
            testUrls.forEach(url => {
                fetch(url, { mode: 'no-cors' })
                    .catch(() => {
                        SecuritySystem.logSecurityEvent('Posibilă blocare detectată', url);
                    });
            });
        }
        
        monitorConnectivity() {
            window.addEventListener('online', () => {
                SecuritySystem.logSecurityEvent('Conectivitate restaurată');
            });
            
            window.addEventListener('offline', () => {
                SecuritySystem.logSecurityEvent('Conectivitate pierdută');
            });
        }
    }
    
    // Main Security System
    class SecuritySystem {
        constructor() {
            this.antiCopyrighting = new AntiCopyrighting();
            this.antiHacking = new AntiHacking();
            this.antiPageCrash = new AntiPageCrash();
            this.antiBlocking = new AntiBlocking();
            
            this.init();
        }
        
        init() {
            if (securityInitialized) return;
            
            this.startSecurityMonitoring();
            
            securityInitialized = true;
            console.log('Sistem de securitate inițializat');
        }
        
        startSecurityMonitoring() {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => {
                    this.onPageLoaded();
                });
            } else {
                this.onPageLoaded();
            }
            
            window.addEventListener('beforeunload', () => {
                this.logSecurityEvent('Pagina închisă', 
                    `Timp petrecut: ${Date.now() - pageLoadTime}ms`);
            });
        }
        
        onPageLoaded() {
            setTimeout(() => {
                // Eliminat complet verificarea pentru elemente de securitate lipsă
                // const requiredElements = [
                //     '.security-watermark',
                //     '.subtle-watermark',
                //     '.security-overlay',
                //     '.security-notice',
                //     '.security-footer'
                // ];
                // requiredElements.forEach(selector => {
                //     if (!document.querySelector(selector)) {
                //         SecuritySystem.handleSecurityViolation(`Element de securitate lipsă: ${selector}`);
                //     }
                // });
            }, 1000);
        }
        
        static showSecurityNotice(message) {
            const notice = document.querySelector('.security-notice');
            if (notice) {
                notice.innerHTML = `🔒 ${message}`;
                notice.style.display = 'block';
                
                setTimeout(() => {
                    notice.style.display = 'none';
                }, 3000);
            }
        }
        
        static handleSecurityViolation(violation) {
            this.logSecurityEvent('Violare securitate', violation);
            this.showSecurityNotice(`Violare detectată: ${violation}`);
            
            if (++securityChecks > 5) {
                window.location.href = SECURITY_CONFIG.maintenancePage;
            }
        }
        
        static logSecurityEvent(type, details) {
            const event = {
                type: type,
                details: details,
                timestamp: new Date().toISOString(),
                url: window.location.href,
                userAgent: navigator.userAgent
            };
            
            try {
                const logs = JSON.parse(localStorage.getItem('security_logs') || '[]');
                logs.push(event);
                if (logs.length > 100) logs.shift();
                localStorage.setItem('security_logs', JSON.stringify(logs));
            } catch (e) {
                console.warn('Nu s-a putut salva log-ul de securitate');
            }
            
            console.warn(`[SECURITY] ${type}:`, details);
        }
    }
    
    // Initialize security system
    const securitySystem = new SecuritySystem();
    
    // Expose system globally for debugging (development only)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        window.SecuritySystem = SecuritySystem;
    }
    
})();
