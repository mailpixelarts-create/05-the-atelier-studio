import { MATERIALS } from '../../utils/constants';
import './MaterialGallery.scss';

export default function MaterialGallery() {
  return (
    <section id="gallery" className="gallery section">
      <div className="container">
        <div className="gallery__header">
          <span className="section-label">04 — Material Gallery</span>
          <h2 className="gallery__heading">
            The language of<br />
            <em>materials</em>.
          </h2>
          <p className="gallery__intro">
            Concrete, wood, steel, paper, glass — every surface tells a story.
            We celebrate the raw beauty of honest materials.
          </p>
        </div>
      </div>

      <div className="gallery__masonry container">
        {MATERIALS.map((material, index) => (
          <div
            key={material.name}
            className={`gallery__item gallery__item--${index % 3 === 0 ? 'tall' : index % 3 === 1 ? 'wide' : 'standard'}`}
          >
            <div className="gallery__image-wrapper">
              <div className="gallery__image" style={{ background: getMaterialGradient(index) }}>
                <div className="gallery__image-texture" style={{ backgroundImage: getMaterialTexture(index) }} />
              </div>
              <div className="gallery__overlay">
                <span className="gallery__overlay-name">{material.name}</span>
                <span className="gallery__overlay-texture">{material.texture}</span>
              </div>
              <div className="gallery__item-number">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Construction annotations */}
      <div className="gallery__annotations container">
        <div className="gallery__annotation">
          <svg viewBox="0 0 60 60" fill="none">
            <rect x="2" y="2" width="56" height="56" stroke="#C7C4BD" strokeWidth="0.5" />
            <line x1="30" y1="2" x2="30" y2="58" stroke="#C7C4BD" strokeWidth="0.5" strokeDasharray="2 2" />
            <line x1="2" y1="30" x2="58" y2="30" stroke="#C7C4BD" strokeWidth="0.5" strokeDasharray="2 2" />
          </svg>
          <span>Material study 01</span>
        </div>
        <div className="gallery__annotation">
          <svg viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="30" r="28" stroke="#C7C4BD" strokeWidth="0.5" />
            <circle cx="30" cy="30" r="14" stroke="#C7C4BD" strokeWidth="0.5" strokeDasharray="2 2" />
          </svg>
          <span>Material study 02</span>
        </div>
      </div>
    </section>
  );
}

function getMaterialGradient(index: number): string {
  const gradients = [
    'linear-gradient(135deg, #8a8a8a 0%, #b0b0b0 50%, #6a6a6a 100%)',
    'linear-gradient(135deg, #a07840 0%, #c89050 50%, #805830 100%)',
    'linear-gradient(135deg, #606870 0%, #808890 50%, #505860 100%)',
    'linear-gradient(135deg, #e8e4dc 0%, #f4f0e8 50%, #d8d4cc 100%)',
    'linear-gradient(135deg, #c0d0e0 0%, #e0f0ff 50%, #a0b8c8 100%)',
    'linear-gradient(135deg, #b87333 0%, #d89050 50%, #986020 100%)',
  ];
  return gradients[index] || gradients[0];
}

function getMaterialTexture(index: number): string {
  const textures = [
    'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
    'repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(0,0,0,0.02) 4px, rgba(0,0,0,0.02) 8px)',
    'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.04) 3px, rgba(0,0,0,0.04) 6px)',
    'repeating-linear-gradient(135deg, transparent, transparent 2px, rgba(0,0,0,0.01) 2px, rgba(0,0,0,0.01) 4px)',
    'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, transparent 60%)',
    'repeating-linear-gradient(60deg, transparent, transparent 3px, rgba(0,0,0,0.03) 3px, rgba(0,0,0,0.03) 6px)',
  ];
  return textures[index] || textures[0];
}
