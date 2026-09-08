import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = { title: 'À propos' };

const services = [
  'Inventaire',
  'Recherches',
  'Documentation',
  'Numérisation',
  'Conservation',
  'Valorisation',
  'Transmission',
  'Édition',
];

export default function AboutPage() {
  return (
    <SiteShell active="/a-propos/">
      <main className="page-content standard-page">
        <header className="page-intro about-intro">
          <div className="about-media">
            <figure className="about-image">
              <img
                src="/assets/pages/about-photo-soft-v4.webp"
                alt="Boîte d’archives, papiers et livret cousu sur fond ivoire"
              />
            </figure>
            <section className="service-grid" aria-label="Compétences">
              {services.map((service, index) => (
                <p key={service}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span>{service}</span>
                </p>
              ))}
            </section>
          </div>
          <div>
            <h1 className="eyebrow">À PROPOS</h1>
            <div className="prose">
              <p>
                Source Primaire réunit les compétences de deux professionnels dont les
                parcours se croisent autour d&apos;un même désir : documenter et comprendre les
                histoires des œuvres, des objets et des collections, pour ensuite les
                valoriser et les transmettre à travers des éditions ou des projets numériques.
              </p>
              <p>
                <strong>Émilie Girault</strong>, gestionnaire de collections et directrice
                éditoriale, accompagne les professionnels du monde de l’art, artistes, ayants
                droit, collectionneurs et institutions dans l’inventaire, la documentation,
                la conservation et la valorisation de leur patrimoine.
                <br />
                Au sein de Source
                Primaire, elle pilote la gestion et le suivi des projets
                ainsi que les recherches documentaires et scientifiques. Elle assure la
                direction éditoriale des éditions.
              </p>
              <p>
                <strong>Georges Daou</strong>, architecte, designer et directeur artistique,
                travaille en France et à l&apos;international avec des cabinets d&apos;architecture et
                des agences de design, dans le cadre de projets privés ou d&apos;appels
                institutionnels.
                <br />
                Au sein de Source Primaire, il conçoit les dispositifs
                numériques ainsi que le design et l’identité graphique des différents projets.
                Il réalise également les prises de vue photographiques, en argentique comme en
                numérique, destinées à documenter et valoriser les collections. Il assure la
                direction artistique des éditions.
              </p>
              <p>
                Forts de plus de vingt ans d’expérience dans leurs domaines respectifs, ils partagent
                une même exigence de rigueur dans la conduite de leurs projets. Ensemble, ils
                mettent en commun leurs savoir-faire afin d&apos;offrir à chaque collection une
                lecture à la fois documentée, contextualisée et sensible. De cette
                complémentarité est née une méthode solide : rechercher les sources, documenter
                avec précision, puis imaginer les modes de restitution les plus pertinents afin
                de valoriser chaque collection et d&apos;en transmettre l&apos;histoire, dans le respect
                de sa singularité.
              </p>
              <p>
                Au cœur de Source Primaire se trouve une conviction simple :{' '}
                <strong>toute collection raconte une histoire</strong>. Qu&apos;il s&apos;agisse d&apos;une
                œuvre d&apos;art, d&apos;une archive familiale, d&apos;un fonds d&apos;atelier ou d&apos;un objet du
                quotidien, chaque pièce constitue un témoignage qui mérite d&apos;être identifié,
                étudié, préservé et transmis. C&apos;est cette attention portée aux origines, aux
                parcours et aux récits, alliée à une méthodologie exigeante, qui guide chacune
                de nos interventions.
              </p>
            </div>
          </div>
        </header>

      </main>
    </SiteShell>
  );
}
