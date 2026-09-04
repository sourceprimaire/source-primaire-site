import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = { title: 'Recherche' };

const steps = [
  {
    number: '01',
    title: 'Inventorier',
    text: 'Toute collection raconte une histoire. Nous réalisons l’inventaire méthodique des œuvres, archives, objets précieux et objets de mémoire afin d’en établir une connaissance précise. Chaque pièce est identifiée, décrite, documentée et replacée dans son contexte. Cet état des lieux constitue le socle indispensable à toute démarche de conservation, de recherche, de transmission ou de valorisation.',
  },
  {
    number: '02',
    title: 'Documenter',
    text: 'La constitution d’archives numériques permet de préserver et transmettre les collections. Nous réalisons les prises de vue des œuvres et objets ainsi que la numérisation des documents. Chaque pièce est cotée, classée et enrichie d’un pedigree le plus exhaustif possible. Nous réunissons ensuite images, fichiers, métadonnées et historiques de provenance au sein d’un corpus structuré. Chaque information est organisée afin d’en garantir la cohérence et la lisibilité de l’ensemble de la collection, tout en assurant sa conservation dans le temps.',
  },
  {
    number: '03',
    title: 'Valoriser',
    text: 'Un inventaire n’a de sens que s’il peut être consulté, étudié et transmis. Nous concevons des bases documentaires, des catalogues raisonnés, des publications et des sites Internet dédiés à tout ou partie des collections. Destinés aux artistes, ayants droit, chercheurs, institutions et collectionneurs, ces outils rendent les collections consultables, documentées, accessibles et pérennes, respectant leur histoire et leur singularité.',
  },
];

export default function RecherchePage() {
  return (
    <SiteShell active="/recherche/">
      <main className="page-content standard-page">
        <header className="page-intro research-intro">
          <div>
            <h1 className="eyebrow">RECHERCHE</h1>
            <p className="lead">
              Nous accompagnons les artistes, collectionneurs, ayants droit, familles,
              institutions et entreprises dans l&apos;inventaire, la numérisation et la
              valorisation de leurs collections, archives et patrimoines.
            </p>
            <section className="process-list" aria-label="Méthode">
              {steps.map((step) => (
                <article className="process-item" key={step.number}>
                  <p className="item-number">{step.number}</p>
                  <h2>{step.title}</h2>
                  <p>{step.text}</p>
                </article>
              ))}
            </section>
          </div>
          <figure className="research-image">
            <img
              src="/assets/pages/recherche.webp"
              alt="Composition d’archive associant photographie, verre et matière"
              width="1500"
              height="1793"
            />
          </figure>
        </header>

      </main>
    </SiteShell>
  );
}
