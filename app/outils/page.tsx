import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = { title: 'Outils' };

export default function OutilsPage() {
  return (
    <SiteShell active="/outils/" alternateHref="/en/tools/">
      <main className="page-content research-page">
        <div className="research-composition">
          <div className="research-intro-copy tools-copy">
            <section aria-labelledby="reunions-heading">
              <h1 id="reunions-heading" className="section-heading">SOURCE PRIMAIRE — RÉUNIONS</h1>
              <p className="research-lead">
                Nous avons développé <strong>Source Primaire – Réunions</strong>, un outil
                conçu pour organiser et documenter les rencontres professionnelles : préparation
                des ordres du jour, suivi des réunions, comptes rendus et conservation des échanges.
                <br />
                Développé pour répondre à nos propres besoins, il sera prochainement proposé
                à d’autres professionnels.
              </p>
            </section>
            <section aria-labelledby="inventaires-heading">
              <h2 id="inventaires-heading" className="section-heading">INVENTAIRES &amp; RECHERCHE</h2>
              <p className="research-lead">
                Pour nos travaux d’inventaire et de recherche, nous utilisons une version
                d’<strong>Omeka S</strong>, adaptée et enrichie selon les besoins spécifiques
                de nos projets. Cet outil nous permet de structurer les données, de documenter
                les œuvres et les objets, et de mettre en relation les informations, les images
                et les sources.
              </p>
            </section>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
