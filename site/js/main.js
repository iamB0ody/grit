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
  // Active Navigation Highlighting
  // ========================================
  if ('IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          // Remove active class from all nav links
          $('nav a').removeClass('active');
          // Add active class to corresponding nav link
          $(`nav a[href="#${id}"]`).addClass('active');
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
  // Close Mobile Menu on Window Resize
  // ========================================
  let resizeTimer;
  $(window).on('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      // Close mobile menu if window is resized to desktop size
      if ($(window).width() >= 768) {
        $('#mobile-menu').addClass('hidden');
        $('#menu-toggle').attr('aria-expanded', 'false');
        $('.hamburger').removeClass('active');
      }
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
