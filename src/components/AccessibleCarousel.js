import React from 'react';
import './AccessibleCarousel.css';

function AccessibleCarousel({ images, ariaLabel = "Project images carousel" }) {
  if (!images || images.length === 0) return null;

  return (
    <div className="accessible-carousel-wrap">
      <div className="accessible-carousel" aria-label={ariaLabel} tabIndex="0" role="region">
        {images.map((img, i) => (
          <div key={i} className="accessible-carousel-item">
            <img 
              src={img.src} 
              alt={img.alt || `Carousel image ${i + 1}`} 
              loading={img.loading || "lazy"} 
              className="d-block w-100"
            />
            {img.caption && (
              <div className="accessible-carousel-caption d-none d-md-block">
                <p>{img.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AccessibleCarousel;
