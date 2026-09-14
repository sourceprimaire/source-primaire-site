import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';
import { EditionCard } from '@/components/edition-card';
import { editions } from '@/lib/editions';

export const metadata: Metadata = { title: 'Éditions' };

export default function EditionsPage() {
  return (
    <SiteShell active="/editions/" alternateHref="/en/editions/">
      <main className="page-content standard-page">
        <header className="page-intro editions-intro">
          <EditionCard edition={editions[0]} />
          <div>
            <h1 className="eyebrow section-heading">
              <span>ÉDITIONS</span>
            </h1>
            <div className="lead">
              <p>
                Nous proposons à nos clients de prolonger les travaux d&apos;inventaire et de
                documentation par un <strong>projet éditorial conçu sur mesure</strong>, consacré
                à tout ou partie de leur collection. De la conception éditoriale et artistique à
                la réalisation, nous imaginons avec eux la forme la plus juste pour valoriser et
                transmettre son histoire.
              </p>
              <p>
                Indépendamment de ces travaux, nous accompagnons également les artistes, auteurs,
                photographes et musiciens dans la conception, l&apos;édition et la publication de{' '}
                <strong>projets autonomes</strong> : livres, objets imprimés et éditions sonores
                qui documentent et prolongent leur travail.
              </p>
            </div>
          </div>
        </header>

        <section className="edition-grid" aria-label="Publications">
          {editions.slice(1).map((edition) => (
            <EditionCard edition={edition} key={edition.slug} />
          ))}
        </section>
      </main>
    </SiteShell>
  );
}
