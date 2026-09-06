import Link from 'next/link';
import { business, whatsappUrl } from '@/lib/site';

export function Footer() {
  return (
    <footer className="site-footer">
      {/* CTA Band */}
      <div className="footer-cta">
        <div>
          <span>For Bulk &amp; Regular Supply</span>
          <p>Need dependable textile products for your business?</p>
        </div>
        <a
          className="footer-cta-link"
          href={whatsappUrl('Hello JF World Trading, I want to enquire about a bulk textile order.')}
          target="_blank"
          rel="noreferrer"
        >
          Start WhatsApp Enquiry
        </a>
      </div>

      {/* Main grid */}
      <div className="footer-grid">
        {/* Brand */}
        <div className="footer-summary">
          <Link className="footer-brand" href="/">
            <span>JF</span>
            <strong>World Trading</strong>
          </Link>
          <p>Textiles for a Better Tomorrow. Manufacturer &amp; supplier of premium cotton textile products from Meerut, Uttar Pradesh.</p>
          <span className="footer-service-line">Bulk supply · Custom quantities · Direct support</span>
        </div>

        {/* Quick links */}
        <nav className="footer-links" aria-label="Footer navigation">
          <h3>Quick Links</h3>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/shop">Products</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <a className="footer-phone" href={`tel:+91${business.phone}`}>
            <span>Call {business.owner}</span>
            <strong>+91 {business.phone}</strong>
          </a>
          <a
            className="footer-whatsapp"
            href={whatsappUrl('Hello JF World Trading, I want to enquire about your textile products.')}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Enquiry
          </a>
          <p>{business.address}</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <span>GSTIN: {business.gstin}</span>
        <span>© 2026 JF World Trading. All rights reserved.</span>
      </div>
    </footer>
  );
}
