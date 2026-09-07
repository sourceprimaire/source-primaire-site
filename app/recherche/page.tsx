import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = { title: 'Recherche' };

const steps = [
  {
    number: '01',
    title: 'Inventorier',
    text: 'Nous réalisons l’inventaire méthodique des œuvres, archives, objets précieux et objets de mémoire afin d’en établir une connaissance précise. Chaque pièce est identifiée, décrite et photographiée. Cet état des lieux constitue le socle indispensable à toute démarche de recherche, de transmission ou de valorisation.',
  },
  {
    number: '02',
    title: 'Documenter',
    text: 'Nous recherchons, réunissons et vérifions les informations nécessaires pour retracer l’histoire des œuvres, des objets et des collections, les documenter et les replacer dans leur contexte. Sources, archives, correspondances, publications, historiques de provenance et témoignages sont confrontés afin d’établir les faits et d’enrichir la connaissance de chaque pièce. Les informations recueillies sont structurées et associées aux images, fichiers et métadonnées pour constituer un corpus documentaire cohérent et exploitable.',
  },
  {
    number: '03',
    title: 'Conserver',
    text: 'Nous conseillons nos clients sur les conditions de conservation des œuvres et objets dans le temps, en apportant des recommandations adaptées à leur nature et à leur état. Nous contribuons également à la pérennité des archives en organisant leur classement et leur numérisation. Ces ressources numériques permettent d’en faciliter la consultation et d’en assurer la transmission dans le temps.',
  },
  {
    number: '04',
    title: 'Transmettre',
    text: 'Une collection peut être destinée à différents publics et répondre à différents usages. Nous concevons les formes adaptées à sa transmission : inventaires, dossiers documentaires, catalogues ou sites Internet, selon les besoins de chaque client. Qu’il s’agisse de préparer une succession patrimoniale, de transmettre une histoire familiale ou de rendre une collection accessible à la recherche, chaque projet est pensé dans le respect de son histoire et de sa singularité.',
  },
];

export default function RecherchePage() {
  return (
    <SiteShell active="/recherche/">
      <main className="page-content research-page">
        <div className="research-composition">
          <figure className="research-sequence">
            <img
              src="/assets/pages/recherche-photo-soft-v2.png"
              alt="Photographie d’archive, papier translucide et carré noir"
              width="1024"
              height="1024"
            />
          </figure>

          <div className="research-intro-copy">
            <h1 className="section-heading">
              <span>RECHERCHE</span>
            </h1>
            <p className="research-lead">
              Nous accompagnons les collectionneurs, artistes, familles, ayants droit,
              chercheurs, institutions et entreprises dans l&apos;inventaire, la documentation,
              la conservation et la transmission de leurs collections, archives et patrimoines.
              Grâce à une méthodologie rigoureuse, chaque pièce révèle son histoire et sa valeur.
            </p>
            <section className="research-index" aria-label="Méthode">
              {steps.map((step) => (
                <details className="research-index-item" key={step.number} open>
                  <summary>
                    <span>{step.number}</span>
                    <span>{step.title}</span>
                  </summary>
                  <p>{step.text}</p>
                </details>
              ))}
            </section>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
