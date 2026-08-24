import { useMemo, useState } from 'react';
import { events, eventFilters } from '../data/events';

export default function EventsSection() {
  const [filter, setFilter] = useState('all');

  const filtered = useMemo(() => {
    if (filter === 'all') return events;
    return events.filter((e) => e.category === filter);
  }, [filter]);

  return (
    <section className="section events-section" id="events">
      <div className="container">
        <p className="section-label">Events & Celebrations</p>
        <h2 className="section-title">What&apos;s Happening at M5 Ecity</h2>
        <p className="section-desc">
          From seasonal mega sales to food festivals, concerts at Vibe Square, and
          family weekend carnivals.
        </p>

        <div className="event-filters">
          {eventFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`event-filter-btn ${filter === f.id ? 'active' : ''}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="events-grid">
          {filtered.map((event) => (
            <article key={event.id} className="event-card">
              <div className="event-card-top">
                <span className="event-status">{event.status}</span>
                <span className="event-date">{event.date}</span>
              </div>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div className="event-card-footer">
                <span className="event-tag">{event.tag}</span>
                <span className="event-cta">{event.cta}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
