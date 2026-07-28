import React, { useRef } from 'react';
import './AccessibleCarousel.css';

function AccessibleCarousel({ images, ariaLabel = "Project images carousel" }) {
  const scrollRef = useRef(null);

  if (!images || images.length === 0) return null;

  const scroll = (direction) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = container.clientWidth;
      const currentScroll = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;

      // Loop to beginning if at the end
      if (direction === 1 && currentScroll >= maxScroll - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      // Loop to end if at the beginning
      } else if (direction === -1 && currentScroll <= 10) {
        container.scrollTo({ left: maxScroll, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="accessible-carousel-wrap">
      <div className="accessible-carousel-rail">
        <div className="accessible-carousel" aria-label={ariaLabel} tabIndex="0" role="region" ref={scrollRef}>
          {images.map((img, i) => (
            <div key={i} className="accessible-carousel-item">
              <img 
                src={img.src} 
                alt={img.alt || `Carousel image ${i + 1}`} 
                loading={img.loading || "lazy"} 
                className="d-block w-100"
              />
              {img.caption && (
                <div className="accessible-carousel-caption">
                  <p>{img.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {images.length > 1 && (
        <>
          <button className="carousel-control prev" onClick={() => scroll(-1)} aria-label="Previous image">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button className="carousel-control next" onClick={() => scroll(1)} aria-label="Next image">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </>
      )}
    </div>
  );
}

export default AccessibleCarousel;
