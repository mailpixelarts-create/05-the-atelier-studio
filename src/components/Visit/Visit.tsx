import './Visit.scss';

export default function Visit() {
  return (
    <section id="visit" className="visit section">
      <div className="container">
        <div className="visit__header">
          <span className="section-label">08 — Visit the Studio</span>
          <h2 className="visit__heading">
            Find us in the<br />
            <em>creative quarter</em>.
          </h2>
        </div>

        <div className="visit__content">
          <div className="visit__info">
            <div className="visit__detail">
              <h3 className="visit__detail-title">Address</h3>
              <p className="visit__detail-text">
                42 Blueprint Lane<br />
                Design District<br />
                London EC2A 4QR
              </p>
            </div>
            <div className="visit__detail">
              <h3 className="visit__detail-title">Hours</h3>
              <p className="visit__detail-text">
                Monday — Friday: 7:00 — 19:00<br />
                Saturday — Sunday: 8:00 — 18:00<br />
                <span className="visit__detail-note">Workshop hours by appointment</span>
              </p>
            </div>
            <div className="visit__detail">
              <h3 className="visit__detail-title">Contact</h3>
              <p className="visit__detail-text">
                studio@theatelier.cafe<br />
                +44 (0)20 7946 0123<br />
                <span className="visit__detail-note">@theatelier.london</span>
              </p>
            </div>
          </div>

          <div className="visit__map">
            <div className="visit__map-placeholder">
              <svg viewBox="0 0 400 300" fill="none">
                {/* Map grid */}
                {Array.from({ length: 9 }).map((_, i) => (
                  <line key={`h${i}`} x1="0" y1={i * 37.5} x2="400" y2={i * 37.5} stroke="#C7C4BD" strokeWidth="0.5" />
                ))}
                {Array.from({ length: 11 }).map((_, i) => (
                  <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="300" stroke="#C7C4BD" strokeWidth="0.5" />
                ))}
                {/* Streets */}
                <rect x="160" y="0" width="80" height="300" fill="rgba(199, 196, 189, 0.15)" />
                <rect x="0" y="120" width="400" height="60" fill="rgba(199, 196, 189, 0.15)" />
                {/* Location pin */}
                <circle cx="200" cy="150" r="12" fill="#4D83C8" opacity="0.2" />
                <circle cx="200" cy="150" r="6" fill="#4D83C8" />
                <circle cx="200" cy="150" r="3" fill="#F6F5F2" />
                {/* Label */}
                <text x="200" y="185" textAnchor="middle" fill="#303030" fontSize="8" fontFamily="monospace">THE ATELIER</text>
                <text x="200" y="195" textAnchor="middle" fill="#9DA2A5" fontSize="6" fontFamily="monospace">42 Blueprint Lane</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
