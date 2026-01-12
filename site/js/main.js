/**
 * GRIT Marketing Solutions - Main JavaScript
 * jQuery interactions for smooth scrolling, mobile menu, and animations
 */

$(document).ready(function() {

    // ===========================================
    // 1. SMOOTH SCROLLING FOR NAV LINKS
    // ===========================================

    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        const target = $(this.getAttribute('href'));

        if (target.length) {
            const headerHeight = $('#header').outerHeight();
            const targetPosition = target.offset().top - headerHeight;

            $('html, body').stop().animate({
                scrollTop: targetPosition
            }, 800, 'swing');

            // Close mobile menu if open
            $('#mobile-menu').removeClass('active');
            $('#menu-icon').text('☰');
        }
    });

    // ===========================================
    // 2. STICKY HEADER ON SCROLL
    // ===========================================

    let lastScrollTop = 0;

    $(window).on('scroll', debounce(function() {
        const scrollTop = $(this).scrollTop();

        // Add scrolled class when scrolled down
        if (scrollTop > 50) {
            $('#header').addClass('scrolled');
        } else {
            $('#header').removeClass('scrolled');
        }

        // Update active nav link based on scroll position
        updateActiveNavLink();

        lastScrollTop = scrollTop;
    }, 10));

    // ===========================================
    // 3. MOBILE MENU TOGGLE
    // ===========================================

    $('#mobile-menu-toggle').on('click', function() {
        const mobileMenu = $('#mobile-menu');
        const menuIcon = $('#menu-icon');

        mobileMenu.toggleClass('active');

        if (mobileMenu.hasClass('active')) {
            menuIcon.text('✕');
        } else {
            menuIcon.text('☰');
        }
    });

    // Close mobile menu when clicking outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('#header').length) {
            $('#mobile-menu').removeClass('active');
            $('#menu-icon').text('☰');
        }
    });

    // ===========================================
    // 4. ACTIVE NAV LINK HIGHLIGHTING
    // ===========================================

    function updateActiveNavLink() {
        const scrollPos = $(window).scrollTop() + $('#header').outerHeight() + 100;

        $('section[id]').each(function() {
            const section = $(this);
            const sectionTop = section.offset().top;
            const sectionBottom = sectionTop + section.outerHeight();
            const sectionId = section.attr('id');

            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                $('.nav-link, .mobile-nav-link').removeClass('active');
                $(`.nav-link[href="#${sectionId}"], .mobile-nav-link[href="#${sectionId}"]`).addClass('active');
            }
        });
    }

    // ===========================================
    // 5. SCROLL ANIMATIONS (INTERSECTION OBSERVER)
    // ===========================================

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    $('.fade-in').each(function() {
        observer.observe(this);
    });

    // ===========================================
    // 6. LAZY LOAD IMAGES
    // ===========================================

    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                $(img).addClass('loaded');
                imageObserver.unobserve(img);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });

    // Observe all lazy-load images
    $('img[loading="lazy"]').each(function() {
        imageObserver.observe(this);
    });

    // ===========================================
    // 7. UTILITY FUNCTIONS
    // ===========================================

    /**
     * Debounce function to limit scroll event firing
     */
    function debounce(func, wait) {
        let timeout;
        return function() {
            const context = this;
            const args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(function() {
                func.apply(context, args);
            }, wait);
        };
    }

    // ===========================================
    // 8. SMOOTH REVEAL ON PAGE LOAD
    // ===========================================

    // Reveal hero section immediately
    $('#hero .fade-in').addClass('visible');

    // ===========================================
    // 9. HERO CTA BUTTON INTERACTION
    // ===========================================

    $('.cta-button').on('mouseenter', function() {
        $(this).css('transform', 'scale(1.05) translateY(-2px)');
    }).on('mouseleave', function() {
        $(this).css('transform', '');
    });

    // ===========================================
    // 10. SERVICE BLOCKS HOVER EFFECT
    // ===========================================

    $('.service-block').on('mouseenter', function() {
        $(this).css('transform', 'translateY(-5px)');
    }).on('mouseleave', function() {
        $(this).css('transform', '');
    });

    // ===========================================
    // 11. INITIAL SETUP
    // ===========================================

    // Set initial active nav link
    updateActiveNavLink();

    // Log success message
    console.log('🎨 GRIT Marketing Solutions - Website loaded successfully!');
    console.log('✅ Brand color: #a1cd40');
    console.log('✅ All interactions initialized');

});

// ===========================================
// 12. PAGE VISIBILITY CHANGES
// ===========================================

document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
        // Re-check scroll position when tab becomes visible
        $(window).trigger('scroll');
    }
});

// ===========================================
// 13. RESIZE HANDLER
// ===========================================

$(window).on('resize', debounce(function() {
    // Close mobile menu on resize to desktop
    if ($(window).width() >= 768) {
        $('#mobile-menu').removeClass('active');
        $('#menu-icon').text('☰');
    }
}, 250));

/**
 * Debounce helper for resize events
 */
function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            func.apply(context, args);
        }, wait);
    };
}
