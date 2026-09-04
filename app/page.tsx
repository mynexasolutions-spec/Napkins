import Image from 'next/image';
import Link from 'next/link';
import { ProductCard } from '@/components/ProductCard';
import { SectionTitle } from '@/components/SectionTitle';
import { business, categories, products } from '@/lib/site';

const popularProducts = [
  {
    name: 'Cotton Towels',
    slug: 'cotton-towels',
    category: 'Towels',
    description: 'Soft and absorbent cotton towels.',
    image: '/hero-textile-range.png',
    featured: true,
  },
  products.find((p) => p.slug === 'premium-gamchas')!,
  products.find((p) => p.slug === 'kitchen-aprons')!,
  products.find((p) => p.slug === 'cleaning-cloth-duster')!,
  {
    name: 'Bath Towels',
    slug: 'bath-towels',
    category: 'Towels',
    description: 'Absorbent towels for everyday use.',
    image: '/hero-textile-range.png',
    featured: true,
  },
  products.find((p) => p.slug === 'hand-towels')!,
  products.find((p) => p.slug === 'floor-cloths')!,
  {
    name: 'Multi Purpose Cloths',
    slug: 'multi-purpose-cloths-home',
    category: 'Cleaning Cloths',
    description: 'Versatile cloths for every need.',
    image: '/Products/WhatsApp Image 2026-09-04 at 11.14.064 AM.jpeg',
    featured: true,
  },
];

const homeCategories = categories.slice(0, 5);

const galleryPreview = [
  '/Products/WhatsApp Image 2026-09-04 at 11.14.04 AM.jpeg',
  '/Products/WhatsApp Image 2026-09-04 at 11.14.041 AM.jpeg',
  '/Products/WhatsApp Image 2026-09-04 at 11.14.02 AM.jpeg',
  '/Products/WhatsApp Image 2026-09-04 at 12.35.573 PM.jpeg',
  '/Products/WhatsApp Image 2026-09-04 at 12.36.044 PM.jpeg',
];

const trustItems = [
  { icon: '🏆', label: 'Premium Quality', sub: 'Built to last' },
  { icon: '🌍', label: 'Global Supply',   sub: 'Bulk ready' },
  { icon: '🤝', label: 'Trusted Partner', sub: 'Direct support' },
];

const stats = [
  { value: '500+', label: 'Happy Customers' },
  { value: '100+', label: 'Products' },
  { value: '10+',  label: 'Years of Experience' },
  { value: '100%', label: 'Quality Assurance' },
];

