import { useEffect, useRef } from 'react';
import { animateLoader } from '../../animations/loader';
import './Loader.scss';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = animateLoader(onComplete);
    return () => { tl.kill(); };
  }, [onComplete]);

  return (
    <div ref={loaderRef} className="loader">
      <div className="loader__content">
        {/* Pencil stroke */}
        <svg className="loader__pencil-line" viewBox="0 0 400 2" fill="none">
          <line x1="0" y1="1" x2="400" y2="1" stroke="#303030" strokeWidth="1.5" />
        </svg>

        {/* Blueprint grid */}
        <div className="loader__grid">
          <svg viewBox="0 0 200 200" fill="none">
            {Array.from({ length: 11 }).map((_, i) => (
              <g key={i}>
                <line
                  className="loader__blueprint-line"
                  x1={i * 20}
                  y1="0"
                  x2={i * 20}
                  y2="200"
                  stroke="#4D83C8"
                  strokeWidth="0.3"
                  opacity="0.3"
                />
                <line
                  className="loader__blueprint-line"
                  x1="0"
                  y1={i * 20}
                  x2="200"
                  y2={i * 20}
                  stroke="#4D83C8"
                  strokeWidth="0.3"
                  opacity="0.3"
                />
              </g>
            ))}
          </svg>
        </div>

        {/* 3D Café elements assembling */}
        <div className="loader__elements">
          <div className="loader__element loader__element--counter">
            <svg viewBox="0 0 60 40" fill="none">
              <rect x="2" y="2" width="56" height="36" stroke="#303030" strokeWidth="1" />
              <line x1="20" y1="2" x2="20" y2="38" stroke="#303030" strokeWidth="0.5" strokeDasharray="2 2" />
              <line x1="40" y1="2" x2="40" y2="38" stroke="#303030" strokeWidth="0.5" strokeDasharray="2 2" />
            </svg>
          </div>
          <div className="loader__element loader__element--cup">
            <svg viewBox="0 0 30 35" fill="none">
              <path d="M5 5 L5 30 Q5 35 15 35 Q25 35 25 30 L25 5" stroke="#303030" strokeWidth="1" fill="none" />
              <ellipse cx="15" cy="5" rx="10" ry="3" stroke="#303030" strokeWidth="0.8" fill="none" />
            </svg>
          </div>
          <div className="loader__element loader__element--shelf">
            <svg viewBox="0 0 80 50" fill="none">
              <line x1="0" y1="10" x2="80" y2="10" stroke="#303030" strokeWidth="1" />
              <line x1="0" y1="25" x2="80" y2="25" stroke="#303030" strokeWidth="1" />
              <line x1="0" y1="40" x2="80" y2="40" stroke="#303030" strokeWidth="1" />
              <rect x="10" y="2" width="8" height="8" stroke="#303030" strokeWidth="0.5" fill="none" />
              <rect x="30" y="15" width="6" height="10" stroke="#303030" strokeWidth="0.5" fill="none" />
              <rect x="55" y="2" width="12" height="8" stroke="#303030" strokeWidth="0.5" fill="none" />
              <circle cx="20" cy="32" r="5" stroke="#303030" strokeWidth="0.5" fill="none" />
            </svg>
          </div>
        </div>

        {/* Logo sketched */}
        <div className="loader__logo">
          <span className="loader__logo-text">THE</span>
          <span className="loader__logo-main">ATELIER</span>
          <span className="loader__logo-sub">Design Studio Café</span>
        </div>
      </div>
    </div>
  );
}
