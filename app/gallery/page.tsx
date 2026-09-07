'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { SectionTitle } from '@/components/SectionTitle';
import { galleryImages } from '@/lib/site';

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  }, [selectedIndex]);

  const handlePrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  }, [selectedIndex]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    },
    [selectedIndex, handleNext, handlePrev]
  );

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex, handleKeyDown]);

  const currentImage = selectedIndex !== null ? galleryImages[selectedIndex] : null;

  return (
    <>
      <section className="page-hero compact">
        <div>
          <span>Gallery</span>
          <h1>Factory, storefront and textile production photos.</h1>
          <p>See the place, machines and production environment behind JF World Trading.</p>
        </div>
      </section>

      <section className="section gallery-section">
        <SectionTitle eyebrow="Factory Images" title="Our Work Space" align="center" />
        <p className="gallery-intro">
          A closer look at the production floor, posters, fabric handling and the people behind every order. Click any image to view full screen.
        </p>
        
        <div className="gallery-grid">
          {galleryImages.map((image, index) => {
            const isPoster = 'isPoster' in image && image.isPoster;

            return (
              <div
                className={`gallery-item ${isPoster ? 'poster-item' : ''}`}
                key={image.src}
                onClick={() => setSelectedIndex(index)}
                role="button"
                tabIndex={0}
                aria-label={`View ${image.alt} full screen`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedIndex(index);
                  }
                }}
              >
                {isPoster ? (
                  <>
                    {/* Blurred backdrop to prevent empty gaps while keeping poster aspect uncropped */}
                    <Image
                      src={image.src}
                      alt=""
                      fill
                      className="gallery-bg-blur"
                      aria-hidden="true"
                    />
                    {/* Uncropped foreground poster */}
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
                      className="gallery-fg-img"
                    />
                  </>
                ) : (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
                  />
                )}
                
                <div className="gallery-item-overlay">
                  <span className="gallery-zoom-badge">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      <line x1="11" y1="8" x2="11" y2="14"></line>
                      <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                    View Full
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Lightbox Modal ────────────────────────────── */}
      {currentImage && (
        <div
          className="lightbox-overlay"
          onClick={() => setSelectedIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox"
        >
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={() => setSelectedIndex(null)}
              aria-label="Close Lightbox"
            >
              ✕
            </button>

            {galleryImages.length > 1 && (
              <>
                <button
                  className="lightbox-nav prev"
                  onClick={handlePrev}
                  aria-label="Previous Image"
                >
                  ‹
                </button>
                <button
                  className="lightbox-nav next"
                  onClick={handleNext}
                  aria-label="Next Image"
                >
                  ›
                </button>
              </>
            )}

            <div className="lightbox-media">
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                priority
                className="lightbox-img"
              />
            </div>

            <div className="lightbox-footer">
              <p className="lightbox-caption">{currentImage.alt}</p>
              <span className="lightbox-counter">
                {selectedIndex! + 1} / {galleryImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
