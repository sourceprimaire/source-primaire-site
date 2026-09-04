import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = { title: 'Contact' };

export default function ContactPage() {
  return (
    <SiteShell active="/contact/">
      <main className="page-content standard-page contact-page">
        <figure className="contact-image">
          <img
            src="/assets/editions/ce-qui-reste/detail-01.jpg"
            alt="Jeu de lumière et d’ombre sur un mur"
          />
        </figure>
        <header className="contact-heading">
          <p className="eyebrow">CONTACT</p>
          <h1>Écrivez-nous</h1>
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
      </main>
    </SiteShell>
  );
}
