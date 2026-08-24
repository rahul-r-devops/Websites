import { useMemo, useState } from 'react';
import { floors } from '../data/floors';
import { storeBrands } from '../data/storeBrands';
import MaterialIcon from './MaterialIcon';

function findBrandLogo(name) {
  const normalized = name.toLowerCase();
  const match = storeBrands.find((store) => {
    const storeName = store.name.toLowerCase();
    return (
      storeName === normalized ||
      storeName.includes(normalized) ||
      normalized.includes(storeName) ||
      normalized.split(/[\s/&]+/).some((part) => part.length > 3 && storeName.includes(part))
    );
  });
  return match?.logo || null;
}

export default function FloorDirectory() {
  const [activeFloor, setActiveFloor] = useState('lgf');
  const floor = floors.find((f) => f.id === activeFloor);

  const anchorLogos = useMemo(
    () =>
      (floor?.anchors || []).map((anchor) => ({
        name: anchor,
        logo: findBrandLogo(anchor),
      })),
    [floor]
  );

  return (
    <section className="section floor-section" id="floors">
      <div className="container">
        <p className="section-label">Interactive Floor Directory</p>
        <h2 className="section-title">Explore M5 Ecity Floor by Floor</h2>
        <p className="section-desc floor-section-desc">
          Six levels of world-class retail, gourmet dining, multiplex cinema, and
          family entertainment zones.
        </p>

        <nav className="floor-tabs-row" aria-label="Floor selector">
          {floors.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`floor-tab-pill ${activeFloor === f.id ? 'active' : ''}`}
              onClick={() => setActiveFloor(f.id)}
            >
              <span className="floor-tab-label">{f.shortLabel}</span>
              <span className="floor-tab-name">{f.name}</span>
            </button>
          ))}
        </nav>

        <div className="floor-panel-modern" key={activeFloor}>
          <div className="floor-panel-intro">
            <div>
              <p className="floor-panel-eyebrow">{floor?.label} Level Overview</p>
              <h3>{floor?.title}</h3>
              <p className="floor-panel-desc">{floor?.description}</p>
            </div>
            <a href="#landmarks" className="floor-directory-link">
              Browse featured brands
              <MaterialIcon name="arrow_forward" size={16} />
            </a>
          </div>

          {floor?.mapSrc && (
            <figure className="floor-map floor-map-featured">
              <figcaption>Official floor map — {floor.label}</figcaption>
              <div className="floor-map-frame">
                <img
                  src={floor.mapSrc}
                  alt={`${floor.title} map — M5 Ecity Mall`}
                  loading="lazy"
                />
              </div>
            </figure>
          )}

          <div className="floor-details-grid">
            <div className="floor-highlights-card">
              <h4>Highlights</h4>
              <ul>
                {floor?.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>

            <div className="floor-anchors-card">
              <h4>Featured Floor Anchors</h4>
              <div className="floor-anchor-logos">
                {anchorLogos.map((anchor) => (
                  <div key={anchor.name} className="floor-anchor-logo-item">
                    <div className="floor-anchor-logo-frame">
                      {anchor.logo ? (
                        <img src={anchor.logo} alt={anchor.name} loading="lazy" />
                      ) : (
                        <span className="floor-anchor-fallback">
                          {anchor.name.slice(0, 2).toUpperCase()}
                        </span>
                      )}
                    </div>
                    <p>{anchor.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
