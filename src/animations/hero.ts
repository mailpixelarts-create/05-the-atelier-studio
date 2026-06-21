import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initHeroAnimations() {
  const tl = gsap.timeline({ delay: 0.2 });

  // Blank sheet appears
  tl.fromTo('.hero__sheet', {
    opacity: 0,
    scale: 0.95,
  }, {
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: 'power2.out',
  });

  // Construction grid fades in
  tl.fromTo('.hero__grid', {
    opacity: 0,
  }, {
    opacity: 0.15,
    duration: 0.6,
    ease: 'power1.in',
  }, '-=0.4');

  // Blueprint lines animate in
  tl.fromTo('.hero__blueprint-line', {
    scaleX: 0,
    transformOrigin: 'left center',
  }, {
    scaleX: 1,
    duration: 0.6,
    stagger: 0.06,
    ease: 'power2.inOut',
  }, '-=0.2');

  // Café elements assemble in 3D
  tl.fromTo('.hero__3d-element', {
    opacity: 0,
    y: 60,
    rotateX: 15,
  }, {
    opacity: 1,
    y: 0,
    rotateX: 0,
    duration: 0.8,
    stagger: 0.12,
    ease: 'power3.out',
  }, '-=0.3');

  // Title drawn stroke by stroke
  tl.fromTo('.hero__title .split-char', {
    opacity: 0,
    y: 20,
  }, {
    opacity: 1,
    y: 0,
    duration: 0.4,
    stagger: 0.03,
    ease: 'power2.out',
  }, '-=0.4');

  // Subtitle fades in
  tl.fromTo('.hero__subtitle', {
    opacity: 0,
    y: 20,
  }, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: 'power2.out',
  }, '-=0.2');

  // CTA line draws in
  tl.fromTo('.hero__cta-line', {
    scaleX: 0,
    transformOrigin: 'left center',
  }, {
    scaleX: 1,
    duration: 0.4,
    ease: 'power2.inOut',
  }, '-=0.2');

  // Scroll indicator
  tl.fromTo('.hero__scroll', {
    opacity: 0,
  }, {
    opacity: 1,
    duration: 0.4,
    ease: 'power1.in',
  }, '-=0.1');

  // Parallax on scroll
  gsap.to('.hero__3d-element', {
    yPercent: -15,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    },
  });

  gsap.to('.hero__title', {
    yPercent: 20,
    opacity: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'center center',
      end: 'bottom top',
      scrub: 1,
    },
  });

  return tl;
}
