import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initGalleryAnimations() {
  const items = document.querySelectorAll('.gallery__item');

  items.forEach((item) => {
    const image = item.querySelector('.gallery__image');
    const overlay = item.querySelector('.gallery__overlay');

    gsap.fromTo(image as HTMLElement, {
      scale: 1.2,
    }, {
      scale: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: item,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });

    gsap.fromTo(overlay as HTMLElement, {
      opacity: 0,
    }, {
      opacity: 1,
      ease: 'power2.in',
      scrollTrigger: {
        trigger: item,
        start: 'center center',
        end: 'bottom top',
        scrub: 1,
      },
    });
  });
}

export function initParallaxGallery() {
  const gallery = document.querySelector('.gallery__grid');
  if (!gallery) return;

  gsap.to(gallery, {
    yPercent: -5,
    ease: 'none',
    scrollTrigger: {
      trigger: '.gallery',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
    },
  });
}
