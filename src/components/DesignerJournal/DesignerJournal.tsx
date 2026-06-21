import { JOURNAL_ARTICLES } from '../../utils/constants';
import './DesignerJournal.scss';

export default function DesignerJournal() {
  return (
    <section id="journal" className="journal section">
      <div className="container">
        <div className="journal__header">
          <span className="section-label">06 — Designer Journal</span>
          <h2 className="journal__heading">
            Notes from the<br />
            <em>studio floor</em>.
          </h2>
        </div>

        <div className="journal__grid">
          {/* Featured article */}
          <article className="journal__article journal__article--featured">
            <div className="journal__article-image">
              <div className="journal__article-placeholder">
                <svg viewBox="0 0 200 150" fill="none">
                  <rect x="10" y="10" width="180" height="130" stroke="#303030" strokeWidth="0.5" />
                  <line x1="10" y1="50" x2="190" y2="50" stroke="#C7C4BD" strokeWidth="0.5" />
                  <line x1="10" y1="90" x2="190" y2="90" stroke="#C7C4BD" strokeWidth="0.5" />
                  <line x1="70" y1="10" x2="70" y2="140" stroke="#C7C4BD" strokeWidth="0.5" />
                  <line x1="130" y1="10" x2="130" y2="140" stroke="#C7C4BD" strokeWidth="0.5" />
                  <text x="100" y="75" textAnchor="middle" fill="#303030" fontSize="8" fontFamily="monospace">ARTICLE IMAGE</text>
                </svg>
              </div>
              <span className="journal__article-category">{JOURNAL_ARTICLES[0].category}</span>
            </div>
            <div className="journal__article-content">
              <time className="journal__article-date">{JOURNAL_ARTICLES[0].date}</time>
              <h3 className="journal__article-title">{JOURNAL_ARTICLES[0].title}</h3>
              <p className="journal__article-excerpt">{JOURNAL_ARTICLES[0].excerpt}</p>
              <a href="#" className="journal__article-link hover-target">
                Read Article
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </article>

          {/* Other articles */}
          {JOURNAL_ARTICLES.slice(1).map((article, index) => (
            <article key={article.title} className="journal__article">
              <div className="journal__article-image">
                <div className="journal__article-placeholder">
                  <svg viewBox="0 0 200 150" fill="none">
                    <rect x="10" y="10" width="180" height="130" stroke="#303030" strokeWidth="0.5" />
                    <line x1="10" y1="50" x2="190" y2="50" stroke="#C7C4BD" strokeWidth="0.5" />
                    <line x1="10" y1="90" x2="190" y2="90" stroke="#C7C4BD" strokeWidth="0.5" />
                    <text x="100" y="75" textAnchor="middle" fill="#303030" fontSize="8" fontFamily="monospace">ARTICLE {index + 2}</text>
                  </svg>
                </div>
                <span className="journal__article-category">{article.category}</span>
              </div>
              <div className="journal__article-content">
                <time className="journal__article-date">{article.date}</time>
                <h3 className="journal__article-title">{article.title}</h3>
                <p className="journal__article-excerpt">{article.excerpt}</p>
                <a href="#" className="journal__article-link hover-target">
                  Read
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Magazine page turn indicator */}
        <div className="journal__page-indicator">
          <span className="journal__page-number">Page 01</span>
          <div className="journal__page-line" />
          <span className="journal__page-total">of 12</span>
        </div>
      </div>
    </section>
  );
}
