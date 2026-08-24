import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { anchors } from '../data/anchors';
import MaterialIcon from './MaterialIcon';
import { categoryMap } from '../data/categories';

export default function LandmarksCarousel() {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', dragFree: false },
    prefersReducedMotion
      ? []
      : [Autoplay({ delay: 4500, stopOnInteraction: true, stopOnMouseEnter: true })]
  );

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCanPrev(emblaApi.canScrollPrev());
      setCanNext(emblaApi.canScrollNext());
    };

    emblaApi.on('select', onSelect);
    onSelect();

    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  return (
    <section className="section landmarks-section" id="landmarks">
      <div className="container">
        <p className="section-label">Major Retail & Dining Landmarks</p>
        <div className="landmarks-header">
          <h2 className="section-title">Featured Anchor Brands</h2>
          <div className="carousel-controls">
            <button
              type="button"
              className="carousel-btn"
              onClick={scrollPrev}
              disabled={!canPrev}
              aria-label="Previous anchor brands"
            >
              <MaterialIcon name="chevron_left" size={22} />
            </button>
            <button
              type="button"
              className="carousel-btn"
              onClick={scrollNext}
              disabled={!canNext}
              aria-label="Next anchor brands"
            >
              <MaterialIcon name="chevron_right" size={22} />
            </button>
          </div>
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {anchors.map((anchor) => (
              <div key={anchor.id} className="embla__slide">
                <article className="landmark-card">
                  <div className="landmark-card-visual">
                    <img src={anchor.image} alt={anchor.name} loading="lazy" />
                    {anchor.logo && (
                      <div className="landmark-logo-badge">
                        <img src={anchor.logo} alt={`${anchor.name} logo`} loading="lazy" />
                      </div>
                    )}
                  </div>
                  <div className="landmark-card-body">
                    <div className="landmark-card-top">
                      <span className="landmark-tag">{anchor.tag}</span>
                      <span className="landmark-floor">{anchor.floor}</span>
                    </div>
                    <h3>{anchor.name}</h3>
                    <p>{anchor.description}</p>
                    <span className="landmark-category">
                      {categoryMap[anchor.category]}
                    </span>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
