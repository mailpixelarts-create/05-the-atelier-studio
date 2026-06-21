import './TheWorkshop.scss';

const TOOLS = [
  {
    name: 'Hand Grinder',
    description: 'Precision-milled burrs for consistent particle size.',
    svg: (
      <svg viewBox="0 0 100 120" fill="none">
        <rect x="30" y="20" width="40" height="80" rx="4" stroke="#303030" strokeWidth="1.5" />
        <circle cx="50" cy="20" r="15" stroke="#303030" strokeWidth="1" />
        <line x1="50" y1="5" x2="50" y2="0" stroke="#9C7545" strokeWidth="2" />
        <line x1="35" y1="50" x2="65" y2="50" stroke="#C7C4BD" strokeWidth="0.5" />
        <line x1="35" y1="65" x2="65" y2="65" stroke="#C7C4BD" strokeWidth="0.5" />
        <line x1="35" y1="80" x2="65" y2="80" stroke="#C7C4BD" strokeWidth="0.5" />
      </svg>
    ),
  },
  {
    name: 'Pour Over Dripper',
    description: 'Ceramic wave dripper for optimal extraction geometry.',
    svg: (
      <svg viewBox="0 0 100 120" fill="none">
        <path d="M25 20 L50 100 L75 20" stroke="#303030" strokeWidth="1.5" fill="none" />
        <ellipse cx="50" cy="20" rx="25" ry="8" stroke="#303030" strokeWidth="1" />
        <line x1="35" y1="35" x2="65" y2="35" stroke="#4D83C8" strokeWidth="0.5" opacity="0.5" />
        <line x1="38" y1="50" x2="62" y2="50" stroke="#4D83C8" strokeWidth="0.5" opacity="0.5" />
        <line x1="41" y1="65" x2="59" y2="65" stroke="#4D83C8" strokeWidth="0.5" opacity="0.5" />
        <circle cx="50" cy="80" r="2" fill="#9C7545" />
      </svg>
    ),
  },
  {
    name: 'Scale',
    description: '0.1g accuracy for recipe precision.',
    svg: (
      <svg viewBox="0 0 100 80" fill="none">
        <rect x="10" y="40" width="80" height="30" rx="3" stroke="#303030" strokeWidth="1.5" />
        <rect x="30" y="15" width="40" height="25" rx="2" stroke="#303030" strokeWidth="1" />
        <rect x="35" y="20" width="30" height="15" rx="1" stroke="#4D83C8" strokeWidth="0.5" />
        <text x="50" y="31" textAnchor="middle" fill="#4D83C8" fontSize="6" fontFamily="monospace">18.5g</text>
        <circle cx="25" cy="55" r="3" stroke="#C7C4BD" strokeWidth="0.5" />
        <circle cx="75" cy="55" r="3" stroke="#C7C4BD" strokeWidth="0.5" />
      </svg>
    ),
  },
  {
    name: 'Kettle',
    description: 'Gooseneck spout for controlled flow rate.',
    svg: (
      <svg viewBox="0 0 120 100" fill="none">
        <ellipse cx="55" cy="70" rx="35" ry="20" stroke="#303030" strokeWidth="1.5" fill="none" />
        <path d="M20 70 L20 40 Q20 30 30 30 L80 30" stroke="#303030" strokeWidth="1.5" fill="none" />
        <path d="M80 30 Q95 30 95 45 Q95 55 85 55" stroke="#303030" strokeWidth="1.5" fill="none" />
        <path d="M85 55 L90 70" stroke="#303030" strokeWidth="1" />
        <line x1="55" y1="15" x2="55" y2="30" stroke="#9C7545" strokeWidth="1.5" />
        <circle cx="55" cy="12" r="3" stroke="#9C7545" strokeWidth="1" fill="none" />
      </svg>
    ),
  },
];

export default function TheWorkshop() {
  return (
    <section id="workshop" className="workshop section">
      <div className="container">
        <div className="workshop__header">
          <span className="section-label">05 — The Workshop</span>
          <h2 className="workshop__heading">
            Tools of the<br />
            <em>craft</em>.
          </h2>
          <p className="workshop__intro">
            Every tool in our workshop has been selected for its precision, beauty, and
            contribution to the final composition. These are instruments of extraction.
          </p>
        </div>

        <div className="workshop__bench">
          <div className="workbench">
            {/* Workbench surface */}
            <div className="workbench__surface">
              <div className="workbench__surface-grain" />
            </div>

            {/* Objects on bench */}
            <div className="workbench__objects">
              {TOOLS.map((tool, index) => (
                <div key={tool.name} className="workshop__object" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="workshop__object-visual">
                    {tool.svg}
                  </div>
                  <div className="workshop__object-info">
                    <h3 className="workshop__object-name">{tool.name}</h3>
                    <p className="workshop__object-description">{tool.description}</p>
                  </div>
                  <div className="workshop__object-rotate">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 12a9 9 0 11-6.22-8.56" />
                      <polyline points="21 3 21 9 15 9" />
                    </svg>
                    <span>360°</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dimension lines */}
          <div className="workshop__dimensions">
            <div className="workshop__dimension workshop__dimension--width">
              <span>2400mm</span>
              <div className="workshop__dimension-line" />
            </div>
            <div className="workshop__dimension workshop__dimension--height">
              <span>900mm</span>
              <div className="workshop__dimension-line" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
