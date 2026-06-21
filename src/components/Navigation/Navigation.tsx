import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../../utils/constants';
import './Navigation.scss';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#" className="nav__logo hover-target">
          <span className="nav__logo-prefix">THE</span>
          <span className="nav__logo-name">ATELIER</span>
        </a>

        <div className="nav__links">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav__link hover-target">
              {link.label}
            </a>
          ))}
        </div>

        <a href="#reservation" className="nav__cta hover-target">
          Reserve
        </a>

        <button
          className={`nav__burger hover-target ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`nav__mobile ${menuOpen ? 'is-open' : ''}`}>
        <div className="nav__mobile-links">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav__mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#reservation" className="nav__mobile-cta" onClick={() => setMenuOpen(false)}>
            Reserve a Table
          </a>
        </div>
      </div>
    </nav>
  );
}
