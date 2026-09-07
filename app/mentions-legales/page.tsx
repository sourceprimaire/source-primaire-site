import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = {
  title: 'Mentions légales',
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <SiteShell active="/mentions-legales/">
      <main className="page-content standard-page legal-page">
        <article className="legal-copy">
          <h1 className="eyebrow">MENTIONS LÉGALES</h1>
          <p className="legal-draft">
            Version de travail. Les informations signalées ci-dessous doivent être
            complétées avant la publication du site.
          </p>

          <section>
            <h2>Éditeur du site</h2>
            <p>
              Source Primaire présente ses activités de recherche, d’inventaire,
              de documentation et d’édition.
            </p>
            <dl>
              <dt>Nom ou dénomination de l’éditeur</dt>
              <dd>À confirmer.</dd>
              <dt>Statut juridique et immatriculation</dt>
              <dd>À compléter selon le statut de l’éditeur.</dd>
              <dt>Adresse professionnelle et téléphone</dt>
              <dd>À compléter.</dd>
              <dt>Capital social et numéro de TVA, si applicables</dt>
              <dd>À confirmer.</dd>
              <dt>Responsable de la publication</dt>
              <dd>À confirmer.</dd>
            </dl>
            <p>
              Contact : <a href="mailto:sourceprimaire.fr@gmail.com">sourceprimaire.fr@gmail.com</a>
            </p>
          </section>

          <section>
            <h2>Hébergement</h2>
            <p>
              Le nom, l’adresse et le numéro de téléphone de l’hébergeur de la
              version publiée seront précisés avant sa mise en ligne.
            </p>
          </section>

          <section>
            <h2>Textes, images et publications</h2>
            <p>
              Les droits sur les textes, photographies, documents et publications
              présentés appartiennent à leurs auteurs ou titulaires respectifs.
              Pour toute demande de reproduction ou de réutilisation, contactez
              Source Primaire. Les exceptions prévues par la loi restent applicables.
            </p>
          </section>

          <section>
            <h2>Données personnelles</h2>
            <p>
              Les informations relatives au formulaire de contact et aux données
              personnelles figurent sur la page <Link href="/confidentialite/">Confidentialité</Link>.
            </p>
          </section>
        </article>
      </main>
    </SiteShell>
  );
}
