// A captioned image that opens full size in a new tab. Used inline in case studies.
function EvidenceImage({ src, alt, children }) {
  return (
    <figure className="case-evidence">
      <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`View full-size image: ${alt} (opens in a new tab)`}>
        <img src={src} alt={alt} loading="lazy" />
      </a>
      <figcaption>{children} <span>Open image to inspect the detail ↗</span></figcaption>
    </figure>
  );
}

export default EvidenceImage;
