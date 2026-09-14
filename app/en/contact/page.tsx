import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = { title: 'Contact' };

export default function EnglishContactPage() {
  return (
    <SiteShell locale="en" active="/en/contact/" alternateHref="/contact/">
      <main className="page-content standard-page contact-page">
        <figure className="contact-image">
          <img
            src="/assets/pages/contact-photo-soft-v2.png"
            alt="White envelope with an orange seal on grey-green paper"
          />
        </figure>
        <div className="contact-details">
          <header className="contact-heading">
            <h1 className="eyebrow">CONTACT</h1>
          </header>

          <ContactForm locale="en" />
          <div className="contact-location">
            <p>Based in Paris, we work on projects in France and abroad.</p>
            <p>French · English · Arabic</p>
          </div>
          <div className="contact-legal-links" aria-label="Legal information">
            <span>Legal notice</span>
            <span>Privacy</span>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
