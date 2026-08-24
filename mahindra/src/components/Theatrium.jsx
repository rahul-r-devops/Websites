import { theatrium } from '../data/mallContent';

export default function Theatrium() {
  return (
    <section className="section theatrium-section" id="theatrium">
      <div className="container">
        <p className="section-label">{theatrium.label}</p>
        <p className="theatrium-eyebrow">{theatrium.eyebrow}</p>
        <h2 className="section-title theatrium-title">{theatrium.title}</h2>
        <p className="section-desc">{theatrium.description}</p>
      </div>
    </section>
  );
}
