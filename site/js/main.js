/**
 * GRIT Marketing Solutions - Main JavaScript
 * Features: Smooth scroll, mobile menu, scroll reveal, active nav highlighting
 */

$(document).ready(function() {

  // ========================================
  // Smooth Scroll for Navigation Links
  // ========================================
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    const target = $(this.getAttribute('href'));

    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 80 // Account for fixed header height
      }, 800);
    }

    // Close mobile menu if open
    if ($('#mobile-menu').is(':visible')) {
      $('#mobile-menu').addClass('hidden');
      $('#menu-toggle').attr('aria-expanded', 'false');
      $('.hamburger').removeClass('active');
    }
  });

  // ========================================
  // Mobile Menu Toggle
  // ========================================
  $('#menu-toggle').on('click', function() {
    const isExpanded = $(this).attr('aria-expanded') === 'true';
    $(this).attr('aria-expanded', !isExpanded);
    $('#mobile-menu').toggleClass('hidden');
    $('.hamburger').toggleClass('active');
  });

  // ========================================
  // Scroll Reveal with Intersection Observer
  // ========================================
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          $(entry.target)
            .removeClass('opacity-0 translate-y-8')
            .addClass('opacity-100 translate-y-0');
          // Unobserve after revealing (one-time animation)
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Add initial hidden state and observe all reveal sections
    $('.reveal-section').each(function() {
      $(this).addClass('opacity-0 translate-y-8');
      revealObserver.observe(this);
    });
  } else {
    // Fallback: Show all sections immediately if IntersectionObserver not supported
    $('.reveal-section').removeClass('opacity-0 translate-y-8');
  }

  // ========================================
  // Desktop Dropdown Navigation
  // ========================================
  function initDesktopDropdowns() {
    const dropdownWrappers = $('.nav-dropdown-wrapper');

    dropdownWrappers.each(function() {
      const wrapper = $(this);
      const trigger = wrapper.find('.nav-dropdown-trigger');
      const dropdown = wrapper.find('.nav-dropdown');

      // Hover behavior
      wrapper.on('mouseenter', function() {
        openDropdown(trigger, dropdown);
      });

      wrapper.on('mouseleave', function() {
        closeDropdown(trigger, dropdown);
      });

      // Click toggle for touch devices
      trigger.on('click', function(e) {
        e.preventDefault();
        if (dropdown.hasClass('show')) {
          closeDropdown(trigger, dropdown);
        } else {
          $('.nav-dropdown').removeClass('show').addClass('hidden');
          $('.nav-dropdown-trigger').attr('aria-expanded', 'false');
          openDropdown(trigger, dropdown);
        }
      });

      // Keyboard navigation
      trigger.on('keydown', function(e) {
        switch(e.key) {
          case 'Enter':
          case ' ':
          case 'ArrowDown':
            e.preventDefault();
            if (!dropdown.hasClass('show')) {
              openDropdown(trigger, dropdown);
            }
            dropdown.find('.dropdown-link').first().focus();
            break;
          case 'Escape':
            e.preventDefault();
            closeDropdown(trigger, dropdown);
            trigger.focus();
            break;
        }
      });

      // Dropdown item keyboard navigation
      dropdown.find('.dropdown-link').on('keydown', function(e) {
        const items = dropdown.find('.dropdown-link');
        const currentIndex = items.index(this);

        switch(e.key) {
          case 'ArrowDown':
            e.preventDefault();
            if (currentIndex < items.length - 1) {
              items.eq(currentIndex + 1).focus();
            }
            break;
          case 'ArrowUp':
            e.preventDefault();
            if (currentIndex > 0) {
              items.eq(currentIndex - 1).focus();
            } else {
              trigger.focus();
              closeDropdown(trigger, dropdown);
            }
            break;
          case 'Escape':
            e.preventDefault();
            closeDropdown(trigger, dropdown);
            trigger.focus();
            break;
        }
      });
    });

    // Close dropdowns when clicking outside
    $(document).on('click', function(e) {
      if (!$(e.target).closest('.nav-dropdown-wrapper').length) {
        $('.nav-dropdown').removeClass('show').addClass('hidden');
        $('.nav-dropdown-trigger').attr('aria-expanded', 'false');
      }
    });

    function openDropdown(trigger, dropdown) {
      trigger.attr('aria-expanded', 'true');
      dropdown.addClass('show').removeClass('hidden');
    }

    function closeDropdown(trigger, dropdown) {
      trigger.attr('aria-expanded', 'false');
      dropdown.removeClass('show').addClass('hidden');
    }
  }

  // ========================================
  // Mobile Accordion Navigation
  // ========================================
  function initMobileAccordions() {
    $('.mobile-nav-accordion-trigger').on('click', function() {
      const trigger = $(this);
      const content = $('#' + trigger.attr('aria-controls'));
      const isExpanded = trigger.attr('aria-expanded') === 'true';

      if (isExpanded) {
        // Collapse
        trigger.attr('aria-expanded', 'false');
        content.removeClass('expanded').addClass('hidden');
      } else {
        // Expand
        trigger.attr('aria-expanded', 'true');
        content.removeClass('hidden').addClass('expanded');
      }
    });
  }

  // Initialize dropdowns and accordions
  initDesktopDropdowns();
  initMobileAccordions();

  // ========================================
  // Enhanced Active Navigation Highlighting
  // ========================================
  if ('IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');

          // Clear all active states
          $('.nav-link, .dropdown-link, .mobile-nav-link, .nav-dropdown-trigger, .mobile-nav-accordion-trigger')
            .removeClass('active parent-active');

          // Desktop: Highlight active link and parent
          $('.dropdown-link').each(function() {
            const link = $(this);
            if (link.attr('href') === '#' + id) {
              link.addClass('active');
              // Highlight parent category
              link.closest('.nav-dropdown-wrapper').find('.nav-dropdown-trigger').addClass('parent-active');
            }
          });

          // Standalone desktop links
          $('.nav-link[href="#' + id + '"]').addClass('active');

          // Mobile: Highlight active link and parent accordion
          $('.mobile-nav-link').each(function() {
            const link = $(this);
            if (link.attr('href') === '#' + id) {
              link.addClass('active');
              // Highlight parent accordion trigger
              link.closest('.mobile-nav-item').find('.mobile-nav-accordion-trigger').addClass('parent-active');
              // Auto-expand parent accordion
              const trigger = link.closest('.mobile-nav-item').find('.mobile-nav-accordion-trigger');
              const content = $('#' + trigger.attr('aria-controls'));
              trigger.attr('aria-expanded', 'true');
              content.removeClass('hidden').addClass('expanded');
            }
          });
        }
      });
    }, {
      threshold: 0.3,
      rootMargin: '-80px 0px -50% 0px' // Account for sticky header
    });

    // Observe all sections with IDs
    $('section[id]').each(function() {
      navObserver.observe(this);
    });
  }

  // ========================================
  // Prevent Animations on Prefers-Reduced-Motion
  // ========================================
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (prefersReducedMotion.matches) {
    // Remove initial hidden state for reveal sections
    $('.reveal-section').removeClass('opacity-0 translate-y-8').addClass('opacity-100');
  }

  // ========================================
  // Close Menu on Window Resize
  // ========================================
  let resizeTimer;
  $(window).on('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      // Close mobile menu
      $('#mobile-menu').addClass('hidden');
      $('#menu-toggle').attr('aria-expanded', 'false');
      $('.hamburger').removeClass('active');

      // Close all dropdowns
      $('.nav-dropdown').removeClass('show').addClass('hidden');
      $('.nav-dropdown-trigger').attr('aria-expanded', 'false');

      // Collapse all accordions
      $('.mobile-nav-accordion-trigger').attr('aria-expanded', 'false');
      $('.mobile-accordion-content').removeClass('expanded').addClass('hidden');
    }, 250);
  });

  // ========================================
  // Keyboard Navigation Enhancement
  // ========================================
  // Ensure focus is visible when navigating with keyboard
  $('a, button').on('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      $(this).addClass('keyboard-focus');
    }
  });

  $('a, button').on('blur', function() {
    $(this).removeClass('keyboard-focus');
  });

  // ========================================
  // Log Initialization (for debugging)
  // ========================================
  console.log('GRIT Marketing Solutions - Initialized');
  console.log('IntersectionObserver supported:', 'IntersectionObserver' in window);
  console.log('Prefers reduced motion:', prefersReducedMotion.matches);
});
