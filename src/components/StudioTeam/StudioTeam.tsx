import { TEAM_MEMBERS } from '../../utils/constants';
import './StudioTeam.scss';

export default function StudioTeam() {
  return (
    <section id="team" className="team section">
      <div className="container">
        <div className="team__header">
          <span className="section-label">07 — The Studio</span>
          <h2 className="team__heading">
            The minds behind<br />
            <em>the craft</em>.
          </h2>
        </div>

        <div className="team__grid">
          {TEAM_MEMBERS.map((member, index) => (
            <div key={member.name} className="team__member">
              <div className="team__portrait">
                <div className="team__portrait-outline">
                  <svg viewBox="0 0 200 260" fill="none">
                    {/* Head outline */}
                    <ellipse cx="100" cy="80" rx="45" ry="55" stroke="#303030" strokeWidth="1.5" />
                    {/* Shoulders */}
                    <path d="M55 135 Q100 120 145 135 L160 200 L40 200 Z" stroke="#303030" strokeWidth="1.5" fill="none" />
                    {/* Construction marks */}
                    <line x1="100" y1="25" x2="100" y2="135" stroke="#C7C4BD" strokeWidth="0.5" strokeDasharray="2 4" />
                    <line x1="55" y1="80" x2="145" y2="80" stroke="#C7C4BD" strokeWidth="0.5" strokeDasharray="2 4" />
                    {/* Face features suggested */}
                    <circle cx="85" cy="70" r="2" fill="#303030" opacity="0.4" />
                    <circle cx="115" cy="70" r="2" fill="#303030" opacity="0.4" />
                    <path d="M90 95 Q100 100 110 95" stroke="#303030" strokeWidth="0.8" fill="none" opacity="0.3" />
                  </svg>
                </div>
                <div className="team__portrait-fill" />
                <span className="team__member-number">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="team__info">
                <h3 className="team__name">{member.name}</h3>
                <span className="team__role">{member.role}</span>
                <p className="team__bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
