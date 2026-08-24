import { gallery, instagram, vibeSquare } from '../data/mallContent';

const galleryItems = [
  { label: 'Central Atrium', tone: 'Architecture' },
  { label: 'Retail Avenues', tone: 'Shopping' },
  { label: 'Dining Court', tone: 'F&B' },
  { label: 'Vibe Square Events', tone: 'Community' },
  { label: 'Multiplex Cinema', tone: 'Entertainment' },
  { label: 'Family FEC Zone', tone: 'Play' },
];

export default function GallerySection() {
  return (
  <section className="section gallery-section" id="gallery">
    <div className="container">
      <p className="section-label">Gallery</p>
      <h2 className="section-title">{gallery.title}</h2>
      <p className="section-desc">{gallery.description}</p>

      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <article key={item.label} className="gallery-card">
            <div className="gallery-card-visual" aria-hidden="true" />
            <div className="gallery-card-body">
              <span className="gallery-tone">{item.tone}</span>
              <h3>{item.label}</h3>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
  );
}

export function VibeSquareSection() {
  return (
    <section className="section vibe-section" id="vibe-square">
      <div className="container vibe-inner">
        <div>
          <p className="section-label">Vibe Square</p>
          <h2 className="section-title">{vibeSquare.title}</h2>
          <p className="section-desc">{vibeSquare.description}</p>
        </div>
        <div className="vibe-visual" aria-hidden="true">
          <span>Open-air events · UGF</span>
        </div>
      </div>
    </section>
  );
}

export function InstagramSection() {
  return (
    <section className="section instagram-section" id="instagram">
      <div className="container">
        <p className="section-label">Instagram Feed</p>
        <h2 className="section-title">{instagram.title}</h2>
        <p className="section-desc">{instagram.description}</p>

        <div className="instagram-grid">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="instagram-tile" aria-hidden="true" />
          ))}
        </div>
        <p className="instagram-note">
          Follow community highlights and event moments from M5 Ecity Mall on social.
        </p>
      </div>
    </section>
  );
}
