import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';

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

        <form
          className="contact-form"
          action="mailto:sourceprimaire.fr@gmail.com"
          method="post"
          encType="text/plain"
        >
          <div className="field-row">
            <label>
              <span>PRÉNOM</span>
              <input type="text" name="Prénom" autoComplete="given-name" required />
            </label>
            <label>
              <span>NOM</span>
              <input type="text" name="Nom" autoComplete="family-name" required />
            </label>
          </div>
          <label>
            <span>EMAIL</span>
            <input type="email" name="Email" autoComplete="email" required />
          </label>
          <label>
            <span>DÉTAILS</span>
            <textarea name="Détails" rows={3} required />
          </label>
          <button type="submit">ENVOYER</button>
        </form>
        <nav className="contact-legal-links" aria-label="Informations légales">
          <a href="/mentions-legales/">Mentions légales</a>
          <a href="/confidentialite/">Confidentialité</a>
        </nav>
        </div>
      </main>
    </SiteShell>
  );
}
