import Image from 'next/image';
import { SectionTitle } from '@/components/SectionTitle';
import { galleryImages } from '@/lib/site';

export default function GalleryPage() {
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
          A closer look at the production floor, fabric handling and the people behind every order.
        </p>
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div className="gallery-item" key={image.src}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
