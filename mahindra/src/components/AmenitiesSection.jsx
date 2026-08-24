import { amenities } from '../data/amenities';

export default function AmenitiesSection() {
  return (
    <section className="section amenities-section" id="amenities">
      <div className="container">
        <p className="section-label">Visitor Comfort & Convenience</p>
        <h2 className="section-title">Your Comfort is Our Priority</h2>
        <p className="section-desc">
          19 dedicated convenience services designed to ensure every shopping,
          dining, and family visit at M5 Ecity is effortless.
        </p>

        <div className="amenities-grid">
          {amenities.map((item) => (
            <article key={item.id} className="amenity-card">
              <div className="amenity-card-header">
                <h3>{item.title}</h3>
                <span className="amenity-service-num">SERVICE #{item.id}</span>
              </div>
              <p>{item.description}</p>
              <span className="amenity-price">{item.price}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
