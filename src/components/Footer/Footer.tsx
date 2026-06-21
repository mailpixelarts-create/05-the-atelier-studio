import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Marquee */}
        <div className="footer__marquee">
          <div className="footer__marquee-track">
            <span>THE ATELIER</span>
            <span>·</span>
            <span>Design Studio Café</span>
            <span>·</span>
            <span>Coffee · Craft · Architecture</span>
            <span>·</span>
            <span>THE ATELIER</span>
            <span>·</span>
            <span>Design Studio Café</span>
            <span>·</span>
            <span>Coffee · Craft · Architecture</span>
            <span>·</span>
          </div>
        </div>

        <div className="footer__content">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-prefix">THE</span>
              <span className="footer__logo-name">ATELIER</span>
            </div>
            <p className="footer__tagline">A LOOKBOOK Studio Experience</p>
          </div>

          <div className="footer__links">
            <div className="footer__link-group">
              <h4 className="footer__link-title">Studio</h4>
              <a href="#philosophy" className="footer__link hover-target">Philosophy</a>
              <a href="#process" className="footer__link hover-target">Process</a>
              <a href="#team" className="footer__link hover-target">Team</a>
            </div>
            <div className="footer__link-group">
              <h4 className="footer__link-title">Experience</h4>
              <a href="#menu" className="footer__link hover-target">Menu</a>
              <a href="#gallery" className="footer__link hover-target">Gallery</a>
              <a href="#workshop" className="footer__link hover-target">Workshop</a>
            </div>
            <div className="footer__link-group">
              <h4 className="footer__link-title">Connect</h4>
              <a href="#visit" className="footer__link hover-target">Visit</a>
              <a href="#journal" className="footer__link hover-target">Journal</a>
              <a href="#reservation" className="footer__link hover-target">Reserve</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__divider" />
          <div className="footer__bottom-content">
            <p className="footer__copyright">
              © Norman James
            </p>
            <p className="footer__credit">
              Made with love ❤️ by <span className="footer__studio-name">Empathy Studio</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
