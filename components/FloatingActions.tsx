import Image from 'next/image';
import { business } from '@/lib/site';

export function FloatingActions() {
  return (
    <div className="floating-actions-container" aria-label="Quick contact actions">
      {/* Floating Call Button */}
      <a
        className="floating-btn floating-call"
        href={`tel:+91${business.phone}`}
        aria-label={`Call ${business.owner} at ${business.phone}`}
      >
        <span className="floating-tooltip">Call +91 {business.phone}</span>
        <span className="floating-icon-wrapper">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </span>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        className="floating-btn floating-whatsapp"
        href={`https://wa.me/${business.phoneIntl}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <span className="floating-tooltip">WhatsApp Us</span>
        <Image src="/whatsapp_icon.png" alt="" width={56} height={56} priority />
      </a>
    </div>
  );
}
