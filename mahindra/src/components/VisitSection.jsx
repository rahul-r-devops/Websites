import { useState } from 'react';
import { visit, contact, enquiry } from '../data/mallContent';

export default function VisitSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    category: enquiry.categories[0],
    message: '',
    agree: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your enquiry has been recorded. Our team will reach out shortly.');
    setForm({
      name: '',
      email: '',
      phone: '',
      category: enquiry.categories[0],
      message: '',
      agree: false,
    });
  };

  return (
    <section className="section visit-section" id="visit">
      <div className="container">
        <p className="section-label">{visit.label}</p>
        <h2 className="section-title">{visit.title}</h2>
        <p className="section-desc">{visit.description}</p>

        <div className="visit-grid">
          <div className="visit-info">
            <h3>Mall Address</h3>
            <address>
              {contact.address.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </address>

            <div className="visit-details">
              <div>
                <h4>Helpline Concierge</h4>
                <a href={contact.phoneHref}>{contact.phone}</a>
              </div>
              <div>
                <h4>Operating Hours</h4>
                <p>{visit.hours}</p>
              </div>
            </div>

            <a
              className="btn-ghost maps-btn"
              href={contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {visit.mapsLabel}
            </a>

            <div className="map-embed">
              <iframe
                title="M5 Ecity Mall location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=M5+Ecity+Mall+Electronic+City+Bengaluru&z=15&output=embed"
                allowFullScreen
              />
            </div>
          </div>

          <div className="enquiry-form-wrap">
            <h3>{enquiry.title}</h3>
            <p>{enquiry.description}</p>

            <form className="enquiry-form" onSubmit={handleSubmit}>
              <label>
                Full Name *
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </label>

              <label>
                Email Address *
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </label>

              <label>
                Phone Number
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91"
                />
              </label>

              <label>
                Enquiry Category
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                >
                  {enquiry.categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </label>

              <label>
                Your Message / Enquiry
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </label>

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  required
                  checked={form.agree}
                  onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                />
                I agree to the Terms & Conditions
              </label>

              <button type="submit" className="btn-primary">
                {enquiry.submitLabel}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
