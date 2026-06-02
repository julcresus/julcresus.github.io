import { useEffect, useRef } from 'react';

function Lightbox({ src, alt, onClose }) {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    closeBtnRef.current?.focus();
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="lightbox-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Full size: ${alt}`}
    >
      <button
        ref={closeBtnRef}
        className="lightbox-close"
        onClick={onClose}
        aria-label="Close image"
      >
        ×
      </button>
      <img
        src={src}
        alt={alt}
        className="lightbox-img"
        onClick={e => e.stopPropagation()}
      />
    </div>
  );
}

export default Lightbox;
