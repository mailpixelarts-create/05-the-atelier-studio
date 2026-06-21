import { useEffect, useRef } from 'react';
import SplitType from 'split-type';
import { initHeroAnimations } from '../../animations/hero';
import './Hero.scss';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      new SplitType(titleRef.current, { types: 'chars' });
    }
    const tl = initHeroAnimations();
    return () => { tl.kill(); };
  }, []);

  return (
    <section className="hero">
      {/* Blueprint grid background */}
      <div className="hero__grid" />

      {/* Blank sheet */}
      <div className="hero__sheet" />

      {/* Blueprint construction lines */}
      <svg className="hero__blueprint-lines" viewBox="0 0 1200 800" preserveAspectRatio="none">
        <line className="hero__blueprint-line" x1="0" y1="200" x2="1200" y2="200" />
        <line className="hero__blueprint-line" x1="0" y1="400" x2="1200" y2="400" />
        <line className="hero__blueprint-line" x1="0" y1="600" x2="1200" y2="600" />
        <line className="hero__blueprint-line" x1="300" y1="0" x2="300" y2="800" />
        <line className="hero__blueprint-line" x1="600" y1="0" x2="600" y2="800" />
        <line className="hero__blueprint-line" x1="900" y1="0" x2="900" y2="800" />
        <line className="hero__blueprint-line" x1="150" y1="100" x2="1050" y2="700" />
        <line className="hero__blueprint-line" x1="1050" y1="100" x2="150" y2="700" />
      </svg>

      <div className="hero__content container">
        {/* 3D assembling café elements */}
        <div className="hero__3d-scene">
          <div className="hero__3d-element hero__3d-element--counter">
            <svg viewBox="0 0 200 100" fill="none">
              <rect x="10" y="10" width="180" height="80" stroke="#303030" strokeWidth="1.5" />
              <rect x="10" y="10" width="60" height="80" stroke="#303030" strokeWidth="0.5" strokeDasharray="4 4" />
              <line x1="10" y1="50" x2="190" y2="50" stroke="#4D83C8" strokeWidth="0.5" opacity="0.5" />
              <circle cx="150" cy="30" r="12" stroke="#303030" strokeWidth="1" fill="none" />
              <circle cx="150" cy="30" r="6" stroke="#9C7545" strokeWidth="0.8" fill="none" />
            </svg>
          </div>
          <div className="hero__3d-element hero__3d-element--espresso">
            <svg viewBox="0 0 80 100" fill="none">
              <rect x="20" y="20" width="40" height="70" rx="3" stroke="#303030" strokeWidth="1.5" />
              <circle cx="40" cy="20" rx="20" ry="5" stroke="#303030" strokeWidth="1" fill="none" />
              <path d="M60 35 Q75 35 75 50 Q75 65 60 65" stroke="#303030" strokeWidth="1" fill="none" />
              <line x1="25" y1="85" x2="55" y2="85" stroke="#9C7545" strokeWidth="0.8" />
              <line x1="30" y1="90" x2="50" y2="90" stroke="#9C7545" strokeWidth="0.5" />
            </svg>
          </div>
          <div className="hero__3d-element hero__3d-element--book">
            <svg viewBox="0 0 60 80" fill="none">
              <rect x="5" y="5" width="50" height="70" stroke="#303030" strokeWidth="1.5" fill="none" />
              <line x1="30" y1="5" x2="30" y2="75" stroke="#303030" strokeWidth="1" />
              <line x1="10" y1="20" x2="25" y2="20" stroke="#C7C4BD" strokeWidth="0.5" />
              <line x1="10" y1="30" x2="25" y2="30" stroke="#C7C4BD" strokeWidth="0.5" />
              <line x1="10" y1="40" x2="20" y2="40" stroke="#C7C4BD" strokeWidth="0.5" />
              <line x1="35" y1="20" x2="50" y2="20" stroke="#C7C4BD" strokeWidth="0.5" />
              <line x1="35" y1="30" x2="50" y2="30" stroke="#C7C4BD" strokeWidth="0.5" />
            </svg>
          </div>
        </div>

        <div className="hero__text">
          <p className="hero__label section-label">Est. 2025 — Design Studio Café</p>
          <h1 ref={titleRef} className="hero__title">
            THE ATELIER
          </h1>
          <p className="hero__subtitle">
            Where coffee, craftsmanship and spatial design<br />
            merge into a gallery-quality experience.
          </p>
          <div className="hero__cta">
            <div className="hero__cta-line" />
            <a href="#philosophy" className="hero__cta-text hover-target">
              Explore the Studio
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero__scroll">
          <span className="hero__scroll-text">Scroll</span>
          <div className="hero__scroll-line" />
        </div>

        {/* Dimension annotations */}
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
    </section>
  );
}
