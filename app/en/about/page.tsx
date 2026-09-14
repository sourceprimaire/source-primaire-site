import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = { title: 'About' };

const services = [
  'Inventory',
  'Research',
  'Documentation',
  'Digitisation',
  'Conservation',
  'Presentation',
  'Transmission',
  'Publishing',
];

export default function EnglishAboutPage() {
  return (
    <SiteShell locale="en" active="/en/about/" alternateHref="/a-propos/">
      <main className="page-content standard-page">
        <header className="page-intro about-intro">
          <div className="about-media">
            <figure className="about-image">
              <img
                src="/assets/pages/about-photo-soft-v4.webp"
                alt="Archive box, papers and a sewn booklet on an ivory background"
              />
            </figure>
            <section className="service-grid" aria-label="Expertise">
              {services.map((service, index) => (
                <p key={service}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span>{service}</span>
                </p>
              ))}
            </section>
          </div>
          <div>
            <h1 className="eyebrow">ABOUT</h1>
            <div className="prose">
              <p>
                Source Primaire brings together the expertise of two professionals whose paths
                converge around a shared desire: to document and understand the stories held by
                artworks, objects and collections, then bring them to light and pass them on
                through publications or digital projects.
              </p>
              <p>
                <strong>Émilie Girault</strong>, collection manager and editorial director,
                works with art professionals, artists, rights holders, collectors and
                institutions on inventorying, documenting, conserving and presenting their
                heritage.
                <br />
                She has notably led the inventories of the bodies of work of Martial Raysse and
                Gilles Aillaud; managed the Catherine Thieck and Galerie de France collections,
                as well as the preparation of the gallery’s publications; and contributed to
                the publication of volumes II and III of Martine Martine’s catalogue raisonné.
                She is currently conducting research for the inventory of Judit Reigl’s body of
                work, with a view to compiling its catalogue raisonné, and is writing the
                scholarly chronology.
                <br />
                At Source Primaire, she oversees project management and coordination, together
                with documentary and scholarly research.
                <br />
                She provides editorial direction for the publications.
              </p>
              <p>
                <strong>Georges Daou</strong>, architect, designer and art director, works in
                France and internationally with architecture studios and design agencies, on
                private projects and institutional commissions.
                <br />
                At Source Primaire, he designs digital platforms, as well as the graphic design
                and visual identity of its various projects. He also produces analogue and
                digital photography to document and present the collections.
                <br />
                He provides art direction for the publications.
              </p>
              <p>
                After more than twenty years each in their respective fields, they share a
                rigorous approach to every project. Together, they combine their expertise to
                offer each collection an interpretation that is both carefully documented and
                sensitive to its context. Their complementary skills have shaped a robust
                method: researching sources, documenting with precision, then devising the most
                appropriate forms through which to present each collection and pass on its
                history, while respecting its distinct character.
              </p>
              <p>
                At the heart of Source Primaire is a simple conviction:{' '}
                <strong>every collection tells a story</strong>. Whether an artwork, a family
                archive, an artist’s archive or an everyday object, each item is a record that
                deserves to be identified, studied, preserved and passed on. This attention to
                origins, trajectories and narratives, combined with a rigorous methodology,
                guides every one of our projects.
              </p>
            </div>
          </div>
        </header>
      </main>
    </SiteShell>
  );
}