const whyItems = [
  { icon: '🏆', title: 'Premium Quality',     desc: 'Finest materials and superior craftsmanship.' },
  { icon: '🌐', title: 'Worldwide Supply',    desc: 'Serving customers across India and beyond.' },
  { icon: '🚚', title: 'Reliable Partner',    desc: 'Consistent quality and timely delivery.' },
  { icon: '📦', title: 'Wide Product Range', desc: 'A complete textile solution under one roof.' },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────── */}
      <section className="hero">
        <div className="hero-soft-bg" aria-hidden="true" />
        <div className="hero-layout">
          <div className="hero-copy">
          <span className="hero-kicker">Premium Textile Products</span>
          <h1>
            Quality Textiles.
            <span>Trusted Worldwide.</span>
          </h1>
          <p>Manufacturer &amp; Supplier of Premium Towels, Gamchas, Aprons &amp; More — direct from Meerut.</p>
          <div className="hero-actions">
            <Link className="primary-btn" href="/shop">
              View Our Products →
            </Link>
          </div>
          <div className="hero-trust-row">
            {trustItems.map((item) => (
              <div key={item.label}>
                <b aria-hidden="true">{item.icon}</b>
                <span>
                  <strong>{item.label}</strong>
                  {item.sub}
                </span>
              </div>
            ))}
          </div>
          <span className="hero-bottom-line">Textiles for a brighter tomorrow</span>
          </div>
          <div className="hero-media hero-product-stage" aria-label="JF World Trading products">
            <div className="hero-market-chip hero-float-card">
              <b aria-hidden="true">&#9678;</b>
              <span>Supplying to<strong>Global Markets</strong></span>
            </div>
            <div className="hero-product-frame">
              <Image
                className="hero-range-image"
                src="/hero-textile-range.png"
                alt="JF World Trading towel, gamcha, apron and cleaning cloth product range"
                fill
                sizes="(max-width: 900px) 92vw, 46vw"
                priority
              />
            </div>
            <div className="hero-quality-chip hero-float-card">
              <b aria-hidden="true">&#10003;</b>
              <span>Consistent<strong>Quality</strong></span>
            </div>
            <div className="hero-origin-chip hero-float-card">
              <b aria-hidden="true">&#9670;</b>
              <span>Manufactured in<strong>Meerut, India</strong></span>
            </div>
            <span className="hero-side-note" aria-hidden="true">Towels<br />Gamchas<br />Aprons<br />&amp; More</span>
          </div>
        </div>
      </section>

      {/* ── Categories ───────────────────────── */}
      <section className="section category-section">
        <div className="section-head-row">
          <div>
            <SectionTitle eyebrow="Our Products" title="Product Categories" />
            <p className="home-section-intro">
              Explore our high-quality textiles crafted for everyday comfort and durability.
            </p>
          </div>
          <Link className="outline-btn" href="/shop">
            Browse All →
          </Link>
        </div>
        <div className="category-grid category-grid-home">
          {homeCategories.map((cat) => (
            <article className="category-card" key={cat.name}>
              <div className="category-image">
                <Image src={cat.image} alt={cat.name} fill sizes="(max-width: 640px) 45vw, 220px" />
              </div>
              <h3>{cat.name}</h3>
              <p>{cat.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Featured Products ─────────────────── */}
      <section className="popular-section">
        <div className="section-head-row">
          <div>
            <SectionTitle eyebrow="Featured Products" title="Our Best Selling Products" />
            <p className="home-section-intro">
              Most trusted products, chosen by customers for regular use and bulk supply.
            </p>
          </div>
          <Link className="outline-btn" href="/shop">
            View All →
          </Link>
        </div>
        <div className="product-grid popular-grid">
          {popularProducts.map((product) => (
            <ProductCard key={product.slug} product={product} compact />
          ))}
        </div>
      </section>

      {/* ── Why Choose Us ────────────────────── */}
      <section className="home-partner-band" id="why-choose-us">
        <div className="partner-message">
          <span>Why Choose JF World Trading</span>
          <h2>Your Trusted Textile Partner</h2>
          <p>We deliver quality textile products with dependable supply, practical pricing and direct support for every order.</p>
          <Link className="partner-link" href="/about">Know More About Us →</Link>
        </div>
        <div className="partner-benefits">
          {whyItems.map((item) => (
            <div className="partner-benefit" key={item.title}>
              <b aria-hidden="true">{item.icon}</b>
              <span>
                <strong>{item.title}</strong>
                <span>{item.desc}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── About Snapshot ───────────────────── */}
      <section className="about-home">
        <div className="about-home-images">
          <div className="about-factory-image">
            <Image src="/Products/WhatsApp Image 2026-09-04 at 12.36.025 PM.jpeg" alt="JF World Trading textile factory" fill sizes="50vw" />
          </div>
          <div className="about-product-image">
            <Image src="/Products/WhatsApp Image 2026-09-04 at 11.14.041 AM.jpeg" alt="Folded cleaning cloths" fill sizes="220px" />
          </div>
        </div>
        <div className="about-home-copy">
          <SectionTitle eyebrow="About Us" title="Delivering Quality Textiles You Can Trust" />
          <p>
            JF World Trading is a trusted name in the textile industry, specialising in high-quality towels, gamchas, aprons, and
            cleaning cloths. We are committed to providing durable, absorbent, and eco-friendly products that meet the needs of
            households, businesses, and industries.
          </p>
          <ul className="check-list">
            <li>Quality you can trust</li>
            <li>Competitive pricing</li>
            <li>Customer-focused service</li>
            <li>Ethical business practices</li>
          </ul>
          <Link className="primary-btn" href="/about">Learn More About Us →</Link>
        </div>
        <div className="about-stack-image">
          <Image src="/hero-textile-range.png" alt="Stacked textile products" fill sizes="300px" />
        </div>
      </section>

      {/* ── Gallery Strip ────────────────────── */}
      <section className="gallery-strip" aria-label="Textile gallery preview">
        {galleryPreview.map((src, i) => (
          <div key={src} className="gallery-strip-item">
            <Image src={src} alt={`JF World Trading textile ${i + 1}`} fill sizes="20vw" />
          </div>
        ))}
      </section>

      {/* ── Testimonial + Bulk CTA ───────────── */}
      <section className="home-cta-grid">
        <article className="testimonial-home">
          <span className="quote-mark">"</span>
          <small>What Our Customers Say</small>
          <p>The quality of towels and gamchas from JF World Trading is unmatched. Highly durable and truly value for money!</p>
          <strong>— Salman Khan</strong>
          <span>Retailer, Meerut</span>
          <div className="dots">• • • •</div>
        </article>
        <article className="bulk-home">
          <div>
            <h2>Looking for Bulk Orders?</h2>
            <p>We supply the best quality textile products at the best prices — directly from our factory.</p>
            <Link className="secondary-btn" href="/contact">Get In Touch →</Link>
          </div>
          <Image src="/Products/WhatsApp Image 2026-09-04 at 11.14.02 AM.jpeg" alt="Bulk gamcha order" fill sizes="260px" />
        </article>
      </section>

      {/* ── Stats ────────────────────────────── */}
      <section className="stats-band" aria-label="Business highlights">
        {stats.map((s) => (
          <div key={s.label}>
            <b>{s.value}</b>
            <span>{s.label}</span>
          </div>
        ))}
      </section>
    </>
  );
}
