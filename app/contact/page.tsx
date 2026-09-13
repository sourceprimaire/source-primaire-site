import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = { title: 'Contact' };

export default function ContactPage() {
  return (
    <SiteShell active="/contact/">
      <main className="page-content standard-page contact-page">
        <figure className="contact-image">
          <img
            src="/assets/pages/contact-photo-soft-v2.png"
            alt="Enveloppe blanche au sceau orange sur papier gris-vert"
          />
        </figure>
        <div className="contact-details">
        <header className="contact-heading">
          <h1 className="eyebrow">CONTACT</h1>
        </header>

        <ContactForm />
        <div className="contact-legal-links" aria-label="Informations légales">
          <span>Mentions légales</span>
          <span>Confidentialité</span>
        </div>
        </div>
      </main>
    </SiteShell>
  );
}
