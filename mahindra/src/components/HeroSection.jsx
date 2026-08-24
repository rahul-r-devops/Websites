import { useEffect, useState } from 'react';
import { hero } from '../data/mallContent';
import { heroCarouselImages } from '../data/officialImages';
import StatsStrip from './StatsStrip';

const CAROUSEL_INTERVAL_MS = 5000;

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (heroCarouselImages.length <= 1) return undefined;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroCarouselImages.length);
    }, CAROUSEL_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero-section" id="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-eyebrow">{hero.eyebrow}</p>
          <h1 className="hero-title">
            Make space
            <br />
            for <em>more.</em>
          </h1>
          <p className="hero-subtitle">{hero.subtitle}</p>
          <p className="hero-desc">{hero.description}</p>
          <div className="hero-actions">
            <a className="btn-primary" href="#directory">
              {hero.ctaPrimary}
            </a>
            <a className="btn-ghost" href="#visit">
              {hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="hero-visual hero-carousel" aria-live="polite">
          {heroCarouselImages.map((image, index) => (
            <div
              key={image.src}
              className={`hero-carousel-slide ${index === activeIndex ? 'is-active' : ''}`}
              aria-hidden={index !== activeIndex}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading={index === 0 ? 'eager' : 'lazy'}
                style={{ objectPosition: image.objectPosition || 'center center' }}
              />
            </div>
          ))}

          <div
            className="hero-carousel-dots"
            role="tablist"
            aria-label="Hero image carousel"
          >
            {heroCarouselImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Show image ${index + 1} of ${heroCarouselImages.length}`}
                className={index === activeIndex ? 'active' : ''}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <StatsStrip />
    </section>
  );
}
