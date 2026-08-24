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
              <span className="pillar-num">{item.num}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="pillar-detail">{item.detail}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
