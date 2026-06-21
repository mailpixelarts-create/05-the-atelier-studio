import './Philosophy.scss';

export default function Philosophy() {
  return (
    <section id="philosophy" className="philosophy section">
      <div className="philosophy__grid-overlay" />
      <div className="container">
        <div className="philosophy__header">
          <span className="section-label">01 — Philosophy</span>
          <h2 className="philosophy__heading">
            We believe coffee is a<br />
            <em>design material</em>.
          </h2>
        </div>

        <div className="philosophy__content">
          <div className="philosophy__manifesto">
            <p className="philosophy__text">
              Every cup is an exercise in precision. Every space, a study in atmosphere.
              The Atelier was founded on the conviction that a café can be a studio — a place
              where the creative process unfolds over perfectly extracted espresso.
            </p>
            <p className="philosophy__text">
              We approach coffee the way architects approach a blueprint: with intention,
              respect for materials, and an uncompromising eye for detail. Our baristas
              are designers. Our roasters are engineers. Our space is a gallery.
            </p>
            <p className="philosophy__text">
              This is not just a café. This is a working studio where every element —
              from the grain of the oak counter to the temperature of the water —
              has been considered, tested, and refined.
            </p>
          </div>

          <div className="philosophy__principles">
            <div className="philosophy__principle">
              <span className="philosophy__principle-number">01</span>
              <h3 className="philosophy__principle-title">Material Honesty</h3>
              <p className="philosophy__principle-text">
                Raw concrete. Unfinished oak. Exposed steel. We let materials speak for themselves.
              </p>
            </div>
            <div className="philosophy__principle">
              <span className="philosophy__principle-number">02</span>
              <h3 className="philosophy__principle-title">Process as Art</h3>
              <p className="philosophy__principle-text">
                The pour, the extraction, the steam — we celebrate the choreography of craft.
              </p>
            </div>
            <div className="philosophy__principle">
              <span className="philosophy__principle-number">03</span>
              <h3 className="philosophy__principle-title">Spatial Thinking</h3>
              <p className="philosophy__principle-text">
                Every square inch is designed. Every sightline, considered. The space is the experience.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative construction marks */}
        <div className="philosophy__construction-marks">
          <svg viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="48" stroke="#C7C4BD" strokeWidth="0.5" strokeDasharray="4 4" />
            <line x1="50" y1="2" x2="50" y2="98" stroke="#C7C4BD" strokeWidth="0.5" strokeDasharray="2 4" />
            <line x1="2" y1="50" x2="98" y2="50" stroke="#C7C4BD" strokeWidth="0.5" strokeDasharray="2 4" />
          </svg>
        </div>
      </div>
    </section>
  );
}
