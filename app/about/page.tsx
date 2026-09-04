import Image from 'next/image';
import { SectionTitle } from '@/components/SectionTitle';
import { business } from '@/lib/site';

const facts = [
  { label: 'Owner',    value: business.owner },
  { label: 'GSTIN',   value: business.gstin },
  { label: 'Location', value: 'Meerut, Uttar Pradesh' },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero compact">
        <div>
          <span>About JF World Trading</span>
          <h1>Dependable textile supply for businesses that need quality every day.</h1>
          <p>
            Based in Meerut, JF World Trading supplies practical cotton textile products including
            napkins, towels, gamchas, aprons, cleaning cloth dusters, check rumal and floor cloths.
          </p>
        </div>
      </section>

      <section className="split-section about-detail-section">
        <div className="split-image">
          <Image
            src="/Products/WhatsApp Image 2026-09-04 at 12.36.025 PM.jpeg"
            alt="Textile production machine at JF World Trading"
            fill
            sizes="(max-width: 900px) 100vw, 48vw"
          />
        </div>
        <div>
          <SectionTitle eyebrow="Our Work" title="Built Around Daily-Use Textiles" />
          <p>
            Our product line is selected for regular use in homes, shops, kitchens, cleaning teams
            and local business supply. We keep the buying process direct: choose your product, share
            quantity on WhatsApp and get pricing details from the owner.
          </p>
          <div className="fact-list">
            {facts.map((f) => (
              <div key={f.label}>
                <strong>{f.label}</strong>
                <span>{f.value}</span>
              </div>
            ))}
          </div>
          <div className="about-detail-note">
            Select a product, share the quantity on WhatsApp, and receive pricing directly from our team.
          </div>
        </div>
      </section>
    </>
  );
}
