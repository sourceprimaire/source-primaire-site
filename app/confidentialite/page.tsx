import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = {
  title: 'Confidentialité',
  robots: { index: false, follow: true },
};

export default function ConfidentialitePage() {
  return (
    <SiteShell active="/confidentialite/">
      <main className="page-content standard-page legal-page">
        <article className="legal-copy">
          <h1 className="eyebrow">CONFIDENTIALITÉ</h1>
          <p className="legal-draft">
            Version de travail fondée sur le fonctionnement actuel du site.
            L’identité du responsable, les durées de conservation et les modalités
            des prestataires restent à confirmer avant publication.
          </p>

          <section>
            <h2>Responsable et contact</h2>
            <p>
              Pour toute question relative à vos données, vous pouvez écrire à{' '}
              <a href="mailto:sourceprimaire.fr@gmail.com">sourceprimaire.fr@gmail.com</a>.
              L’identité juridique du responsable du traitement sera précisée dans
              les <Link href="/mentions-legales/">mentions légales</Link>.
            </p>
          </section>

          <section>
            <h2>Formulaire de contact</h2>
            <p>
              Le formulaire demande votre prénom, votre nom, votre adresse email
              et les détails de votre demande. Ces champs sont obligatoires pour
              utiliser le formulaire.
            </p>
            <p>
              Le bouton « Envoyer » ouvre votre logiciel de messagerie, selon sa
              configuration. Vous devez ensuite y confirmer l’envoi à Source Primaire.
              Le formulaire ne transmet pas ces informations à une base de données
              du site. Une fois envoyé, le message est traité par les services de
              messagerie utilisés, notamment Gmail pour l’adresse de réception.
            </p>
          </section>

          <section>
            <h2>Finalités et bases légales</h2>
            <p>
              Les informations communiquées servent à comprendre votre demande,
              vous répondre et préparer les échanges liés à un éventuel projet.
            </p>
            <p>
              Bases envisagées, à valider selon l’organisation retenue :
              les mesures précontractuelles prises à votre demande pour un projet,
              et l’intérêt légitime à répondre aux autres sollicitations.
            </p>
          </section>

          <section>
            <h2>Destinataires et conservation</h2>
            <p>
              Les destinataires prévus sont les personnes chargées de traiter
              votre demande au sein de Source Primaire et les prestataires de
              messagerie nécessaires à l’échange.
            </p>
            <p>
              Les durées de conservation, les modalités de suppression et les
              garanties applicables aux éventuels transferts hors de l’Union
              européenne doivent être confirmées avant publication.
            </p>
          </section>

          <section>
            <h2>Navigation</h2>
            <p>
              Aucun outil publicitaire ou de mesure d’audience n’est intégré aux
              pages du site dans leur version actuelle. Les journaux techniques
              et les éventuels cookies des services d’hébergement devront être
              vérifiés pour la version publiée.
            </p>
          </section>

          <section>
            <h2>Vos droits</h2>
            <p>
              Selon les conditions prévues par la réglementation, vous pouvez
              demander l’accès, la rectification ou l’effacement de vos données,
              ainsi que la limitation du traitement. Le droit d’opposition et
              le droit à la portabilité s’appliquent selon la base légale concernée.
            </p>
            <p>
              Vous pouvez adresser votre demande à{' '}
              <a href="mailto:sourceprimaire.fr@gmail.com">sourceprimaire.fr@gmail.com</a>.
              Vous pouvez également introduire une réclamation auprès de la{' '}
              <a href="https://www.cnil.fr/fr/plaintes">CNIL</a>.
            </p>
          </section>
        </article>
      </main>
    </SiteShell>
  );
}
