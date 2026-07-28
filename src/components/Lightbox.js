import { useEffect, useRef } from 'react';

function Lightbox({ src, alt, caption, onClose }) {
  const overlayRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    closeBtnRef.current?.focus();

    const onKey = e => {
      if (e.key === 'Escape') { onClose(); return; }

      if (e.key === 'Tab') {
        const focusable = overlayRef.current?.querySelectorAll(
          'button, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      ref={overlayRef}
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
        tabIndex={0}
      />
      {caption && (
        <div className="lightbox-caption" onClick={e => e.stopPropagation()}>
          <p>{caption}</p>
        </div>
      )}
    </div>
  );
}

export default Lightbox;
