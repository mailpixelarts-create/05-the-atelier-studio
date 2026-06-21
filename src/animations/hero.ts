import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function createHeroAnimation(): gsap.core.Timeline {
  const tl = gsap.timeline({ delay: 0.2 });

  // Grid lines fade in
  tl.to('.hero__grid-line', {
    opacity: 1,
    stagger: 0.1,
    duration: 1,
    ease: 'power2.out',
  }, 0);

  // Construction lines fade in
  tl.to('.hero__construction-line', {
    opacity: 1,
    stagger: 0.2,
    duration: 1.2,
    ease: 'power2.out',
  }, 0.3);

  // Architectural elements draw
  tl.to('.hero__arch-rect', {
    strokeDashoffset: 0,
    duration: 2,
    ease: 'power2.inOut',
  }, 0.5);
  tl.to('.hero__arch-inner', {
    strokeDashoffset: 0,
    duration: 1.5,
    ease: 'power2.inOut',
  }, 1);
  tl.to('.hero__arch-center', {
    strokeDashoffset: 0,
    duration: 1,
    ease: 'power2.out',
  }, 1.5);
  tl.to('.hero__arch-circle', {
    strokeDashoffset: 0,
    duration: 1.2,
    ease: 'power2.inOut',
  }, 1.8);

  // Label
  tl.to('.hero__label', {
    opacity: 1,
    duration: 0.8,
    ease: 'power2.out',
  }, 1.5);

  // Title — precise reveal
  tl.to('.hero__title-main', {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'power3.out',
  }, 1.8);
  tl.to('.hero__title-sub', {
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: 'power3.out',
  }, 2.2);

  // Divider
  tl.to('.hero__divider', {
    opacity: 1,
    duration: 0.6,
    ease: 'power2.out',
  }, 2.5);
  tl.to('.hero__divider-line', {
    scaleX: 1,
    duration: 0.8,
    ease: 'power3.inOut',
  }, 2.6);
  tl.to('.hero__divider-square', {
    scale: 1,
    rotation: 45,
    duration: 0.5,
    ease: 'back.out(1.7)',
  }, 2.9);

  // Subtitle
  tl.to('.hero__subtitle', {
    opacity: 1,
    duration: 0.8,
    ease: 'power2.out',
  }, 2.8);

  // CTA
  tl.to('.hero__cta', {
    opacity: 1,
    duration: 0.6,
    ease: 'power2.out',
  }, 3);

  // Dimensions
  tl.to('.hero__dimension', {
    opacity: 0.6,
    duration: 0.5,
    stagger: 0.1,
    ease: 'power2.out',
  }, 3.2);

  // Scroll indicator
  tl.to('.hero__scroll-indicator', {
    opacity: 0.5,
    duration: 0.5,
    ease: 'power2.out',
  }, 3.4);

  // Corners
  tl.to('.hero__corner', {
    opacity: 0.3,
    duration: 0.4,
    stagger: 0.08,
    ease: 'power2.out',
  }, 3.3);

  return tl;
}

export function createHeroParallax(): void {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  // Blueprint fades on scroll
  gsap.to('.hero__blueprint', {
    opacity: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: hero,
      start: 'top top',
      end: '40% top',
      scrub: 1,
    },
  });

  // Content parallax
  gsap.to('.hero__content', {
    y: 80,
    opacity: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: hero,
      start: 'top top',
      end: 'bottom top',
      scrub: 1.5,
    },
  });
}
