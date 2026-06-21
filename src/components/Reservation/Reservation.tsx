import { useState, FormEvent } from 'react';
import './Reservation.scss';

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    purpose: 'casual',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleChange(field: string, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <section id="reservation" className="reservation section">
      <div className="container">
        <div className="reservation__header">
          <span className="section-label">09 — Reservation</span>
          <h2 className="reservation__heading">
            Reserve your<br />
            <em>workspace</em>.
          </h2>
          <p className="reservation__intro">
            Whether for a morning espresso, a creative brainstorming session, or a
            private workshop — we'd love to welcome you to the studio.
          </p>
        </div>

        {submitted ? (
          <div className="reservation__confirmation">
            <div className="reservation__confirmation-icon">
              <svg viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="28" stroke="#4D83C8" strokeWidth="1.5" />
                <polyline points="18 30 26 38 42 22" stroke="#4D83C8" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <h3 className="reservation__confirmation-title">Reservation Confirmed</h3>
            <p className="reservation__confirmation-text">
              Thank you, {formData.name}. We've sent a confirmation to {formData.email}.<br />
              We look forward to welcoming you to The Atelier.
            </p>
            <button className="reservation__confirmation-btn hover-target" onClick={() => setSubmitted(false)}>
              Make Another Reservation
            </button>
          </div>
        ) : (
          <form className="reservation__form" onSubmit={handleSubmit}>
            <div className="reservation__form-row">
              <div className="reservation__field">
                <label className="reservation__label">Name</label>
                <input
                  type="text"
                  className="reservation__input"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  required
                  placeholder="Your name"
                />
              </div>
              <div className="reservation__field">
                <label className="reservation__label">Email</label>
                <input
                  type="email"
                  className="reservation__input"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  required
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="reservation__form-row reservation__form-row--three">
              <div className="reservation__field">
                <label className="reservation__label">Date</label>
                <input
                  type="date"
                  className="reservation__input"
                  value={formData.date}
                  onChange={(e) => handleChange('date', e.target.value)}
                  required
                />
              </div>
              <div className="reservation__field">
                <label className="reservation__label">Time</label>
                <select
                  className="reservation__input reservation__select"
                  value={formData.time}
                  onChange={(e) => handleChange('time', e.target.value)}
                  required
                >
                  <option value="">Select time</option>
                  <option value="07:00">07:00</option>
                  <option value="08:00">08:00</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                </select>
              </div>
              <div className="reservation__field">
                <label className="reservation__label">Guests</label>
                <select
                  className="reservation__input reservation__select"
                  value={formData.guests}
                  onChange={(e) => handleChange('guests', e.target.value)}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="reservation__field">
              <label className="reservation__label">Purpose</label>
              <div className="reservation__purposes">
                {[
                  { value: 'casual', label: 'Casual Visit' },
                  { value: 'meeting', label: 'Meeting' },
                  { value: 'workshop', label: 'Workshop' },
                  { value: 'private', label: 'Private Event' },
                ].map((p) => (
                  <button
                    key={p.value}
                    type="button"
                    className={`reservation__purpose-btn ${formData.purpose === p.value ? 'is-active' : ''} hover-target`}
                    onClick={() => handleChange('purpose', p.value)}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="reservation__field">
              <label className="reservation__label">Notes</label>
              <textarea
                className="reservation__input reservation__textarea"
                value={formData.notes}
                onChange={(e) => handleChange('notes', e.target.value)}
                placeholder="Any special requirements..."
                rows={4}
              />
            </div>

            <button type="submit" className="reservation__submit hover-target">
              <span>Confirm Reservation</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
