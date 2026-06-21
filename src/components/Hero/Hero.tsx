import { useEffect, useRef } from 'react';
import { createHeroAnimation, createHeroParallax } from '../../animations/hero';
import './Hero.scss';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      createHeroAnimation();
      createHeroParallax();
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero__blueprint">
        <svg className="hero__blueprint-svg" viewBox="0 0 1200 800" preserveAspectRatio="none">
          {/* Grid */}
          <line x1="0" y1="200" x2="1200" y2="200" className="hero__grid-line" />
          <line x1="0" y1="400" x2="1200" y2="400" className="hero__grid-line" />
          <line x1="0" y1="600" x2="1200" y2="600" className="hero__grid-line" />
          <line x1="300" y1="0" x2="300" y2="800" className="hero__grid-line" />
          <line x1="600" y1="0" x2="600" y2="800" className="hero__grid-line" />
          <line x1="900" y1="0" x2="900" y2="800" className="hero__grid-line" />
          
          {/* Construction lines */}
          <line x1="150" y1="100" x2="1050" y2="700" className="hero__construction-line" />
          <line x1="1050" y1="100" x2="150" y2="700" className="hero__construction-line" />
          
          {/* Architectural elements */}
          <rect x="350" y="250" width="500" height="300" className="hero__arch-rect" />
          <rect x="400" y="300" width="400" height="200" className="hero__arch-inner" />
          <line x1="400" y1="400" x2="800" y2="400" className="hero__arch-center" />
          <circle cx="600" cy="400" r="80" className="hero__arch-circle" />
        </svg>
      </div>

      <div className="hero__paper-texture" />
      <div className="hero__noise" />

      <div className="hero__content">
        <div className="hero__label">
          <div className="hero__label-line" />
          <span>Est. 2025 — Design Studio Café</span>
          <div className="hero__label-line" />
        </div>

        <h1 className="hero__title">
          <span className="hero__title-main">THE ATELIER</span>
          <span className="hero__title-sub">STUDIO</span>
        </h1>

        <div className="hero__divider">
          <div className="hero__divider-line" />
          <div className="hero__divider-square" />
          <div className="hero__divider-line" />
        </div>

        <p className="hero__subtitle">
          Where coffee, craftsmanship and spatial design<br />
          merge into a gallery-quality experience.
        </p>

        <div className="hero__cta">
          <a href="#philosophy" className="hero__cta-link">
            <span>Explore the Studio</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        <div className="hero__dimensions">
          <div className="hero__dimension hero__dimension--left">
            <span>0</span>
            <div className="hero__dimension-line" />
            <span>100%</span>
          </div>
          <div className="hero__dimension hero__dimension--bottom">
            <span>0</span>
            <div className="hero__dimension-line" />
            <span>100%</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <span>Scroll</span>
        <div className="hero__scroll-track">
          <div className="hero__scroll-thumb" />
        </div>
      </div>

      <div className="hero__corner hero__corner--tl" />
      <div className="hero__corner hero__corner--tr" />
      <div className="hero__corner hero__corner--bl" />
      <div className="hero__corner hero__corner--br" />
    </section>
  );
}
