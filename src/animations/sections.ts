import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initSectionAnimations() {
  // Philosophy section - editorial text reveal
  gsap.fromTo('.philosophy__text', {
    opacity: 0,
    y: 40,
  }, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.philosophy',
      start: 'top 70%',
    },
  });

  // Blueprint grid in philosophy
  gsap.fromTo('.philosophy__grid-overlay', {
    opacity: 0,
    scale: 0.95,
  }, {
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.philosophy',
      start: 'top 60%',
    },
  });

  // Creative Process timeline
  gsap.fromTo('.process__timeline-line', {
    scaleY: 0,
    transformOrigin: 'top center',
  }, {
    scaleY: 1,
    duration: 1.5,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: '.process',
      start: 'top 60%',
    },
  });

  gsap.fromTo('.process__step', {
    opacity: 0,
    x: (i: number) => (i % 2 === 0 ? -40 : 40),
  }, {
    opacity: 1,
    x: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.process',
      start: 'top 50%',
    },
  });

  // Signature Coffee cards
  gsap.fromTo('.coffee-card', {
    opacity: 0,
    y: 60,
    rotateY: 10,
  }, {
    opacity: 1,
    y: 0,
    rotateY: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.coffee',
      start: 'top 60%',
    },
  });

  // Material Gallery masonry items
  gsap.fromTo('.gallery__item', {
    opacity: 0,
    scale: 0.9,
  }, {
    opacity: 1,
    scale: 1,
    duration: 0.6,
    stagger: 0.08,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.gallery',
      start: 'top 60%',
    },
  });

  // Workshop 3D objects
  gsap.fromTo('.workshop__object', {
    opacity: 0,
    rotateY: -30,
    y: 40,
  }, {
    opacity: 1,
    rotateY: 0,
    y: 0,
    duration: 0.8,
    stagger: 0.12,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.workshop',
      start: 'top 60%',
    },
  });

  // Designer Journal - magazine page effect
  gsap.fromTo('.journal__article', {
    opacity: 0,
    y: 30,
  }, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.journal',
      start: 'top 60%',
    },
  });

  // Studio Team portraits
  gsap.fromTo('.team__portrait', {
    opacity: 0,
    clipPath: 'inset(100% 0 0 0)',
  }, {
    opacity: 1,
    clipPath: 'inset(0% 0 0 0)',
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.inOut',
    scrollTrigger: {
      trigger: '.team',
      start: 'top 60%',
    },
  });

  // Visit section
  gsap.fromTo('.visit__map', {
    opacity: 0,
    scale: 0.95,
  }, {
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.visit',
      start: 'top 60%',
    },
  });
}
