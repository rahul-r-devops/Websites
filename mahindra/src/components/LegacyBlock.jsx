import { legacy } from '../data/mallContent';

export default function LegacyBlock() {
  return (
    <section className="section legacy-section" id="legacy">
      <div className="container">
        <p className="section-label">{legacy.eyebrow}</p>
        <h2 className="section-title">{legacy.title}</h2>
        <p className="section-desc">{legacy.description}</p>

        <a
          className="btn-primary legacy-cta"
          href={legacy.ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {legacy.cta}
        </a>

        <div className="legacy-grid">
          {legacy.blocks.map((block) => (
            <a
              key={block.title}
              href={block.url}
              className="legacy-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="legacy-card-image">
                <img src={block.image} alt={block.title} loading="lazy" />
              </div>
              <div className="legacy-card-body">
                <h3>{block.title}</h3>
                <p>{block.description}</p>
                <span className="legacy-card-link">Discover More</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
