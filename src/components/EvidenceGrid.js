import EvidenceImage from './EvidenceImage';

// Replaces the old image carousels: every screen is visible at once with its caption,
// and each opens full size in a new tab. Plain links and figures, so keyboard and
// screen reader behaviour is the browser's own.
function EvidenceGrid({ images, heading = 'Selected screens' }) {
  if (!images || images.length === 0) return null;
  return (
    <section className="evidence-section" aria-labelledby="evidence-heading">
      <h2 id="evidence-heading" className="sub-title">{heading}</h2>
      <div className="evidence-grid">
        {images.map(img => (
          <EvidenceImage key={img.src} src={img.src} alt={img.alt}>
            {img.caption}
          </EvidenceImage>
        ))}
      </div>
    </section>
  );
}

export default EvidenceGrid;
