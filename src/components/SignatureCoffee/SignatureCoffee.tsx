import { useState } from 'react';
import { COFFEE_MENU } from '../../utils/constants';
import './SignatureCoffee.scss';

export default function SignatureCoffee() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section id="menu" className="coffee section">
      <div className="container">
        <div className="coffee__header">
          <span className="section-label">03 — The Menu</span>
          <h2 className="coffee__heading">
            Signature<br />
            <em>compositions</em>.
          </h2>
          <p className="coffee__intro">
            Each drink is a designed object — formulated, tested, and presented with
            architectural precision.
          </p>
        </div>

        <div className="coffee__grid">
          {COFFEE_MENU.map((item, index) => (
            <div
              key={item.name}
              className={`coffee-card ${activeCard === index ? 'is-active' : ''}`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="coffee-card__inner">
                <div className="coffee-card__header">
                  <span className="coffee-card__category">{item.category}</span>
                  <span className="coffee-card__price">${item.price}</span>
                </div>

                <div className="coffee-card__visual">
                  <svg viewBox="0 0 200 160" fill="none">
                    {/* Cup outline */}
                    <path
                      d="M50 40 L50 120 Q50 140 100 140 Q150 140 150 120 L150 40"
                      stroke="#303030"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <ellipse cx="100" cy="40" rx="50" ry="12" stroke="#303030" strokeWidth="1" fill="none" />
                    {/* Steam lines */}
                    <path className="coffee-card__steam" d="M80 30 Q85 15 80 5" stroke="#C7C4BD" strokeWidth="0.8" fill="none" />
                    <path className="coffee-card__steam" d="M100 25 Q105 10 100 0" stroke="#C7C4BD" strokeWidth="0.8" fill="none" />
                    <path className="coffee-card__steam" d="M120 30 Q125 15 120 5" stroke="#C7C4BD" strokeWidth="0.8" fill="none" />
                    {/* Latte art hint */}
                    <ellipse cx="100" cy="50" rx="30" ry="6" stroke="#9C7545" strokeWidth="0.5" fill="none" opacity="0.5" />
                  </svg>
                </div>

                <h3 className="coffee-card__name">{item.name}</h3>
                <p className="coffee-card__description">{item.description}</p>

                {/* Exploded ingredients */}
                <div className="coffee-card__ingredients">
                  {item.ingredients.map((ing) => (
                    <span key={ing} className="coffee-card__ingredient">{ing}</span>
                  ))}
                </div>

                <div className="coffee-card__line" />
              </div>
            </div>
          ))}
        </div>

        {/* Steam simulation background */}
        <div className="coffee__steam-bg">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="coffee__steam-particle" style={{ left: `${20 + i * 15}%`, animationDelay: `${i * 0.8}s` }} />
          ))}
        </div>
      </div>
    </section>
  );
}
