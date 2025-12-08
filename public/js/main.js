/**
 * Lancher - Cantina Digital para Escolas
 * Arquivo JavaScript principal
 */

(function() {
    'use strict';

    // ==========================================================================
    // DOM Ready
    // ==========================================================================
    document.addEventListener('DOMContentLoaded', function() {
        initNavbar();
        initSmoothScroll();
        initAnimations();
    });

    // ==========================================================================
    // Navbar - Scroll Effect
    // ==========================================================================
    function initNavbar() {
        const navbar = document.querySelector('.navbar-custom');
        
        if (!navbar) return;

        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });

        // Mobile menu close on link click
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        const navbarCollapse = document.querySelector('.navbar-collapse');

        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                    if (bsCollapse) {
                        bsCollapse.hide();
                    }
                }
            });
        });
    }

    // ==========================================================================
    // Smooth Scroll
    // ==========================================================================
    function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach(function(link) {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                if (href === '#') return;

                const target = document.querySelector(href);
                
                if (target) {
                    e.preventDefault();
                    
                    const navbarHeight = document.querySelector('.navbar-custom').offsetHeight;
                    const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ==========================================================================
    // Scroll Animations (Intersection Observer)
    // ==========================================================================
    function initAnimations() {
        const animatedElements = document.querySelectorAll('.feature-card, .step-card, .cantina-card, .benefit-list li');

        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            animatedElements.forEach(function(el) {
                el.classList.add('animate-on-scroll');
                observer.observe(el);
            });
        } else {
            // Fallback for older browsers
            animatedElements.forEach(function(el) {
                el.classList.add('animate-in');
            });
        }
    }

    // ==========================================================================
    // Utility Functions
    // ==========================================================================

    /**
     * Debounce function for performance optimization
     */
    function debounce(func, wait) {
        let timeout;
        return function executedFunction() {
            const context = this;
            const args = arguments;
            const later = function() {
                timeout = null;
                func.apply(context, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    /**
     * Format currency (BRL)
     */
    function formatCurrency(value) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    }

    // Expose utilities globally if needed
    window.Lancher = {
        formatCurrency: formatCurrency,
        debounce: debounce
    };

})();

