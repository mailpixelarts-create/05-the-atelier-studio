import './CreativeProcess.scss';

const STEPS = [
  {
    number: '01',
    title: 'Sourcing',
    subtitle: 'Origin Selection',
    description: 'Direct trade relationships with farms in Ethiopia, Colombia, and Guatemala. We visit every origin, cup every lot, and select only those beans that meet our architectural standards.',
    sketch: (
      <svg viewBox="0 0 120 120" fill="none">
        <circle cx="60" cy="60" r="50" stroke="#303030" strokeWidth="1" />
        <path d="M40 70 Q50 40 60 60 Q70 80 80 50" stroke="#9C7545" strokeWidth="1.5" fill="none" />
        <circle cx="40" cy="70" r="3" fill="#9C7545" />
        <circle cx="60" cy="60" r="3" fill="#9C7545" />
        <circle cx="80" cy="50" r="3" fill="#9C7545" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Roasting',
    subtitle: 'Profile Development',
    description: 'Each origin receives a custom roast profile developed through weeks of testing. Temperature curves are plotted like architectural sections — every degree matters.',
    sketch: (
      <svg viewBox="0 0 120 120" fill="none">
        <path d="M20 100 L20 20 L100 20" stroke="#303030" strokeWidth="1" />
        <path d="M20 90 Q40 90 50 60 Q60 30 80 30 Q90 30 95 50" stroke="#4D83C8" strokeWidth="1.5" fill="none" />
        <circle cx="50" cy="60" r="2" fill="#4D83C8" />
        <circle cx="80" cy="30" r="2" fill="#4D83C8" />
        <line x1="50" y1="60" x2="50" y2="90" stroke="#C7C4BD" strokeWidth="0.5" strokeDasharray="2 2" />
        <line x1="80" y1="30" x2="80" y2="90" stroke="#C7C4BD" strokeWidth="0.5" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Brewing',
    subtitle: 'Extraction Design',
    description: 'Water temperature, grind size, pour rate, contact time — our brewing methodology is a system of precisely calibrated variables, each one a design decision.',
    sketch: (
      <svg viewBox="0 0 120 120" fill="none">
        <rect x="30" y="30" width="60" height="70" rx="2" stroke="#303030" strokeWidth="1" fill="none" />
        <path d="M45 30 L45 20 Q45 15 50 15 L70 15 Q75 15 75 20 L75 30" stroke="#303030" strokeWidth="1" fill="none" />
        <ellipse cx="60" cy="45" rx="20" ry="6" stroke="#9C7545" strokeWidth="1" fill="none" />
        <line x1="40" y1="60" x2="80" y2="60" stroke="#C7C4BD" strokeWidth="0.5" />
        <line x1="40" y1="75" x2="80" y2="75" stroke="#C7C4BD" strokeWidth="0.5" />
        <line x1="40" y1="90" x2="80" y2="90" stroke="#C7C4BD" strokeWidth="0.5" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Presentation',
    subtitle: 'Final Composition',
    description: 'The pour, the placement, the final form. Like the last strokes of a sketch, presentation is where intention meets instinct. Every cup is a finished work.',
    sketch: (
      <svg viewBox="0 0 120 120" fill="none">
        <ellipse cx="60" cy="80" rx="35" ry="8" stroke="#303030" strokeWidth="1" fill="none" />
        <path d="M25 80 L25 50 Q25 40 60 40 Q95 40 95 50 L95 80" stroke="#303030" strokeWidth="1.5" fill="none" />
        <path d="M35 55 Q50 45 60 55 Q70 65 85 55" stroke="#4D83C8" strokeWidth="1" fill="none" />
        <circle cx="60" cy="52" r="4" stroke="#9C7545" strokeWidth="0.8" fill="none" />
      </svg>
    ),
  },
];

export default function CreativeProcess() {
  return (
    <section id="process" className="process section">
      <div className="container">
        <div className="process__header">
          <span className="section-label">02 — Creative Process</span>
          <h2 className="process__heading">
            From seed to cup,<br />
            a <em>designed journey</em>.
          </h2>
        </div>

        <div className="process__timeline">
          <div className="process__timeline-line" />

          {STEPS.map((step) => (
            <div key={step.number} className="process__step">
              <div className="process__step-sketch">
                {step.sketch}
              </div>
              <div className="process__step-content">
                <span className="process__step-number">{step.number}</span>
                <span className="process__step-subtitle">{step.subtitle}</span>
                <h3 className="process__step-title">{step.title}</h3>
                <p className="process__step-description">{step.description}</p>
              </div>
              <div className="process__step-line" />
            </div>
          ))}
        </div>

        {/* Coffee bean journey illustration */}
        <div className="process__bean-journey">
          <svg viewBox="0 0 800 60" fill="none" preserveAspectRatio="none">
            <path
              d="M0 30 Q100 10 200 30 Q300 50 400 30 Q500 10 600 30 Q700 50 800 30"
              stroke="#9C7545"
              strokeWidth="1"
              strokeDasharray="4 4"
              fill="none"
            />
            {[0, 200, 400, 600, 800].map((x, i) => (
              <circle key={i} cx={x} cy={30} r={4} fill="#9C7545" opacity={0.6 + i * 0.1} />
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
