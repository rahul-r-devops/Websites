import { testimonial } from '../data/mallContent';

export default function Testimonial() {
  return (
    <section className="section testimonial-section" id="testimonial">
      <div className="container">
        <p className="section-label">{testimonial.label}</p>
        <blockquote className="testimonial-quote">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <cite className="testimonial-author">
          {testimonial.author} — {testimonial.role}
        </cite>
      </div>
    </section>
  );
}
