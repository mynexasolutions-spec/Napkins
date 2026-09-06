import { SectionTitle } from '@/components/SectionTitle';
import { business, whatsappUrl } from '@/lib/site';

export default function ContactPage() {
  return (
    <>
      <section className="page-hero compact">
        <div>
          <span>Contact Us</span>
          <h1>Talk directly for product prices, quantity and availability.</h1>
          <p>Call or WhatsApp JF World Trading for napkin, duster, towel and cloth orders.</p>
        </div>
      </section>

      <section className="contact-section">
        {/* Detail column */}
        <div className="contact-detail">
          <SectionTitle eyebrow="Reach Us" title="JF World Trading" />
          <p className="contact-intro">
            For product availability, custom quantities and bulk pricing, connect with us directly by phone or WhatsApp.
          </p>
          <div className="contact-list">
            <div>
              <strong>Owner</strong>
              <span>{business.owner}</span>
            </div>
            <div>
              <strong>Phone</strong>
              <span><a href={`tel:+91${business.phone}`}>+91 {business.phone}</a></span>
            </div>
            <div>
              <strong>WhatsApp</strong>
              <span>
                <a
                  href={whatsappUrl('Hello JF World Trading, I want to enquire about napkin and cleaning cloth products.')}
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </span>
            </div>
            <div>
              <strong>GSTIN</strong>
              <span>{business.gstin}</span>
            </div>
            <div>
              <strong>Address</strong>
              <span>{business.address}</span>
            </div>
          </div>
        </div>

        {/* Enquiry form */}
        <form
          className="contact-form"
          action={whatsappUrl('Hello JF World Trading, I want to enquire about your products.')}
        >
          <label>
            Product Interest
            <select name="product" required>
              <option value="">— Select a product —</option>
              <option value="Napkins">Napkins</option>
              <option value="Cleaning Cloth Duster">Cleaning Cloth Duster</option>
              <option value="Check Rumal">Check Rumal</option>
              <option value="Towels">Towels</option>
              <option value="Gamchas">Gamchas</option>
              <option value="Floor Cloths">Floor Cloths</option>
              <option value="Aprons">Aprons</option>
            </select>
          </label>
          <label>
            Quantity
            <input name="quantity" placeholder="e.g. 100 pieces" required />
          </label>
          <label>
            Message
            <textarea name="message" placeholder="Tell us product type, colour or delivery need" required />
          </label>
          <a
            className="primary-btn full"
            href={whatsappUrl('Hello JF World Trading, I want to buy textile products. Please share details.')}
            target="_blank"
            rel="noreferrer"
          >
            Send on WhatsApp
          </a>
        </form>
      </section>

      <section className="contact-map-section">
        <div className="contact-map-heading">
          <SectionTitle eyebrow="Visit Us" title="Find JF World Trading" />
          <p>{business.address}</p>
        </div>
        <iframe
          className="contact-map"
          title="JF World Trading location in Meerut"
          src="https://www.google.com/maps?q=Jamiya%20Chowk%2C%20Lakhipura%20Gali%20No%2018%2C%20R%20Fatehullapur%20Road%2C%20Meerut%2C%20Uttar%20Pradesh%20250002&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>
    </>
  );
}
