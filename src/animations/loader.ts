import gsap from 'gsap';

export function animateLoader(onComplete: () => void) {
  const tl = gsap.timeline({
    onComplete,
  });

  // Phase 1: Pencil stroke draws a line across white canvas
  tl.fromTo('.loader__pencil-line', {
    scaleX: 0,
    transformOrigin: 'left center',
  }, {
    scaleX: 1,
    duration: 0.8,
    ease: 'power2.inOut',
  });

  // Phase 2: Grid expands from center
  tl.to('.loader__grid', {
    opacity: 1,
    scale: 1,
    duration: 0.6,
    ease: 'power2.out',
  }, '-=0.2');

  // Phase 3: Blueprint lines draw in
  tl.fromTo('.loader__blueprint-line', {
    scaleX: 0,
    transformOrigin: 'left center',
  }, {
    scaleX: 1,
    duration: 0.4,
    stagger: 0.05,
    ease: 'power1.inOut',
  }, '-=0.2');

  // Phase 4: 3D café elements assemble
  tl.fromTo('.loader__element', {
    opacity: 0,
    y: 30,
    scale: 0.8,
  }, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.5,
    stagger: 0.08,
    ease: 'back.out(1.7)',
  }, '-=0.1');

  // Phase 5: Logo sketch effect
  tl.fromTo('.loader__logo', {
    clipPath: 'inset(0 100% 0 0)',
  }, {
    clipPath: 'inset(0 0% 0 0)',
    duration: 0.8,
    ease: 'power2.inOut',
  }, '-=0.2');

  // Phase 6: Hold briefly then fade
  tl.to('.loader__content', {
    opacity: 0,
    duration: 0.4,
    delay: 0.3,
    ease: 'power2.in',
  });

  // Phase 7: Canvas slides away
  tl.to('.loader', {
    yPercent: -100,
    duration: 0.8,
    ease: 'power4.inOut',
  }, '-=0.1');

  return tl;
}
