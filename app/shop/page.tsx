import { ProductCard } from '@/components/ProductCard';
import { SectionTitle } from '@/components/SectionTitle';
import { products, whatsappUrl } from '@/lib/site';

export default function ShopPage() {
  return (
    <>
      <section className="page-hero">
        <div>
          <span>Products</span>
          <h1>Napkins, towels, gamchas, dusters, rumal and floor cloths.</h1>
          <p>
            Catalogue-only shop — no cart, no online payment. Tap{' '}
            <strong style={{ color: 'var(--coral)' }}>Buy on WhatsApp</strong> to discuss pricing,
            quantity and delivery directly with us.
          </p>
        </div>
      </section>

      <section className="section catalogue-section">
        <div className="section-head-row">
          <SectionTitle eyebrow="Product Catalogue" title="Available Products" />
          <a
            className="outline-btn"
            href={whatsappUrl(
              'Hello JF World Trading, please share your full product catalogue and bulk rates.'
            )}
            target="_blank"
            rel="noreferrer"
          >
            Ask Bulk Rates →
          </a>
        </div>
        <p className="catalogue-note">
          Choose a product to enquire for bulk quantity, colours and latest pricing on WhatsApp.
        </p>
        <div className="product-grid shop-grid">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
