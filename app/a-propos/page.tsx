import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = { title: 'À propos' };

const services = [
  'Direction éditoriale',
  'Identité visuelle',
  'Design graphique',
  'Édition',
  'Expériences numériques',
  'Photographie argentique',
  'Inventaire',
  'Documentation',
  'Valorisation',
];

export default function AboutPage() {
  return (
    <SiteShell active="/a-propos/">
      <main className="page-content standard-page">
        <header className="page-intro about-intro">
          <figure className="about-image">
            <img src="/assets/pages/a-propos.jpg" alt="Étude de matière et de proportion" />
          </figure>
          <div>
            <h1 className="eyebrow">À PROPOS</h1>
            <div className="prose">
              <p>
                Source Primaire réunit les compétences de deux professionnels dont les
                parcours se croisent autour d&apos;une même exigence : documenter, comprendre et
                transmettre les histoires des œuvres, des objets et des collections.
              </p>
              <p>
                Plasticienne, gestionnaire de collections et directrice éditoriale, Émilie
                Girault accompagne depuis plus de vingt ans des artistes, ayants droit,
                collectionneurs et institutions dans l&apos;inventaire, la documentation, la
                conservation et la valorisation de leur patrimoine.
              </p>
              <p>
                Architecte, artiste, designer digital, photographe et musicien, Georges Daou
                développe une pratique pluridisciplinaire où se rencontrent architecture,
                image, son et recherche documentaire. Son travail interroge la mémoire des
                lieux, des objets et des archives, à travers des projets qui mêlent création
                contemporaine et documentation.
              </p>
              <p>
                Ensemble, ils mettent en commun leurs savoir-faire afin d&apos;offrir une approche
                globale de l&apos;inventaire, de la numérisation et de la valorisation des
                collections. Leur complémentarité repose sur une même méthode : observer avec
                rigueur, rechercher les sources, établir les faits, documenter avec précision
                et restituer chaque collection dans son contexte.
              </p>
              <p>
                Au cœur de Source Primaire se trouve une conviction simple : toute collection
                raconte une histoire. Qu&apos;il s&apos;agisse d&apos;une œuvre d&apos;art, d&apos;une archive
                familiale, d&apos;un fonds d&apos;atelier ou d&apos;un objet du quotidien, chaque pièce
                constitue un témoignage qui mérite d&apos;être identifié, étudié, préservé et
                transmis.
              </p>
            </div>
          </div>
        </header>

        <section className="service-grid" aria-label="Compétences">
          {services.map((service, index) => (
            <p key={service}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <span>{service}</span>
            </p>
          ))}
        </section>
      </main>
    </SiteShell>
  );
}
