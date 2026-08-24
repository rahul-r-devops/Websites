import { theatrium } from '../data/mallContent';
import { officialImages } from '../data/officialImages';

export default function Theatrium() {
  return (
    <section className="section theatrium-section" id="theatrium">
      <div className="container theatrium-inner">
        <div className="theatrium-copy">
          <p className="section-label">{theatrium.label}</p>
          <p className="theatrium-eyebrow">{theatrium.eyebrow}</p>
          <h2 className="section-title theatrium-title">{theatrium.title}</h2>
          <p className="section-desc">{theatrium.description}</p>
        </div>

        <figure className="theatrium-image">
          <img
            src={officialImages.mallExterior}
            alt="M5 Ecity Mall exterior — Electronics City, Bengaluru"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}
