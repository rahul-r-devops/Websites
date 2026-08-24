import { pillars } from '../data/mallContent';

export default function PillarsSection() {
  return (
    <section className="section pillars-section" id="pillars">
      <div className="container">
        <p className="section-label">{pillars.eyebrow}</p>
        <h2 className="section-title">{pillars.title}</h2>

        <div className="pillars-grid">
          {pillars.items.map((item) => (
            <article key={item.num} className="pillar-card">
              <div className="pillar-card-visual">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
              <div className="pillar-card-body">
                <span className="pillar-num">{item.num}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="pillar-detail">{item.detail}</span>
                {item.logos?.length > 0 && (
                  <div className="pillar-logos">
                    {item.logos.map((logo) => (
                      <img key={logo} src={logo} alt="" loading="lazy" />
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
